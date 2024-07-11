const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="asharaff0881@gmail.com"
global.location="Colombo,Srilanka."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94760769124";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID "SUHAIL_17_32_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgODksXG4gICAgICAgIDM1LFxuICAgICAgICA3NixcbiAgICAgICAgMjUzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgODUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxODIsXG4gICAgICAgIDM0LFxuICAgICAgICA5NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA4LFxuICAgICAgICAxODksXG4gICAgICAgIDk0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODksXG4gICAgICAgIDQ3LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDczLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDI5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA1OSxcbiAgICAgICAgMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDksXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MixcbiAgICAgICAgODgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM2LFxuICAgICAgICA2MixcbiAgICAgICAgNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBpUEtBVXU2ZHQrYTc1cllNclRtdzBrdFJRYjJ3TXlBeS9qQWRobTY2ZXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZiWk9na254VGtPZ2toREFNNHNmZ3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjRkYTI3NjEtMDg0Yi00MGRjLWI1ZTktMjI3MzkyMjYxMjYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDM4LFxuICAgICAgMTkxLFxuICAgICAgMTY3LFxuICAgICAgMTcxLFxuICAgICAgMTU4LFxuICAgICAgNDksXG4gICAgICA1MCxcbiAgICAgIDE3NCxcbiAgICAgIDE1OCxcbiAgICAgIDM2LFxuICAgICAgNDUsXG4gICAgICAyMjMsXG4gICAgICAxNTUsXG4gICAgICAxNDYsXG4gICAgICAxNzEsXG4gICAgICAyNDcsXG4gICAgICA0OCxcbiAgICAgIDE5NyxcbiAgICAgIDIzM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAyMDcsXG4gICAgICAxODYsXG4gICAgICAzLFxuICAgICAgMjI0LFxuICAgICAgMTI3LFxuICAgICAgMTc1LFxuICAgICAgNDcsXG4gICAgICAyNTEsXG4gICAgICAyMjMsXG4gICAgICAyMTIsXG4gICAgICAyMzUsXG4gICAgICAyNTUsXG4gICAgICAxNzQsXG4gICAgICA2NSxcbiAgICAgIDE5OCxcbiAgICAgIDE2NixcbiAgICAgIDI2LFxuICAgICAgMyxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2Ukc1VllCUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTcwMDU5Mzk6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFza1wiLFxuICAgIFwibGlkXCI6IFwiMjIzNzQyNTEyODY1MzczOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSldma3dNUW9LN0F0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0QUwxR3hMamE0Sno3VWszOFJFeWJ4ZFlLdzdVVXd6YkZTdXpSTDlFMDM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImpyYStpRUZIYXZRZWd5TjVTbHFQalh0WmZtRDMxUnhVZ1lqakdIRDdMM2JRRDRBR3VKaUVyejlSbEJHaGZWYWRrS0hEcHpOR1UrZ3VEaitWWEdCVkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm5RN08vRlpOVXhRcVlleGpyVDRoTVBrdXdBOEVpeDdLQjMyZ1ZPaTBxcVBVK1BEekVLT0NRbi9QZWsrSTlMQUR4NVFkOWxCbWJOMmI5bWhxYUxmbkNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU3MDA1OTM5OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MTkxMzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQYitcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBiKy5qc29uIjogIntcImtleURhdGFcIjpcImp2U1YrNndTemk3RGd5Sm5jZ2puWWxlS3dBM05UcDVteHVUNHU1a1ZiclU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjYwNjczNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDcxODY4MjEzOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "NILA MD",
  packname: process.env.PACK_NAME || "NILA STICKERS",
  botname : process.env.BOT_NAME  || "NILA-ROBOT[MD]",
  ownername:process.env.OWNER_NAME|| "AASHIF_SER",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
