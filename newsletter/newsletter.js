const bodyParser = require('body-parser');
const express = require('express');
const app = module.exports = express();
var path  = require('path'); // Use it later to get host path

//console.log(process);

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()); // parsing req body to use it further


app.post('/occ', (req, res) => {
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
        res.send("<h1> erro </h1>");
        //res.status(400).json({error: "Informe o nome e o emaill"});
    }
 
})

// app.get('/occ',(req, res) => {
//     res.send('<h1> Seu nome get </h1>');
// })