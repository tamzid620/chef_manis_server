const express= require('express');

const app = express();

const chefs = require("./data.json");

app.get('/', (req , res) => {
    res.json({ message: "hello Server"});
});

app.get('/chefs', (req, res) => {
    res.send( chefs );
})

app.listen(5000, ()=> {
    console.log('server is runnig on port 5000');
})