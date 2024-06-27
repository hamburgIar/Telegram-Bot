import config from "../scripts/config.js"

const checkChatIsPrivate = message => message.chat.type === "private"  
const checkUser = message => checkChatIsPrivate(message) && config.users.includes(message.chat.id)

export { 
    checkChatIsPrivate,
    checkUser
}