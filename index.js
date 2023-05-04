const express= require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const chefs = require("./data.json");

app.get('/', (req , res) => {
    res.json({ message: "hello Server"});
});

app.get("/chefs/:id", (req, res) => {
    console.log(req.params);
    const data = chefs.find((c) => c.id == req.params.id);
  
    res.send(
      data
        ? data
        : {
            status: 400,
            message: "No Data Found",
          }
    );
  });

app.get('/chefs', (req, res) => {
    res.send( chefs );
})

app.listen(5000, ()=> {
    console.log('server is running on port 5000');
})
