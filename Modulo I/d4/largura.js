function larguraJanela() {
    let largura = window.innerWidth;
    console.log(largura);

    if (largura < 500 || largura >1250){
        aplicarCor ("red");

    } else if {}largura >= 500 && largura <1000>){
        aplicarCor ("green");

    }  else if {}largura >= 1000 && largura <=1250>){
        aplicarCor("blue");
    }
    fuction aplicarCor(cor) {
        let body = document.getElementById("body")
        body.style.backgroundColor = cor;
      }