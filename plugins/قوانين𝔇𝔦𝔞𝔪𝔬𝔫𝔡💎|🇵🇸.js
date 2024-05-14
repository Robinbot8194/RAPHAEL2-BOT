import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    await conn.sendMessage(m.chat, { react: { text: '💥', key: m.key } })
let videoUrl = 'https://telegra.ph/file/2e4ee93a0d6210407de19.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = ` 


*『قوانين النقابة┇💎』*
*✽ ━─╌ •⤣💎⤤• ╌─━ ✽*

*‏⌡⍟ بسم الله الرحمن الرحيم ⍟⌠*
*✽ ━─╌ •⤣💎⤤• ╌─━ ✽*

*⧉┇『قوانين مملكة ⌞ 💎𝒅𝒊𝒂𝒎𝒐𝒏𝒅 ¦ 钻石 🇵🇸⌝* ┇💎』↶

*✽ ━─╌ •⤣💎⤤• ╌─━ ✽*
 
*⧉┇『الـقـسـم الـأول┇انذار واحد』↶*

*⧉¹┇التشفير{كتابه،ايموجيات،ملصق،الخ..}*
*⧉²┇إرسال ٥ ملصقات متتاليه*
*⧉³┇التحدث عن حلقه قبل مرور 24 ساعه من نزولها*
*⧉⁴┇ارسال اكثر من 8 رسائل  متتالية (السبام)*
*⧉⁵┇ارسال روابط*
*⧉⁶┇تغير لقبك بدون دفع بيلي او دون علم المشرفين*
*✽ ━─╌ •⤣💎⤤• ╌─━ ✽*

*⧉┇『الـقـسـم الـثـانـي┇انذارين❗️』↶*

*⧉¹┇تخريب المسابقات ب اي شكل كان*
*⧉²┇انتقاد المقدم او طلب تغيير الفعالية أثناء التقديم*
*⧉³┇اخذ دور المشرف*
*⧉⁴┇تكرار رسالة اكثر من 8 أسطر بهدف الازعاج*
*⧉⁵┇الاحتكاك الغير مباشر ب الجنس الاخر*
*⧉⁶┇ازعاج او تشويه سمعة المشرف*
*⧉⁷┇الاعتراض على الانذار ب العام*
*⧉⁸┇تخريب مسابقة على مستوى المملكة او افتعال مشكلة اثناء المسابقة*
*⧉⁹┇عدم الاستجابة لامر مشرف او اداري*
*⧉¹⁰┇يحق للمشرف تطبيق عقوبة غير موجوده*
*✽ ━─╌ •⤣💎⤤• ╌─━ ✽*

*⧉┇『الـقـسـم الـثـالـث┇تأديبي تصنيف [B]』↶*
 
*⧉¹┇الحرق غير المباشر.🔥*
*⧉²┇إرسال صورة شخصية (للبنات) (شخص لم تأخذ أذنه)*
*⧉³┇التحدث عن نقابات خارج المملكه بشكل سطحي*
*✽ ━─╌ •⤣⚜️⤤• ╌─━ ✽*

*⧉┇『الـقـسـم الرابع┇مؤبد من النقابة تصنيف』↶*

*⧉¹┇التحدث عن قروبات أخرى بشكل مستفز*
*⧉²┇نشر القروبات بشكل متعمد*
*⧉³┇افتعال مشكله اكثر من مره عمداً*
*⧉⁴┇الاعتراض على المشرف والقوانين*

*⧉⁵┇التهديد بتبنيد وتخريب وغيرها من المور المتعلقه بها*
*✽ ━─╌ •⤣⚜️⤤• ╌─━ ✽*

*⧉┇『الـقـسـم الخامس┇مؤبد من المملكة تصنيف』↶*

*⧉¹┇الاحتكاك ب الجنس الاخر المتعمد ب العام <الا في حاله الميانه>*
*⧉²┇السب او الشتم او إرسال ايموجيات و ملصقات مماثله*
*⧉³┇وسائط او تشفير او كلام مخل ب الآداب والأخلاق*
*⧉⁴┇العنصريه والتنمر المتعمد {دولته،لهجته،الخ..<الى في حاله الميانه>}*
*⧉⁵┇إرسال أي صوره او مماثلها من انمي هينتاي او ايتشي*
*⧉⁶┇دعم المثليه ب اي كلام او ملصق او تلميحات*
*✽ ━─╌ •⤣💎⤤• ╌─━ ✽*

*⧉┇『ملاحظہہ🎐┇‼️』↶*

*〄┇يتم تصفية الأصنام بشكل اسبوعي*
*〄┇الإعتراض على الإنذار يكون في الخاص فقط*
*◄┇ 3 انذارات = طرد مؤقت*
*◄┇ الطرد الأول 3 ايام*
*◄┇وكل مره تتكرر ، تتدبل مدة الطرد*
*✽ ━─╌ •⤣💎⤤• ╌─━ ✽*
*⧉┇"عـمـلـة الـمـمـلـكـة هـي كوين"┇⧉*
*⌬┇━──╌ •⤣💎⤤• ╌──━┇⌬*
*⧉┊تـــحـــيــات💎↯*
*『مـمـلكـة*
 *⌞ 💎𝒅𝒊𝒂𝒎𝒐𝒏𝒅 ¦ 钻石 🇵🇸⌝*

‬`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: m });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['قوانين'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }
