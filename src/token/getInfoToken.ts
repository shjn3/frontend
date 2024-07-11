import escape from "../utils/escape"

function getInfoToken(pair: Pair | null) {
    if (pair == null) {
        return ""
    }
    let result = ""
    let arr_info: { name: string, value: string }[] = []
    if (pair.info) {
        if (pair.info.socials != null && pair.info.socials.length > 0) {
            pair.info.socials.forEach(social => {
                arr_info.push({
                    name: social.type,
                    value: social.url
                })
            })
        }

        const telegram_info = arr_info.find(v => v.name == "telegram");
        if (telegram_info) {
            result = `TG: ${escape(telegram_info.value)}\n`
        }
    }

    return result;
}

export default getInfoToken;