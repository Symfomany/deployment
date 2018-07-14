const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.get('/test', function (req, res) {
    res.json('ceci est un test!')
  })
  
app.listen(4000, function () {
  console.log('Example app listening on port 4000!')
})
