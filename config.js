const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "V85zQIDY#LuYNgUmMaiH4zQe-7GtBs9FRwLWicq6yySF3S2REimU",
MODE : process.env.MODE || "public",// groups/public/private
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
