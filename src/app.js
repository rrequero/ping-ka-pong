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
    var app = koa();

    var publicPath = path.join(__dirname, 'public');
    var viewsPath = path.join(__dirname, 'views');
    app.use(views(path.join(viewsPath), {
        cache: true,
        map: {
            html: 'underscore'
        }
    }));
   
    app.use(koaLogger());
    app.use(bodyParser());

    var appRefs = require('./appRefs');

    appRefs.setReference('app', app);
    appRefs.setReference('db', mongoose);
    
    loader.loadModels();

    loader.loadServices();

    loader.loadRoutes();
	
    app.use(serve(publicPath));
    app.use(compress());


    var server = require('http').Server(app.callback());

    var httpServer = server.listen(config.get('server.port'), config.get('server.hostname'));


    logger.info('Server started in ' + config.get('server.hostname') + ':' + config.get('server.port'));
};

mongoose.connect(config.get('mongo.uri'), onConnectDatabase);
mongoose.connection.on('error', function(err) {
    logger.error(err, 'Error to connecting database');
});