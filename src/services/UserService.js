'use strict';
var appRefs = require('../appRefs');
var User = appRefs.getModel('User');
var logger = appRefs.getLogger();
var slug = require('slug');
module.exports = (function() {

    var find = function * (filter) {
        return yield User.find(filter).exec();
    };

    var findOne = function * (filter) {
        return yield User.findOne(filter).exec();
    };

    var count = function * (filter) {
        return yield User.count(filter);
    };

    var create = function * (user) {
        var userInstance = new User({
            name: user.name,
            email: user.email,
            slug: slug(user.email),
			provider: user.provider,
			id: user.id,
			avatar: user.avatar
        });
        yield userInstance.persist();
    };

    var update = function * (filter, update) {
        return yield User.update(filter, update).exec();
    };

    var findOrInsertGoogle = function * (user) {
        var userFormat = {
            email: user.emails[0].value,
            name: user.displayName,
            provider: user.provider,
            id: user.id
        };
		
        if (user.photos && user.photos.length > 0) {
            userFormat.avatar = user.photos[0].value;
        }
		return yield findOrInsert(userFormat);
    };

    var findOrInsert = function * (user) {
        var userInstance = yield findOne({
            provider: user.provider,
            id: user.id
        });
        if (userInstance) {
			logger.debug('Exist user. Updating user.');
            //user exist, update user
            userInstance.email = user.email;
            userInstance.name = user.name;
            userInstance.avatar = user.avatar;
            userInstance.provider = user.provider;
			userInstance.slug = slug(user.name);
            yield userInstance.persist();
        } else {
			logger.debug('Not exist user. Creating user.');
            userInstance = yield create(user);
        }
        return userInstance;
    };


    var inject = function() {
        //inject services
    };

    return {
        find: find,
        findOne: findOne,
        count: count,
        create: create,
        inject: inject,
		findOrInsertGoogle : findOrInsertGoogle
    };

}());