const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(4000, ()=> console.log('http://127.0.0.1:4000'));