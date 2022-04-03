
var contaLouca = (((((20 + 10)  / 5 ) - 1 ) * 7) % 3 ) + 1;

function calculaPorcentagem(quantos,numero){
    var resultado = (quantos/100) * numero;
    return resultado;
    //lixo depois daqui
}

function respostaContaLouca(){
    var contaLouca = (((((20 + 10)  / 5 ) - 1 ) * 7) % 3 ) + 1;
    return contaLouca;
}

var retornoContaLouca = respostaContaLouca();
console.log(retornoContaLouca);
console.log(respostaContaLouca());