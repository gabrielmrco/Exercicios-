

let numeros = []
let arrayImpar = []

for(let i = 0; i < 10; i++){
        numeros[i]=prompt("Digite os numeros") 
       
        
}
for(let i = 0; i < numeros.length; i++){
    if (numeros[i]%2==1) {arrayImpar.push(numeros[i])
        
    }
   
    
}

alert(arrayImpar)