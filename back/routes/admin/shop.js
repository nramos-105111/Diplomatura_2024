
var express = require('express');
var router = express.Router();
var productoModel = require('../../models/productoModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy  = util.promisify(cloudinary.uploader.destroy);




  router.get('/', async function(req, res, next) {
    try {
        var productos = await productoModel.getProductos();
       /* console.log("Productos obtenidos:", productos); */

        productos = productos.map(producto => {
            if (producto.pr_img) {
                const imagen = cloudinary.image(producto.pr_img, {
                    width: 100,
                    height: 100,
                    crop: 'fill'
                });
                return {
                    ...producto,
                    imagen
                };
            } else {
                return {
                    ...producto,
                    imagen: ''
                };
            }
        });

        res.render('admin/shop', {
          layout: 'admin/layout',
          productos,
          persona: req.session.nombre
        });
    } catch (error) {
        console.log(error);
        res.render('admin/shop', {
          layout: 'admin/layout',
          error: true,
          message: 'Error al cargar los productos'
        });
    }
});
/*
router.get('/', function(req, res, next) {
  res.render('admin/shop',
   { layout: 'admin/layout', 
     persona: req.session.nombre
  });
});*/

router.get('/productos', function(req, res, next) {
  res.redirect('admin/productos',
   { layout: 'admin/layout',
   persona: req.session.nombre
  });
});




  module.exports = router;