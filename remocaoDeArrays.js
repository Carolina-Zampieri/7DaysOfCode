let frutas = []
let legumes = []
let verduras = []
let laticinios = []
let congelados = []
let doces = []
let item
let categoria
let remover

let novoItem = "sim"
while(novoItem != "não"){
    novoItem = prompt("Deseja adicionar mais um item na lista? Digite sim ou não")

    if(novoItem === "não"){
        break;
    }

    if(novoItem === "sim"){
        item = prompt("Adicione o item")
        categoria = prompt("Qual é a categoria do item?")
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
    }else{
        remover = prompt("Qual item você quer remover?")
        if(frutas.indexOf(remover) != -1){
            frutas.splice(frutas.indexOf(remover), 1)
            alert(`O item ${remover} foi removido da lista.`)
        } else if (legumes.indexOf(remover) != -1){
            legumes.splice(legumes.indexOf(remover), 1)
            alert(`O item ${remover} foi removido da lista.`)
        } else if (verduras.indexOf(remover) != -1){
            verduras.splice(verduras.indexOf(remover), 1)
            alert(`O item ${remover} foi removido da lista.`)
        } else if (laticinios.indexOf(remover) != -1){
            laticinios.splice(laticinios.indexOf(remover), 1)
            alert(`O item ${remover} foi removido da lista.`)
        } else if (congelados.indexOf(remover) != -1){
            congelados.splice(congelados.indexOf(remover), 1)
            alert(`O item ${remover} foi removido da lista.`)
        } else if (doces.indexOf(remover) != -1){
            doces.splice(doces.indexOf(remover), 1)
            alert(`O item ${remover} foi removido da lista.`)
        } else {
            alert("O item não existe!")
        }
    }

}

alert(`Lista de compras:\n
        Fruras: ${frutas}\n
        Legumes: ${legumes}\n
        Verduras: ${verduras}\n
        Laticinios: ${laticinios}\n
        Congelados: ${congelados}`)