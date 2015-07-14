'use strict';
var appRefs = require('../appRefs');
var app = appRefs.getApp();
var mount = require('koa-mount');
var Router = require('koa-router');
var ApiRouter = new Router();
var passport = require('koa-passport');
var logger = appRefs.getLogger();

module.exports = function() {
    var API = (function() {

        var successAuth = function * () {
            this.body = yield this.render('after-auth', {
                state: 'success',
                user: this.req.user ? this.req.user : null
            });
            this.codeStatus = 200;
        };

        var logout = function * () {
            this.logout();
            this.redirect('/');
        };


        return {
            successAuth: successAuth,
			logout: logout
        };
    }());



    ApiRouter.get('/success', API.successAuth);
	
	ApiRouter.get('/logout', API.logout);

    app.use(mount('/auth', ApiRouter.middleware()));
};