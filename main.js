import TelegramBot from "node-telegram-bot-api"

import config from "./src/scripts/config.js"
import commands from "./src/scripts/commands.js"

import startCMD from "./src/handlers/start.js"

import textHandler from "./src/handlers/text.js"
import pollingError from "./src/handlers/pollingError.js"

import { 
    startDailyTimer, 
    createDailyNotificationTimer 
} from "./src/scripts/dailyTimer.js"

const bot = new TelegramBot(config.token, { polling: true })

bot.setMyCommands(commands)

//commands
bot.onText(/\/start/, startCMD)

//events
bot.on('text', textHandler)
bot.on("polling_error", pollingError);

// const timer = createDailyNotificationTimer(56, 10, () => console.log("hello"))
// startDailyTimer(timer)

export default bot