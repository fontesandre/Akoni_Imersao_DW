function ajustaElemento() {
    let theRock = document.getElementById("theRock");
    theRock.addEventListener("mouseover", paraGif);
    theRock.addEventListener("mouseout", paraPng);

    let btnLimpou = document.getElementById("limpou");
    btnLimpou.addEventListener("click", function() {
        theRock.removeEventListener("mouseover", paraGif);
        theRock.removeEventListener("mouseout", paraPng);
    });
}

function paraPng() {
    let theRock = document.getElementById("theRock");
    theRock.src = "./sussy.png";
}

function paraGif() {
    let theRock = document.getElementById("theRock");
    theRock.src = "./sussy.gif";
}