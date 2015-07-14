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
    var securityPath = __dirname + '/security/';
    var servicesPath = __dirname + '/services/';
    var modelsPath = __dirname + '/models/';
    var validatorsPath = __dirname + '/validators/';
    var mongooseTypes = require('mongoose-types');


    var loadModels = function() {
        logger.debug('Loading models...');
        mongooseTypes.loadTypes(mongoose);
        mongoose.plugin(require('../lib/mongoosePlugin'));
        var modelsFiles = fs.readdirSync(modelsPath);
        modelsFiles.forEach(function(file) {
            var fileName = file.split('.');
            logger.debug('Loading model %s', modelsPath + file);
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

        //all services loaded
        logger.debug('Injecting services');
        var services = appRefs.getAllServices();
        Object.keys(services).forEach(function(key) {
            if (services[key].inject) {
                services[key].inject();
            }
        });
		logger.debug('Injected services correctly!');

        logger.debug('Loaded services correctly!');
    };

	 var loadSecurity = function() {
        logger.debug('Loading security...');
        var securityFiles = fs.readdirSync(securityPath);

        securityFiles.forEach(function(file) {
            if (file.lastIndexOf('.js') !== -1) {
                logger.debug('Loading security %s', securityPath + file);
                require(securityPath + file)();
            }
        });

        logger.debug('Loaded security correctly!');
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

    var loadValidators = function() {
        logger.debug('Loading validators...');
        var validatorsFiles = fs.readdirSync(validatorsPath);

        validatorsFiles.forEach(function(file) {
            if (file.lastIndexOf('.js') !== -1) {
                var fileName = file.split('.');
                logger.debug('Loading validator %s', validatorsPath + file);
                appRefs.setValidator(fileName[0], require(validatorsPath + file));
            }
        });

        logger.debug('Loaded validators correctly!');
    };


    return {
        loadModels: loadModels,
        loadServices: loadServices,
        loadRoutes: loadRoutes,
        loadValidators: loadValidators,
        loadSecurity: loadSecurity
    };

}());