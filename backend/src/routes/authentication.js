const express = require('express');
const router = express.Router();
const pool = require('../database');
const passport = require('passport');

/* Sign Up */
router.get('/', async (req, res) => {
    const users = await pool.query('SELECT * FROM users ');
    res.send(users);
    
    
});

router.post('/', passport.authenticate('local.signup', {
    successRedirect: '/api',
    failureRedirect:'http://localhost:3000/signup'
    }   
));


/* Log In */
router.get('/login', (req, res) => {
    res.send('login' + user.username)
    
});
  
router.post('/login', passport.authenticate('local.login',{
    successRedirect:'/api'
    
}));

router.get("/user", (req, res) => {
    res.send('User: ')
    res.send(req.user);
  });


module.exports = router;
