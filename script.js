javascript:(function(){
if(document.getElementById('_akg_overlay'))return;
var h=location.host;
var style=document.createElement('style');
style.textContent='@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;600&display=swap");#_akg_overlay{position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:2147483647;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(6px);}#_akg_box{background:linear-gradient(135deg,#0d0d1a,#111128);border:1px solid #6c47ff44;border-radius:20px;padding:28px 24px 20px;width:320px;max-width:94vw;box-shadow:0 0 60px #6c47ff22,0 0 0 1px #6c47ff22;text-align:center;font-family:"Rajdhani",sans-serif;}#_akg_title{font-family:"Orbitron",sans-serif;font-size:13px;font-weight:900;letter-spacing:3px;color:#6c47ff;text-transform:uppercase;margin-bottom:2px;}#_akg_sub{font-size:12px;color:#555;letter-spacing:1px;margin-bottom:20px;}#_akg_inp_wrap{position:relative;margin-bottom:14px;}#_akg_inp{width:100%;background:#0a0a18;border:1.5px solid #6c47ff55;border-radius:10px;padding:12px 16px;color:#fff;font-size:16px;font-family:"Orbitron",sans-serif;letter-spacing:4px;text-align:center;outline:none;box-sizing:border-box;transition:border .3s;}#_akg_inp:focus{border-color:#6c47ff;}#_akg_inp::placeholder{color:#333;letter-spacing:2px;font-size:13px;}#_akg_btn{width:100%;background:linear-gradient(135deg,#6c47ff,#a855f7);border:none;border-radius:10px;padding:13px;color:#fff;font-family:"Orbitron",sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;cursor:pointer;transition:opacity .2s;margin-bottom:16px;}#_akg_btn:hover{opacity:.85;}#_akg_btn:disabled{opacity:.4;cursor:not-allowed;}#_akg_err{color:#f87171;font-size:12px;margin-bottom:10px;min-height:16px;letter-spacing:1px;}#_akg_circle_wrap{display:none;flex-direction:column;align-items:center;margin-bottom:16px;}#_akg_status{font-size:12px;color:#888;letter-spacing:1px;margin-top:12px;}#_akg_tg{display:flex;align-items:center;justify-content:center;gap:6px;color:#555;font-size:11px;text-decoration:none;letter-spacing:1px;transition:color .2s;margin-top:4px;}#_akg_tg:hover{color:#6c47ff;}#_akg_close{position:absolute;top:14px;right:16px;color:#333;font-size:18px;cursor:pointer;line-height:1;}#_akg_close:hover{color:#888;}';
document.head.appendChild(style);
var ov=document.createElement('div');
ov.id='_akg_overlay';
ov.innerHTML='<div id="_akg_box" style="position:relative;background:linear-gradient(135deg,#0a0a1a 0%,#1a0a2e 50%,#0d0d2b 100%);border:2px solid #6c47ff;box-shadow:0 0 30px #6c47ff55,0 0 60px #ff00ff33,inset 0 0 30px #6c47ff22;border-radius:24px;padding:24px 20px;text-align:center;max-width:440px;width:100%;"><span id="_akg_close" style="position:absolute;top:12px;right:16px;font-size:20px;color:#ff6b9d;cursor:pointer;background:rgba(255,255,255,0.05);width:34px;height:34px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:1px solid #ff6b9d55;transition:0.3s;z-index:10;">\u2715<\/span><div id="_akg_title" style="font-size:26px;font-weight:900;letter-spacing:2px;background:linear-gradient(135deg,#ff6b9d,#c084fc,#6c47ff,#00d4ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px;filter:drop-shadow(0 0 15px #c084fc);text-transform:uppercase;">\u2694 SHADOW GAMERZ OFFICIAL<\/div><div id="_akg_sub" style="font-size:12px;letter-spacing:4px;color:#c084fc;margin-bottom:20px;text-transform:uppercase;font-weight:600;">POWER BY SHADOW GAMERZ<\/div><div id="_akg_inp_wrap" style="margin:0 0 6px;"><input id="_akg_inp" type="password" placeholder="ENTER ACCESS KEY" maxlength="20" style="width:100%;padding:12px 16px;background:rgba(0,0,0,0.5);border:2px solid #6c47ff66;border-radius:30px;color:#fff;font-size:14px;text-align:center;letter-spacing:2px;outline:none;transition:0.3s;"/><\/div><div id="_akg_err" style="color:#ff6b9d;font-size:12px;min-height:20px;margin:4px 0;font-weight:500;"><\/div><button id="_akg_btn" style="width:100%;padding:14px;background:linear-gradient(135deg,#6c47ff,#ff00ff);border:none;border-radius:30px;color:#fff;font-size:16px;font-weight:800;letter-spacing:2px;cursor:pointer;box-shadow:0 8px 25px #6c47ff88;transition:0.3s;text-transform:uppercase;margin-bottom:16px;">UNLOCK & GENERATE<\/button><div id="_akg_circle_wrap" style="margin:8px 0;"><svg width="130" height="130" viewBox="0 0 140 140"><circle cx="70" cy="70" r="60" fill="#0d0d1a" stroke="#1a1a3a" stroke-width="8"\/><circle id="_akg_arc" cx="70" cy="70" r="60" fill="none" stroke="url(#gradArc)" stroke-width="8" stroke-dasharray="377" stroke-dashoffset="0" stroke-linecap="round" transform="rotate(-90 70 70)"\/><defs><linearGradient id="gradArc" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#ff6b9d"\/><stop offset="50%" stop-color="#6c47ff"\/><stop offset="100%" stop-color="#00d4ff"\/><\/linearGradient><\/defs><text id="_akg_num" x="70" y="78" text-anchor="middle" fill="#fff" font-size="42" font-weight="bold" font-family="Orbitron,sans-serif">12<\/text><\/svg><div id="_akg_status" style="color:#c084fc;font-size:13px;margin-top:8px;font-weight:600;letter-spacing:1px;">\u23f3 Waiting...<\/div><\/div><div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:16px;"><a href="https://youtu.be/ubfpZk75J64" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#ff0000,#cc0000);color:#fff;padding:10px 16px;border-radius:25px;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:1px;box-shadow:0 4px 15px #ff000066;transition:0.3s;border:1px solid #ff4444;"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"\/><\/svg>HOW TO BYPASS KEY<\/a><a href="https://t.me/ShadowGamerzOfficial" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#0088cc,#005f8c);color:#fff;padding:10px 16px;border-radius:25px;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:1px;box-shadow:0 4px 15px #0088cc66;transition:0.3s;border:1px solid #00aaff;"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.26l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.3z"\/><\/svg>MAIN TG<\/a><a href="https://t.me/ShadowGMRFF" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#6c47ff,#4a2fd9);color:#fff;padding:10px 16px;border-radius:25px;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:1px;box-shadow:0 4px 15px #6c47ff66;transition:0.3s;border:1px solid #8b6fff;"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 14.26l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.3z"\/><\/svg>TG CONTACT<\/a><a href="https://www.youtube.com/@TheShadowGamerFF" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#ff0000,#990000);color:#fff;padding:10px 16px;border-radius:25px;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:1px;box-shadow:0 4px 15px #ff000066;transition:0.3s;border:1px solid #ff4444;"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"\/><\/svg>YOUTUBE<\/a><a href="https://instagram.com/Itx_Honey_Editor" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045);color:#fff;padding:10px 16px;border-radius:25px;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:1px;box-shadow:0 4px 15px #e1306c66;transition:0.3s;border:1px solid #ff6b9d;"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"\/><\/svg>INSTA<\/a><\/div><\/div>';
document.body.appendChild(ov);
var inp=document.getElementById('_akg_inp');
var btn=document.getElementById('_akg_btn');
var err=document.getElementById('_akg_err');
var circleWrap=document.getElementById('_akg_circle_wrap');
var arc=document.getElementById('_akg_arc');
var numEl=document.getElementById('_akg_num');
var statusEl=document.getElementById('_akg_status');
document.getElementById('_akg_close').onclick=function(){ov.remove();};
ov.onclick=function(e){if(e.target===ov)ov.remove();};

function showCircle(status){
circleWrap.style.display='flex';
btn.style.display='none';
inp.style.display='none';
var wrap=document.getElementById('_akg_inp_wrap');
if(wrap)wrap.style.display='none';
if(err)err.style.display='none';
statusEl.textContent=status||'\u23f3 Processing...';
}

function startCountdown(onDone){
showCircle('\u23f3 Please wait...');
var s=35;
var total=377;
numEl.textContent=s;
if(arc)arc.setAttribute('stroke','#6c47ff');
if(arc)arc.setAttribute('stroke-dashoffset','0');
var iv=setInterval(function(){
s--;
numEl.textContent=s;
if(arc)arc.setAttribute('stroke-dashoffset',(total/35)*(35-s));
if(s<=0){
clearInterval(iv);
numEl.textContent='\u26a1';
if(arc)arc.setAttribute('stroke','#4ade80');
statusEl.textContent='\ud83d\ude80 Bypassing...';
onDone();
}
},1000);
}

function bypassSite(domain,cb){
var proto=domain==='rodaemotor.com'?'http':'https';
fetch(proto+'://'+domain+'/api/session-info',{credentials:'include',headers:{'Accept':'*/*'}})
.then(function(r){return r.json();})
.then(function(d){
if(!d.sessionToken){statusEl.textContent='\u274c No session found!';return;}
statusEl.textContent='\ud83d\udd11 Fetching key...';
var progress=(d.totalStage||0)+1;
var inp2=encodeURIComponent(JSON.stringify({"0":{"json":{"token":d.sessionToken,"progress":progress,"stageId":d.stageId}}}));
fetch(proto+'://'+domain+'/api/trpc/linkSession.nextStage?batch=1&input='+inp2,{
credentials:'include',
headers:{'trpc-accept':'application/jsonl','x-trpc-source':'nextjs-react','Accept':'*/*'}
}).then(function(r){return r.text();})
.then(function(t){
var dest=null,url=null;
t.trim().split('\n').forEach(function(l){
try{
var j=JSON.parse(l);
if(j&&j.json&&Array.isArray(j.json)&&j.json[2]){
var dd=j.json[2][0][0];
if(dd){if(dd.destinationLink)dest=dd.destinationLink;if(dd.url)url=dd.url;}
}
}catch(e){}
});
cb(dest,url);
});
})
.catch(function(e){statusEl.textContent='\u274c Error: '+e.message;});
}

function runFullBypass(){
startCountdown(function(){
if(h.includes('tarviral.com')){
bypassSite('tarviral.com',function(dest){
if(dest){
statusEl.textContent='\u2705 Done! Redirecting to key...';
setTimeout(function(){ov.remove();window.location.href=dest;},800);
}else{statusEl.textContent='\u274c Bypass failed! Try again.';}
});
}else if(h.includes('rodaemotor.com')){
bypassSite('rodaemotor.com',function(dest,url){
var next=dest||url;
if(next){
statusEl.textContent='\u2705 Jumping to next stage...';
setTimeout(function(){ov.remove();window.location.href=next;},800);
}else{statusEl.textContent='\u274c Failed! Try again.';}
});
}
});
}

btn.onclick=function(){
var val=inp.value.trim().toUpperCase();
if(val!=='@SHADOWGMRFF'){err.textContent='\u274c Wrong key! Access denied.';inp.value='';return;}
err.textContent='';
if(h.includes('tarviral.com')||h.includes('rodaemotor.com')){
runFullBypass();
}else if(h.includes('aincradmods.com')){
ov.remove();
fetch('https://aincradmods.com/getkey.data',{method:'POST',credentials:'include',headers:{'content-type':'application/x-www-form-urlencoded;charset=UTF-8','accept':'*/*','origin':'https://aincradmods.com','referer':'https://aincradmods.com/getkey','x-requested-with':'mark.via.gp'}})
.then(function(){window.location.href='https://alpharede.com/aincrad2';})
.catch(function(){window.location.href='https://alpharede.com/aincrad2';});
}else if(h.includes('alpharede.com')){
ov.remove();
window.location.href='https://alpharede.com/aincrad2';
}else{
err.textContent='\u26a0 Open aincradmods.com/getkey first!';
}
};
inp.addEventListener('keydown',function(e){if(e.key==='Enter')btn.click();});
inp.focus();
})();
