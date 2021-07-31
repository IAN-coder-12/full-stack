const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.post('/', (req,res) => {
    res.send('alooooo')
});

router.get('/:id', (req,res) => {

});

router.put('/:id', (req,res) => {

});

router.delete('/:id', (req,res) => {

});

module.exports = router;