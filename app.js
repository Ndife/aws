const express = require('express');
const app = express();

const port = process.env.port || 8080;

app.get('/', (req,res) => {
    res.send('welcome to aws with nodejs with initial update')
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});