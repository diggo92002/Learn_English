// Each line contains one English example and its Traditional Chinese translation.
const exampleSets = {
  airport: `Where is the check-in counter?|報到櫃檯在哪裡？
May I see your passport and boarding pass?|可以讓我看您的護照和登機證嗎？
Which gate should I go to?|我應該去幾號登機門？
I'd like to check in for my flight.|我想辦理航班報到。
Is this the line for international flights?|這是國際線的排隊隊伍嗎？
Can I check in online instead?|我可以改用線上報到嗎？
What time does check-in close?|報到櫃檯幾點關閉？
Do you need my booking reference?|你需要我的訂位代號嗎？
Could I have a window seat?|可以給我靠窗的座位嗎？
Is an aisle seat available?|還有靠走道的座位嗎？
Are there any seats together?|還有連在一起的座位嗎？
Can I change my seat at the counter?|我可以在櫃檯換座位嗎？
How many bags can I check?|我可以托運幾件行李？
Does this bag meet the weight limit?|這件行李符合重量限制嗎？
How much is the excess baggage fee?|超重行李費是多少？
Can I carry this bag onto the plane?|我可以把這個包帶上飛機嗎？
Please put your suitcase on the scale.|請把行李箱放到磅秤上。
Is my luggage checked through to London?|我的行李會直掛到倫敦嗎？
Could you attach a fragile label to this bag?|可以幫這件行李貼上易碎標籤嗎？
Where can I collect a luggage tag?|我在哪裡可以拿行李吊牌？
Do I need to take out my laptop?|我需要拿出筆記型電腦嗎？
Please place your liquids in a clear bag.|請把液體放進透明袋裡。
Is this bottle allowed through security?|這個瓶子可以通過安檢嗎？
Please empty your pockets before the scan.|掃描前請清空口袋。
Can I keep my shoes on?|我可以不用脫鞋嗎？
Where should I put my jacket?|我應該把外套放在哪裡？
Please step through the scanner.|請走過掃描器。
My bag was selected for another check.|我的包被選中要再檢查一次。
Is there a separate line for families?|有家庭旅客專用通道嗎？
How long is the security wait?|安檢大概要等多久？
Where can I find the departure board?|我在哪裡可以找到出發航班資訊看板？
Has my flight been delayed?|我的航班延誤了嗎？
What is the new departure time?|新的起飛時間是幾點？
Has the gate number changed?|登機門號碼有更改嗎？
How do I get to gate twelve?|我要怎麼去十二號登機門？
Is the gate within walking distance?|登機門走路就能到嗎？
Can I take a shuttle to the next terminal?|我可以搭接駁車到下一個航廈嗎？
Which terminal does this flight leave from?|這班飛機從哪個航廈出發？
How long does it take to reach the gate?|走到登機門要多久？
Where is the nearest information desk?|最近的服務台在哪裡？
What time does boarding begin?|幾點開始登機？
Has boarding started for this flight?|這班飛機開始登機了嗎？
Which boarding group am I in?|我是第幾登機組別？
Is this the line for priority boarding?|這是優先登機的隊伍嗎？
Please have your boarding pass ready.|請準備好您的登機證。
Can I board with my family?|我可以和家人一起登機嗎？
Is the flight fully booked?|這班飛機客滿了嗎？
May I bring this stroller to the gate?|我可以把嬰兒推車推到登機門嗎？
Where do I hand in my gate-checked bag?|我要在哪裡交付登機門托運的行李？
The final boarding call has been announced.|已經廣播最後登機通知了。`,
  restaurant: `Could I see the menu, please?|可以給我看看菜單嗎？
What would you recommend?|你會推薦什麼？
Could we have the bill, please?|可以幫我們結帳嗎？
Do you have a table for two?|有兩個人的位子嗎？
We have a reservation under Chen.|我們有訂位，名字是陳。
How long is the wait for a table?|等位子大概要多久？
Could we sit by the window?|我們可以坐窗邊嗎？
Is there outdoor seating available?|有戶外座位嗎？
May we have a high chair for the child?|可以給小孩一張兒童椅嗎？
Could we move to a quieter table?|我們可以換到比較安靜的桌子嗎？
Is this table already taken?|這張桌子有人坐了嗎？
We are still waiting for one more person.|我們還在等另一個人。
Do you have an English menu?|有英文菜單嗎？
Is there a menu with pictures?|有附照片的菜單嗎？
What is today's special?|今天的特餐是什麼？
What is the most popular dish here?|這裡最受歡迎的菜是什麼？
Could you explain this dish to me?|可以幫我介紹這道菜嗎？
Does this dish come with rice?|這道菜有附飯嗎？
Is the soup included with the meal?|這份餐點有附湯嗎？
What side dishes can I choose from?|配菜有哪些選擇？
I'm ready to order now.|我現在可以點餐了。
Could I get the chicken salad?|我想點雞肉沙拉。
I'll have the same as my friend.|我要跟我朋友點一樣的。
Can I order this without onions?|這道可以不要洋蔥嗎？
Could you make it less spicy?|可以做得不那麼辣嗎？
I'd like the sauce on the side.|醬汁請另外放。
Can I substitute fries with a salad?|我可以把薯條換成沙拉嗎？
Could I add an egg to my order?|我的餐點可以加一顆蛋嗎？
Is there a smaller portion available?|有小份的嗎？
Could we share one main dish?|我們可以共用一份主餐嗎？
Do you have any vegetarian options?|有素食選項嗎？
Is this dish suitable for vegans?|這道菜適合純素者嗎？
Does this contain peanuts?|這裡面有花生嗎？
I'm allergic to shellfish.|我對貝類過敏。
Is the broth made with meat?|這個高湯是用肉熬的嗎？
Can you prepare this without dairy?|這道可以不加乳製品嗎？
Is the bread gluten-free?|這個麵包不含麩質嗎？
Please let the kitchen know about my allergy.|請告知廚房我有過敏問題。
Is the fish cooked all the way through?|魚有完全煮熟嗎？
Are the vegetables served raw or cooked?|蔬菜是生的還是熟的？
Could I have some water, please?|可以給我一些水嗎？
Do you have sparkling water?|有氣泡水嗎？
I'd like my coffee without sugar.|我的咖啡不要加糖。
Could I get this iced instead?|這杯可以改成冰的嗎？
Do you have any nonalcoholic drinks?|有無酒精飲料嗎？
May I have another cup of tea?|可以再給我一杯茶嗎？
What kind of juice do you have?|你們有哪些果汁？
Could you bring us a pitcher of water?|可以拿一壺水給我們嗎？
Is the refill free?|續杯免費嗎？
Could I have a straw, please?|可以給我一根吸管嗎？`,
  work: `What time does the meeting start?|會議幾點開始？
Could you give me an update?|可以告訴我目前的進度嗎？
I would appreciate your feedback.|如果你能給我回饋，我會很感謝。
Good morning, how was your weekend?|早安，你週末過得如何？
Are you free for a quick chat?|你有空簡短聊一下嗎？
I'll be working from home tomorrow.|我明天會在家工作。
Could you show me how this works?|你可以示範這個怎麼操作嗎？
I'm still getting used to the new system.|我還在熟悉新系統。
Who should I contact about this?|這件事我應該聯絡誰？
Thanks for helping me get started.|謝謝你幫助我上手。
Could we schedule a meeting for Monday?|我們可以安排星期一開會嗎？
Does ten o'clock work for you?|十點對你方便嗎？
I'd like to move our meeting to Thursday.|我想把會議改到星期四。
Could you send me a calendar invite?|可以寄一封行事曆邀請給我嗎？
What's on the agenda today?|今天的議程是什麼？
Let's start with a quick update.|我們先從簡短的進度更新開始。
Can everyone hear me clearly?|大家聽得清楚我的聲音嗎？
I'll share my screen now.|我現在要分享畫面。
Could you speak a little more slowly?|可以說慢一點嗎？
Sorry, I missed the last part.|抱歉，我沒聽清楚最後一段。
Could you repeat the main point?|可以再說一次重點嗎？
Let me make sure I understand.|我確認一下自己有沒有理解正確。
I have a question about the timeline.|我對時程有個問題。
That's a good point.|這點說得很好。
I agree with your suggestion.|我同意你的建議。
I see it a little differently.|我的看法有些不同。
Could we explore another option?|我們可以研究另一個選項嗎？
Let's hear what the others think.|我們也聽聽其他人的想法。
We may need more information first.|我們可能需要先取得更多資訊。
Let's make a decision by Friday.|我們在星期五前做決定吧。
What is the deadline for this task?|這項工作的截止日期是什麼時候？
I can finish the draft by Wednesday.|我可以在星期三前完成草稿。
Could you review this document today?|你今天可以審閱這份文件嗎？
I'll send you the revised version.|我會把修訂版寄給你。
This part still needs some work.|這部分還需要再修改。
We're on track to finish this week.|我們可望在本週如期完成。
I need a bit more time to check the numbers.|我需要多一點時間核對數字。
Can we extend the deadline by one day?|截止日期可以延後一天嗎？
I'll let you know if anything changes.|如果有變動，我會通知你。
The final report is ready for review.|最終報告已經準備好供審閱。
Could you send me the latest file?|可以把最新檔案寄給我嗎？
I can't open the attachment.|我無法開啟附件。
I think I sent the wrong version.|我想我寄錯版本了。
Please use the link in my last email.|請使用我上一封電子郵件裡的連結。
Could you copy me on that email?|可以在那封郵件副本寄給我嗎？
I'll follow up with the client today.|我今天會跟客戶追蹤進度。
Thanks for getting back to me so quickly.|謝謝你這麼快回覆我。
Please confirm when you receive this.|收到後請回覆確認。
I'll put the details in writing.|我會把細節寫下來。
Feel free to ask if anything is unclear.|如果有不清楚的地方，隨時問我。`
};

