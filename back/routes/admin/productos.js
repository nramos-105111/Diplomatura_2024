var express = require('express');
var router = express.Router();
var productoModel = require('../../models/productoModel');

router.get('/',async function(req, res, next) {
    var producto = await productoModel.getProductos();
    res.render('admin/productos',
     { layout: 'admin/layout',
     persona: req.session.nombre,
     producto
    });
  });

  router.get('/agregar',(req, res, next) => {
    res.render('admin/agregar',{//agregar hbs
        layout:'admin/layout'
    })
  });

  router.post('/agregar',async (req, res, next) =>{
    try {
        if (req.body.pr_descripcion != "" && req.body.pr_precio != "" && req.body.pr_cantidad != ""){
        await productoModel.insertProductos(req.body);
        res.redirect('/admin/productos')
        }else{
            res.render ('/admin/agregar',{
                layout:'admin/layout',
                error: true,
                message: 'Los campos son requeridos'
            })
        }   
    } catch (error) {
        console.log(error)
        res.render('/admin/agregar',{
            layout:'admin/layout',
            error: true,
            message: 'No se cargo producto'
        })
        
    }
  } )

  module.exports = router;