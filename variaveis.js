let nome = prompt("Qual é o seu nome?")
let idade = prompt("Quantos anos você tem?")
let linguagemProgramacao = prompt("Qual linguagem de programação você está estudando?")

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemProgramacao}!`)

let satisfacao = prompt(`Você gosta de estudar ${linguagemProgramacao}? Responda com o número 1 para SIM ou 2 para NÃO.`)
if(satisfacao == 1){
    alert("Que legal! Continue seus estudos!")
}else{
    alert("Não desamine! Que tal conhecer outras linguagens?")
}