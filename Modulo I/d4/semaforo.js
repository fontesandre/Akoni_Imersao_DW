function semaforo(corDoSinal) {
    switch (corDoSinal) {
        case "verde":
            console.log("Pode passar!");
            break;

        case "amarelo":
            console.log("Calma lá jovem.");
            break;

        case "vermelho":
            console.log("Não pode passar!");
            break;

        default:
            console.log("Cor é invalida.");
            break;
    }
}

semaforo("rosa");