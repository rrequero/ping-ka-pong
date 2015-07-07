'use strict';
var appRefs = require('../appRefs');
var logger = appRefs.getLogger();
var app = appRefs.getApp();
var mount = require('koa-mount');
var Router = require('koa-router');
var UserRouter = new Router();
var UserService = appRefs.getService('UserService');

module.exports = function() {

    var API = (function() {
        var list = function * () {
            this.body = yield UserService.find({});
        };

        var count = function * () {
            this.body = yield UserService.count({});
        };

        var create = function * () {
            try {
                logger.debug('Creating user with data ', this.request.body);
                this.body = yield UserService.create(this.request.body);
            } catch (e) {
                logger.error(e);
                this.throw(500, 'Error to insert user');
            }
        };

        var findOne = function * () {
            this.body = yield UserService.findOne({
                slug: this.params.slug
            });
        };

        return {
            list: list,
            create: create,
            count: count,
            findOne: findOne
        };
    }());

    /**
     * @api {get} /user Request all users
     * @apiName List
     * @apiGroup User
     * @apiVersion 1.0.0
     *
     * @apiParam {String} slug user unique.
     *
     * @apiSuccess {Object[]} users List of users
     */
    UserRouter.get('/user', API.list);

    /**
     * @api {post} /user Request create user
     * @apiName Create
     * @apiGroup User
	 * @apiVersion 1.0.0
     *
     * @apiParam {String} name Name of the user
     * @apiParam {String} email Email of the user
     *
     */
    UserRouter.post('/user', API.create);

    /**
     * @api {get} /user/count Request count users
     * @apiName Count
     * @apiGroup User
	 * @apiVersion 1.0.0
     *
     * @apiSuccess {Number} Number of total users.
     */
    UserRouter.get('/user/count', API.count);

    /**
     * @api {get} /user/:slug Request User information
     * @apiName GetUser
     * @apiGroup User
	 * @apiVersion 1.0.0
     *
     * @apiParam {String} slug user unique.
     *
     * @apiSuccess {String} name Name of the User.
     * @apiSuccess {String} email  Email of the User.
     * @apiSuccess {String} slug  Slug of the User.
     * @apiSuccess {String} createdAt  Created date of the User.
     */
    UserRouter.get('/user/:slug', API.findOne);

    app.use(mount('/api/v1', UserRouter.middleware()));
};