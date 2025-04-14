class Pedido {

    itens = [];

    constructor(id, cliente) {
        this.id = id;
        this.cliente = cliente;
        this.data = new Date();
    }

    addItem(item) {
        this.itens.push(item);
    }
    getPedido() {
        return {
            id: this.id,
            cliente: this.cliente,
            data: this.data,
            itens: this.itens,
        };
    }
}

module.exports = Pedido;