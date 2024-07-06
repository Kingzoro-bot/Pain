//Arthur 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEVzN29XSXBBQlA4dGxSNkc1OWo3Nm9BMUdGNUY1bEFmclJIZ3lyZVRIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNnhhdnpFVmFqbUNrSXg4cUxWOVlWVEFWVG9uZy9JN2psa1BkMmQ0Szdqaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTnFmNWdvQjlHYVlkQ0ZQeHBSSXZvaDhzY09KRnAzR3paRTFxRzh0TzBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2OE5aM21SdExuMG8wWlc0R1A5dUNFNVdtQlF1OVhqVVZoUlFONUd3QmhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1FSytTK2NrRGttcUZEYXhjbjhiVmF0MHlYTURSS092cEdGWlRLVEkwa1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhkWDM0V2pIeE0vaVBYUXk2dFBVbjFITjhsU2RNeEx1M1NXa3Z5YlI3Um89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZIQUUwdXpLcS96ZVZSM1I1dGc3cksrRG11eE1sRkZXWHpzUTJQZnFGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWVDL0dFU1l5UEIydmsvVXJ0cHkyNGVIbUJHdzlmWVZpczRBV21YcGdHUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFRd0JwVHpPbHJCSGVCVTRNZHlrQW1hUzhwSi9TcDIvVXdOd05CQy90YmJCY1YrcW5IUnpCM3k1TDRqSTJpbjVuZnkrcXBKN0dpdGp5dGRadDQzMmpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiJaOFU2cE15bCtqR3ZkcVpJTkkzYS9mbVgvcGFraEY4dlR6L0VhRW9BSXRVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMDA4MzU3NjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREM5QTAxQ0M2MjA2Q0IxNjI0MjczQ0E1NzJGMEZBMTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMDI2NjQ1MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEwMDgzNTc2N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3QkFBN0REM0MwMDBGRjlCRTFDNTUzMERFRDlCQjI5NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwMjY2NDY1fV0sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjRkRLZzV4bFFOVzdQbmgwa2ZNSHJBIiwicGhvbmVJZCI6IjEwMTQ0MWY4LTQwYjUtNDg4MC04MzFiLTIwOTQxMDlkZDUyMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsMGJ5Lzg0V0NVLzZXdG95ZVNVZGM0UThjaGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDArRGxLODV5K2Y1ZXdEQzNBa0tRK3pGcmtjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5COE0zVkY5IiwibWUiOnsiaWQiOiIyMzQ4MTAwODM1NzY3OjM4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImtpbmcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BteW10b0VFTDdkcExRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZvb09UdldzLzZZNTlSVWZIbVhySHV5L3J0L2RZdjdDbTUxdVdNQys0aGs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjA2Y2swdXJEb21RMzZsbXZGMlpWdlloY2tCaHRzd1g3UDJJUk45MkVBYktqUlJweXBJQ0Z5U24rQitBSWtHeXBSZVNid3dFVjNCc1FVaXdWODEzVENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFTE5oUmQyd090anhOem1FZ0pwcWtZZVlweGk0VGE3U0NDaTdXN2NQUy9jMS9FbFZVbzhDV0ZJVkFMb1QrTUc0OTloQitQMzNCaDRKRWwyV2J2eEVqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDA4MzU3Njc6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDZLRGs3MXJQK21PZlVWSHg1bDZ4N3N2NjdmM1dMK3dwdWRibGpBdnVJWiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDI2NjYzMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJY1gifQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2348100835767";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.imgur.com/63V05M3.jpeg,https://i.imgur.com/63V05M3.jpeg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.imgur.com/63V05M3.jpeg,https://i.imgur.com/63V05M3.jpeg,https://i.imgur.com/63V05M3.jpeg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻`",
  author: process.env.PACK_AUTHER || "𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻",
  packname: process.env.PACK_NAME || "𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻",
  botname: process.env.BOT_NAME || "𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻",
  ownername: process.env.OWNER_NAME || "𝔸ℝ𝕋ℍ𝕌ℝ-𝕄𝔻",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Sanji-king/Arthur-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://chat.whatsapp.com/DC38hUUVVaa1vp573QBYBF";
global.devs = "2348100835767";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-md.onrender.com";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
