const express = require('express');
const router = express.Router();

const Pedido = require('./controllers/pedido');

router.get('/', (req, res) => {
    res.json({
        titulo: "API exemplos Gof"
    })
});

router.post('/pedidos', Pedido.createItem);

module.exports = router;