'use strict';
var config = require('config');
var appRefs = require('./appRefs');
var mongoose = require('mongoose');

appRefs.initLogger();
var logger = appRefs.getLogger();

var onConnectDatabase = function() {


    var path = require('path');
    var koa = require('koa');
    var bodyParser = require('koa-body-parser');
    var compress = require('koa-compress');
    var koaLogger = require('koa-logger');
    var serve = require('koa-static');
    var views = require('koa-render');
    var loader = require('./loader');
    var cors = require('koa-cors');
    var koaValidate = require('koa-validate');
    var session = require('koa-session');
    var passport = require('koa-passport');

    var app = koa();

    app.use(bodyParser());

    app.keys = [config.get('sessionKey')];
    app.use(session(app));

    app.use(cors());
    app.use(koaValidate());
    var publicPath = path.join(__dirname, 'public');
    var viewsPath = path.join(__dirname, 'views');
    app.use(views(path.join(viewsPath), {
        cache: true,
        map: {
            html: 'underscore'
        }
    }));

    app.use(koaLogger());


    var appRefs = require('./appRefs');

    appRefs.setReference('app', app);
    appRefs.setReference('db', mongoose);

    loader.loadValidators();

    loader.loadModels();

    loader.loadServices();

    //load passport
    require('./security/auth');
    app.use(passport.initialize()); 
    app.use(passport.session());

    app.use(serve(publicPath));
    app.use(compress());

	loader.loadSecurity();
	
	// Require authentication for now
    app.use(function * (next) {
        if (this.isAuthenticated()) {
            yield next;
        } else {
            this.redirect('/');
        }
    });

    loader.loadRoutes();

    var server = require('http').Server(app.callback());

    var httpServer = server.listen(config.get('server.port'), config.get('server.hostname'));


    logger.info('Server started in ' + config.get('server.hostname') + ':' + config.get('server.port'));
};

mongoose.connect(config.get('mongo.uri'), onConnectDatabase);
mongoose.connection.on('error', function(err) {
    logger.error(err, 'Error to connecting database');
});