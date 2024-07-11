import './style.css'
import { setupCounter } from './counter.ts'
import generateMessage from './generateMessage.ts'
import telegramUtils from './api/telegram.js'
import { get_dexscreen_pair } from './api/dexscreen.ts'
import getDescriptionToken from './token/getDescriptionToken.ts'
import getInfoToken from './token/getInfoToken.ts'
import getScanToken from './token/getScanToken.ts'
import escape from './utils/escape.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="input_container">
   <input id="ca"/>
   <button id="btn_send">Send</button>
   <textarea id="console"></textarea>
  </div>
`

let ca_input = document.querySelector<HTMLInputElement>('#ca')
const btn_send = document.querySelector<HTMLButtonElement>('#btn_send')
const console_textarea = document.querySelector<HTMLTextAreaElement>('#console')

function setConsoleText(text: string) {
  console.log("set value")
  if (console_textarea) {
    console.log("set value1")

    console_textarea.value == text;
  }
}


btn_send?.addEventListener("click", async () => {
  const ca = ca_input?.value || ""
  if (ca === "") {
    setConsoleText("")
    return;
  }
  const tokensResponse: TokensResponse = await get_dexscreen_pair(ca);
  const pair: Pair | null = (tokensResponse.pairs == null || tokensResponse.pairs == undefined) ? null :
    tokensResponse.pairs.length > 0 ? tokensResponse.pairs[0] : null;
  let scanInfo: { name: string, value: string }[] = []
  if (pair != null) {
    scanInfo = [
      {
        name: "Dexscreener",
        value: `https://dexscreener.com/solana/${ca}`
      }
    ]
  }
  scanInfo = [...scanInfo, {
    name: "Pumpfun",
    value: `https://pump.fun/${ca}`
  }]

  const variables: { [key: string]: string } = {
    name: escape(pair?.baseToken.name || ""),
    symbol: escape(pair?.baseToken.symbol || ""),
    ca: ca_input?.value || "",
    sol_trading_bot: `https://t.me/SolTradingBot?start=${ca}-DRDAzntWc`,
    trojan_bot: `https://t.me/solana_trojanbot?start=r-shj_n3-${ca}`,
    meta_bot: `https://t.me/MetaSolanaBot?start=ESGFYCYF`,
    gmgn_bot: `https://t.me/GMGN_sol_bot?start=i_3gO5u7fq_c_${ca}`,
    caller_twitter_url: "https://x\\.com/lorecarbia",
    caller_telegram_url: "https://t\\.me/callerjerry",
    channel_url: "https://t\\.me/jerrysgamble",
    scan: getScanToken(scanInfo),
    description: getDescriptionToken(pair),
    info: getInfoToken(pair)
  }


  const value = generateMessage(variables)
  telegramUtils.send_message(value.telegram)
  telegramUtils.send_message(value.x)
})

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
