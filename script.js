/*====================================
UNTUK LIUL
Ultimate V6
Part 1
====================================*/

//=========================
// Loading Screen
//=========================

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loadingScreen").style.opacity = "0";

setTimeout(() => {

document.getElementById("loadingScreen").style.display = "none";

},1000);

},2500);

});

//=========================
// Typing Welcome
//=========================

const welcomeText =

"Website ini dibuat khusus untukmu. Semoga setiap kali kamu membukanya, kamu selalu ingat bahwa ada seseorang yang percaya kamu mampu melewati semuanya. 💙";

let w = 0;

function typingWelcome(){

if(w < welcomeText.length){

document.getElementById("typingWelcome").innerHTML += welcomeText.charAt(w);

w++;

setTimeout(typingWelcome,40);

}

}

typingWelcome();

//=========================
// Validasi
//=========================

const form = document.getElementById("loginForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const birthday =

document.getElementById("birthday").value;

const mood =

document.getElementById("mood").value;

if(birthday !== "2006-04-06"){

alert("💙 Tanggal lahir belum sesuai ya.");

return;

}

document.getElementById("welcome").classList.add("hidden");

if(mood=="sad" || mood=="verySad"){

document.getElementById("sadPage").classList.remove("hidden");

typingSad();

}else{

document.getElementById("mainPage").classList.remove("hidden");

}

});

//=========================
// Halaman Sedih
//=========================

const sadText =

`Aku tahu hari ini mungkin terasa berat.

Kalau ingin menangis, menangislah.

Kalau ingin beristirahat, istirahatlah.

Tapi jangan menyerah ya...

Aku percaya kamu jauh lebih kuat daripada yang kamu kira.

🌻💙`;

let s = 0;

function typingSad(){

if(s < sadText.length){

document.getElementById("sadTyping").innerHTML += sadText.charAt(s);

s++;

setTimeout(typingSad,45);

}

}

document.getElementById("continueBtn").onclick=()=>{

document.getElementById("sadPage").classList.add("hidden");

document.getElementById("mainPage").classList.remove("hidden");

};

//=========================
// Jam
//=========================

setInterval(()=>{

const now = new Date();

document.getElementById("clock").innerHTML=

now.toLocaleString("id-ID");

},1000);

//=========================
// Surat
//=========================

const letter=

`Hai LiuL...

Kalau suatu hari kamu merasa lelah...

ingatlah...

Kamu tidak harus menjadi sempurna.

Kamu hanya perlu terus melangkah.

Pelan tidak apa-apa.

Berhenti sebentar juga tidak apa-apa.

Yang penting...

jangan menyerah.

Karena kamu sangat berharga.

💙`;

let l=0;

document.getElementById("openLetter").onclick=()=>{

document.getElementById("typingLetter").innerHTML="";

l=0;

typingLetter();

};

