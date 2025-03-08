let frutas = []
let legumes = []
let verduras = []
let laticinios = []
let congelados = []
let doces = []

let novoItem = "sim"
while(novoItem != "não"){
    novoItem = prompt("Deseja adicionar mais um item na lista? Digite sim ou não")

    if(novoItem === 'não'){
        break;
    }

    let item = prompt("Adicione o item")
    let categoria = prompt("Qual é a categoria do item?")
    if(categoria === "frutas"){
        frutas.push(comida)
    }else if(categoria === "legumes"){
        legumes.push(legumes)
    }else if(categoria === "verduras"){
        verduras.push(verduras)
    }else if(categoria === "laticinios"){
        laticinios.push(laticinios)
    }else if(categoria === "congelados"){
        congelados.push(congelados)
    }else if(categoria === "doces"){
        doces.push(doces)
    }else{
        alert("Categoria não existente!")
    }
}

alert(`Lista de compras:\n
        Fruras: ${frutas}\n
        Legumes: ${legumes}\n
        Verduras: ${verduras}\n
        Laticinios: ${laticinios}\n
        Congelados: ${congelados}`)