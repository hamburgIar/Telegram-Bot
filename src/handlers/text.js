import { checkUser } from "../scripts/utils.js"

async function text(message) {
    if (checkUser(message)) {
        switch (message.text) {
            case "🏖 Погода и температура":
                console.log("POGODA")

                break
        }
    }
}

export default text