let area = prompt("Você quer seguir na área de Front-End ou Back-End? Digite F para Front-End ou B para Back-End")
if(area == "F"){
    console.log("Você quer aprender React ou Vue? Digite R para React ou V para Vue")
}else{
    console.log("Você quer aprender C# ou Java? Digite C para C# ou J para Java")
}

let especializacao = prompt("Se você quiser continuar se especializando na área escolhida digite E, se quiser seguir se desenvolvendo para se tornar fullstack digite F")
if(especializacao == "E"){
    console.log("Ótimo, agora foco nos estudos para se desenvolver cada vez mais na área escolhida!")
}else{
    console.log("Que legal, ser fullstack é uma ótima escolha!")
}

let tecnologias = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite a tecnologia, se não digite não.")
while(tecnologias != "não"){
    console.log("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite a tecnologia, se não digite não.")
}

