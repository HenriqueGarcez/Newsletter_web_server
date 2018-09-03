const bodyParser = require('body-parser');
const express = require('express');
const app = module.exports = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); // parsing req body to use it further

app.post('/news', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    if (req.body.newsEmail) { 
        res.json({      // json response
            properties: {
                name: req.body.newsName,
                email: req.body.newsEmail
            }
        })

    }else {
        //res.send("<h1> error </h1>");
        res.status(400).json({error: "Missing newsEmail propertie"});
    }
 
})

app.get('/news', (req, res) => {

    res.send("<h1> Worked! </h1>");
 
})

// app.get('/occ',(req, res) => {
//     res.send('<h1> Seu nome get </h1>');
// })