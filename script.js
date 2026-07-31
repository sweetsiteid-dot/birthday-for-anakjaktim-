/* =========================
   PIN SYSTEM
========================= */

let pin = "";

function addPin(num){

if(pin.length >= 4) return;

pin += num;

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function clearPin(){

pin = pin.slice(0,-1);

document.getElementById("pinInput").value =
"●".repeat(pin.length);

}

function checkPin(){

if(pin === "0208"){

document.getElementById("pinScreen")
.style.display="none";

document.getElementById("website")
.classList.remove("hidden");

document.getElementById("music")
.play().catch(()=>{});

}else{

alert("Wrong PIN 💙");

pin="";

document.getElementById("pinInput")
.value="";

}

}

/* =========================
   OPEN HEART
========================= */

function openHeart(){

document.getElementById("bottleSection")
.classList.remove("hidden");

document.getElementById("bottleSection")
.scrollIntoView({
behavior:"smooth"
});

}

/* =========================
   FLOATING HEARTS
========================= */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML =
[
"💙",
"🩵",
"🤍",
"✨"
][
Math.floor(Math.random()*4)
];

heart.style.position="fixed";

heart.style.left =
Math.random()*100 + "vw";

heart.style.top="-30px";

heart.style.fontSize =
(Math.random()*18+16)+"px";

heart.style.opacity=".9";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.animation =
`fall ${Math.random()*4+6}s linear`;

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,700);

/* =========================
   ANIMATION
========================= */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{
transform:
translateY(0)
rotate(0deg);
opacity:1;
}

100%{
transform:
translateY(120vh)
rotate(360deg);
opacity:0;
}

}

@keyframes flowerBurst{

0%{
opacity:1;
transform:
translate(0,0)
scale(.4);
}

100%{
opacity:0;
transform:
translate(
var(--x),
var(--y)
)
scale(1.4)
rotate(360deg);
}

}

`;

document.head.appendChild(style);

/* =========================
   BOTTLE BREAK
========================= */

let bottleOpened = false;

function breakBottle(){

if(bottleOpened) return;

bottleOpened = true;

const bottle =
document.getElementById("bottle");

bottle.innerHTML = "💥";

createFlowerBurst();

setTimeout(()=>{

bottle.style.display="none";

document.getElementById(
"letterContainer"
).style.display="block";

typeLetter();

},1500);

}

/* =========================
   FLOWER BURST
========================= */

function createFlowerBurst(){

const flowers =
document.getElementById("flowers");

const emojis = [
"💙",
"🩵",
"🤍",
"✨",
"⭐",
"💫"
];

for(let i=0;i<18;i++){

const flower =
document.createElement("div");

flower.innerHTML =
emojis[
Math.floor(
Math.random()*emojis.length
)
];

flower.style.position =
"absolute";

flower.style.left = "0px";
flower.style.top = "0px";

flower.style.fontSize =
(Math.random()*10+20)+"px";

flower.style.setProperty(
"--x",
(Math.random()*700-350)+"px"
);

flower.style.setProperty(
"--y",
(-Math.random()*450-50)+"px"
);

flower.style.animation =
"flowerBurst 2.4s forwards";

flower.style.willChange =
"transform, opacity";

flowers.appendChild(flower);

setTimeout(()=>{

flower.remove();

},2400);

}

}

/* =========================
   LETTER
========================= */

const message = `

Happy Birthday,
Anak Jaktim! 💙

Hari ini adalah hari spesial
buat seseorang yang menurutku
pantas dapetin banyak doa baik,
tawa, dan kebahagiaan.

Semoga di umur yang baru ini
semua yang lagi kamu perjuangin
bisa berjalan satu per satu.

Semoga sehat terus,
rezekinya makin lancar,
dikelilingi orang-orang baik,
dan selalu punya alasan
buat tersenyum setiap hari.

Terima kasih
udah jadi orang yang seru,
nyebelin di waktu yang tepat,

tapi juga selalu bisa bikin
suasana jadi lebih hidup.

Semoga semua mimpi
yang sekarang masih jauh,

pelan-pelan
bisa jadi kenyataan.

Jangan lupa
tetap jadi diri sendiri,

karena itu yang bikin kamu
beda dari yang lain.

`;

const message2 = `

Kalau nanti ada hari
yang terasa berat,

semoga kamu selalu inget
kalau semua itu
cuma sementara.

Masih banyak
hal-hal indah
yang nunggu
di depan.

Pokoknya...

Selamat ulang tahun
sekali lagi ya!

Semoga tahun ini
jadi tahun terbaik
buat kamu.

Semoga semua doa baik
yang kamu panjatkan
bisa satu per satu
dikabulkan.

Semoga kamu selalu
diberi kesehatan,
ketenangan,
dan orang-orang
yang tulus
di sekelilingmu.

Tetap jadi pribadi
yang baik,
tetap rendah hati,
dan jangan pernah
berhenti percaya
sama diri sendiri.

Have an amazing birthday!

💙

- Anak Jakpus

`;

function typeLetter(){

const target =
document.getElementById("letterText");

target.innerHTML = "";

const fullMessage =
message +
message2;

let i = 0;

const typing =
setInterval(()=>{

target.innerHTML +=
fullMessage.charAt(i);

i++;

if(i >= fullMessage.length){

clearInterval(typing);

}

},5);

}

/* =========================
   BIRTHDAY QUIZ
========================= */

let currentQuestion = 0;

const questions =
document.querySelectorAll(".question");

function checkAnswer(button,correct){

if(!correct){

alert("Yahh salah 😆💙");
return;

}

questions[currentQuestion]
.classList.remove("active");

currentQuestion++;

if(currentQuestion < questions.length){

questions[currentQuestion]
.classList.add("active");

}else{

document.getElementById("quizSuccess")
.classList.remove("hidden");

createConfetti();

document.getElementById("quizSuccess")
.scrollIntoView({
behavior:"smooth"
});

}

}

/* =========================
   SPECIAL PHOTO EFFECT
========================= */

function createConfetti(){

const emojis = [
"💙",
"🩵",
"🤍",
"✨",
"⭐",
"💫"
];

for(let i=0;i<100;i++){

const confetti =
document.createElement("div");

confetti.innerHTML =
emojis[
Math.floor(
Math.random()*emojis.length
)
];

confetti.style.position =
"fixed";

confetti.style.left =
Math.random()*100 + "vw";

confetti.style.top =
"-20px";

confetti.style.fontSize =
(Math.random()*18+16)+"px";

confetti.style.opacity=".9";

confetti.style.pointerEvents =
"none";

confetti.style.zIndex =
"99999";

confetti.style.animation =
`fall ${Math.random()*4+4}s linear`;

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},8000);

}

}
