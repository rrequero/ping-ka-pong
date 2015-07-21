var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Tournament = new Schema({
    name: {type: String, required:true, trim:true},
    slug: {type: String, required: true, trim: true},
    _owner: {type: mongoose.Schema.ObjectId, required: true, ref:'User'},
    logo: { type: String, required: false ,  trim: true },
    createdAt: { type: Date, default: Date.now, required:true },
    startDate: { type: Date, default: Date.now, required:true },
    endDate: { type: Date, required:false }
});

module.exports = mongoose.model('Tournament', Tournament);
