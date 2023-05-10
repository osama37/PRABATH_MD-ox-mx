const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("37122227437")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'saheka9258@satering.com'
global.github = 'https://github.com/prabathLK/PRABATH-MD'
global.location = 'Eg cairo'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94762280384'
global.devs = '94762280384';
global.website = 'https://github.com/prabathLK/PRABATH-MD' //wa.me/+94762280384
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/H062oEI.jpeg'
module.exports = {
  botname: process.env.BOT_NAME || '𝕺𝖃★𝕸𝖃┃ᴮᴼᵀ',
  autosticker: process.env.AUTO_STICKER || 'false',
  autovoice: process.env.AUTO_VOICE || 'false',
  botapikey: process.env.BOTCAHX_API || '',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/ad25b2227fa2a1a01b707.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*The bot developer is prabath* 🎊',
  ownername:process.env.OWNER_NAME || '𝕺𝖃★𝕸𝖃',
  sessionName: process.env.SESSION_ID || 'PRABATH-MD::UFJBQkFUSC1NRDo6c2Vzc2lvbl9yYV8yMDNiMTc2MjQ1YzZmY192aTo6V2lsbGluZ0JlY29taW5nCjo6YzJmYTAzZDg4MTExZDE4NTUyMDFkMjk5OTA3',
  author: process.env.PACK_INFO.split(";")[0] || '𝕺𝖃★𝕸𝖃┃ᴮᴼᵀ', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || '𝟛𝟟',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'PRABATH-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
