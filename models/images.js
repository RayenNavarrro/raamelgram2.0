var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
	name: String,
	desc: String,
	img:
	{
		data: Buffer,
		contentType: String
	},
	username: String,
	likes: Number
});

module.exports = mongoose.model('Image', imageSchema);
