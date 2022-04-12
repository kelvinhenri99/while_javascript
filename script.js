function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
        return Math.floor(valor)
}

let opcao = 0

while (opcao != -4) {
    opcao = getInteiroAleatorioEntre (-4, 7)
        console.log(`Numero gerado: ${opcao}.`)
}

console.log('Seu número(-4) foi sorteado!')