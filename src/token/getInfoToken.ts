
import capitalize from "../utils/capitalize"
function getInfoToken(pair: Pair) {
    let result = ""
    let arr_info: { name: string, value: string }[] = []
    if (pair.info) {
        if (pair.info.websites != null && pair.info.websites.length > 0) {
            pair.info.websites.forEach(website => {
                arr_info.push({
                    name: website.label,
                    value: website.url
                })
            })
        }

        if (pair.info.socials != null && pair.info.socials.length > 0) {
            pair.info.socials.forEach(social => {
                arr_info.push({
                    name: social.type,
                    value: social.url
                })
            })
        }

        result = arr_info.map((d) => `[${capitalize(d.name)}](${d.value})`).join(' \\| ')
    }

    return result;
}

export default getInfoToken;