var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin/shop',
     { layout: 'admin/layout', 
       persona: req.session.nombre
    });
  });

  router.get('/productos', function(req, res, next) {
    res.redirect('admin/productos',
     { layout: 'admin/layout',
     persona: req.session.nombre
    });
  });

  module.exports = router;