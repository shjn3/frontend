import fs from 'fs'
import path from 'path'
async function getInfoForBA(ca) {

    const response = await fetch(new URL(`https://api.dexscreener.com/latest/dex/tokens/${ca}`))
    if (response.ok) {
        const jObject = await response.json();

        if (jObject["pairs"]) {
            const pairs = jObject["pairs"];
            if (pairs.length > 0) {
                const pair = pairs[0];
                if (pair["pairCreatedAt"]) {
                    return new Promise(resolve => {
                        resolve((`${ca} ${pair["baseToken"]["name"].replaceAll(" ", "_")} ${pair["baseToken"]["symbol"]} ${pair["volume"]["h24"]} ${pair["pairCreatedAt"]}`))
                    })
                }
            }
        }
    }
    return new Promise(resolve => {
        resolve("")
    })
}
(async function () {
    const input_path = "C:/Users/Shine/Desktop/front_end/src/get_data/input.txt"
    const output_path = "C:/Users/Shine/Desktop/front_end/src/get_data/output.txt"


    const data = await fs.readFileSync(input_path, {
        encoding: 'utf-8'
    })

    const ca_array = data.split('\n')
    const result = []

    for (let i = 0; i < ca_array.length; i++) {
        const ca = ca_array[i];
        if (ca == "") {
            break;
        }
        const line = await getInfoForBA(ca);
        if (line != "") {
            result.push(line);
        }
    }


    const output_data = result.join('\n');
    console.log("output_data" + output_data)
    fs.writeFileSync(output_path, output_data)


})()

