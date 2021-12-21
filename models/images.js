const { Int32 } = require('bson');
var mongoose = require('mongoose');
const internal = require('stream');
const { createInflate } = require('zlib');

var imageSchema = new mongoose.Schema({
	name: String,
	desc: String,
	img:
	{
		data: Buffer,
		contentType: String
	}
});

module.exports = mongoose.model('Image', imageSchema);
