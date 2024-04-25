// Peça ao usuário para digitar os nomes de 5 alunos e suas notas na prova de
// Matemática. Calcular a média de todas as notas acima de 5,0.

let alunos = []
let notas = []
let mediaMaiores5 = 0
let soma = 0
let qtdMaior5 = 0
for(let i = 0; i < 5; i++){
    alunos[i] = prompt("Digite o nome do Aluno")
    notas[i] = Number(prompt("Digite a nota do Aluno"))
}
for(let i = 0; i < notas.length; i++){
   
    if(notas[i] > 5){
        soma += notas[i]
        qtdMaior5++
    }
    mediaMaiores5 = soma / qtdMaior5
}
alert(mediaMaiores5)

