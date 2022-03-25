let tableBody = document.getElementById("table-body")

let storageDespesa = new StorageDespesa()
setRows()

function setRows(){
    storageDespesa.forInLocalStorage(createTableFromLocalStorage)
}

function createTableFromLocalStorage(key){
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