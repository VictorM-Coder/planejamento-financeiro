let storage = new StorageDespesa()
let btnCadastrar = document.getElementById("btn-cadastrar")
btnCadastrar.addEventListener("click", cadastrar)

function cadastrar(){
    if(getDespesa().valuesIsNotEmpty()){
        storage.salvarDespesa(getDespesa())
        $('#success-modal').modal('show')
    }else{
        $('#fail-modal').modal('show')
    }
}

function getDespesa(){
    var date = document.getElementById("input-date").value
    var tipo = document.getElementById("input-select").value
    var valor = document.getElementById("input-value").value
    var descricao = document.getElementById("input-descricao").value

    return new Despesa(date, tipo, valor, descricao) 
}