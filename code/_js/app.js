let storage = new StorageDespesa()
let btnCadastrar = document.getElementById("btn-cadastrar")
let modalTitle = document.getElementById("modal-title")
let modalMessage = document.getElementById("modal-message")
let modalButton = document.getElementById("modal-button")

btnCadastrar.addEventListener("click", cadastrar)

function cadastrar(){

    if(getDespesa().valuesIsNotEmpty()){
        storage.salvarDespesa(getDespesa())
        setModalSuccess()

        document.getElementById("input-date").value = ''
        document.getElementById("input-select").value = ''
        document.getElementById("input-value").value = ''
        document.getElementById("input-descricao").value = ''
    }else{
        setModalFail()
    }

    $('#modal-alert').modal('show')
}

function getDespesa(){
    let date = document.getElementById("input-date").value
    let tipo = document.getElementById("input-select").value
    let valor = document.getElementById("input-value").value
    let descricao = document.getElementById("input-descricao").value

    return new Despesa(date, tipo, valor, descricao) 
}

function setModalSuccess(){
    modalTitle.innerText = "Cadastro realizado com sucesso"
    modalTitle.className += " text-success"
    modalMessage.innerText = "Sua despesa foi cadastrada com exito"
    modalButton.className += " btn-success"
}

function setModalFail(){
    modalTitle.innerText = "Falha no cadastro"
    modalTitle.className += " text-danger"
    modalMessage.innerText = "Houve um erro ao tentarmos cadastrar sua despesa, tente novamente"
    modalButton.className += " btn-danger"
}