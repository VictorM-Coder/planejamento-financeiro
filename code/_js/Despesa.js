class Despesa{
    constructor(date, tipo, valor, descricao){
        this.date = date
        this.tipo = tipo
        this.valor = valor
        this.descricao = descricao
    }

    valuesIsNotEmpty(){
        return (this.date.lenght !== 0 && this.tipo !== "Tipo" && this.valor.lenght !== 0 && this.descricao.lenght !== 0 )
    }
}