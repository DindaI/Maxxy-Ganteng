import { createHash } from 'crypto'
import fetch from 'node-fetch'

let handler = async function (m, { text, usedPrefix, command }) {
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let cap = `*BIG THANKS TO*
    
Terutama Terimakasih Teruntuk:
➸ @${'6288279268363'.split('@')[0]}

Terimakasih Juga Untuk Kang Banned:
➸ 0@s.whatsapp.net

─────────────────────
• God
• My ortu
• King Of Bear ( Me )
• Nurutomo
• Adiwajshing
• Ariffb
• Amel
• IrwanX
• Dawnfrosty
• Rteam1
• Beniismael
• Raditya 
• AlyaaXzy 
• Haori 
• David
• Rozi
• Letta
• Yanzz
• Furqan
• Elyas
• Rasel
• Xteam
• Khael
• Atenabot
• Baka Botz
• ZeeoneOfc
• Zeks
• Rendycraft  
• Krizynofc
• Nadin
• Mursid
• Jarot
• Tio
• Aca Mirabel
• Ramdani
• Gilzz
• Penyedia Layanan API
• Orang-orang yang Berdonasi
─────────────────────`
  let buttonMessage= {
'document':{'url':'https://youtube.com/channel/UCPH9AdS6UQImcRv6IFtQ5lg'},
'mimetype':global.ddocx,
'fileName':'「 Gilzz Tch」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://youtube.com/channel/UCPH9AdS6UQImcRv6IFtQ5lg',
'mediaType':2,
'previewType':'pdf',
'title':`💌 Ultah Owner: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
'body':`⚘ by Gilzz Botz`,
'thumbnail':await(await fetch('https://telegra.ph/file/6ab4daac226292a112540.jpg')).buffer(),
'sourceUrl':'https://youtube.com/channel/UCPH9AdS6UQImcRv6IFtQ5lg'}},
'caption':cap,
'footer':`Ini Ucapan Terima Kasih Untuk Orang Yang Telah Berpatisipasi

${botdate}`,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1},
{'buttonId':'.sewabot','buttonText':{'displayText':'Sewa Bot'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.tags = ['xp']

handler.command = /^(tqto)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
