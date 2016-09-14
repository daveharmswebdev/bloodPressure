'use strict'

const { Router } = require('express')
const router = Router()
const vitalSign = require('../models/vitals')

router.get('/', (req, res) => {
	res.render('home', {})
})

router.get('/bp', (req, res) => {
	res.render('bp', {content: 'Blood Pressure Time!'})
})

router.post('/bp', (req, res) => {
	const vs = new vitalSign(req.body)
	vs.timeStamp = Date.now()

	vs.save()
    .then(() => res.redirect('/results'))
    .catch(() => res.send('BAD'))
})

router.get('/contact', (req, res) => {
	res.render('contact', {content: 'Drop me a line!'})
})

router.get('/results', (req, res) => {
	res.render('results', {})
})

module.exports = router