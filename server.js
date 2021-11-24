/*'use strict'

const express = require ('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get("/",(req,res)=> {
    res.send('hello world');
});

app.listen(PORT, HOST);
console.log('Running on http://§{HOST}:${PORT}');
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})