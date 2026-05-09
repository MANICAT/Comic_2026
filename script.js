document.addEventListener("DOMContentLoaded", () => {

const sideMenu = document.getElementById("sideMenu");
const hamburger = document.querySelector(".hamburger");
const overlay = document.getElementById("sideOverlay");
const closeBtn = document.getElementById("closeMenu");

/* =========================
   HAMBURGER + SIDE MENU
========================= */

if (hamburger){

hamburger.addEventListener("click", () => {

sideMenu.classList.toggle("active");
overlay.classList.toggle("active");
hamburger.classList.toggle("open");

});

}

if (overlay){

overlay.addEventListener("click", () => {

sideMenu.classList.remove("active");
overlay.classList.remove("active");
hamburger.classList.remove("open");

});

}

if (closeBtn){

closeBtn.addEventListener("click", () => {

sideMenu.classList.remove("active");
overlay.classList.remove("active");
hamburger.classList.remove("open");

});

}

/* =========================
   MENU SMOOTH SCROLL
========================= */

document.querySelectorAll('.side-menu a').forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior:"smooth"
});

}

sideMenu.classList.remove("active");
overlay.classList.remove("active");
hamburger.classList.remove("open");

});

});

/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load",()=>{

const loader=document.getElementById("loading");

setTimeout(()=>{

loader.classList.add("fade-out");

setTimeout(()=>{
loader.style.display="none";
},900);

},2300);

});

/* =========================
   SCROLL REVEAL
========================= */

const reveals=document.querySelectorAll(".reveal");

function reveal(){

reveals.forEach(el=>{

const windowHeight=window.innerHeight;
const top=el.getBoundingClientRect().top;

if(top<windowHeight-90){
el.classList.add("active");
}

});

}

window.addEventListener("scroll",reveal);
reveal();

/* =========================
   CURSOR ELECTRIC JUNGLE
========================= */

const cursor=document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

/* cursor pulse */
setInterval(()=>{
cursor.style.transform="scale(1.5)";
setTimeout(()=>{
cursor.style.transform="scale(1)";
},200);
},900);

/* =========================
   HERO PARALLAX
========================= */

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/55;
const y=(window.innerHeight/2-e.clientY)/55;

hero.style.transform=`translate(${x}px,${y}px)`;

});

/* =========================
   CLICK SOUND
========================= */

const sound=document.getElementById("clickSound");

document.querySelectorAll("a,button,.hamburger,.close-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

sound.currentTime=0;
sound.play().catch(()=>{});

});

});

/* =========================
   COUNTDOWN
========================= */

const targetDate=new Date('September 1, 2026 00:00:00').getTime();

const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minutesEl=document.getElementById('minutes');
const secondsEl=document.getElementById('seconds');

setInterval(()=>{

const now=new Date().getTime();
const distance=targetDate-now;

const days=Math.floor(distance/(1000*60*60*24));
const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes=Math.floor((distance%(1000*60*60))/(1000*60));
const seconds=Math.floor((distance%(1000*60))/1000);

if(daysEl) daysEl.textContent=days;
if(hoursEl) hoursEl.textContent=hours;
if(minutesEl) minutesEl.textContent=minutes;
if(secondsEl) secondsEl.textContent=seconds;

},1000);

/* =========================
   FLOATING DIGITAL LEAVES
========================= */

for(let i=0;i<20;i++){

const leaf=document.createElement("div");
leaf.classList.add("digital-leaf");

leaf.style.left=Math.random()*100+"vw";
leaf.style.animationDuration=(8+Math.random()*8)+"s";
leaf.style.animationDelay=(Math.random()*5)+"s";
leaf.style.opacity=Math.random();

document.body.appendChild(leaf);

}

/* =========================
   KATEGORI CARD GLOW FOLLOW
========================= */

document.querySelectorAll(".kategori-card,.card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();
const x=e.clientX-rect.left;
const y=e.clientY-rect.top;

card.style.background=`radial-gradient(circle at ${x}px ${y}px, rgba(0,255,140,0.18), rgba(0,255,140,0.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(0,255,255,0.08)";

});

});

});

/* CYBER FLOATING ORBS */

for(let i=0;i<30;i++){

const orb=document.createElement("div");

orb.style.position="fixed";
orb.style.width=2+Math.random()*5+"px";
orb.style.height=orb.style.width;

orb.style.borderRadius="50%";

orb.style.background=Math.random()>0.5
? "#00ff99"
: "#00ddff";

orb.style.boxShadow="0 0 15px currentColor";

orb.style.left=Math.random()*100+"vw";
orb.style.top=Math.random()*100+"vh";

orb.style.opacity=Math.random();

orb.style.zIndex="-15";

orb.style.pointerEvents="none";

orb.style.animation=`
floatOrb ${8+Math.random()*12}s linear infinite
`;

document.body.appendChild(orb);

}

/* FLOAT ANIMATION */

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatOrb{

0%{
transform:translateY(0) translateX(0);
}

50%{
transform:translateY(-120px) translateX(60px);
}

100%{
transform:translateY(-240px) translateX(-60px);
opacity:0;
}

}

`;

document.head.appendChild(style);