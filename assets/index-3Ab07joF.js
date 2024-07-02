(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function g(e){let t=0;const n=r=>{t=r,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>n(t+1)),n(0)}const h={x:[`*\${name} \\- $\${symbol}*

𝔹𝕦𝕪 𝕠𝕟 𝔻𝕀ℙ\\.
𝔻𝕐𝕆ℝ 𝔽𝕆ℝ 𝕊𝔸𝔽𝔼 𝔼ℕ𝕋ℝ𝕐\\.

CA \\- \${ca}

Dexscrenner \${dex_url}

Join telegram channel \${channel_url}`],telegram:[`*🐭Jerry's GAMBLE🎲*

🪙 *\${name} \\- $\${symbol}*

_\${description}_

*✔️ RENOUNCED*
*✔️ FREEZE REVOKED*
*✔️ BURN 100%*

📌 *\`\${ca}\`*
⚡️ *Buy quickly with [META BOT](\${meta_bot}) \\| [SOL TRADING BOT](\${sol_trading_bot})*
\${info}
📈 [Dexscreener](\${dex_url}) \\| [Birdeye](\${bireye_url}) \\| [Photon](\${photon_url})`]},y={new_launch_word:["Just launching.","New launch.","New version."],normal:["Weed out what looks OK, may go up, may go down. Not financial advice. Do your own research and be safe","bought this dip too for obvious reasons if you know what I'm talking about","Good volume and chart is moving well.","Look entry good to buy. Not Financial advice. You should check again before investing","Be safe with entries. Good branding. DYOR FOR SAFE ENTRY.","Nice branding and ticker. Just going live, find safe entry. Degen.","The project seems to still be very hot. Take profits when you feel enough.","Good volume for now. Community forming. Team working hard to pump more. Leťs see what happen.","Good volume in buys. Community active. First time I work with this team. Dev has good plans to pump it. Leťs see where it goes","Chart seems good. Nice volume for now. Community forming. Team has been hard working. Find your safe entries , DYOR.","Hurry up to load your bags. Good volume in buys."]},i={pattern:h,description:y};function _(e){let t=i.pattern.x[0],n=i.pattern.telegram[0];for(const[r,o]of Object.entries(e)){const s=new RegExp(`\\$\\{${r}\\}`,"g");t=t.replace(s,o.replace(".","\\.")),n=n.replace(s,o)}return{x:t,telegram:n}}const b={api:"7279091842:AAHOnX-sT5dw4EeqzVYSrS2AXMRfrMC8DN4",chat_id:"-4220131171"},u={telegram_bot_config:b};async function w(e,t){try{const n=await fetch(e,t);return n.ok?await n.json():{}}catch(n){return console.log(n),{}}}async function v(e,t){await fetch(e,t)}const p={get:w,post:v};async function $(e){const t=new URLSearchParams({chat_id:u.telegram_bot_config.chat_id,text:e,parse_mode:"MarkdownV2"}),n=new URL(`https://api.telegram.org/bot${u.telegram_bot_config.api}/sendMessage?${t}`);return await p.get(n)}const d={send_message:$};async function x(e){return p.get(new URL(`https://api.dexscreener.com/latest/dex/tokens/${e}`))}function f(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}const E=function(e){let t="";return e.pairCreatedAt&&(Date.now()-e.pairCreatedAt<=18e5&&(t+=i.description.new_launch_word[f(0,i.description.new_launch_word.length-1)]+" "),t+=i.description.normal[f(0,i.description.normal.length-1)]),t.split(".").join("\\.")};function k(e){return e.length==0?"":e[0].toUpperCase()+e.slice(1)}function T(e){let t="",n=[];return e.info&&(e.info.websites!=null&&e.info.websites.length>0&&e.info.websites.forEach(r=>{n.push({name:r.label,value:r.url})}),e.info.socials!=null&&e.info.socials.length>0&&e.info.socials.forEach(r=>{n.push({name:r.type,value:r.url})}),t=n.map(r=>`📈 [${k(r.name)}](${r.value})`).join(" \\| ")),t}document.querySelector("#app").innerHTML=`
  <div id="input_container">
   <input id="ca"/>
   <button id="btn_send">Send</button>
   <textarea id="console"></textarea>
  </div>
`;let a=document.querySelector("#ca");const l=document.querySelector("#btn_send"),m=document.querySelector("#console");function L(e){console.log("set value"),m&&(console.log("set value1"),m.value==e)}l==null||l.addEventListener("click",async()=>{const e=(a==null?void 0:a.value)||"";if(e===""){L("");return}const t=await x(e);if(t.pairs==null||t.pairs==null||t.pairs.length==0)return;const n=t.pairs[0],r={name:n.baseToken.name,symbol:n.baseToken.symbol,ca:(a==null?void 0:a.value)||"",dex_url:`https://dexscreener.com/solana/${e}`,photon_url:`https://photon-sol.tinyastro.io/en/r/@jerrycaller/${e}`,bireye_url:`https://birdeye.so/token/${e}`,sol_trading_bot:`https://t.me/SolTradingBot?start=${e}-DRDAzntWc`,trojan_bot:`https://t.me/solana_trojanbot?start=r-shj_n3-${e}`,meta_bot:"https://t.me/MetaSolanaBot?start=ESGFYCYF",caller_twitter_url:"https://x.com/lorecarbia",caller_telegram_url:"https://t.me/callerjerry",channel_url:"https://t.me/jerrysgamble",description:E(n),info:T(n)},o=_(r);d.send_message(o.telegram),d.send_message(o.x)});g(document.querySelector("#counter"));
