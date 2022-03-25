class RemoveButton{
    constructor(localStorage, index){
        this.removeButton =  document.createElement("button")
        this.localStorage = localStorage
        this.index = index
        this.removeButton.innerText = "X"
        this.removeButton.className = "btn btn-danger"

        this.removeButton.addEventListener('click', function(){
            localStorage.removeItem(index)
        })
    }

    getRemoveButton(){
        return this.removeButton
    }
    
}