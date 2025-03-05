let numero = Math.floor(Math.random() * (10 - 0 + 1) + 0 )
let chute = ""
let acerto = false

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número de 0 a 10:");
    if(chute == numero){
        alert(`Parabéns, você acertou! O número era ${numero}.`);
        acerto = true;
        break;
    }
    alert("Errado!");
}
if(!acerto){
    alert(`Infelizmente, você não acertou. O número era ${numero}!`);
}