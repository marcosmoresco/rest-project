var moment = require('moment'),
  log4js = require('log4js'),
  logger = log4js.getLogger('rest-project');

log4js.configure({
  appenders: [{
    type: 'file',
    filename: 'logs/rest_project-' + moment().format('DD-MM-YYYY HH:mm:ss') + '.log',
    maxLogSize: 20480,
    backups: 3,
    category: 'rest-project'
  }, {
    type: 'console',
    filename: 'logs/rest_project.log',
    maxLogSize: 20480,
    backups: 3,
    category: 'rest-project'
  }]
});

module.exports = logger;
