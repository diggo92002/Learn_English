// Online suggestions stay within the five sentences currently on screen.
const onlineLessonKey = 'speak-easy-lesson-vocabulary-v2';
const updateAfter = 7 * 24 * 60 * 60 * 1000;
const retryAfter = 24 * 60 * 60 * 1000;
const lessonTopics = {
  airport: ['airport', 'travel,flight'],
  restaurant: ['restaurant', 'food,dining'],
  work: ['office', 'work,business']
};
let onlineLessonStore;
try { onlineLessonStore = JSON.parse(localStorage.getItem(onlineLessonKey) || '{}') || {}; }
catch { onlineLessonStore = {}; }
if (!onlineLessonStore.records) onlineLessonStore.records = {};
if (!Array.isArray(onlineLessonStore.history)) onlineLessonStore.history = [];
const loadingLessons = new Set();

function lessonCacheKey(scene, page) { return `${scene.id}:${page}`; }
function saveOnlineLessons() {
  try { localStorage.setItem(onlineLessonKey, JSON.stringify(onlineLessonStore)); }
  catch { showToast('無法儲存網路單字，請檢查瀏覽器儲存設定。'); }
}
function registerOnlineWord(word) {
  if (!word || typeof word.id !== 'string' || typeof word.en !== 'string' || typeof word.zh !== 'string') return;
  if (!wordById.has(word.id)) allWords.push(word);
  wordById.set(word.id, word);
}
function currentLessonSentences(scene, page) {
  return scene.sentences.slice(page * pageSize, (page + 1) * pageSize);
}
function appearsInLesson(word, sentences) {
  const escaped = word.en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(^|[^A-Za-z])${escaped}(?=[^A-Za-z]|$)`, 'i');
  return sentences.some(sentence => pattern.test(sentence.en));
}
function validLessonWords(words, scene, page) {
  return Array.isArray(words) && words.length === 6 && words.every(word =>
    word && typeof word.en === 'string' && typeof word.zh === 'string' && appearsInLesson(word, currentLessonSentences(scene, page))
  );
}
function showLessonVocabulary() {
  const scene = currentScene;
  const page = sentencePages[scene.id];
  const key = lessonCacheKey(scene, page);
  const record = onlineLessonStore.records[key];
  scene.words = record && validLessonWords(record.words, scene, page) ? record.words : lessonWords[scene.id][page];
  scene.words.forEach(registerOnlineWord);
  renderWords(); renderReview(); newQuestion();
  const status = $('#vocabularyStatus');
  status.textContent = loadingLessons.has(key) ? '正在網路更新本組單字…' :
    record && scene.words === record.words ? `本組 6 字・網路更新於 ${new Date(record.updatedAt).toLocaleDateString('zh-TW')}` :
    '本組 6 個核心單字，均取自下方 5 句';
  $('#refreshVocabulary').disabled = loadingLessons.has(key);
  if (!record || Date.now() - (record.updatedAt || 0) > updateAfter) refreshLessonVocabulary(false);
}
async function fetchLessonJson(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally { clearTimeout(timeout); }
}
async function translateLessonWord(en) {
  const url = new URL('https://api.mymemory.translated.net/get');
  url.searchParams.set('q', en);
  url.searchParams.set('langpair', 'en|zh-TW');
  const data = await fetchLessonJson(url);
  const zh = String(data.responseData?.translatedText || '').trim();
  if (Number(data.responseStatus) !== 200 || !/[\u3400-\u9fff]/.test(zh) || zh.length > 24) throw new Error('No useful translation');
  return zh;
}
async function refreshLessonVocabulary(manual) {
  const scene = currentScene;
  const page = sentencePages[scene.id];
  const key = lessonCacheKey(scene, page);
  const prior = onlineLessonStore.records[key];
  if (loadingLessons.has(key)) return;
  if (!manual && prior && Date.now() - (prior.lastAttempt || prior.updatedAt || 0) < retryAfter) return;
  loadingLessons.add(key);
  showLessonStatus(key, '正在網路更新本組單字…');
  try {
    const [trigger, topic] = lessonTopics[scene.id];
    const url = new URL('https://api.datamuse.com/words');
    url.searchParams.set('rel_trg', trigger);
    url.searchParams.set('topics', topic);
    url.searchParams.set('max', '100');
    const suggestions = await fetchLessonJson(url);
    if (!Array.isArray(suggestions)) throw new Error('Unexpected word list');
    const sentences = currentLessonSentences(scene, page);
    const base = lessonWords[scene.id][page];
    const baseTerms = new Set(base.map(word => word.en.toLowerCase()));
    const alternatives = suggestions.map(item => String(item.word || '').toLowerCase().trim())
      .filter((en, index, list) => /^[a-z]{4,18}$/.test(en) && list.indexOf(en) === index && !baseTerms.has(en))
      .filter(en => appearsInLesson({ en }, sentences)).slice(0, 4);
    const selected = [];
    for (const en of alternatives) {
      try {
        const known = [...wordById.values()].find(word => word.en.toLowerCase() === en);
        const zh = known?.zh || await translateLessonWord(en);
        selected.push({ id: `online-${scene.id}-${en}`, en, zh, type: 'word' });
        if (selected.length === 3) break;
      } catch { /* try another suggestion */ }
    }
    const words = [...selected, ...base.filter(word => !selected.some(item => item.en === word.en.toLowerCase()))].slice(0, 6);
    if (!validLessonWords(words, scene, page)) throw new Error('Incomplete lesson words');
    words.forEach(registerOnlineWord);
    selected.forEach(word => {
      if (!onlineLessonStore.history.some(saved => saved.id === word.id)) onlineLessonStore.history.push(word);
    });
    onlineLessonStore.records[key] = { words, updatedAt: Date.now(), lastAttempt: Date.now() };
    saveOnlineLessons();
    if (currentScene.id === scene.id && sentencePages[scene.id] === page) {
      scene.words = words; renderWords(); renderReview(); newQuestion();
      showLessonStatus(key, `本組 6 字・網路更新於 ${new Date().toLocaleDateString('zh-TW')}`);
      if (manual) showToast('已更新本組核心單字');
    }
  } catch {
    if (prior) { prior.lastAttempt = Date.now(); saveOnlineLessons(); }
    if (currentScene.id === scene.id && sentencePages[scene.id] === page) {
      showLessonStatus(key, '本組 6 個核心單字，均取自下方 5 句');
      if (manual) showToast('網路更新失敗，仍可練習目前的單字。');
    }
  } finally {
    loadingLessons.delete(key);
    $('#refreshVocabulary').disabled = loadingLessons.has(lessonCacheKey(currentScene, sentencePages[currentScene.id]));
  }
}
function showLessonStatus(key, value) {
  if (key !== lessonCacheKey(currentScene, sentencePages[currentScene.id])) return;
  $('#vocabularyStatus').textContent = value;
  $('#refreshVocabulary').disabled = loadingLessons.has(key);
}

onlineLessonStore.history.forEach(registerOnlineWord);
Object.values(onlineLessonStore.records).forEach(record => {
  if (record && Array.isArray(record.words)) record.words.forEach(registerOnlineWord);
});
$('#rotateVocabulary').addEventListener('click', () => setSentencePage(sentencePages[currentScene.id] + 1));
$('#refreshVocabulary').addEventListener('click', () => refreshLessonVocabulary(true));
document.addEventListener('lessonchange', showLessonVocabulary);
showLessonVocabulary();