function typingLetter(){

if(l<letter.length){

document.getElementById("typingLetter").innerHTML+=letter.charAt(l);

l++;

setTimeout(typingLetter,35);

  /*====================================
SLIDESHOW
====================================*/

const images=[

"images/foto1.jpg",

"images/foto2.jpg",

"images/foto3.jpg",

"images/foto4.jpg",

"images/foto5.jpg"

];

const captions=[

"💙 Kamu jauh lebih kuat daripada yang kamu kira.",

"🌻 Tetaplah menjadi dirimu sendiri.",

"✨ Tidak apa-apa berjalan pelan.",

"🤍 Aku percaya kamu pasti bisa.",

"🌙 Besok akan menjadi hari yang lebih baik."

];

let slideIndex=0;

function nextSlide(){

slideIndex++;

if(slideIndex>=images.length){

slideIndex=0;

}

document.getElementById("slideImage").src=images[slideIndex];

document.getElementById("caption").innerHTML=captions[slideIndex];

}

setInterval(nextSlide,5000);

/*====================================
PLAYLIST
====================================*/

const playlist=document.getElementById("playlist");

const player=document.getElementById("player");

player.src="music/lagu1.mp3";

playlist.addEventListener("change",()=>{

player.src=playlist.value;

player.load();

player.play();

});

/*====================================
MOTIVASI
====================================*/

const motivasi=[

"💙 Kamu lebih hebat dari yang kamu kira.",

"🌻 Tidak apa-apa kalau hari ini berat.",

"✨ Besok selalu membawa harapan baru.",

"🌈 Semua akan baik-baik saja.",

"🤍 Jangan menyerah ya.",

"🌸 Aku bangga padamu.",

"💙 Kamu pantas bahagia.",

"🌻 Teruslah melangkah.",

"✨ Istirahat bukan berarti kalah.",

"🌙 Kamu tidak sendirian."

];

document.getElementById("motivationBtn").onclick=()=>{

let acak=Math.floor(Math.random()*motivasi.length);

document.getElementById("motivation").innerHTML=motivasi[acak];

};

/*====================================
PELUK VIRTUAL
====================================*/

document.getElementById("hugBtn").onclick=()=>{

showPopup(

"🤗\n\nPeluk virtual untuk LiuL.\n\nSemoga semua rasa lelahmu perlahan berubah menjadi kekuatan. 💙"

);

};

/*====================================
PESAN RAHASIA
====================================*/

document.getElementById("secretBtn").onclick=()=>{

showPopup(

"💌\n\nKalau suatu hari kamu merasa tidak ada yang percaya padamu...\n\ningatlah...\n\nAku percaya kamu.\n\nSelalu."

);

};

/*====================================
HADIAH
====================================*/

document.getElementById("giftBtn").onclick=()=>{

showPopup(

"🎁\n\nHadiah terbesar bukanlah benda.\n\nMelainkan harapan.\n\nSemoga hari-harimu selalu dipenuhi kebahagiaan. 💙"

);

/* nanti akan ditambah confetti */

};

/*====================================
POPUP
====================================*/

function showPopup(text){

document.getElementById("popup").style.display="flex";

document.getElementById("popupText").innerHTML=text;

}

document.getElementById("closePopup").onclick=()=>{

document.getElementById("popup").style.display="none";

};

/*====================================
CHATBOT
====================================*/

const chat=document.getElementById("chatBox");

document.getElementById("sendChat").onclick=()=>{

let input=document.getElementById("chatInput");

let text=input.value.trim();

if(text=="") return;

chat.innerHTML+=`<div class="user">${text}</div>`;

let balasan="💙 Kamu pasti bisa.";

const t=text.toLowerCase();

if(t.includes("capek")){

balasan="Kalau capek, istirahatlah sebentar. Jangan menyerah ya 🌻";

}

else if(t.includes("sedih")){

balasan="Aku di sini menemanimu. Kamu tidak sendirian. 🤍";

}

else if(t.includes("menyerah")){

balasan="Jangan menyerah. Masih banyak kebahagiaan yang menunggumu. 💙";

}

else if(t.includes("takut")){

balasan="Keberanian bukan berarti tidak takut, tetapi tetap melangkah walau takut.";

}

else if(t.includes("halo")){

balasan="Halo LiuL 😊 Semoga harimu menyenangkan.";

}

chat.innerHTML+=`<div class="bot">${balasan}</div>`;

chat.scrollTop=chat.scrollHeight;

input.value="";

};/*====================================
METEOR OTOMATIS
====================================*/

function createMeteor(){

const meteor=document.createElement("div");

meteor.className="meteor";

meteor.style.left=Math.random()*window.innerWidth+"px";

meteor.style.top="-150px";

meteor.style.animationDuration=(Math.random()*1.5+1.5)+"s";

document.body.appendChild(meteor);

setTimeout(()=>{

meteor.remove();

},3000);

}

setInterval(createMeteor,2500);

/*====================================
KUNANG-KUNANG
====================================*/

function createFirefly(){

const fly=document.createElement("div");

fly.className="firefly";

fly.style.left=Math.random()*window.innerWidth+"px";

fly.style.top=(window.innerHeight-100)+"px";

fly.style.animationDuration=(Math.random()*6+5)+"s";

document.body.appendChild(fly);

setTimeout(()=>{

fly.remove();

},12000);

}

for(let i=0;i<30;i++){

setTimeout(createFirefly,i*300);

}

setInterval(createFirefly,1500);

/*====================================
LADANG BUNGA MATAHARI
====================================*/

const flowerArea=document.getElementById("sunflowers");

for(let i=0;i<35;i++){

const flower=document.createElement("div");

flower.className="sunflower";

flower.innerHTML="🌻";

flower.style.left=(i*3+Math.random()*2)+"%";

flower.style.fontSize=(45+Math.random()*30)+"px";

flower.style.animationDuration=(4+Math.random()*3)+"s";

flower.style.animationDelay=(Math.random()*2)+"s";

flowerArea.appendChild(flower);

}

/*====================================
CONFETTI BIRU
====================================*/

function confettiBlue(){

for(let i=0;i<150;i++){

const conf=document.createElement("div");

conf.style.position="fixed";

conf.style.left=Math.random()*100+"%";

conf.style.top="-20px";

conf.style.width="8px";

conf.style.height="15px";

conf.style.background=

Math.random()>0.5

?"#00CFFF"

:"#4DA6FF";

conf.style.borderRadius="5px";

conf.style.zIndex="999999";

conf.style.transition="all 4s linear";

document.body.appendChild(conf);

setTimeout(()=>{

conf.style.transform=

"translateY("+

(window.innerHeight+100)

+"px) rotate(720deg)";

conf.style.opacity="0";

},50);

setTimeout(()=>{

conf.remove();

},4500);

}

}

/*====================================
KEMBANG API
====================================*/

function fireworks(){

for(let i=0;i<12;i++){

const fire=document.createElement("div");

fire.style.position="fixed";

fire.style.left=Math.random()*100+"%";

fire.style.top=Math.random()*50+"%";

fire.style.width="15px";

fire.style.height="15px";

fire.style.borderRadius="50%";

fire.style.background="#66CCFF";

fire.style.boxShadow=

"0 0 40px #00cfff";

fire.style.zIndex="999999";

document.body.appendChild(fire);

fire.animate([

{

transform:"scale(0)",

opacity:1

},

{

transform:"scale(10)",

opacity:0

}

],{

duration:1200

});

setTimeout(()=>{

fire.remove();

},1200);

}

}

/*====================================
MOOD EFFECT
====================================*/

const mood=document.getElementById("mood");

mood.addEventListener("change",()=>{

if(mood.value=="happy"){

confettiBlue();

fireworks();

}

});

/*====================================
TANGGAL ULANG TAHUN
====================================*/

const today=new Date();

if(today.getDate()==6 && today.getMonth()==3){

setTimeout(()=>{

showPopup(

"🎂 Selamat Ulang Tahun LiuL 💙\n\nSemoga semua impianmu satu per satu menjadi kenyataan.\n\nTetaplah menjadi pribadi yang baik dan kuat. 🌻"

);

confettiBlue();

fireworks();

},4000);

}

/*====================================
BACKGROUND MUSIC VOLUME
====================================*/

player.volume=0.5;

/*====================================
SELESAI PART 7
====================================*/

}

}
