'use strict';
var appRefs = require('../appRefs');
var logger = appRefs.getLogger();
module.exports = (function(){
	
	var post = function*(next){
		this.checkBody('name').optional().len(2, 20);
		if(this.errors){
			//this.body = this.errors;
			logger.debug('errors ' , this.errors);
			this.body = this.errors;
			this.status = 400;
			return;
		}else{
			yield next;
		}
	};
	
	return {
		post : post	
	};
	
}());