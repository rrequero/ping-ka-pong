'use strict';
var appRefs = require('../appRefs');
var logger = appRefs.getLogger();
var app = appRefs.getApp();
var mount = require('koa-mount');
var Router = require('koa-router');
var TournamentRouter = new Router();
var TournamentService = appRefs.getService('TournamentService');
var TournamentValidator = appRefs.getValidator('TournamentValidator');

module.exports = function() {

	var API = (function() {
		var list = function * () {
			this.body = yield TournamentService.find({});
		};

		var count = function * () {
			this.body = yield TournamentService.count({});
		};

		var create = function * () {
			try {
				logger.debug('Creating tournament with data ', this.request.body);
				this.body = yield TournamentService.create(this.request.body);
			} catch (e) {
				logger.error(e);
				this.throw(500, 'Error to insert tournament');
			}
		};

		var findOne = function * () {
			this.body = yield TournamentService.findOne({
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
	 * @api {get} /tournament Request all tournaments
	 * @apiName List
	 * @apiGroup Tournament
	 * @apiVersion 1.0.0
	 *
	 * @apiParam {String} slug tournament unique.
	 *
	 * @apiSuccess {Object[]} tournaments List of tournaments
	 */
	TournamentRouter.get('/tournament', API.list);

	/**
	 * @api {post} /tournament Request create tournament
	 * @apiName Create
	 * @apiGroup Tournament
	 * @apiVersion 1.0.0
	 *
	 * @apiParam {String} name Name of the tournament
	 * @apiParam {Date} startDate Start date of the tournament
	 * @apiParam [{Date}] endDate End date of the tournament
	 *
	 */
	TournamentRouter.post('/tournament', TournamentValidator.post ,API.create);

	/**
	 * @api {get} /tournament/count Request count tournaments
	 * @apiName Count
	 * @apiGroup Tournament
	 * @apiVersion 1.0.0
	 *
	 * @apiSuccess {Number} Number of total tournaments.
	 */
	TournamentRouter.get('/tournament/count', API.count);

	/**
	 * @api {get} /tournament/:slug Request Tournament information
	 * @apiName GetTournament
	 * @apiGroup Tournament
	 * @apiVersion 1.0.0
	 *
	 * @apiParam {String} slug tournament unique.
	 *
	 * @apiSuccess {String} name Name of the tournament.
	 * @apiSuccess {String} slug  Slug of the tournament.
	 * @apiSuccess {String} createdAt  Created date of the tournament.
	 */
	TournamentRouter.get('/tournament/:slug', API.findOne);


	app.use(mount('/api/v1', TournamentRouter.middleware()));
};
