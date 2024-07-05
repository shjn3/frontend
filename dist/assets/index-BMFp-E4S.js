(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function g(e){let t=0;const n=o=>{t=o,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>n(t+1)),n(0)}const p={x:[`*\${name} \\- $\${symbol} \\(SOL\\)*

𝔹𝕦𝕪 𝕠𝕟 𝔻𝕀ℙ\\.
𝔻𝕐𝕆ℝ 𝔽𝕆ℝ 𝕊𝔸𝔽𝔼 𝔼ℕ𝕋ℝ𝕐\\.

CA \\- \${ca}

Join telegram channel \${channel_url}`],telegram:[`*🐭 Jerry's GAMBLE🎲*

*\${name} \\- $\${symbol} \\(SOL\\)*

_\${description}_

*✅ RENOUNCED*
*✅ FREEZE REVOKED*
*✅ BURN 100%*

📌 *\`\${ca}\`*
⚡️ *Buy quickly with [META BOT](\${meta_bot})*

\${info}\${scan}

📞 Don't forget to DM [Jerry](https://t\\.me/callerjerry) for the alpha call\\!`]},y={new_launch_word:["Just launching.","New launch.","New version."],normal:["Weed out what looks OK, may go up, may go down. Not financial advice. Do your own research and be safe","bought this dip too for obvious reasons if you know what I'm talking about","Good volume and chart is moving well.","Look entry good to buy. Not Financial advice. You should check again before investing","Be safe with entries. Good branding. DYOR FOR SAFE ENTRY.","Nice branding and ticker. Just going live, find safe entry. Degen.","The project seems to still be very hot. Take profits when you feel enough.","Good volume for now. Community forming. Team working hard to pump more. Leťs see what happen.","Good volume in buys. Community active. First time I work with this team. Dev has good plans to pump it. Leťs see where it goes","Chart seems good. Nice volume for now. Community forming. Team has been hard working. Find your safe entries , DYOR.","Hurry up to load your bags. Good volume in buys."]},i={pattern:p,description:y};function b(e){let t=i.pattern.x[0],n=i.pattern.telegram[0];for(const[o,r]of Object.entries(e)){const s=new RegExp(`\\$\\{${o}\\}`,"g");t=t.replace(s,r.replace(".","\\.")),n=n.replace(s,r)}return{x:t,telegram:n}}const w={api:"7279091842:AAHOnX-sT5dw4EeqzVYSrS2AXMRfrMC8DN4",chat_id:"-4220131171"},u={telegram_bot_config:w};async function _(e,t){try{const n=await fetch(e,t);return n.ok?await n.json():{}}catch(n){return console.log(n),{}}}async function v(e,t){await fetch(e,t)}const h={get:_,post:v};async function $(e){const t=new URLSearchParams({chat_id:u.telegram_bot_config.chat_id,text:e,parse_mode:"MarkdownV2"}),n=new URL(`https://api.telegram.org/bot${u.telegram_bot_config.api}/sendMessage?${t}`);return await h.get(n)}const d={send_message:$};async function k(e){return h.get(new URL(`https://api.dexscreener.com/latest/dex/tokens/${e}`))}function f(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}const E=function(e){let t="";return e!=null&&e.pairCreatedAt&&Date.now()-e.pairCreatedAt<=18e5&&(t+=i.description.new_launch_word[f(0,i.description.new_launch_word.length-1)]+" "),t+=`${i.description.normal[f(0,i.description.normal.length-1)]}`,t.split(".").join("\\.")};function L(e){return e.length==0?"":e[0].toUpperCase()+e.slice(1)}function M(e){if(e==null)return"";let t="",n=[];return e.info&&(e.info.websites!=null&&e.info.websites.length>0&&e.info.websites.forEach(o=>{n.push({name:o.label,value:o.url})}),e.info.socials!=null&&e.info.socials.length>0&&e.info.socials.forEach(o=>{n.push({name:o.type,value:o.url})}),t=n.map(o=>`📱 [${L(o.name)}](${o.value})`).join(" \\| "),t+=`
`),t}const O=function(e){return e.length==0?"":"📈 "+e.map(t=>`[${t.name}](${t.value})`).join(" \\| ")};document.querySelector("#app").innerHTML=`
  <div id="input_container">
   <input id="ca"/>
   <button id="btn_send">Send</button>
   <textarea id="console"></textarea>
  </div>
`;let a=document.querySelector("#ca");const c=document.querySelector("#btn_send"),m=document.querySelector("#console");function S(e){console.log("set value"),m&&(console.log("set value1"),m.value==e)}c==null||c.addEventListener("click",async()=>{const e=(a==null?void 0:a.value)||"";if(e===""){S("");return}const t=await k(e),n=t.pairs==null||t.pairs==null?null:t.pairs.length>0?t.pairs[0]:null;let o=[];n!=null&&(o=[{name:"Dexscreener",value:`https://dexscreener.com/solana/${e}`},{name:"Birdeye",value:`https://birdeye.so/token/${e}`}]),o=[...o,{name:"Photon",value:`https://photon-sol.tinyastro.io/en/r/@jerrycaller/${e}`},{name:"PUMP\\.fun",value:`https://pump.fun/${e}`}];const r={name:(n==null?void 0:n.baseToken.name)||"",symbol:(n==null?void 0:n.baseToken.symbol)||"",ca:(a==null?void 0:a.value)||"",sol_trading_bot:`https://t.me/SolTradingBot?start=${e}-DRDAzntWc`,trojan_bot:`https://t.me/solana_trojanbot?start=r-shj_n3-${e}`,meta_bot:"https://t.me/MetaSolanaBot?start=ESGFYCYF",caller_twitter_url:"https://x.com/lorecarbia",caller_telegram_url:"https://t.me/callerjerry",channel_url:"https://t.me/jerrysgamble",scan:O(o),description:E(n),info:M(n)},s=b(r);d.send_message(s.telegram),d.send_message(s.x)});g(document.querySelector("#counter"));
