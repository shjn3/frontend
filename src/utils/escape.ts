const escape = (input: string): string => {
    const regex = new RegExp(/[().]/g);
    const result = input.replace(regex, (match) => {
        return '\\' + match;
    })

    return result;
}


export default escape;