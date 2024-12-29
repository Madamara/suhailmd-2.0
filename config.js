const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263776670864";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_27_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA2LFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICA4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDU4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDgxLFxuICAgICAgICA5NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODIsXG4gICAgICAgIDgxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA4NyxcbiAgICAgICAgODksXG4gICAgICAgIDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqZm1LbUFWbkZvdjRiZWhUYzNPZ0RwQ2hhU2JuZXRCWWNOVEp6UnN2MDlFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJuZ1ZfUTMxSVNwdUhWVlFMZHFHc1V3XCIsXG4gIFwicGhvbmVJZFwiOiBcImMxN2I4MGY2LWI5MGQtNGY1ZS05Y2I0LWRkNjE1Yjk4YWU5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyOSxcbiAgICAgIDE4NixcbiAgICAgIDk5LFxuICAgICAgMzcsXG4gICAgICAyMDMsXG4gICAgICA3MSxcbiAgICAgIDE0MSxcbiAgICAgIDE5NSxcbiAgICAgIDE1OCxcbiAgICAgIDE2MixcbiAgICAgIDE4MixcbiAgICAgIDE3MixcbiAgICAgIDEwMCxcbiAgICAgIDQwLFxuICAgICAgMTk1LFxuICAgICAgMjMzLFxuICAgICAgOTEsXG4gICAgICAxNTMsXG4gICAgICAzNCxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDIxMCxcbiAgICAgIDEyOCxcbiAgICAgIDEzNCxcbiAgICAgIDM4LFxuICAgICAgMTk1LFxuICAgICAgMTU4LFxuICAgICAgNTgsXG4gICAgICA5NyxcbiAgICAgIDczLFxuICAgICAgMTQzLFxuICAgICAgMjQ5LFxuICAgICAgMjE1LFxuICAgICAgNDEsXG4gICAgICAxNixcbiAgICAgIDI0NyxcbiAgICAgIDY2LFxuICAgICAgMTczLFxuICAgICAgMTExLFxuICAgICAgMTcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJDUVlRVDhBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzY2NzA4NjQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJpY2hhcmxlc29uXCIsXG4gICAgXCJsaWRcIjogXCIyMjMzODU3Mjg1OTQwNTU6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMZUR0Q29RdTRERnV3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlYxUlFybE5tRUV5citKVGtoRHVVWHFHYmRiN2JCUUtybW85ejNicExYVmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOCt6MmlTUi9CaVJuZ3hubVVsSHRaOWxldGdqVnFJTE5EbDAvRldwNUxXUUZTNUZMZWxCUytLcTZCOWVOSWM3UnBHcW5hSEl0WjBicitMZDhQMkI2QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibmRtTDJ6RHJRbVFCWDYxM1RwdG4zak5vbzUvZnNLRDg2dVJjVlFwTzJRK09BNmpvMlhjbkxLcWQwTUNrZm1PZGZFUElzeWFZNUZNbFFlL2Y5RHg4akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc2NjcwODY0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzU0NzUyNjRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
