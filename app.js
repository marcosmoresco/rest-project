var server = require('./config/server'),
  database = require('./config/database'),
  logger = require('./config/logger'),
  routes = require('./config/routes');

/*
 * Run server
 */


server.listen((process.env.PORT || 3000), function() {
  logger.info('%s listening at %s', server.name, server.url);
});
