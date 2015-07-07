module.exports = (function() {
    'use strict';

    var bunyan = require('bunyan');
    var config = require('config');


    var appRefs = {};

    var getappRefs = function() {
        return appRefs;
    };

    var setService = function(serviceKey, serviceValue) {
        if (!appRefs.services) {
            appRefs.services = {};
        }
        appRefs.services[serviceKey] = serviceValue;
    };
    var setReference = function(referenceKey, referenceValue) {
        appRefs[referenceKey] = referenceValue;
    };

    var getApp = function() {
        return appRefs.app;
    };

    var getService = function(serviceKey) {
        return appRefs.services[serviceKey];
    };

    var getConfiguration = function() {
        return appRefs.config;
    };

    var getLogger = function() {
        return appRefs.logger;
    };

    var getModel = function(modelKey) {
        return appRefs.models[modelKey];
    };

    var setModel = function(modelKey, modelValue) {
        if (!appRefs.models) {
            appRefs.models = {};
        }
        appRefs.models[modelKey] = modelValue;
    };

    var initLogger = function() {
		var streams = [{
                path: './log/ping-ka-pong.log',
                period: '1d', // daily rotation
                count: 3, // keep 3 back copies
                level: config.get('logger.level') || 'debug'
            }];
		if(config.get('env') === 'dev'){
			streams.push({

                level: config.get('logger.level') || 'debug',
                stream: process.stdout
            });
		}
        var log = bunyan.createLogger({
            name: config.get('logger.name'),
            streams: streams
        });
        appRefs.logger = log;
    };

    return {
        getappRefs: getappRefs,
        setService: setService,
        setReference: setReference,
        getApp: getApp,
        getService: getService,
        getConfiguration: getConfiguration,
        getLogger: getLogger,
        getModel: getModel,
        setModel: setModel,
        initLogger: initLogger
    };

}());