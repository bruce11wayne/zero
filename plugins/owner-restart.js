import { spawn } from 'child_process'

let handler = async (m, { conn, isROwner, text }) => {
  if (!process.send) throw 'الرجاء تشغيل البرنامج بواسطة الأمر "node index.js" بدلاً من "node main.js"'
  if (conn.user.jid == conn.user.jid) {
    await m.reply('🔄 جاري إعادة تشغيل البوت...\nالرجاء الانتظار لحظة')
    process.send('reset')
  } else throw 'eh'
}

handler.help = ['restart']
handler.tags = ['owner']
handler.command = ['restart', 'اعادة_التشغيل']

handler.owner = true

export default handler
