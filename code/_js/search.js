let tableBody = document.getElementById("table-body")

let storageDespesa = new StorageDespesa()
let despesas = storageDespesa.getDespesas()
setRows(despesas)

function setRows(despesas){
    for(let cont  = 0; cont < despesas.length; cont++){
        let despesa = despesas[cont]

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

        let btn = new RemoveButton(localStorage, cont + 1)
        tdRemoveButton.appendChild(btn.getRemoveButton())
        
        tr.appendChild(tdDate)
        tr.appendChild(tdTipo)
        tr.appendChild(tdValor)
        tr.appendChild(tdDescricao)
        tr.appendChild(tdRemoveButton)
        tableBody.appendChild(tr)
    }
}

function createRemoveButton(){
    
}