var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Email = mongoose.SchemaTypes.Email;

var User = new Schema({
    email: { type: Email , required: true,  trim: true },
	name: {type: String, required:true, trim:true},
	slug: {type: String, required: true, trim: true},
    avatar: { type: String, required: false ,  trim: true },
    createdAt: { type: Date, default: Date.now, required:true }
});

module.exports = mongoose.model('User', User);