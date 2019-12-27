// * REQUIRES
const express = require('express');
const app = express();

const hbs = require('hbs'); 
require('./hbs/helpers');

// * VARIABLES DE ENTORNO GLOBALES

const port  = process.env.PORT || 3000;

// * MIDDLEWARES
app.use(express.static( __dirname + '/public'));

// * EXPRESS HBS

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


// * PETICIONES


// * HOME
app.get('/', (req, res) => {   
    res.render('home', {
        nombre : 'luis albert'
    });
});


// * ABOUT
app.get('/about', (req, res) => {   
    res.render('about');
});
 
app.listen(port,()=> {
    console.log(`Escuchando peticiones en el pueto ${port}`);    
});