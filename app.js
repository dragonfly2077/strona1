const express = require('express')
const port = 3000

const app = express()
app.set('view engine', 'hbs')

app.get('/',(req, res)=> {
    res.render('index', {
        pageTitle: 'strona1',
        pageBody: 'hello'
    })
})
app.get('/kontakt',(req,res) =>{
    res.send('dane kontaktowe')
})

app.listen(port)
