const express = require('express');
const router = express.Router();

router.get('/productos', (req, res) => {
    res.json({msg: 'Consulta de productos'})
});

router.post('/productos', (req, res) => {
    res.json({msg: 'Ingreso de productos'})
});

router.route("/productos/:id")
    get((req, res) => {
        res.json({msg: 'Consulta de un producto'})
    });

    put((req, res) => {
        res.json({msg: 'Actualizacion de un producto'})
    });

    delete((req, res) => {
        res.json({msg: 'Eliminacion de un producto'})
    });
