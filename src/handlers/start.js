import bot from "../../main.js"

import { startText } from "../scripts/texts.js"
import { checkUser } from "../scripts/utils.js"

import * as kb from "../scripts/keyboards.js"

function start(message) {
    if (checkUser(message)) {
        bot.sendMessage(message.chat.id, startText(message), { 
            parse_mode: "HTML",
            reply_markup: kb.start
        })
    }
}

export default start