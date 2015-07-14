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
        var twitter = passport.authenticate('twitter');

        var twitterCallback = passport.authenticate('twitter', {
            successRedirect: '/auth/success',
            failureRedirect: '/auth/fail'
        });

        var google = passport.authenticate('google', {
            scope: 'https://www.googleapis.com/auth/plus.me https://www.google.com/m8/feeds https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
        });



        var googleCallback = passport.authenticate('google', {
            successRedirect: '/auth/success',
            failureRedirect: '/auth/fail'
        });
		
        var failAuth = function * () {
            this.body = yield this.render('after-auth', {
                state: 'fail',
                user: null
            });
            this.codeStatus = 200;
        };

        var checkLogged = function * () {

            if (this.req.user) {
                this.body = this.req.user;
            } else {
                this.res.statusCode = 401;
            }
        };

        return {
            twitter: twitter,
            twitterCallback: twitterCallback,
            google: google,
            googleCallback: googleCallback,
            failAuth: failAuth,
            checkLogged: checkLogged
        }; 
    }());

    ApiRouter.get('/twitter', API.twitter);

    ApiRouter.get('/twitter/callback', API.twitterCallback);

    ApiRouter.get('/google', API.google);

    ApiRouter.get('/google/callback', API.googleCallback);

    ApiRouter.get('/fail', API.failAuth);

    ApiRouter.get('/checkLogged', API.checkLogged);

    app.use(mount('/auth', ApiRouter.middleware()));
};