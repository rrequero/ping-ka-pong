'use strict';
var appRefs = require('../appRefs');
var User = appRefs.getModel('User');
var logger = appRefs.getLogger();
var slug = require('slug');
module.exports = (function(){

	var find = function*(filter){
		return yield User.find(filter).exec();
	};
	
	var findOne = function*(filter){
		return yield User.findOne(filter).exec();
	};

	var count = function*(filter){
		return yield User.count(filter);
	};

	var create = function*(user){
		var userInstance = new User({
			name: user.name,
			email: user.email,
			slug: slug(user.email)
		});
		yield userInstance.persist();
	};
	
	return {
		find : find,
		findOne : findOne,
		count : count,
		create : create
	};

}());