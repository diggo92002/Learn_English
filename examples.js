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
