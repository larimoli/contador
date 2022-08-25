function compara(num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1,num2)
    const segundaFrase = criaSegundaFrase(num1,num2)

    return `${primeiraFrase} ${segundaFrase}`
}

function criaPrimeiraFrase(num1, num2){
    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let simNão = "não";

    if (num1 === num2){
        simNão = ""
    }

    return `${primeiraFrase} ${simNão} são iguais!`;
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;
    let compara10 = "menor";
    let compara20 = "menor";

    if (soma > 10){
        compara10 = "maior";
        
    }

    if (soma > 20){
        compara20 = "maior";
    }

    return `Sua soma é ${soma}, que é ${compara10} do que 10 e ${compara20} do que 20.`

}

console.log(compara(12,7));


