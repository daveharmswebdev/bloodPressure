'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('vitalSign', {
	sp: Number,
	dp: Number,
	pulse: Number,
	orientation: Number,
	timeStamp: Number
})