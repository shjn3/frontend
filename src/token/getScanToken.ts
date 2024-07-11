import escape from "../utils/escape";

const getScanToken = function (exchanges: { name: string, value: string }[]) {
    if (exchanges.length == 0) {
        return ""
    }
    return exchanges.map(exchange =>
        `${exchange.name}: ${escape(exchange.value)}`
    ).join(" \n")
}

export default getScanToken;