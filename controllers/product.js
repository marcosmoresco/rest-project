var restify = require('restify'),
  server = require('../config/server'),
  logger = require('../config/logger'),
  Product = require('../models/product');

server.get('/product/:name', function(req, res, next) {
  res.send(req.params);
  return next();
});

server.get('/products', function(req, res, next) {
  Product.find({}, function(err, products) {
    res.send(products);
    return next();
  });
});

server.get('/products/:id', function(req, res, next) {
  var id = req.params.id || null;
  if (!!id) {
    Product.findOne({
      _id: id
    }, function(err, product) {
      if (!!product) {
        res.send(product);
      } else {
        res.send({
          erro: 'Product Not Found'
        });
      }
      return next();
    });
  }
});

server.post('/products', function(req, res, next) {
  logger.info(req.body);
  var product = new Product(req.body);

  product.save(function(err, productSaved) {
    if (err) return logger.error(err);
    logger.info('Save Product %s ', productSaved);
    res.send(productSaved);
    return next();
  });
});

server.put('/products', function(req, res, next) {
  logger.info(req.params);
  var product = new Product(req.body);

  Product.findOne({
    _id: product.id
  }, function(err, productSaved) {
    if (err) return logger.error(err);
    Product.update(productSaved, product, function(err, productUpdated) {
      if (err) return logger.error(err);
      logger.info('Update Product %s ', productUpdated);
      res.send(productUpdated);
      return next();
    });
  });
});

server.del('/products/:id', function(req, res, next) {
  Product.remove({
    _id: req.params.id
  }, function(err) {
    if (err) return logger.error(err);
    logger.info('Delete Product with id=%s', req.params.id);
    res.send("Successfully deleted product!");
    return next();
  });
});
