class StorageDespesa{
    constructor(){
        if(localStorage.getItem("id") === null){
            localStorage.setItem("id", 0)
        }
    }

    salvarDespesa(despesa){
        let id = parseInt(localStorage.getItem("id"))
        
        localStorage.setItem(++id, JSON.stringify(despesa))
        localStorage.setItem("id", id)
    }

    getDespesas(){
        let despesas = []
        for(let cont = 1; cont < localStorage.length; cont++){
            despesas.push(localStorage.getItem(cont))
        }

        return despesas
    }
}