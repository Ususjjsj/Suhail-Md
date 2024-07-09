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


global.SESSION_ID "SUHAIL_06_01_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICA2NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDksXG4gICAgICAgIDY4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkxLFxuICAgICAgICA0MixcbiAgICAgICAgNzEsXG4gICAgICAgIDQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI2LFxuICAgICAgICAyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU0LFxuICAgICAgICA5LFxuICAgICAgICAxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NixcbiAgICAgICAgMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDksXG4gICAgICAgIDg0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMyLFxuICAgICAgICA5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQzLFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDk3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA5MixcbiAgICAgICAgMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzksXG4gICAgICAgIDg2LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDg2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDgyLFxuICAgICAgICA2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQzLFxuICAgICAgICAwLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcImFYQ1VSMXMvang0OVlTcmpMMGpZUGxYTTE0WjNQZjZCN2U3cmF0K1JpbnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NTcwMDU5MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjZCRTNBOEJGRTU1NTgyNjNCOTkzNzMxRTM4QTEwMTFCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDUwNDg3N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzU3MDA1OTM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIyMUEyMURGNjA4NUY3NTQ5MkY0MUI4ODU4NkQ5RkFEQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1MDQ4NzdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMkJaV3pLUHdUS2VUczY4Wno3d1FaZ1wiLFxuICBcInBob25lSWRcIjogXCI1NDVjYjNjYS0wNjk5LTQzYjAtOGExZC05MTFlZGQwYTkzODdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTExLFxuICAgICAgMTQ1LFxuICAgICAgMzksXG4gICAgICAyNDUsXG4gICAgICAyMixcbiAgICAgIDE5MSxcbiAgICAgIDIzLFxuICAgICAgMTA0LFxuICAgICAgMzUsXG4gICAgICAyMDEsXG4gICAgICAxMjIsXG4gICAgICAxMzUsXG4gICAgICAxNjksXG4gICAgICAxNDIsXG4gICAgICAxNjksXG4gICAgICAxODIsXG4gICAgICA5MSxcbiAgICAgIDgzLFxuICAgICAgMjIzLFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzIsXG4gICAgICAxMyxcbiAgICAgIDEzOSxcbiAgICAgIDk2LFxuICAgICAgNjcsXG4gICAgICAyMjMsXG4gICAgICAxMTEsXG4gICAgICAxODQsXG4gICAgICAxMzMsXG4gICAgICAxMTIsXG4gICAgICAyMDMsXG4gICAgICAxNjAsXG4gICAgICAyMjcsXG4gICAgICAyNDksXG4gICAgICAxMjEsXG4gICAgICAxMDUsXG4gICAgICAyMDMsXG4gICAgICAxNTYsXG4gICAgICAxMzksXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxQjFGQlg3SlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NTcwMDU5Mzk6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFza1wiLFxuICAgIFwibGlkXCI6IFwiMjIzNzQyNTEyODY1MzczOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSTZma3dNUXBLU3p0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ0QUwxR3hMamE0Sno3VWszOFJFeWJ4ZFlLdzdVVXd6YkZTdXpSTDlFMDM4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNmNVhmRVlmSTBLcGxxY0ljSXlWK0Y1Zm0yelJxWk1QNVZSVzFrQVZBN0lyTU5QV29TNlMrUnNZMCtXdlpNbXRBTHFNcHE4VWhWZDhQcDVVWE5xUURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImZQc1RndlBRZlE2UmVReGRMa2dGUWgwNnNKTEpzaUpwa0JqTG56c0dFWTErcUdtYjdZWk5tMm1NNXdPRUMycWVuWDMyL1RGWGZ5OU9QMUFFT1BPaGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU3MDA1OTM5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MDQ4NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQYjhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBiOC5qc29uIjogIntcImtleURhdGFcIjpcIkVuejhWaEc5QnkzTnF2R0F2TUhjaVB0OSs5RVFkQW1UT3hPTmJvTEtiQkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjYwNjczNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNTA0ODc3ODI4XCJ9Igp9"  // PUT your SESSION_ID 


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
