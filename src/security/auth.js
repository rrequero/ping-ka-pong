'use strict';
var passport = require('koa-passport');
var appRefs = require('../appRefs');
var config = require('config');
var logger = appRefs.getLogger();
var UserService = appRefs.getService('UserService');

var co = require('co');

module.exports = function() {

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(profile, done) {
        co(function * () {
            var user = yield UserService.findOne({provider:profile.provider, id:profile.id});
            done(null, user);
        });

    });

    var TwitterStrategy = require('passport-twitter').Strategy;
    passport.use(new TwitterStrategy({
            consumerKey: config.get('apiKeys.twitter.consumerKey'),
            consumerSecret: config.get('apiKeys.twitter.consumerSecret'),
            callbackURL: config.get('server.publicUrl') + '/auth/twitter/callback'
        },
        function(token, tokenSecret, profile, done) {

            co(function * () {
                try {
                    logger.debug('Register twitter user');
                    yield UserService.findOrInsert(profile);
                    done(null, profile);
                } catch (e) {
                    logger.error(e);
                    done(new Error('Error login user'), null);
                }
            });
        }
    ));

    var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

    passport.use(new GoogleStrategy({
            clientID: config.get('apiKeys.google.clientID'),
            clientSecret: config.get('apiKeys.google.clientSecret'),
            callbackURL: config.get('server.publicUrl') + '/auth/google/callback'
        },
        function(accessToken, refreshToken, profile, done) {
            co(function * () {
                try {
                    logger.debug('Register google user', profile);
					
                    yield UserService.findOrInsertGoogle(profile);
                    logger.debug('Registro correcto');
                    done(null, profile);
                } catch (e) {
                    logger.error(e);
                    done(new Error('Error login user'), null);
                }
            });

        }
    ));
};