for (const [scene, lines] of Object.entries(exampleSets)) {
  exampleSets[scene] = lines.split('\n').map(line => {
    const divider = line.indexOf('|');
    return { en: line.slice(0, divider), zh: line.slice(divider + 1) };
  });
}

// The fixed curriculum is expanded to 1,000 sentences per scene.  The source
// stays compact, while every generated sentence and translation is deterministic
// and available without a network request.
const fixedLessonVariants = {
  names: ['Alex', 'Jamie', 'Taylor', 'Morgan', 'Casey', 'Jordan', 'Riley', 'Avery', 'Cameron', 'Parker'],
  cities: [['Taipei', '台北'], ['Tokyo', '東京'], ['Singapore', '新加坡'], ['Seoul', '首爾'], ['Bangkok', '曼谷'], ['Sydney', '雪梨'], ['London', '倫敦'], ['Vancouver', '溫哥華'], ['Paris', '巴黎'], ['New York', '紐約']],
  dishes: [['chicken rice', '雞肉飯'], ['tomato pasta', '番茄義大利麵'], ['grilled fish', '烤魚'], ['beef noodles', '牛肉麵'], ['vegetable curry', '蔬菜咖哩'], ['mushroom soup', '蘑菇湯'], ['seafood salad', '海鮮沙拉'], ['cheese sandwich', '起司三明治'], ['pumpkin risotto', '南瓜燉飯'], ['fruit yogurt', '水果優格']],
  projects: [['website launch', '網站上線'], ['sales report', '銷售報告'], ['client proposal', '客戶提案'], ['training plan', '培訓計畫'], ['product update', '產品更新'], ['budget review', '預算審查'], ['design draft', '設計草稿'], ['team schedule', '團隊時程'], ['research summary', '研究摘要'], ['monthly report', '月報']]
};
function fixedLessonValues(index) {
  const pick = (items, offset = 0) => items[(index + offset) % items.length];
  const hour = 7 + (index % 12);
  return {
    name: pick(fixedLessonVariants.names), city: pick(fixedLessonVariants.cities, 2)[0], cityZh: pick(fixedLessonVariants.cities, 2)[1],
    dish: pick(fixedLessonVariants.dishes, 4)[0], dishZh: pick(fixedLessonVariants.dishes, 4)[1], project: pick(fixedLessonVariants.projects, 6)[0], projectZh: pick(fixedLessonVariants.projects, 6)[1], flight: `${120 + index * 7}`, gate: String.fromCharCode(65 + (index % 6)) + (1 + (index % 35)),
    time: `${hour}:00`, hour, day: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'][index % 5], number: 2 + (index % 5)
  };
}
const fixedLessonBuilders = {
  airport: [
    { template: 0, build: v => [
      [`The check-in counter for flight ${v.flight} opens at ${v.time}.`, `航班 ${v.flight} 的報到櫃檯在 ${v.time} 開放。`],
      [`${v.name}, please show your passport and boarding pass.`, `${v.name}，請出示您的護照和登機證。`],
      [`Your flight to ${v.city} leaves from gate ${v.gate}.`, `您前往 ${v.cityZh} 的航班從 ${v.gate} 登機門出發。`],
      ['The check-in counter can print a new boarding pass.', '報到櫃檯可以列印新的登機證。'],
      ['Please keep your passport with you until you reach the gate.', '抵達登機門前，請隨身保管護照。']
    ] },
    { template: 1, build: v => [
      [`Your booking reference is ${String.fromCharCode(65 + v.number)}${v.flight}.`, `您的訂位代號是 ${String.fromCharCode(65 + v.number)}${v.flight}。`],
      [`Would you prefer a window seat or an aisle seat?`, '您偏好靠窗座位還是靠走道座位？'],
      ['You can check in online with the booking reference.', '您可以使用訂位代號在線上辦理報到。'],
      [`Online check-in will close at ${v.time}.`, `線上報到會在 ${v.time} 關閉。`],
      ['The window seat is available, but the aisle seat is taken.', '靠窗座位還有空位，但靠走道座位已有人使用。']
    ] },
    { template: 2, build: v => [
      [`You may check ${v.number} bags for this flight.`, `這班航班您可以托運 ${v.number} 件行李。`],
      [`Can we keep our ${v.number} seats together after the change?`, `更換後我們還能保留 ${v.number} 個連在一起的座位嗎？`],
      ['This bag is over the weight limit.', '這件行李超過重量限制。'],
      ['The excess baggage fee can be paid at the counter.', '超重行李費可以在櫃檯支付。'],
      ['Please change the bags before the final check.', '最後檢查前，請更換這些行李。']
    ] },
    { template: 4, build: v => [
      ['Please place your liquids in a clear bag for security.', '請把液體放進透明袋，以便通過安檢。'],
      ['Take your laptop out of the bag before the scan.', '掃描前請從包包裡拿出筆記型電腦。'],
      [`The security line is busiest around ${v.time}.`, `安檢隊伍在 ${v.time} 左右最擁擠。`],
      ['Empty your pockets and put your jacket in the tray.', '請清空口袋，並把外套放進托盤。'],
      ['The security officer will tell you when to walk through.', '安檢人員會告訴您何時可以通過。']
    ] },
    { template: 8, build: v => [
      [`Boarding for flight ${v.flight} will begin at ${v.time}.`, `航班 ${v.flight} 在 ${v.time} 開始登機。`],
      ['Please have your boarding pass ready at the gate.', '請在登機門準備好登機證。'],
      [`Your boarding group is ${v.number}; priority boarding goes first.`, `您的登機組別是第 ${v.number} 組；優先登機會先開始。`],
      ['Families with small children may board before the final call.', '有幼兒的家庭可在最後登機通知前先登機。'],
      ['The gate agent announced that boarding is ready.', '登機門服務人員宣布可以開始登機。']
    ] }
  ],
  restaurant: [
    { template: 0, build: v => [
      [`We have a reservation for ${v.number} under ${v.name}.`, `我們以 ${v.name} 的名字訂了 ${v.number} 人座位。`],
      ['Could we have a table near the window, please?', '我們可以坐靠窗的桌位嗎？'],
      ['The menu and the bill are both available in English.', '菜單和帳單都有英文版。'],
      ['Could we have a table when our reservation is ready?', '我們的訂位準備好後，可以有一張桌位嗎？'],
      ['Would you recommend anything from the menu?', '您會推薦菜單上的什麼餐點嗎？']
    ] },
    { template: 2, build: v => [
      [`Today's special is ${v.dish}.`, `今天的特餐是${v.dishZh}。`],
      ['The English menu has pictures of every popular dish.', '英文菜單有每一道熱門餐點的照片。'],
      ['The table is taken, so one person is waiting outside.', '桌位已有人使用，所以有一個人正在外面等候。'],
      ['Could you show the English menu with pictures to that person?', '可以把附有照片的英文菜單給那位客人看嗎？'],
      ["Today's special is popular with every waiting person.", '今天的特餐很受每一位等候客人的歡迎。']
    ] },
    { template: 4, build: v => [
      [`I am ready to order the ${v.dish}.`, `我準備好要點${v.dishZh}。`],
      ['My friend would like the same dish without onions.', '我朋友想點同一道餐，但不要洋蔥。'],
      ['Could you make the sauce less spicy?', '醬汁可以做得不那麼辣嗎？'],
      ['Please put the sauce on the side of the chicken salad.', '請把雞肉沙拉的醬汁另外放。'],
      ['We are ready to order when you have a moment.', '您方便時，我們就可以點餐。']
    ] },
    { template: 6, build: v => [
      ['Do you have any vegetarian options today?', '今天有素食選項嗎？'],
      ['My guest is allergic to peanuts and shellfish.', '我的同伴對花生和貝類過敏。'],
      ['Is the broth made without dairy?', '這個高湯是不含乳製品做的嗎？'],
      ['Could you tell the kitchen about this allergy?', '可以告知廚房這個過敏狀況嗎？'],
      ['The vegetarian dish is suitable for vegans.', '這道素食餐點適合純素者。']
    ] },
    { template: 8, build: v => [
      ['Could we have sparkling water and iced coffee?', '我們可以要氣泡水和冰咖啡嗎？'],
      ['Please bring a pitcher of water for the table.', '請拿一壺水到這桌。'],
      ['Is the refill for tea and juice free?', '茶和果汁可以免費續杯嗎？'],
      ['I would like my coffee without sugar.', '我的咖啡不要加糖。'],
      ['Could I have a straw for this nonalcoholic drink?', '這杯無酒精飲料可以給我一根吸管嗎？']
    ] }
  ],
  work: [
    { template: 0, build: v => [
      [`Could we have a quick chat before the ${v.day} meeting?`, `我們可以在週${v.day === 'Monday' ? '一' : v.day === 'Tuesday' ? '二' : v.day === 'Wednesday' ? '三' : v.day === 'Thursday' ? '四' : '五'}會議前簡短聊一下嗎？`],
      [`I would appreciate an update on the ${v.project}.`, `我很感謝你提供${v.projectZh}的進度更新。`],
      ['Thank you for your helpful feedback this weekend.', '謝謝你這週末提供的實用回饋。'],
      ['The meeting starts with a quick update from everyone.', '會議一開始會由每個人簡短更新進度。'],
      ['I appreciate your feedback before we finish the chat.', '在結束討論前，我很感謝你的回饋。']
    ] },
    { template: 1, build: v => [
      [`I am working from home on ${v.day}.`, `我週${v.day === 'Monday' ? '一' : v.day === 'Tuesday' ? '二' : v.day === 'Wednesday' ? '三' : v.day === 'Thursday' ? '四' : '五'}在家工作。`],
      ['Could you show me how the new system works?', '你可以示範新系統怎麼操作嗎？'],
      ['I am still getting used to this process.', '我還在適應這個流程。'],
      [`Please contact ${v.name} if you need help getting started.`, `如果你需要開始上手的協助，請聯絡 ${v.name}。`],
      ['The system is easy to use after a short demonstration.', '簡短示範後，這個系統很容易使用。']
    ] },
    { template: 2, build: v => [
      [`Could we schedule the ${v.project} meeting for ${v.day}?`, `我們可以把${v.projectZh}會議排在週${v.day === 'Monday' ? '一' : v.day === 'Tuesday' ? '二' : v.day === 'Wednesday' ? '三' : v.day === 'Thursday' ? '四' : '五'}嗎？`],
      [`Does ${v.hour} o'clock work for everyone on the calendar invite?`, `行事曆邀請上的 ${v.time} 對大家都方便嗎？`],
      ['I would like to move the meeting to Thursday and update the agenda.', '我想把會議改到星期四並更新議程。'],
      ['Please send a calendar invite with the new schedule.', '請寄出附有新時間的行事曆邀請。'],
      ['The agenda includes time for questions at the end.', '議程最後包含提問時間。']
    ] },
    { template: 3, build: v => [
      ['Can everyone hear me before I share my screen?', '在我分享畫面前，大家都聽得到我嗎？'],
      ['Please speak slowly if I missed part of the update.', '如果我漏聽一部分進度，請說慢一點。'],
      ['I will share my screen and repeat the main point.', '我會分享畫面並重複重點。'],
      ['Could you hear the last part of the presentation?', '你有聽到簡報的最後一段嗎？'],
      ['The update is easier to follow when the screen is shared.', '分享畫面後，進度內容更容易理解。']
    ] },
    { template: 6, build: v => [
      [`The deadline for the ${v.project} is ${v.day}.`, `${v.projectZh}的截止日期是週${v.day === 'Monday' ? '一' : v.day === 'Tuesday' ? '二' : v.day === 'Wednesday' ? '三' : v.day === 'Thursday' ? '四' : '五'}。`],
      ['Please review the draft document before the deadline.', '請在截止日期前審閱草稿文件。'],
      ['I will send a revised version after I finish this work.', '完成這項工作後，我會寄出修訂版本。'],
      ['The final document needs one more review.', '最終文件還需要再審閱一次。'],
      ['We can finish the draft on time with clear feedback.', '有明確回饋後，我們可以準時完成草稿。']
    ] }
  ]
};
function addFixedCurriculum(scene, target = 2000) {
  const groupsNeeded = Math.floor((target - exampleSets[scene].length) / 5);
  const builders = fixedLessonBuilders[scene];
  for (let group = 0; group < groupsNeeded; group++) {
    const builder = builders[group % builders.length];
    const values = fixedLessonValues(Math.floor(group / builders.length));
    exampleSets[scene].push(...builder.build(values).map(([en, zh]) => ({ en, zh, lessonTemplate: builder.template })));
  }
}
Object.keys(fixedLessonBuilders).forEach(scene => addFixedCurriculum(scene));
