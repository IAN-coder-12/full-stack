const express = require('express');
const router = express.Router();
const pool = require('../database');


router.get('/', async (req, res) => {
    const users = await pool.query('SELECT * FROM users ');
    res.send(users);
    
});

router.post('/', async (req, res)=> {
    
    const {username, password, fullname} = req.body;
    const user = await pool.query('INSERT INTO users set ?',[{username, password, fullname}], (err, rows) => {
        
    })
    

});

const allowCrossDomain = (req, res,next) => {
    res.header('Access-Control-Allow-Origin', "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
module.exports = router;
