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
}