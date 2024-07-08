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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_22_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzksXG4gICAgICAgIDkxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgODUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICA2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjksXG4gICAgICAgIDU4LFxuICAgICAgICAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6a0JRQzNlWXZoVkpZRHV0R3FuWThCWitOQTYzd1dNZmxIZnZWQ2U1clhjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaRG5FQWFFblFjSzZCOUdnQ2dIVUt3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZkZDY1M2Y3LTBiZGYtNGM2MC1hNjcwLWMzODA2ZmNiMGNjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICAyMixcbiAgICAgIDE2MyxcbiAgICAgIDY1LFxuICAgICAgMTcwLFxuICAgICAgMjQxLFxuICAgICAgMjA0LFxuICAgICAgOTAsXG4gICAgICAyMDYsXG4gICAgICA4OSxcbiAgICAgIDExMCxcbiAgICAgIDEyOSxcbiAgICAgIDEyNixcbiAgICAgIDE1NCxcbiAgICAgIDE4MyxcbiAgICAgIDE0MSxcbiAgICAgIDM0LFxuICAgICAgMTUyLFxuICAgICAgMjEsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAyMzcsXG4gICAgICAyMyxcbiAgICAgIDg2LFxuICAgICAgMjExLFxuICAgICAgOTgsXG4gICAgICAxODksXG4gICAgICAyMjcsXG4gICAgICAxMDEsXG4gICAgICAyMjYsXG4gICAgICAyNTEsXG4gICAgICA3OCxcbiAgICAgIDEyNyxcbiAgICAgIDUzLFxuICAgICAgMjI3LFxuICAgICAgNzYsXG4gICAgICAyMjAsXG4gICAgICAxNjQsXG4gICAgICAyMTIsXG4gICAgICA0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0kyZmt3TVFvcWV1dEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidEFMMUd4TGphNEp6N1VrMzhSRXlieGRZS3c3VVV3emJGU3V6Ukw5RTAzOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrK3FwazBMbG9GYnFCUFdhVk0vNlAxSm0vOFpBdiszNXRndTJVNzRkVkpkY0RVNm1ra3Znekp2Z3FRZUJaQk1DZGtxL1o4Rm5rK3lqZWgyekFpcWZCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDamNxd09XbVF5Tm5BaWhiWDBrS3Q4UzJNMkEzWkRwckpxTy8vK1NScStVYmQ5aVpPMXJEaVpHdjlZejNJNWxWenZJemRWbTZiWk01YTM0dVE0TzRCdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzU3MDA1OTM5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBc2tcIixcbiAgICBcImxpZFwiOiBcIjIyMzc0MjUxMjg2NTM3MzoxQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NTcwMDU5Mzk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQyMzMzMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBiNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUGI2Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNG1ybG96OVFtQWNadjk5VjhHQjhWRVlNU1FHSFIwVXdxclV4VCtlNmpuaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjA2NzMzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA0MjMzMzY2ODhcIn0iCn0="  // PUT your SESSION_ID 


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
