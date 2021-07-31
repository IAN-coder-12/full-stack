const express = require('express');
const morgan = require('morgan');

//Inizialitations
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

// Middlewears 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());    

//Routes 
app.use( require('./routes'));
app.use('/api/products', require('./routes/products'));
app.use('/api', require('./routes/index'));

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
    
});
