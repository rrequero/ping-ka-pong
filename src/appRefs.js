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

    var setValidator = function(key, value) {
        if (!appRefs.validators) {
            appRefs.validators = {};
        }
        appRefs.validators[key] = value;
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

    var getAllServices = function() {
        return appRefs.services;
    };

    var getValidator = function(key) {
        return appRefs.validators[key];
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
            path: config.get('logger.file'),
            level: config.get('logger.level') || 'debug'
        }];
        if (config.get('env') === 'dev') {
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
        setValidator: setValidator,
        getApp: getApp,
        getService: getService,
        getConfiguration: getConfiguration,
        getLogger: getLogger,
        getModel: getModel,
        setModel: setModel,
        getValidator: getValidator,
        initLogger: initLogger,
        getAllServices: getAllServices
    };

}());