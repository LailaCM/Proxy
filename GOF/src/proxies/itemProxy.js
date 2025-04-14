class Item {
    constructor(id, produto, preco, quantidade) {
        this.id = id;
        this.produto = produto;
        this.preco = preco;
        this.quantidade = quantidade;
        this.subtotal = this.calcularSubtotal();
    }

    calcularSubtotal() {
        return this.preco * this.quantidade;
    }

    // Adicionando o método getItem
    getItem() {
        return {
            id: this.id,
            produto: this.produto,
            preco: this.preco,
            quantidade: this.quantidade,
            subtotal: this.subtotal,
        };
    }
}

module.exports = Item;