import patterns from './patterns/pattern.json'


function generateMessage(variables: { [key: string]: string }) {
    let x_msg = patterns.pattern.x[0]
    let telegram_msg = patterns.pattern.telegram[0]

    for (const [key, value] of Object.entries(variables)) {
        const placeholder = new RegExp(`\\$\\{${key}\\}`, 'g');
        x_msg = x_msg.replace(placeholder, value.replace('.', '\\.'));
        telegram_msg = telegram_msg.replace(placeholder, value);
    }

    return {
        x: x_msg,
        telegram: telegram_msg
    }
}

export default generateMessage

