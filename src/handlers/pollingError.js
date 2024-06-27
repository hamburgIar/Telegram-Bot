import bot from "../../main.js";
import config from "../scripts/config.js";

import { deleteMessage } from "../scripts/keyboards.js";

function pollingError(error) {
    console.log(error)

    bot.sendMessage(config.admin, `<b>${config.errorMessage}</b>`, {
        reply_markup: deleteMessage
    })
}

export default pollingError