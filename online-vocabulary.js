const vocabularyStoreKey = 'speak-easy-vocabulary-v1';
const refreshInterval = 7 * 24 * 60 * 60 * 1000;
const retryInterval = 24 * 60 * 60 * 1000;
const vocabularyTopics = {
  airport: { trigger: 'airport', topic: 'travel,flight' },
  restaurant: { trigger: 'restaurant', topic: 'food,dining' },
  work: { trigger: 'office', topic: 'work,business' }
};
const localVocabulary = {
  airport: [
    ['boarding pass', '登機證', 'n.'], ['passport', '護照', 'n.'], ['gate', '登機門', 'n.'], ['luggage', '行李', 'n.'],
    ['terminal', '航廈', 'n.'], ['security', '安檢', 'n.'], ['departure', '出發', 'n.'], ['arrival', '抵達', 'n.'],
    ['customs', '海關', 'n.'], ['transfer', '轉機', 'n.'], ['carousel', '行李轉盤', 'n.'], ['delay', '延誤', 'n.']
  ],
  restaurant: [
    ['menu', '菜單', 'n.'], ['order', '點餐；訂單', 'v./n.'], ['recommend', '推薦', 'v.'], ['bill', '帳單', 'n.'],
    ['reservation', '訂位', 'n.'], ['portion', '份量', 'n.'], ['vegetarian', '素食的', 'adj.'], ['allergy', '過敏', 'n.'],
    ['dessert', '甜點', 'n.'], ['receipt', '收據', 'n.'], ['refill', '續杯', 'n.'], ['takeaway', '外帶', 'n.']
  ],
  work: [
    ['meeting', '會議', 'n.'], ['deadline', '截止日期', 'n.'], ['update', '更新；進度', 'v./n.'], ['feedback', '回饋', 'n.'],
    ['agenda', '議程', 'n.'], ['proposal', '提案', 'n.'], ['timeline', '時程', 'n.'], ['priority', '優先事項', 'n.'],
    ['budget', '預算', 'n.'], ['client', '客戶', 'n.'], ['review', '審閱', 'v.'], ['handover', '交接', 'n.']
  ]
};

function readVocabularyStore() {
  try {
    const parsed = JSON.parse(localStorage.getItem(vocabularyStoreKey) || '{}');
    return { scenes: parsed.scenes || {}, history: Array.isArray(parsed.history) ? parsed.history : [], rotation: parsed.rotation || {} };
  } catch { return { scenes: {}, history: [], rotation: {} }; }
}
const vocabularyStore = readVocabularyStore();
const refreshingScenes = new Set();

