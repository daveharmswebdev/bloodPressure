'use strict'

const express = require('express')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const { connect } = require('./database') 

app.set('port', 3000)

// establish pug as view engine
app.set('views', 'views')
app.set('view engine', 'pug')

// establish public folders
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.use(routes)

connect()
	.then(() => {
		app.listen(app.get('port'), () => {
			console.log(`Listening on port ${app.get('port')}`)
		})
	})
	.catch(console.error)