const scenes = [
  {
    id: 'airport', tab: '機場海關', icon: '✈️', category: 'TRAVEL / AIRPORT', title: '在機場，從容出發', description: '報到、找登機門，常用句先學起來。',
    words: lessonWords.airport[0],
    sentences: exampleSets.airport
  },
  {
    id: 'restaurant', tab: '餐廳點餐', icon: '🍽️', category: 'DAILY LIFE / RESTAURANT', title: '在餐廳，輕鬆點餐', description: '從看菜單到結帳，練習自然表達。',
    words: lessonWords.restaurant[0],
    sentences: exampleSets.restaurant
  },
  {
    id: 'work', tab: '職場日常', icon: '💼', category: 'WORK / EVERYDAY', title: '在職場，自在溝通', description: '開會與協作時，一句一句建立信心。',
    words: lessonWords.work[0],
    sentences: exampleSets.work
  }
];

const $ = (selector) => document.querySelector(selector);
const legacyWords = [
  ['boarding-pass', 'boarding pass', '登機證'], ['passport', 'passport', '護照'], ['gate', 'gate', '登機門'], ['luggage', 'luggage', '行李'],
  ['menu', 'menu', '菜單'], ['order', 'order', '點餐；訂單'], ['recommend', 'recommend', '推薦'], ['bill', 'bill', '帳單'],
  ['meeting', 'meeting', '會議'], ['deadline', 'deadline', '截止日期'], ['update', 'update', '更新；進度'], ['feedback', 'feedback', '回饋']
].map(([id, en, zh]) => ({ id, en, zh, type: 'word' }));
const allWords = [...Object.values(lessonWords).flat(2), ...legacyWords];
try {
  const previousVocabulary = JSON.parse(localStorage.getItem('speak-easy-vocabulary-v1') || '{}');
  if (Array.isArray(previousVocabulary.history)) allWords.push(...previousVocabulary.history.filter(word => word && typeof word.id === 'string' && typeof word.en === 'string'));
} catch { /* previous online words are optional */ }
const wordById = new Map(allWords.map(word => [word.id, word]));
const savedKey = 'speak-easy-unknown-v1';
const pageKey = 'speak-easy-sentence-page-v1';
const pageSize = 5;
let unknown = readUnknown();
let sentencePages = readSentencePages();
scenes.forEach(scene => { scene.words = lessonWords[scene.id][sentencePages[scene.id]]; });
let currentScene = scenes[0];
let currentQuestion = null;
let recognition = null;
let toastTimer;
let speechVoices = [];

function refreshSpeechVoices() {
  speechVoices = window.speechSynthesis?.getVoices() || [];
}

if ('speechSynthesis' in window) {
  refreshSpeechVoices();
  window.speechSynthesis.addEventListener('voiceschanged', refreshSpeechVoices);
}

function readSentencePages() {
  let previous = {};
  try { previous = JSON.parse(localStorage.getItem(pageKey) || '{}') || {}; } catch { /* start at the first group */ }
  const pages = Object.fromEntries(scenes.map(scene => {
    const count = Math.ceil(scene.sentences.length / pageSize);
    const last = Number.isInteger(previous[scene.id]) ? previous[scene.id] : -1;
    return [scene.id, (last + 1) % count];
  }));
  try { localStorage.setItem(pageKey, JSON.stringify(pages)); } catch { /* pages still work for this visit */ }
  return pages;
}
function setSentencePage(page) {
  const count = Math.ceil(currentScene.sentences.length / pageSize);
  sentencePages[currentScene.id] = (page + count) % count;
  try { localStorage.setItem(pageKey, JSON.stringify(sentencePages)); } catch { /* paging still works for this visit */ }
  currentScene.words = lessonWords[currentScene.id][sentencePages[currentScene.id]];
  stopRecognition(); renderWords(); renderSentences(); newQuestion();
  document.dispatchEvent(new Event('lessonchange'));
}

function readUnknown() {
  try {
    const data = JSON.parse(localStorage.getItem(savedKey) || '[]');
    return new Set(Array.isArray(data) ? data.filter(id => typeof id === 'string') : []);
  } catch { return new Set(); }
}
function persistUnknown() {
  try { localStorage.setItem(savedKey, JSON.stringify([...unknown])); }
  catch { showToast('瀏覽器無法儲存生字，請確認儲存空間設定。'); }
}
function showToast(message) {
  const toast = $('#toast'); toast.textContent = message; toast.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}
