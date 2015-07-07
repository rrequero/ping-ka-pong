var cluster = require('cluster');
var http = require('http');
var config = require('config');
var numCPUs = config.get('server.numThreads') || require('os').cpus().length;

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    require('./src/app.js')
}
