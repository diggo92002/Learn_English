<img src="icon.svg" alt="Speak Easy 圖示" width="64" height="64">

# Speak Easy 情境英文練習

直接用瀏覽器開啟 `index.html`，即可使用情境英文練習頁面。提供機場、餐廳、職場三種情境，每個情境有 50 句不同的常用範例。情境學習、生字本、小測驗各自顯示，可用上方導覽切換。

- 每組顯示 5 句範例及從這 5 句挑出的 6 個核心單字。「換一組句子」會一起更新句子和單字；重新開啟時會從下一組開始。
- 開啟頁面或切換句組時，若該組的網路單字超過 7 天未更新，會嘗試自動更新。也可按「網路更新」立即嘗試。頁面關閉期間不會在背景更新。
- 網路更新透過 [Datamuse API](https://www.datamuse.com/api/) 尋找出現在目前 5 句中的情境相關英文單字，並透過 [MyMemory API](https://mymemory.translated.net/doc/spec.php) 取得繁體中文翻譯。外部服務若無法使用，會保留目前句組的本機單字。
- 網路翻譯可能有歧義，請搭配例句理解。Datamuse 官方公告自 2027 年 1 月 1 日起 API 呼叫需要金鑰；屆時若未設定新的字詞來源，頁面仍可使用本機輪換單字，但無法取得新的網路單字。
- 點單字的音符，或點英文句子，即可聽發音。
- 每次顯示 5 句，可切換上一組、下一組或隨機練習。
- 點「查看中文」顯示翻譯。
- 點 `＋` 記錄不會的單字；在生字本點「我會了」取消紀錄。資料儲存在本機瀏覽器的 `localStorage`。
- 小測驗從目前的 5 句出英文填空題，並顯示中文句意作為提示。
- 點「練習發音」開啟麥克風，以瀏覽器語音辨識結果和原句比較。相近度只反映辨識文字，無法精確判斷每個音。此功能需要支援 Web Speech API 的瀏覽器與麥克風權限；部分瀏覽器的語音辨識可能需要網路服務。

語音播放使用瀏覽器內建語音合成。字體可載入 Google Fonts；離線時會自動使用系統字體。

網站圖示為 `icon.svg`，已在 `index.html` 設為瀏覽器分頁圖示；上傳至 GitHub Pages 時也會使用此圖示。

手機主畫面圖示使用 `apple-touch-icon.png`（iPhone）及 `icon-192.png`、`icon-512.png`（Android）。`manifest.webmanifest` 定義主畫面名稱與獨立視窗模式；`mobile-icon.svg` 是 PNG 圖示的向量原稿。上傳 GitHub Pages 時，請把這些檔案與 `index.html`、CSS、JavaScript 一起放在同一層。手機從 HTTPS 網址開啟後，可用瀏覽器的「加入主畫面」。目前沒有離線快取，從主畫面啟動仍需要連線載入頁面。

上傳時請包含 `index.html`、`styles.css`、`app.js`、`examples.js`、`lesson-words.js`、`online-vocabulary.js`、`icon.svg`、三張 PNG 圖示及 `manifest.webmanifest`。`README.md` 和 `mobile-icon.svg` 可一起上傳作為說明與圖示原稿。
