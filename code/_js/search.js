let tableBody = document.getElementById("table-body")
setRows()

function setRows(){
    let storageDespesa = new StorageDespesa()
    let despesas = storageDespesa.getDespesas()

    for(let cont  = 0; cont < despesas.length; cont++){
        let despesa = despesas[cont]

        let tr = document.createElement("tr")

        let tdDate =  document.createElement("td")
        let tdTipo =  document.createElement("td")
        let tdValor =  document.createElement("td")
        let tdDescricao =  document.createElement("td")

        tdDate.innerText =  despesa.date
        tdTipo.innerText = despesa.tipo
        tdValor.innerText = despesa.valor
        tdDescricao.innerText = despesa.descricao

        
        tr.appendChild(tdDate)
        tr.appendChild(tdTipo)
        tr.appendChild(tdValor)
        tr.appendChild(tdDescricao)
        tableBody.appendChild(tr)
    }
}