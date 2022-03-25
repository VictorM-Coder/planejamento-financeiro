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

        for (let index in localStorage) {
            if(typeof localStorage.getItem(index) === "string" && index !== "id"){
                despesas.push(JSON.parse(localStorage.getItem(index)))
            }
        }

        return despesas
    }
}