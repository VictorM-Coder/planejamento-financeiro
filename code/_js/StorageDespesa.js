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

    /**
     * 
     * @param {*} func função que será executada para cada valor de key númeral presente no localstorage passando a key como parâmetro
     */
    forInLocalStorage(func){
        for (let key in localStorage) {
            if(typeof localStorage.getItem(key) === "string" && key !== "id"){
                func(key)
            }
        }
    }
}