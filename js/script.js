const letter = `

Hai LiuL...

Kalau hari ini terasa berat,
istirahatlah sejenak.

Namun jangan menyerah.

Kamu sudah melewati banyak hal
yang dulu terasa mustahil.

Setiap air mata,
setiap lelah,
dan setiap perjuanganmu...

sedang membentuk versi terbaik
dari dirimu.

💙 Kamu lebih kuat dari yang kamu kira.

💙 Setiap langkah kecil tetap berarti.

💙 Masa depan masih menyimpan
banyak kebahagiaan untukmu.

Tetap semangat LiuL.
`;

let index = 0;

function typeWriter(){

if(index < letter.length){

document.getElementById("letter")
.innerHTML += letter.charAt(index);

index++;

setTimeout(typeWriter,25);

}

}

typeWriter();

setInterval(()=>{

document.getElementById("clock")
.innerHTML =
new Date().toLocaleString("id-ID");

},1000);

for(let i=0;i<120;i++){

let star=document.createElement("div");

star.className="star";

let size=Math.random()*3+1;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=
Math.random()*100+"%";

star.style.animationDuration=
(Math.random()*8+5)+"s";

document.body.appendChild(star);

}

const images=[

"https://picsum.photos/id/1015/1200/700",

"https://picsum.photos/id/1016/1200/700",

"https://picsum.photos/id/1020/1200/700"

];

const captions=[

"Terus melangkah walau pelan 💙",

"Kamu lebih kuat dari yang kamu kira 💙",

"Besok membawa harapan baru 💙"

];

let slide=0;

setInterval(()=>{

slide=(slide+1)%images.length;

document.getElementById("slideImage")
.src=images[slide];

document.getElementById("caption")
.innerHTML=captions[slide];

},5000);

function showPopup(text){

document.getElementById("popup")
.style.display="block";

document.getElementById("popupText")
.innerHTML=text;

}

function closePopup(){

document.getElementById("popup")
.style.display="none";

}

function secretMessage(){

showPopup(
"Seseorang percaya bahwa kamu mampu melewati semuanya. 💙"
);

}

function virtualHug(){

showPopup(
"⊂(･ω･*⊂) Peluk virtual untuk LiuL 💙"
);

}

function motivate(){

const quotes=[

"💙 Jangan menyerah hari ini.",

"💙 Kamu luar biasa.",

"💙 Tetap bertahan.",

"💙 Kamu pasti bisa."

];

showPopup(
quotes[
Math.floor(
Math.random()*quotes.length
)
]
);

}

function fireworks(){

for(let i=0;i<50;i++){

let dot=document.createElement("div");

dot.style.position="fixed";

dot.style.width="8px";

dot.style.height="8px";

dot.style.background="#00cfff";

dot.style.left=
Math.random()*100+"vw";

dot.style.top=
Math.random()*100+"vh";

document.body.appendChild(dot);

setTimeout(()=>{
dot.remove();
},1000);

}

}

function sendMessage(){

const input=
document.getElementById("chatInput");

const chat=
document.getElementById("chatLog");

if(input.value==="") return;

chat.innerHTML+=`
<p>👤 ${input.value}</p>
<p>🤖 LiuL, kamu lebih kuat dari yang kamu kira. Tetap semangat ya 💙</p>
`;

input.value="";

chat.scrollTop=
chat.scrollHeight;

}