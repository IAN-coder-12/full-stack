const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy
const Session = require('express-session');
const cookieParser = require('cookie-parser');
const MySQLStore = require('express-mysql-session');
const { database } = require('./keys');

//Inizialitations
const app = express();
require('./lib/passport');

//settings
app.set('port', process.env.PORT || 4000);

// Middlewears 
app.use(cors({origin:'http://localhost:3000', crendentials: true}));
app.use(Session({
    secret: 'iansession',
    resave: true, //*
    saveUninitialized: true,//*
    store: new MySQLStore(database)
}));
app.use(cookieParser('iansession'));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 

/* Global Variables */
app.use((req, res, next) => {
    app.locals.user = req.user;
    next();
})


//Routes 
app.use('/api', require('./routes/products'));
app.use('/api', require('./routes/authentication'));


//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
    
});
