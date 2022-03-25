let tableBody = document.getElementById("table-body")
let btnSearch = document.getElementById("btn-pesquisar")

btnSearch.addEventListener("click", setRowsWithFilter)

let storageDespesa = new StorageDespesa()
setRows()

function setRows(){
    storageDespesa.forInLocalStorage(createRowFromLocalStorage)
}

function setRowsWithFilter(){
    tableBody.innerHTML = ""
    storageDespesa.forInLocalStorage(createRowFromLocalStorageWithFilter)
}

function createRowFromLocalStorageWithFilter(key){
    let date = document.getElementById("input-date").value
    let tipo = document.getElementById("input-select").value
    let valor = document.getElementById("input-value").value
    let descricao = document.getElementById("input-descricao").value

    let value = localStorage.getItem(key)
    if(isSubstringNotEmpty(value, date) || isSubstringNotEmpty(value, tipo) || isSubstringNotEmpty(value, valor) || isSubstringNotEmpty(value, descricao)){
        createRowFromLocalStorage(key)
    }
}

function createRowFromLocalStorage(key){
    let despesa =  JSON.parse(localStorage.getItem(key))

    let tr = document.createElement("tr")

    let tdDate =  document.createElement("td")
    let tdTipo =  document.createElement("td")
    let tdValor =  document.createElement("td")
    let tdDescricao =  document.createElement("td")
    let tdRemoveButton = document.createElement("td")


    tdDate.innerText =  despesa.date
    tdTipo.innerText = despesa.tipo
    tdValor.innerText = despesa.valor
    tdDescricao.innerText = despesa.descricao

    let btn = new RemoveButton(localStorage, key)
    tdRemoveButton.appendChild(btn.getRemoveButton())
    tr.appendChild(tdDate)
    tr.appendChild(tdTipo)
    tr.appendChild(tdValor)
    tr.appendChild(tdDescricao)
    tr.appendChild(tdRemoveButton)
    tableBody.appendChild(tr)
}

function isSubstringNotEmpty(string = String, substring = String){
    return ((string !== "" && substring !== "") && (string.includes(substring)))
}