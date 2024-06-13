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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_30_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkzLFxuICAgICAgICA0MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDk2LFxuICAgICAgICA1NixcbiAgICAgICAgMTk0LFxuICAgICAgICA3MixcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE5LFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU2LFxuICAgICAgICAzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDc3LFxuICAgICAgICAwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxODgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMzksXG4gICAgICAgIDk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYW5xY3hzSEpQOVdyeXFvOW1BcWlrSWZjRTB5ZDlMblpkdEd5WWZ2NjI3ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicy1MNnBiQ05RalNsUnk5UUhtUHJEUVwiLFxuICBcInBob25lSWRcIjogXCI0YzliMWQ5OS1iM2U3LTQzNDQtYjkxZC1mNmI2MjlkYThmYjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgMTExLFxuICAgICAgMjA2LFxuICAgICAgMTk4LFxuICAgICAgMzYsXG4gICAgICAxNDksXG4gICAgICAxMDIsXG4gICAgICAxMDAsXG4gICAgICA0MSxcbiAgICAgIDY0LFxuICAgICAgNjAsXG4gICAgICA5NixcbiAgICAgIDM0LFxuICAgICAgMTUzLFxuICAgICAgMTE1LFxuICAgICAgMTQ5LFxuICAgICAgMjQxLFxuICAgICAgMzUsXG4gICAgICAyMjUsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICAxMTQsXG4gICAgICAyMyxcbiAgICAgIDIzOSxcbiAgICAgIDE5MCxcbiAgICAgIDEyOSxcbiAgICAgIDY4LFxuICAgICAgOTksXG4gICAgICA2OSxcbiAgICAgIDE5NixcbiAgICAgIDExOCxcbiAgICAgIDE4NCxcbiAgICAgIDk0LFxuICAgICAgMzAsXG4gICAgICA3NSxcbiAgICAgIDE5MSxcbiAgICAgIDc5LFxuICAgICAgMjEzLFxuICAgICAgMTExLFxuICAgICAgMjM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZOUE5NRzlFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDI5NTY1MTI5OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI5NzQ3OTAxMzk2NTk2MToyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZUt2KzBFRVBHL3FyTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlSbXVZUUlZM1VKTXBFQVNLTE5Kdjhsa0d4elBqWnVRRDk3UnF3VzVla2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTzA2TDVwYllSR3lWTlVjcmhyVkdNSTFYdEplK1kwMkxkbEhYL3ZWVWNXV0VtSzVVM240Q091a2JTMzkyQ3RFU21DQWRJZVdFam8xb3YwSWUrZXk0Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3l3RHlLUjhXZ2lQWDRJZkZGNjh6QUM3Q1JIZnVEbytvNEtDdFN4Umx4SnBaWmFRY2ZReTluUE5kdDJYMW5iYnFWT0Z6YkpadVpLMjFIWmpjRDR5amc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyOTU2NTEyOToyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMjk1NjUxMjk6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MjYzODAwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
