const express = require('express');

const hbs = require('hbs');
const path = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res)=>{
  punkAPI.getBeers(25).then( (arrayBeers25)=>{
   console.log(arrayBeers25, 'les 25 bierres')
    res.render('beers', {beers:arrayBeers25});

 }).catch(error => console.log(error));
})

app.get('/random-beer', (req,res) =>{
  punkAPI.getRandom().then( beer =>{
    console.log(beer, ' la bierre au hasard !');
    res.render('random-beer', {beer});
  }).catch(error => console.log(error));
})

app.listen(3000, () => console.log('🏃‍ on port 3000'));