function speak(text) {
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    showToast('此 Android 瀏覽器不支援語音播放。請使用最新版 Chrome，並啟用系統的文字轉語音輸出。');
    return;
  }
  const synthesis = window.speechSynthesis;
  refreshSpeechVoices();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US'; utterance.rate = 0.85;
  const voice = speechVoices.find(item => item.lang.toLowerCase() === 'en-us') || speechVoices.find(item => item.lang.toLowerCase().startsWith('en-'));
  if (voice) utterance.voice = voice;
  utterance.onerror = (event) => {
    if (event.error === 'canceled' || event.error === 'interrupted') return;
    if (event.error === 'language-unavailable' || event.error === 'voice-unavailable') {
      showToast('找不到英文系統語音。請在 Android「文字轉語音輸出」下載英文語音後重試。');
      return;
    }
    showToast('無法啟動語音播放。請確認 Android 的文字轉語音輸出已啟用，然後重試。');
  };
  try {
    synthesis.cancel();
    if (synthesis.paused) synthesis.resume();
    synthesis.speak(utterance);
  } catch {
    showToast('無法啟動語音播放。請確認 Android 的文字轉語音輸出已啟用，然後重試。');
  }
}
function toggleUnknown(id) {
  if (unknown.has(id)) { unknown.delete(id); showToast('已從生字本移除'); }
  else { unknown.add(id); showToast('已加入生字本'); }
  persistUnknown(); renderWords(); renderReview(); renderProgress();
}
function renderProgress() {
  $('#unknownCount').textContent = unknown.size;
  $('#progressSummary').textContent = unknown.size ? `已記錄 ${unknown.size} 個生字` : '今天就從一句開始';
}
function renderTabs() {
  const box = $('#sceneTabs'); box.replaceChildren();
  scenes.forEach(scene => {
    const button = document.createElement('button'); button.type = 'button'; button.className = 'scene-tab';
    button.setAttribute('role', 'tab'); button.setAttribute('aria-selected', String(scene.id === currentScene.id));
    button.innerHTML = `<span class="tab-icon" aria-hidden="true">${scene.icon}</span><span>${scene.tab}</span>`;
    button.addEventListener('click', () => { stopRecognition(); currentScene = scene; renderLesson(); });
    box.append(button);
  });
}
function renderWords() {
  const box = $('#vocabularyList'); box.replaceChildren();
  currentScene.words.forEach(word => {
    const card = document.createElement('div'); card.className = 'vocab-card';
    const info = document.createElement('div');
    const name = document.createElement('strong'); name.textContent = word.en;
    const meaning = document.createElement('span'); meaning.textContent = `${word.type}  ${word.zh}`;
    info.append(name, meaning);
    const actions = document.createElement('div'); actions.className = 'vocab-actions';
    const play = document.createElement('button'); play.type = 'button'; play.className = 'icon-button'; play.textContent = '♫'; play.title = `播放 ${word.en}`; play.setAttribute('aria-label', `播放 ${word.en} 發音`); play.addEventListener('click', () => speak(word.en));
    const save = document.createElement('button'); save.type = 'button'; save.className = `icon-button save-button${unknown.has(word.id) ? ' saved' : ''}`; save.textContent = unknown.has(word.id) ? '✓' : '+'; save.title = unknown.has(word.id) ? '取消生字紀錄' : '記錄不會的字'; save.setAttribute('aria-label', `${unknown.has(word.id) ? '取消紀錄' : '記錄生字'} ${word.en}`); save.addEventListener('click', () => toggleUnknown(word.id));
    actions.append(play, save); card.append(info, actions); box.append(card);
  });
}
function renderSentences() {
  const box = $('#sentenceList'); box.replaceChildren();
  const page = sentencePages[currentScene.id];
  const total = Math.ceil(currentScene.sentences.length / pageSize);
  $('#sentencePageStatus').textContent = `第 ${page + 1} / ${total} 組・共 ${currentScene.sentences.length} 句`;
  currentScene.sentences.slice(page * pageSize, (page + 1) * pageSize).forEach(sentence => {
    const card = document.createElement('div'); card.className = 'sentence-card';
    const top = document.createElement('div'); top.className = 'sentence-top';
    const play = document.createElement('button'); play.type = 'button'; play.className = 'sentence-play'; play.textContent = '♫'; play.setAttribute('aria-label', `播放 ${sentence.en}`); play.addEventListener('click', () => speak(sentence.en));
    const text = document.createElement('button'); text.type = 'button'; text.className = 'sentence-text'; text.textContent = sentence.en; text.title = '點擊播放發音'; text.addEventListener('click', () => speak(sentence.en));
    top.append(play, text);
    const actions = document.createElement('div'); actions.className = 'sentence-actions';
    const translationButton = document.createElement('button'); translationButton.type = 'button'; translationButton.className = 'light-button'; translationButton.textContent = '查看中文 ＋';
    const translation = document.createElement('p'); translation.className = 'translation'; translation.textContent = sentence.zh; translation.hidden = true;
    translationButton.addEventListener('click', () => { translation.hidden = !translation.hidden; translationButton.textContent = translation.hidden ? '查看中文 ＋' : '隱藏中文 －'; });
    const recordButton = document.createElement('button'); recordButton.type = 'button'; recordButton.className = 'light-button'; recordButton.textContent = '練習發音 ↗';
    const result = document.createElement('div'); result.className = 'pronunciation-result'; result.hidden = true; result.setAttribute('role', 'status');
    recordButton.addEventListener('click', () => practicePronunciation(sentence.en, recordButton, result));
    actions.append(translationButton, recordButton); card.append(top, actions, translation, result); box.append(card);
  });
}
function renderLesson() {
  renderTabs(); $('#sceneCategory').textContent = currentScene.category; $('#sceneTitle').textContent = currentScene.title;
  $('#sceneDescription').textContent = currentScene.description; $('#sceneIcon').textContent = currentScene.icon;
  renderWords(); renderSentences(); newQuestion();
  document.dispatchEvent(new Event('lessonchange'));
}
function renderReview() {
  const box = $('#reviewList'); box.replaceChildren();
  if (!unknown.size) {
    const empty = document.createElement('div'); empty.className = 'empty-state'; empty.innerHTML = '<strong>生字本還是空的 ✦</strong>看到不熟的字，按下單字旁的 ＋ 就能收進來。'; box.append(empty); return;
  }
  [...unknown].forEach(id => {
    const word = wordById.get(id); if (!word) return;
    const card = document.createElement('div'); card.className = 'review-card';
    const info = document.createElement('div'); const name = document.createElement('strong'); name.textContent = word.en;
    const type = document.createElement('small'); type.textContent = word.type;
    const meaning = document.createElement('p'); meaning.textContent = word.zh; info.append(name, type, meaning);
    const actions = document.createElement('div'); actions.className = 'review-actions';
    const play = document.createElement('button'); play.type = 'button'; play.className = 'icon-button'; play.textContent = '♫'; play.setAttribute('aria-label', `播放 ${word.en} 發音`); play.addEventListener('click', () => speak(word.en));
    const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'review-remove'; remove.textContent = '我會了 ✓'; remove.setAttribute('aria-label', `已學會 ${word.en}，取消紀錄`); remove.addEventListener('click', () => toggleUnknown(id));
    actions.append(play, remove); card.append(info, actions); box.append(card);
  });
}
function normalize(value) { return value.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, ' ').trim(); }
function wordSimilarity(expected, actual) {
  const a = normalize(expected).split(' ').filter(Boolean), b = normalize(actual).split(' ').filter(Boolean);
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++) dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1]);
  return Math.round(5 * dp[a.length][b.length] / Math.max(a.length, b.length, 1));
}
function stopRecognition() { if (recognition) { recognition.abort(); recognition = null; } }
function practicePronunciation(expected, button, result) {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  result.hidden = false; result.classList.remove('needs-work');
  if (!Recognition) { result.textContent = '此瀏覽器不支援語音辨識。請使用支援語音辨識的瀏覽器，或先聽發音跟著唸。'; return; }
  if (recognition) stopRecognition();
  window.speechSynthesis?.cancel();
  const current = new Recognition(); recognition = current; current.lang = 'en-US'; current.interimResults = false; current.maxAlternatives = 1;
  button.textContent = '正在聽你說…'; result.textContent = '請對著麥克風，清楚唸出上面的英文句子。';
  current.onresult = event => {
    const heard = event.results[0][0].transcript;
    const score = wordSimilarity(expected, heard);
    const heading = score >= 85 ? '聽起來很接近，做得好！' : score >= 55 ? '有抓到一部分，再聽一次試試。' : '可以先聽範例，再慢慢跟讀。';
    result.classList.toggle('needs-work', score < 85);
    result.replaceChildren();
    const title = document.createElement('strong'); title.textContent = `${heading}（文字相近度 ${score}%）`;
    const transcript = document.createElement('p'); transcript.textContent = `辨識到：${heard}`;
    const note = document.createElement('small'); note.textContent = '這是語音辨識的文字比對，無法精準判斷每個音的發音。';
    result.append(title, transcript, note);
  };
  current.onerror = event => {
    const messages = { 'not-allowed': '麥克風權限未開啟。請允許此網站使用麥克風後重試。', 'no-speech': '沒有聽到聲音，請靠近麥克風再試一次。', 'audio-capture': '找不到麥克風，請確認裝置已連接。', 'network': '語音辨識服務目前無法連線，請稍後再試。' };
    result.classList.add('needs-work'); result.textContent = messages[event.error] || '暫時無法辨識語音，請稍後再試。';
  };
  current.onend = () => { if (recognition === current) recognition = null; button.textContent = '再練一次 ↗'; };
  try { current.start(); } catch { result.classList.add('needs-work'); result.textContent = '無法啟動麥克風，請確認瀏覽器權限。'; button.textContent = '練習發音 ↗'; recognition = null; }
}
function escapeRegex(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function newQuestion() {
  const page = sentencePages[currentScene.id];
  const sentences = currentScene.sentences.slice(page * pageSize, (page + 1) * pageSize);
  const candidates = sentences.flatMap(sentence => currentScene.words.flatMap(word => {
    const pattern = new RegExp(`(^|[^A-Za-z])(${escapeRegex(word.en)})(?=[^A-Za-z]|$)`, 'i');
    return pattern.test(sentence.en) ? [{ sentence, word, pattern }] : [];
  }));
  if (!candidates.length) return;
  const choice = candidates[Math.floor(Math.random() * candidates.length)];
  currentQuestion = { ...choice, answered: false };
  $('#quizMode').textContent = `英文填空・${currentScene.tab} 第 ${page + 1} 組`;
  $('#quizPrompt').textContent = choice.sentence.en.replace(choice.pattern, (_, prefix) => `${prefix}_____`);
  $('#quizTranslation').textContent = choice.sentence.zh;
  $('#quizFeedback').textContent = ''; $('#quizFeedback').classList.remove('wrong');
  $('#spellingInput').value = ''; $('#spellingInput').disabled = false;
}
function showQuizFeedback(correct, word) {
  const feedback = $('#quizFeedback'); feedback.classList.toggle('wrong', !correct);
  feedback.textContent = correct ? `答對了！${word.en} = ${word.zh}。` : `再記一下：${word.en} = ${word.zh}。`;
}
$('#spellingForm').addEventListener('submit', event => {
  event.preventDefault(); if (!currentQuestion || currentQuestion.answered) return;
  const correct = normalize($('#spellingInput').value) === normalize(currentQuestion.word.en);
  currentQuestion.answered = true; $('#spellingInput').disabled = true; showQuizFeedback(correct, currentQuestion.word);
});
$('#newQuestion').addEventListener('click', newQuestion);
$('#previousSentences').addEventListener('click', () => setSentencePage(sentencePages[currentScene.id] - 1));
$('#nextSentences').addEventListener('click', () => setSentencePage(sentencePages[currentScene.id] + 1));
$('#randomSentences').addEventListener('click', () => {
  const count = Math.ceil(currentScene.sentences.length / pageSize);
  const next = (sentencePages[currentScene.id] + 1 + Math.floor(Math.random() * (count - 1))) % count;
  setSentencePage(next);
});
function showView() {
  const view = ['learn', 'review', 'quiz'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'learn';
  for (const section of document.querySelectorAll('main > section')) section.hidden = section.id !== view;
  document.querySelectorAll('.topnav a').forEach(link => {
    const active = link.getAttribute('href') === `#${view}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
  setTimeout(() => window.scrollTo(0, 0), 0);
}
window.addEventListener('hashchange', showView);
window.addEventListener('load', showView);
renderLesson(); renderReview(); renderProgress(); showView();
