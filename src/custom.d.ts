type IInputMessage = {
    name: string,
    symbol: string,
    ca: string,
    scan_urls: {
        dex: string,
        photon: string,
        bireye: string
    }
    bot_urls: {
        sol_trading_bot: string,
        trojan: string,
        meta: string,
    }
    volume?: string
    createdAt?: string,
    social_urls: { [key: string]: string }
    caller_infos: {
        twitter: string,
        owner: string
    }
}

interface Pair {
    chainId: string;
    dexId: string;
    url: string;
    pairAddress: string;
    baseToken: {
        address: string;
        name: string;
        symbol: string;
    };
    quoteToken: {
        symbol: string;
    };
    priceNative: string;
    priceUsd?: string;
    txns: {
        m5: {
            buys: number;
            sells: number;
        };
        h1: {
            buys: number;
            sells: number;
        };
        h6: {
            buys: number;
            sells: number;
        };
        h24: {
            buys: number;
            sells: number;
        };
    };
    volume: {
        m5: number;
        h1: number;
        h6: number;
        h24: number;
    };
    priceChange: {
        m5: number;
        h1: number;
        h6: number;
        h24: number;
    };
    liquidity?: {
        usd?: number;
        base: number;
        quote: number;
    };
    fdv?: number;
    pairCreatedAt?: number;
    info?: {
        websites: {
            url: string,
            label: string
        }[],
        socials: {
            type: string,
            url: string

        }[]
    }
}

interface TokensResponse {
    schemaVersion: string;
    pairs: Pair[] | null;
}