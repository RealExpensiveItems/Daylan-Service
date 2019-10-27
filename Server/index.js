var express = require('express')
var bodyParser = require('body-parser')
var helpers = require('../database/Helpers.js')
var path = require('path')
var cors = require('cors')

var app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(express.static(path.join(__dirname, '../client/dist')))


app.get('/products', (req, res) => {

  helpers.getAll((err, result) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(result)
    }
  })
})

app.get('/products/:id', ({params}, res) => {
  var id = params.id

  helpers.getById(id, (err, result) => {
    if (err) {
      res.status(404).send(err)
    } else {
      res.status(200).send(result)
    }
  })
})


var port = 3000;


app.listen(port, console.log('Your now listening to port ' + port))

