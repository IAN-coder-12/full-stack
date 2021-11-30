const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/products', async (req, res) => {
    const products = await pool.query('SELECT * FROM products ');
    res.send(products);
});

router.post('/products', async(req,res) => {
    const product = req.body;
    const {id, clave, nombre, descripcion} = product.product;
    
    try{
        await pool.query('INSERT INTO products set ?',[{id, clave, nombre, descripcion}])
        console.log('fresco mi pana')
        res.sendStatus(200)
    }catch(e){  
        res.sendStatus(403)
    }
});

router.get('/products/edit/:id', async (req,res) => {
    const id = req.params.id;
    const _product = await pool.query('SELECT * FROM products WHERE id = ?', [id]);
   
    console.log(_product[0]);
    res.send(_product[0]); 
});

router.delete('/products/:id', async (req,res) => {
    const id = req.params.id;
    const a = await pool.query('DELETE FROM products WHERE id = ?', [id]); 
});

router.put('/products/edit/:id', async (req, res) => {
    const _id = req.params.id;
    const product = req.body
    try{
        await pool.query('UPDATE products SET ? where id = ? ',[product, _id])
        res.sendStatus(200)
    }catch(e){  
        res.sendStatus(403)
    }
});
module.exports = router;