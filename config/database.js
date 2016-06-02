var mongodb = require('mongodb').MongoClient,
  mongoose = require('mongoose'),
  logger = require('./logger.js');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  logger.info('Connect database ==> [ %s ]', db.name);
});

var mongoUri = process.env.MONGOLAB_URI || 'mongodb://admin:admin@ds011251.mlab.com:11251/restproject';

mongoose.connect(mongoUri);

/*
var db = {};
module.exports.connect = function() {
  return new Promise(function(fulfill, reject) {
    mongodb.connect(mongoUri, function(err, db) {
      if (err) reject(err);
      logger.info("Connect database [ %s ] ...", db.databaseName);
      db = db;
      fulfill(db);
    });
  });
};

module.exports.db = db; */
