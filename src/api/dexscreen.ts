import custom_fetch from "./custom_fetch"

async function get_dexscreen_pair(ca: string): Promise<TokensResponse> {
    return custom_fetch.get(new URL(`https://api.dexscreener.com/latest/dex/tokens/${ca}`))
}

export {
    get_dexscreen_pair
}