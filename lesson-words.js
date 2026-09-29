// Six useful words or phrases for each five-sentence lesson group.
// Every English entry appears in one of that group's example sentences.
const lessonWordLines = {
  airport: `check-in|報到;counter|櫃檯;passport|護照;boarding pass|登機證;gate|登機門;flight|航班
check in|辦理報到;online|線上;close|關閉;booking reference|訂位代號;window seat|靠窗座位;aisle seat|靠走道座位
seats|座位;together|在一起;change|更換;bags|行李袋;weight limit|重量限制;excess baggage fee|超重行李費
carry|攜帶;plane|飛機;suitcase|行李箱;scale|磅秤;fragile|易碎的;luggage tag|行李吊牌
laptop|筆記型電腦;liquids|液體;clear bag|透明袋;security|安檢;pockets|口袋;scan|掃描
jacket|外套;scanner|掃描器;selected|被選中的;separate line|獨立隊伍;families|家庭;security wait|安檢等候時間
departure board|出發航班資訊看板;delayed|延誤的;departure time|起飛時間;gate number|登機門號碼;gate twelve|十二號登機門;find|找到
walking distance|步行距離;shuttle|接駁車;terminal|航廈;flight|航班;nearest|最近的;information desk|服務台
boarding|登機;boarding group|登機組別;priority boarding|優先登機;boarding pass|登機證;begin|開始;ready|準備好的
board|登機;booked|訂滿的;stroller|嬰兒推車;gate-checked bag|登機門托運行李;final boarding call|最後登機通知;announced|已宣布的`,
  restaurant: `menu|菜單;recommend|推薦;bill|帳單;table|桌位;reservation|訂位;have a table|有空桌
wait|等候;window|窗戶;outdoor seating|戶外座位;high chair|兒童椅;quieter|更安靜的;table|桌位
taken|有人使用的;waiting|正在等候;English menu|英文菜單;pictures|照片;today's special|今日特餐;person|人
popular dish|熱門餐點;explain|解釋;rice|飯;soup|湯;meal|餐點;side dishes|配菜
ready to order|準備點餐;chicken salad|雞肉沙拉;same|相同的;without onions|不加洋蔥;spicy|辣的;friend|朋友
sauce|醬汁;substitute|替換;fries|薯條;egg|蛋;portion|份量;share|分享
vegetarian|素食的;vegans|純素者;peanuts|花生;allergic|過敏的;shellfish|貝類;broth|高湯
dairy|乳製品;gluten-free|無麩質的;allergy|過敏;fish|魚;raw|生的;cooked|煮熟的
water|水;sparkling water|氣泡水;coffee|咖啡;sugar|糖;iced|冰的;nonalcoholic|無酒精的
tea|茶;juice|果汁;pitcher|壺;refill|續杯;straw|吸管;cup|杯子`,
  work: `meeting|會議;update|進度更新;appreciate|感謝;feedback|回饋;weekend|週末;quick chat|簡短交談
working from home|在家工作;show|示範;getting used to|逐漸習慣;system|系統;contact|聯絡;started|開始
schedule|安排;o'clock|點鐘;move|改期;calendar invite|行事曆邀請;agenda|議程;Thursday|星期四
update|更新;hear|聽見;share my screen|分享畫面;speak|說話;slowly|慢慢地;missed|沒聽到
repeat|重複;main point|重點;understand|理解;timeline|時程;agree|同意;suggestion|建議
differently|不同地;explore|探討;option|選項;information|資訊;decision|決定;Friday|星期五
deadline|截止日期;draft|草稿;review|審閱;document|文件;revised version|修訂版本;work|工作
on track|如期進行;numbers|數字;extend|延長;deadline|截止日期;final report|最終報告;changes|變動
latest file|最新檔案;attachment|附件;wrong version|錯誤版本;link|連結;email|電子郵件;copy me|副本寄給我
follow up|追蹤;client|客戶;quickly|很快地;confirm|確認;writing|書面;unclear|不清楚的`
};

const lessonWords = Object.fromEntries(Object.entries(lessonWordLines).map(([scene, lines]) => [scene,
  lines.split('\n').map(group => group.split(';').map(entry => {
    const [en, zh] = entry.split('|');
    return { id: `lesson-${scene}-${en.toLowerCase().replace(/[^a-z]+/g, '-')}`, en, zh, type: en.includes(' ') ? 'phrase' : 'word' };
  }))
]));
