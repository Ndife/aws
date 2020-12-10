const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/', (req,res) => {
    res.send('welcome to aws with nodejs')
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});