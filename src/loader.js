/**
 * Carga todos los servicios, routes y modelos
 */
module.exports = (function() {
	'use strict';
	var mongoose = require('mongoose');
    var appRefs = require('./appRefs');
    var logger = appRefs.getLogger();
    var fs = require('fs');
    var routersPath = __dirname + '/routes/';
    var servicesPath = __dirname + '/services/';
    var modelsPath = __dirname + '/models/';
	var mongooseTypes = require('mongoose-types');
	
	
    var loadModels = function() {
        logger.debug('Loading models...');
		mongooseTypes.loadTypes(mongoose);
        mongoose.plugin(require('../lib/mongoosePlugin'));
        var modelsFiles = fs.readdirSync(modelsPath);
        modelsFiles.forEach(function(file) {
            var fileName = file.split('.');
            logger.debug('Loading model %s',modelsPath + file);
            appRefs.setModel(fileName[0], require(modelsPath + file));
        });
        logger.debug('Loaded models correctly!');
    };

    var loadServices = function() {
        logger.debug('Loading services...');
        var servicesFiles = fs.readdirSync(servicesPath);
        servicesFiles.forEach(function(file) {

            var fileName = file.split('.');
            logger.debug('Loading service %s', servicesPath + file);
            appRefs.setService(fileName[0], require(servicesPath + file));
        });
        logger.debug('Loaded services correctly!');
    };



    var loadRoutes = function() {
        logger.debug('Loading routes...');
        var routesFiles = fs.readdirSync(routersPath);

        routesFiles.forEach(function(file) {
            if (file.lastIndexOf('.js') !== -1) {
                logger.debug('Loading route %s', routersPath + file);
                require(routersPath + file)();
            }
        });

        logger.debug('Loaded routes correctly!');
    };


    return {
        loadModels: loadModels,
        loadServices: loadServices,
        loadRoutes: loadRoutes
    };

}());