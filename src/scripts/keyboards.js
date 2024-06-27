const start = {
    "keyboard": [
        ["🏖 Погода и температура"]
    ],
    resize_keyboard: true
}

const deleteMessage = {
    inline_keyboard: [[
        {
            text: '❌ Закрыть',
            callback_data: 'deleteMessage'
        }
    ]]
}

export {
    start,
    deleteMessage
}