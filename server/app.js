var express = require('express')
var app = express()
var cors = require('cors');
var axios = require('axios');

app.use(cors())

app.use(express.static('public'))

app.get('/filmsData/:id',(req, res) => {
	axios.get('http://swapi-tpiros.rhcloud.com/films/' + req.params.id)
	.then( response => {
		res.send(response.data)
	})
	.catch( err => {
		res.error(err)
	})
})


app.get('/filmsData', (req, res) => {
	axios.get('http://swapi-tpiros.rhcloud.com/films')
	.then( response => {
		res.send(response.data)
	})
	.catch( err => {
		res.error(err)
	})
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})