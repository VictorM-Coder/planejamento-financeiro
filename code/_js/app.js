const enumTipo = {"alimentação": 0, "lazer": 1, "educação": 2, "saúde": 3, "trasporte": 4  }

class Despesa{
    constructor(date, tipo, valor, descricao){
        this.date = date
        this.tipo = tipo
        this.valor = valor
        this.descricao = descricao
    }
}
let despesas = []


let btnCadastrar = document.getElementById("btn-cadastrar")
btnCadastrar.addEventListener("click", cadastrar)

function cadastrar(){
    var date = document.getElementById("input-date").value
    var tipo = document.getElementById("input-select").value
    var valor = document.getElementById("input-value").value
    var descricao = document.getElementById("input-descricao").value

    let despesa = new Despesa(date, tipo, valor, descricao)
}