const express= require('express');

const app = express();

app.get('/', (req , res) => {
    res.json({ message: "hello Server"});
});

app.listen(5000, ()=> {
    console.log('server is runnig on port 5000');
})