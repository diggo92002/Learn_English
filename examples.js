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
The final boarding call has been announced.|已經廣播最後登機通知了。
Excuse me, where is seat fourteen A?|不好意思，14A 座位在哪裡？
Could you help me put this bag overhead?|可以幫我把這個包放到上方置物櫃嗎？
Is there space under the seat for my bag?|座位下方有空間放我的包嗎？
Could I have a glass of water, please?|可以給我一杯水嗎？
Do you have a vegetarian meal?|有素食餐嗎？
May I change to another seat?|我可以換到別的座位嗎？
How do I connect to the in-flight Wi-Fi?|我要怎麼連接機上 Wi-Fi？
Could I have an extra blanket?|可以再給我一條毯子嗎？
Where is the restroom on this plane?|這架飛機的洗手間在哪裡？
When will we land?|我們什麼時候會降落？
Do I need to fill out an arrival card?|我需要填寫入境卡嗎？
What is the purpose of your visit?|您這次來訪的目的是什麼？
I'm here for a short holiday.|我是來短期度假的。
I'm here on a business trip.|我是來出差的。
How long will you be staying?|您會停留多久？
I'll be staying for five days.|我會停留五天。
Where will you be staying?|您會住在哪裡？
I'll be staying at a hotel downtown.|我會住在市中心的飯店。
Do you have a return ticket?|您有回程機票嗎？
Yes, my return flight is on Friday.|有，我星期五搭回程班機。
Do you have anything to declare?|您有任何物品要申報嗎？
I have nothing to declare.|我沒有物品需要申報。
Where do I go for customs inspection?|我要去哪裡接受海關檢查？
Are these snacks allowed into the country?|這些零食可以帶入境嗎？
Could you tell me what is inside this bag?|可以告訴我這個包裡裝了什麼嗎？
These are gifts for my friends.|這些是送給朋友的禮物。
Is there a limit on the amount of cash?|攜帶現金有金額限制嗎？
May I take a photo of this form?|我可以拍下這張表格嗎？
Where can I find baggage claim?|行李提領處在哪裡？
Which carousel is for flight two thirty?|230 航班的行李在哪個轉盤？
My suitcase has not arrived yet.|我的行李箱還沒出來。
I think someone took my bag by mistake.|我想有人拿錯了我的包。
Where can I report lost luggage?|我可以在哪裡申報行李遺失？
Could you help me track my suitcase?|可以幫我追蹤行李箱嗎？
My bag was damaged during the flight.|我的行李在飛行途中損壞了。
Do you deliver delayed luggage to hotels?|你們會把延誤的行李送到飯店嗎？
Here is a photo of my suitcase.|這是我的行李箱照片。
When should I expect an update?|我什麼時候會收到最新消息？
I have a connecting flight in two hours.|我兩小時後有轉機班機。
Do I need to collect my bag during the transfer?|轉機時我需要提領行李嗎？
Where is the transfer desk?|轉機服務櫃檯在哪裡？
Will I need another boarding pass?|我需要另一張登機證嗎？
Is there enough time to make my connection?|我有足夠時間趕上轉機嗎？
Which way is the airport train?|機場列車往哪個方向走？
Where is the taxi stand?|計程車乘車處在哪裡？
Can I buy a local SIM card here?|我可以在這裡買當地 SIM 卡嗎？
Is there a currency exchange nearby?|附近有換匯處嗎？
Where can I find a charging station?|哪裡有充電站？
Could you point me toward the exit?|可以指給我出口的方向嗎？
Thank you for helping me find my way.|謝謝你幫我指路。`,
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
Could I have a straw, please?|可以給我一根吸管嗎？
How long will the food take?|餐點大概要等多久？
Could you check on our order?|可以幫我們確認餐點進度嗎？
I think this is someone else's order.|我想這是別人的餐點。
We ordered two bowls of soup.|我們點了兩碗湯。
My drink hasn't arrived yet.|我的飲料還沒送來。
Could we have some extra plates?|可以多給我們幾個盤子嗎？
May I have a clean fork?|可以給我一支乾淨的叉子嗎？
Could you bring some napkins?|可以拿一些餐巾紙給我們嗎？
This dish is a little too salty for me.|這道菜對我來說有點太鹹。
Could you warm this up for me?|可以幫我把這個加熱嗎？
Everything tastes delicious.|每樣東西都很好吃。
The soup is especially good.|這道湯特別好喝。
I'd like to order one more dish.|我想再加點一道菜。
Could we have some more bread?|可以再給我們一些麵包嗎？
May I have a little more sauce?|可以再給我一點醬汁嗎？
We don't need dessert today.|我們今天不需要甜點。
What desserts do you have?|你們有什麼甜點？
Is the cake made fresh today?|這個蛋糕是今天現做的嗎？
Could we get one dessert to share?|我們可以點一份甜點一起吃嗎？
I'll have a scoop of vanilla ice cream.|我要一球香草冰淇淋。
Could you pack this up for me?|可以幫我把這個打包嗎？
Do you have takeaway containers?|有外帶盒嗎？
I'd like the rest of this to go.|剩下的我想打包帶走。
Can I place a takeaway order here?|我可以在這裡點外帶嗎？
How long will my takeaway order take?|我的外帶餐點要等多久？
Please put the dressing in a separate container.|沙拉醬請另外裝。
Could you include a set of utensils?|可以附上一套餐具嗎？
Do you offer delivery to this address?|你們有送餐到這個地址嗎？
I ordered online for pickup.|我在網路上下單，來取餐。
Is my order ready to collect?|我的餐點可以領了嗎？
Could we pay now, please?|我們現在可以結帳嗎？
Can we split the bill?|我們可以分開結帳嗎？
I'll pay for everyone today.|今天我請大家吃飯。
Does the bill include a service charge?|帳單包含服務費嗎？
Can I pay by credit card?|我可以刷信用卡嗎？
Do you accept mobile payments?|你們接受行動支付嗎？
Could I get a receipt, please?|可以給我收據嗎？
I think there is a mistake on the bill.|我想帳單上有錯誤。
We didn't order this drink.|我們沒有點這杯飲料。
Is it okay to leave a tip in cash?|我可以用現金留小費嗎？
What time do you close tonight?|你們今晚幾點打烊？
Is the kitchen still open?|廚房現在還有供餐嗎？
Do I need a reservation for tomorrow?|明天來需要訂位嗎？
Can I book a table for Saturday?|我可以訂星期六的位子嗎？
Do you have a private room?|你們有包廂嗎？
Is there a children's menu?|有兒童菜單嗎？
Can we bring a birthday cake?|我們可以自帶生日蛋糕嗎？
Could you take a photo of us?|可以幫我們拍張照嗎？
Thank you, we had a lovely meal.|謝謝，我們吃得很開心。
We'll definitely come back again.|我們一定會再來。`,
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
Feel free to ask if anything is unclear.|如果有不清楚的地方，隨時問我。
What are the next steps for this project?|這個專案接下來要做什麼？
Who is responsible for this part?|這部分由誰負責？
I'll take care of the presentation.|簡報部分我來處理。
Could you handle the customer questions?|你可以處理客戶的問題嗎？
Let's divide the work between us.|我們把工作分配一下吧。
We need to agree on our priorities.|我們需要就優先順序達成共識。
This task is more urgent than the others.|這項工作比其他的更緊急。
I can help if you're short on time.|如果你時間不夠，我可以幫忙。
Let's check in again tomorrow.|我們明天再確認一次進度。
I'll update the team after lunch.|我午餐後會向團隊更新進度。
The client has requested a small change.|客戶要求做一個小修改。
Could you clarify what the client wants?|你可以釐清客戶想要什麼嗎？
We should ask for their approval first.|我們應該先取得他們的同意。
I'll prepare a revised proposal.|我會準備一份修訂後的提案。
Can we offer them another solution?|我們可以提供另一個方案嗎？
The budget for this project is limited.|這個專案的預算有限。
We need to keep the costs down.|我們需要控制成本。
The customer seems happy with the result.|客戶看起來對成果很滿意。
I'll share their comments with the team.|我會把他們的意見分享給團隊。
Let's confirm the details with the client.|我們和客戶確認細節吧。
Could I get your feedback on this idea?|可以請你對這個想法給些回饋嗎？
I like the direction of this design.|我喜歡這個設計的方向。
The opening could be a little clearer.|開頭可以再清楚一點。
Your explanation was easy to follow.|你的解釋很容易理解。
I made a few notes in the document.|我在文件裡留了幾個註解。
Thanks, that's helpful feedback.|謝謝，這些回饋很有幫助。
I will make those changes today.|我今天會做這些修改。
Could we review it together later?|我們晚點可以一起檢查嗎？
I think this version works better.|我覺得這個版本比較好。
We can improve it in the next round.|我們可以在下一輪把它改進。
Sorry, I'm running a few minutes late.|抱歉，我會晚到幾分鐘。
I have another meeting at three.|我三點還有另一場會議。
Could we take a short break?|我們可以短暫休息一下嗎？
I need to step away for a moment.|我需要暫時離開一下。
I'll be out of the office on Friday.|我星期五不在辦公室。
Who can cover for me while I'm away?|我不在時誰可以代理我的工作？
I'll leave you a short handover note.|我會留一份簡短的交接說明給你。
Please call me if something urgent comes up.|如果有急事，請打電話給我。
I'll be back at my desk in an hour.|我一小時後會回到座位。
Thanks for your patience.|謝謝你的耐心。
Let's summarize what we agreed on.|我們整理一下剛剛達成的共識。
I'll send the meeting notes afterward.|我之後會寄出會議紀錄。
We have three action items to follow up on.|我們有三項待追蹤的工作。
Could you confirm the due dates?|可以確認各項工作的期限嗎？
Let's keep everyone informed.|我們讓大家都掌握最新狀況吧。
The project is moving in the right direction.|專案正朝正確的方向前進。
I learned a lot from this project.|我從這個專案學到很多。
Great work on the presentation today.|你今天的簡報做得很好。
Thank you for working with me on this.|謝謝你和我一起完成這件事。
See you at the next team meeting.|下次團隊會議見。`
};

for (const [scene, lines] of Object.entries(exampleSets)) {
  exampleSets[scene] = lines.split('\n').map(line => {
    const divider = line.indexOf('|');
    return { en: line.slice(0, divider), zh: line.slice(divider + 1) };
  });
}
