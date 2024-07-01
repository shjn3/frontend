import config from '../config/config.ts'
import custom_fetch from './custom_fetch'
async function send_message(msg: string) {
    const params = new URLSearchParams({
        chat_id: config.telegram_bot_config.chat_id,
        text: msg,
        parse_mode: "MarkdownV2"
    })
    const url: URL = new URL(`https://api.telegram.org/bot${config.telegram_bot_config.api}/sendMessage?${params}`)

    return await custom_fetch.get(url);
}

export default {
    send_message
}