function saveVocabularyStore() {
  try { localStorage.setItem(vocabularyStoreKey, JSON.stringify(vocabularyStore)); }
  catch { showToast('無法儲存單字更新紀錄。'); }
}
function validWord(word) {
  return word && typeof word.id === 'string' && typeof word.en === 'string' && typeof word.zh === 'string' && typeof word.type === 'string';
}
function registerVocabularyWord(word) {
  if (!validWord(word) || wordById.has(word.id)) return;
  wordById.set(word.id, word);
  allWords.push(word);
}
function rememberVocabulary(words) {
  words.forEach(word => {
    registerVocabularyWord(word);
    if (!vocabularyStore.history.some(entry => entry.id === word.id)) vocabularyStore.history.push(word);
  });
  saveVocabularyStore();
}
function applyVocabulary(scene, words) {
  scene.words = words;
  if (currentScene.id === scene.id) { renderWords(); newQuestion(); }
  renderReview(); renderProgress();
}
function localGroup(scene, group) {
  const list = localVocabulary[scene.id];
  return list.slice(group * 4, group * 4 + 4).map(([en, zh, type]) => ({
    id: `local-${scene.id}-${en.replace(/\s+/g, '-')}`, en, zh, type
  }));
}
function rotateVocabulary(scene, announce = true) {
  const count = localVocabulary[scene.id].length / 4;
  const next = ((Number(vocabularyStore.rotation[scene.id]) || 0) + 1) % count;
  vocabularyStore.rotation[scene.id] = next;
  const words = localGroup(scene, next);
  rememberVocabulary(words);
  applyVocabulary(scene, words);
  if (currentScene.id === scene.id) $('#vocabularyStatus').textContent = `本機單字・第 ${next + 1} / ${count} 組`;
  if (announce) showToast('已換一組核心單字');
}
function showVocabularyStatus() {
  const record = vocabularyStore.scenes[currentScene.id];
  const status = $('#vocabularyStatus');
  if (record && currentScene.words === record.words) {
    status.textContent = `網路單字・${new Date(record.updatedAt).toLocaleDateString('zh-TW')} 更新`;
  } else if (currentScene.words.some(word => word.id.startsWith('online-'))) {
    status.textContent = '網路單字・已儲存於本機';
  } else {
    status.textContent = `本機單字・第 ${(Number(vocabularyStore.rotation[currentScene.id]) || 0) + 1} / 3 組`;
  }
}
function normalizeOnlineTerm(value) {
  return typeof value === 'string' ? value.toLowerCase().trim().replace(/\s+/g, ' ') : '';
}
function candidateWords(data, scene) {
  const usedInExamples = new Set(scene.sentences.flatMap(sentence => (sentence.en.toLowerCase().match(/[a-z]+/g) || [])));
  const existing = new Set(scene.words.map(word => word.en.toLowerCase()));
  const seen = new Set();
  return data.filter(item => {
    const en = normalizeOnlineTerm(item.word);
    if (!/^[a-z]+(?: [a-z]+)?$/.test(en) || en.length < 4 || en.length > 20 || seen.has(en) || existing.has(en)) return false;
    const parts = en.split(' ');
    if (!parts.every(part => usedInExamples.has(part))) return false;
    seen.add(en); return true;
  });
}
function partOfSpeech(tags) {
  if (!Array.isArray(tags)) return 'word';
  const parts = ['n', 'v', 'adj', 'adv'].filter(tag => tags.includes(tag));
  return parts.length ? parts.map(tag => `${tag}.`).join('/') : 'word';
}
async function fetchJson(url, timeout = 9000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally { clearTimeout(timer); }
}
async function translateWord(en) {
  const url = new URL('https://api.mymemory.translated.net/get');
  url.searchParams.set('q', en);
  url.searchParams.set('langpair', 'en|zh-TW');
  const data = await fetchJson(url);
  const translation = String(data.responseData?.translatedText || '').trim();
  if (Number(data.responseStatus) !== 200 || !/[\u3400-\u9fff]/.test(translation) || translation.length > 24) throw new Error('Invalid translation');
  return translation;
}
async function refreshVocabulary(scene, manual = false) {
  if (refreshingScenes.has(scene.id)) return;
  const record = vocabularyStore.scenes[scene.id];
  if (!manual && record && Date.now() - record.updatedAt < refreshInterval) return;
  if (!manual && record && Date.now() - (record.lastAttempt || 0) < retryInterval) return;
  refreshingScenes.add(scene.id);
  $('#refreshVocabulary').disabled = refreshingScenes.has(currentScene.id);
  if (currentScene.id === scene.id) $('#vocabularyStatus').textContent = '正在從網路更新單字…';
  try {
    const topic = vocabularyTopics[scene.id];
    const url = new URL('https://api.datamuse.com/words');
    url.searchParams.set('rel_trg', topic.trigger);
    url.searchParams.set('topics', topic.topic);
    url.searchParams.set('md', 'p');
    url.searchParams.set('max', '100');
    const data = await fetchJson(url);
    if (!Array.isArray(data)) throw new Error('Invalid vocabulary data');
    const candidates = candidateWords(data, scene);
    const words = [];
    for (const item of candidates.slice(0, 15)) {
      try {
        const en = normalizeOnlineTerm(item.word);
        const zh = await translateWord(en);
        words.push({ id: `online-${scene.id}-${en.replace(/\s+/g, '-')}`, en, zh, type: partOfSpeech(item.tags) });
        if (words.length === 4) break;
      } catch { /* try the next related word */ }
    }
    if (words.length !== 4) throw new Error('Not enough translated words');
    rememberVocabulary(words);
    vocabularyStore.scenes[scene.id] = { words, updatedAt: Date.now(), lastAttempt: Date.now() };
    saveVocabularyStore();
    applyVocabulary(scene, words);
    if (currentScene.id === scene.id) showVocabularyStatus();
    if (manual) showToast('已從網路取得新的核心單字');
  } catch {
    if (record) { record.lastAttempt = Date.now(); saveVocabularyStore(); }
    if (currentScene.id === scene.id) { showVocabularyStatus(); if (manual) showToast('網路更新失敗，仍可使用目前的單字。'); }
  } finally {
    refreshingScenes.delete(scene.id);
    $('#refreshVocabulary').disabled = refreshingScenes.has(currentScene.id);
  }
}

// Restore saved words before showing the review list, so old unknown words remain available.
vocabularyStore.history.filter(validWord).forEach(registerVocabularyWord);
for (const scene of scenes) {
  const record = vocabularyStore.scenes[scene.id];
  if (record && Array.isArray(record.words) && record.words.length === 4 && record.words.every(validWord)) {
    record.words.forEach(registerVocabularyWord);
    scene.words = record.words;
  } else {
    const group = ((Number(vocabularyStore.rotation[scene.id]) || 0) + 1) % 3;
    vocabularyStore.rotation[scene.id] = group;
    const words = localGroup(scene, group);
    words.forEach(registerVocabularyWord);
    scene.words = words;
    words.forEach(word => {
      if (!vocabularyStore.history.some(entry => entry.id === word.id)) vocabularyStore.history.push(word);
    });
  }
}
saveVocabularyStore();
renderWords(); renderReview(); renderProgress(); newQuestion(); showVocabularyStatus();

$('#rotateVocabulary').addEventListener('click', () => rotateVocabulary(currentScene));
$('#refreshVocabulary').addEventListener('click', () => refreshVocabulary(currentScene, true));
$('#sceneTabs').addEventListener('click', event => {
  if (event.target.closest('.scene-tab')) {
    showVocabularyStatus();
    $('#refreshVocabulary').disabled = refreshingScenes.has(currentScene.id);
    refreshVocabulary(currentScene);
  }
});
refreshVocabulary(currentScene);
