const {chromium}=require('playwright');const fs=require('fs');
const cards=JSON.parse(fs.readFileSync(process.argv[2]));const out=process.argv[3];
const css=`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500&display=swap');
*{margin:0;box-sizing:border-box}html,body{width:1080px;height:1350px}
body{background:radial-gradient(ellipse 70% 55% at 50% 0%,rgba(232,196,140,.30),rgba(232,196,140,0) 70%),radial-gradient(ellipse at 50% 60%,#1b2435 0%,#0e131d 60%,#080b11 100%);color:#f1e7d6;font-family:Inter,sans-serif;position:relative;overflow:hidden}
.beam{position:absolute;left:50%;top:-40px;width:900px;height:900px;transform:translateX(-50%);background:conic-gradient(from 160deg at 50% 0%,transparent 0deg,rgba(240,210,160,.10) 12deg,rgba(240,210,160,.16) 20deg,rgba(240,210,160,.10) 28deg,transparent 40deg);filter:blur(18px)}
.grain{position:absolute;inset:0;opacity:.16;mix-blend-mode:overlay}
.wrap{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 110px;text-align:center}
.rule{width:64px;height:2px;background:#c9a66b;margin:0 auto 54px}
h1{font-family:'Cormorant Garamond',serif;font-weight:600;font-size:FS;line-height:1.14;letter-spacing:-.5px;text-wrap:balance}
.sub{text-wrap:balance;margin-top:48px;font-size:34px;line-height:1.4;color:#c9a66b;font-weight:500}
ol{list-style:none;padding:0;margin-top:56px;text-align:left}
ol li{font-family:'Cormorant Garamond',serif;font-size:52px;line-height:1.55;color:#f1e7d6}
ol li span{color:#c9a66b;font-family:Inter;font-size:30px;margin-right:26px;vertical-align:middle}
.foot{position:absolute;bottom:84px;left:0;right:0;text-align:center;font-size:21px;letter-spacing:2px;text-transform:uppercase;color:rgba(241,231,214,.72)}
.sig{position:absolute;bottom:38px;left:0;right:0;text-align:center;font-size:28px;color:rgba(201,166,107,.9);font-family:'Cormorant Garamond',serif;font-style:italic;letter-spacing:1px}`;
const grain=`<svg class="grain" viewBox="0 0 1080 1350"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>`;
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1350},deviceScaleFactor:1});
for(const c of cards){const len=c.head.replace(/<br>/g,' ').length;const fs_=c.list?'78px':len<50?'96px':len<75?'84px':'72px';
const body=c.list?`<ol>${c.list.map((x,i)=>`<li><span>${i+1}</span>${x}</li>`).join('')}</ol>`:`<div class="sub">${c.sub}</div>`;
const html=`<html><head><style>${css.replace('FS',fs_)}</style></head><body><div class="beam"></div>${grain}<div class="wrap"><div class="rule"></div><h1>${c.head}</h1>${body}</div><div class="foot">Lost in the Movie &nbsp;|&nbsp; free book at mindmatterspirituality.com</div><div class="sig">Rameen Zereh</div></body></html>`;
await p.setContent(html,{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
await p.screenshot({path:`${out}/${c.id}.jpg`,type:'jpeg',quality:88});}
await b.close();})();
