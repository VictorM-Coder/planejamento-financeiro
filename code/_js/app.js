const enumTipo = {"alimentação": 0, "lazer": 1, "educação": 2, "saúde": 3, "trasporte": 4  }

class despesa{
    constructor(date, tipo, valor, descricao){
        this.date = date
        this.tipo = tipo
        this.valor = valor
        this.descricao = descricao
    }
}