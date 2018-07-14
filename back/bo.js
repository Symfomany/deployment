const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Coucou!')
})

app.get('/hi', function (req, res) {
  res.send('Salut Julien!');
})


app.listen(8081, function () {
  console.log('Example app listening on port 3000!')
})
