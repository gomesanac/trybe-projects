let textInput = document.getElementById("text-input");
let memeInsert = document.getElementById("meme-insert");

let memeImage = document.getElementById("meme-image");
let memeText = document.getElementById("meme-text");
let divImage = document.getElementById("meme-image-container");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

let meme1 = document.getElementById("meme-1");
let meme2 = document.getElementById("meme-2");
let meme3 = document.getElementById("meme-3");
let meme4 = document.getElementById("meme-4");

let ladoEsquerdo = document.getElementsByClassName("lado-esquerdo")[0]

function addMeme() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    memeImage.style.height = 400 + "px";
    memeImage.style.width = 400 + "px";
}

function addText() {
    memeText.innerHTML = textInput.value;
}

function addBorder(indicador) {
    if (indicador == 1) {
        divImage.style.borderColor = "red";
        divImage.style.borderWidth = 3 + "px";
        divImage.style.borderStyle = "dashed";
        ladoEsquerdo.style.height = 406 + "px"
    } else if (indicador == 2) {
        divImage.style.borderColor = "blue";
        divImage.style.borderWidth = 5 + "px";
        divImage.style.borderStyle = "double";
        ladoEsquerdo.style.height = 410 + "px"
    } else if (indicador == 3) {
        divImage.style.borderColor = "green";
        divImage.style.borderWidth = 6 + "px";
        divImage.style.borderStyle = "groove";
        ladoEsquerdo.style.height = 412 + "px"
    }
}

function selectMeme(indicador) {
    if (indicador == 1) {
        memeImage.src = meme1.src;
    } else if (indicador == 2) {
        memeImage.src = meme2.src;
    } else if (indicador == 3) {
        memeImage.src = meme3.src;
    } else if (indicador == 4) {
        memeImage.src = meme4.src;
    }
    memeImage.style.height = 400 + "px";
    memeImage.style.width = 400 + "px";
}

memeInsert.addEventListener("change", addMeme);

textInput.addEventListener("keyup", addText);

button1.addEventListener("click", function () {
    addBorder(1);
});

button2.addEventListener("click", function () {
    addBorder(2);
});

button3.addEventListener("click", function () {
    addBorder(3);
});

meme1.addEventListener("click", function () {
    selectMeme(1);
});

meme2.addEventListener("click", function () {
    selectMeme(2);
});

meme3.addEventListener("click", function () {
    selectMeme(3);
});

meme4.addEventListener("click", function () {
    selectMeme(4);
});
