'use strict';
var appRefs = require('../appRefs');
var User = appRefs.getModel('User');
var Tournament = appRefs.getModel('Tournament');
var UserService = null;
var logger = appRefs.getLogger();
var slug = require('slug');
module.exports = (function(){

	var find = function*(filter){
		return yield Tournament.find(filter).populate('_owner').exec();
	};
	
	var findOne = function*(filter){
		return yield Tournament.findOne(filter).populate('_owner').exec();
	};

	var count = function*(filter){
		return yield Tournament.count(filter);
	};

	var create = function*(tournament){
		//TODO: add logged user
		var user = yield UserService.findOne({slug:'rareq1987gmailcom'});
		var tournamentObj = {
			name: tournament.name,
			_owner: user._id,
			startDate: new Date(tournament.startDate),
			slug: slug(tournament.name)
		};
		if(tournament.endDate){
			tournamentObj.endDate = new Date(tournament.endDate);
		}
		var tournamentInstance = new Tournament(tournamentObj);
		yield tournamentInstance.persist();
		return tournamentInstance;
	};
	
	var inject = function(){
		UserService = appRefs.getService('UserService');
	};
	
	return {
		find : find,
		findOne : findOne,
		count : count,
		create : create,
		inject: inject
	};

}());