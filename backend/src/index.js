const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('express');

// Use this after the variable declaration
//Inizialitations
const app = express();

//settings
app.set('port', process.env.PORT || 4000);

// Middlewears 
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 
app.use(cors());
app.use(bodyParser.urlencoded({ extended:true }));


//Routes 
app.use( require('./routes'));
app.use('/api/products', require('./routes/products'));
app.use('/api', require('./routes/index'));



//Starting the server
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
    
});
