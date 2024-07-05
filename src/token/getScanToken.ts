const getScanToken = function (exchanges: { name: string, value: string }[]) {
    if (exchanges.length == 0) {
        return ""
    }
    return "📈 " + exchanges.map(exchange =>
        `[${exchange.name}](${exchange.value})`
    ).join(" \\| ")
}

export default getScanToken;