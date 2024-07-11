(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function h(e){let t=0;const n=r=>{t=r,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>n(t+1)),n(0)}const y={x:[`*\${name} \\- $\${symbol} \\(SOL\\)*

𝔹𝕦𝕪 𝕠𝕟 𝔻𝕀ℙ\\.
𝔻𝕐𝕆ℝ 𝔽𝕆ℝ 𝕊𝔸𝔽𝔼 𝔼ℕ𝕋ℝ𝕐\\.

CA \\- \${ca}

\${info}\${scan}

Join telegram channel \${channel_url}`],telegram:[`*🐭 Jerry's GAMBLE🎲*

*\${name} \\- $\${symbol} \\(SOL\\)*

_\${description}_

📌 *\`\${ca}\`*
⚡️ *Buy quickly with [META BOT](\${meta_bot})*

\${info}\${scan}

📞 Don't forget to DM [Jerry](https://t\\.me/callerjerry) for the alpha call\\!`]},_={new_launch_word:["Just launching.","New launch.","New version."],normal:["Weed out what looks OK, may go up, may go down. Not financial advice. Do your own research and be safe","bought this dip too for obvious reasons if you know what I'm talking about","Good volume and chart is moving well.","Look entry good to buy. Not Financial advice. You should check again before investing","Be safe with entries. Good branding. DYOR FOR SAFE ENTRY.","Nice branding and ticker. Just going live, find safe entry. Degen.","The project seems to still be very hot. Take profits when you feel enough.","Good volume for now. Community forming. Team working hard to pump more. Leťs see what happen.","Good volume in buys. Community active. First time I work with this team. Dev has good plans to pump it. Leťs see where it goes","Chart seems good. Nice volume for now. Community forming. Team has been hard working. Find your safe entries , DYOR.","Hurry up to load your bags. Good volume in buys."]},c={pattern:y,description:_};function b(e){let t=c.pattern.x[0],n=c.pattern.telegram[0];for(const[r,o]of Object.entries(e)){const s=new RegExp(`\\$\\{${r}\\}`,"g");t=t.replace(s,o),n=n.replace(s,o)}return{x:t,telegram:n}}const w={api:"7279091842:AAHOnX-sT5dw4EeqzVYSrS2AXMRfrMC8DN4",chat_id:"-4220131171"},d={telegram_bot_config:w};async function v(e,t){try{const n=await fetch(e,t);return n.ok?await n.json():{}}catch(n){return console.log(n),{}}}async function $(e,t){await fetch(e,t)}const p={get:v,post:$};async function k(e){const t=new URLSearchParams({chat_id:d.telegram_bot_config.chat_id,text:e,parse_mode:"MarkdownV2"}),n=new URL(`https://api.telegram.org/bot${d.telegram_bot_config.api}/sendMessage?${t}`);return await p.get(n)}const m={send_message:k};async function L(e){return p.get(new URL(`https://api.dexscreener.com/latest/dex/tokens/${e}`))}function f(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}const T=function(e){let t="";return e!=null&&e.pairCreatedAt&&Date.now()-e.pairCreatedAt<=18e5&&(t+=c.description.new_launch_word[f(0,c.description.new_launch_word.length-1)]+" "),t+=`${c.description.normal[f(0,c.description.normal.length-1)]}`,t.split(".").join("\\.")},i=e=>{const t=new RegExp(/[().]/g);return e.replace(t,r=>"\\"+r)};function M(e){if(e==null)return"";let t="",n=[];if(e.info){e.info.socials!=null&&e.info.socials.length>0&&e.info.socials.forEach(o=>{n.push({name:o.type,value:o.url})});const r=n.find(o=>o.name=="telegram");r&&(t=`TG: ${i(r.value)}
`)}return t}const S=function(e){return e.length==0?"":e.map(t=>`${t.name}: ${i(t.value)}`).join(` 
`)};document.querySelector("#app").innerHTML=`
  <div id="input_container">
   <input id="ca"/>
   <button id="btn_send">Send</button>
   <textarea id="console"></textarea>
  </div>
`;let a=document.querySelector("#ca");const u=document.querySelector("#btn_send"),g=document.querySelector("#console");function O(e){console.log("set value"),g&&(console.log("set value1"),g.value==e)}u==null||u.addEventListener("click",async()=>{const e=(a==null?void 0:a.value)||"";if(e===""){O("");return}const t=await L(e),n=t.pairs==null||t.pairs==null?null:t.pairs.length>0?t.pairs[0]:null;let r=[];n!=null&&(r=[{name:"Dexscreener",value:`https://dexscreener.com/solana/${e}`}]),r=[...r,{name:"Pumpfun",value:`https://pump.fun/${e}`}];const o={name:i((n==null?void 0:n.baseToken.name)||""),symbol:i((n==null?void 0:n.baseToken.symbol)||""),ca:(a==null?void 0:a.value)||"",sol_trading_bot:`https://t.me/SolTradingBot?start=${e}-DRDAzntWc`,trojan_bot:`https://t.me/solana_trojanbot?start=r-shj_n3-${e}`,meta_bot:"https://t.me/MetaSolanaBot?start=ESGFYCYF",gmgn_bot:`https://t.me/GMGN_sol_bot?start=i_3gO5u7fq_c_${e}`,caller_twitter_url:"https://x\\.com/lorecarbia",caller_telegram_url:"https://t\\.me/callerjerry",channel_url:"https://t\\.me/jerrysgamble",scan:S(r),description:T(n),info:M(n)},s=b(o);m.send_message(s.telegram),m.send_message(s.x)});h(document.querySelector("#counter"));
