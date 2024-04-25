// Localizar o maior valor dentro de um array de números

let numeros = [8,9,1356,32,2,3]

let Maioral=0
for (let index = 1; index < numeros.length; index++) { if (numeros[index]> Maioral) {
    Maioral=numeros[index]
}
    
}
console.log("o maior valor é: " + Maioral)

