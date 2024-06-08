const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349029565129";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_39_06_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDMyLFxuICAgICAgICA4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwLFxuICAgICAgICA2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzksXG4gICAgICAgIDY3LFxuICAgICAgICAyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDksXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgODUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTI3LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDExNSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpVY0ZYUzNLWFFOQVV0N09UU0FaS0FQYnNmSTJ6RXUyS3JFZVQ2R29FUzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAyOTU2NTEyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzJBMTIzMTJBNjE2MDRGQTM4RkZGQkVEMDUyOTRGOTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3ODMyMzg3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkk4X0w4dkduVDNTWjNGOFNHRjMxeFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWQ4YzNkMDMtMmRjNC00MTRhLThmOTUtZTQzYTQ4ZGNiYmNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUzLFxuICAgICAgMTc4LFxuICAgICAgMTEzLFxuICAgICAgMjE5LFxuICAgICAgMjMwLFxuICAgICAgMjQ2LFxuICAgICAgMTgxLFxuICAgICAgMjMzLFxuICAgICAgMTYsXG4gICAgICA0OCxcbiAgICAgIDEyNSxcbiAgICAgIDExMCxcbiAgICAgIDI5LFxuICAgICAgMTQ5LFxuICAgICAgOTAsXG4gICAgICA3NSxcbiAgICAgIDMyLFxuICAgICAgMTY3LFxuICAgICAgMTE4LFxuICAgICAgMTg1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgMTEzLFxuICAgICAgMTc2LFxuICAgICAgMjAxLFxuICAgICAgMTQ3LFxuICAgICAgMjUzLFxuICAgICAgNjAsXG4gICAgICA4OSxcbiAgICAgIDI0OCxcbiAgICAgIDE2LFxuICAgICAgNyxcbiAgICAgIDQsXG4gICAgICA3MCxcbiAgICAgIDI4LFxuICAgICAgMzksXG4gICAgICAyMTUsXG4gICAgICAxNDQsXG4gICAgICA4OSxcbiAgICAgIDQxLFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlNSUVQ2NFNaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDI5NTY1MTI5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NzQ3OTAxMzk2NTk2MToyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJS0t2KzBFRUxtVmtMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlSbXVZUUlZM1VKTXBFQVNLTE5Kdjhsa0d4elBqWnVRRDk3UnF3VzVla2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTlNQemFpMUFNT1lIY28ybC9nVFNGaVpLc1ArVWZOU3RLdVlmVHJSQTNRRzhIcjAzQ3ByWUlIdFRYWWE1SVp1UlViSDVuL05iS2w2bnlyMU11TUxVRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL1FkL09EUHA1SktvaENJNDdrOHl5aEpRTm1Wdk5KRnpBL2lCcXdFT1JHMzFMcWZCSGRKVi9VZnR1WG1VeG44ZE1XMkRjZVJ6dVJxZng3VmY2V24xQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyOTU2NTEyOToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc4MzIzODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGZ0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZnQy5qc29uIjogIntcImtleURhdGFcIjpcInJ4QVJwcXdRQ1ZnejMvVkd5ZkJDdmhkdytwYjZmeXVUK3NpdytHM25YbW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMwMzM2NDg2NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzgzMjMzMDg2OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
