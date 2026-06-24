const images = [

"images/foto1.jpg",
"images/foto2.jpg",
"images/foto3.jpg",
"images/foto4.jpg",
"images/foto5.jpg"

];

const captions = [

"💙 Kamu lebih kuat dari yang kamu kira.",

"🌷 Senyum kecilmu adalah bukti bahwa kamu selalu mampu bangkit.",

"✨ Akan selalu ada orang yang peduli padamu.",

"🌻 Tetaplah menjadi dirimu yang ceria.",

"🤍 Masih banyak kebahagiaan yang menunggumu."

];

let slide = 0;

setInterval(() => {

slide++;

if(slide >= images.length){

slide = 0;

}

document.getElementById("slideImage").src =
images[slide];

document.getElementById("caption").innerHTML =
captions[slide];

},5000);

const letter = `

Hai LiuL...

Kalau hari ini terasa berat,
istirahatlah sejenak.

Namun jangan menyerah.

Karena kamu jauh lebih kuat
daripada yang kamu kira.

💙 Tetap semangat.

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

document
.getElementById("openLetter")
.onclick = ()=>{

document
.getElementById("letterBox")
.style.display="block";

typeWriter();

};

setInterval(()=>{

document.getElementById("clock")
.innerHTML =
new Date().toLocaleString("id-ID");

},1000);

const player =
document.getElementById("player");

document
.getElementById("playlist")
.onchange = ()=>{

player.src =
document
.getElementById("playlist")
.value;

player.play();

};

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
"💙 Jangan menyerah. Aku percaya kamu bisa melewati semuanya."
);

}

function virtualHug(){

showPopup(
"⊂(･ω･*⊂) Peluk virtual untuk LiuL 💙"
);

}

function motivate(){

const quotes=[

"💙 Kamu kuat.",

"🌈 Hari yang sulit akan berlalu.",

"✨ Tetap melangkah walau pelan.",

"💙 Kamu hebat."

];

showPopup(
quotes[
Math.floor(
Math.random()*quotes.length
)
]
);

}

const botReplies=[

"💙 Kamu hebat.",

"🌷 Jangan menyerah.",

"✨ Aku percaya padamu.",

"💙 Tetap semangat."

];

function sendMessage(){

const input =
document.getElementById("chatInput");

const log =
document.getElementById("chatLog");

if(input.value==="") return;

log.innerHTML +=

"<p>👤 "+
input.value+
"</p>" +

"<p>🤖 "+
botReplies[
Math.floor(
Math.random()*botReplies.length
)
]+
"</p>";

input.value="";

}