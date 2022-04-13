function semaforo(corDoSinal) {
    if (corDoSinal === "verde") {
        console.log("Pode passar!");
    } else if (corDoSinal === "amarelo") {
        console.log("Calma ai jovem!");
    } else if (corDoSinal === "vermelho") {
        console.log("Não pode passar!");
    } else {
        console.log("Cor inválida.");
    }
}

semaforo("roxo");