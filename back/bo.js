const express = require('express')
const app = express()
const cors = require('cors')
const compression = require('compression');

app.use(cors())
app.use(compression()); //Compress all routes


app.get('/', function (req, res) {
  res.send('Coucou!')
})

app.get('/hi', function (req, res) {
  res.send('Salut Julien!');
})


app.get('/api', function (req, res) {
  res.json([
    'One',
    'Two',
    'Three JS!'
  ]);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
