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
        if (req.body.pr_descripcion != "" && req.body.pr_precio != "" && req.body.pr_cantidad != "" ){
            if (!req.body.pr_img){
                req.body.pr_img = "no data";
            }
        await productoModel.insertProductos(req.body);
        res.redirect('/admin/productos')
        }else{
            res.render ('admin/agregar',{
                layout:'admin/layout',
                error: true,
                message: 'Los campos son requeridos'
            })
        }   
    } catch (error) {
        console.log(error)
        res.render('admin/agregar',{
            layout:'admin/layout',
            error: true,
            message: 'No se cargo producto'
        })
        
    }
  } )

  router.get('/eliminar/:pr_id',async (req,res,next) =>{
    const id = req.params.pr_id;
    await productoModel.eliminarproductoById(id);
    res.redirect('/admin/productos');
  });

  router.get('/modificar/:pr_id', async (req,res,next)=>{
    var id= req.params.pr_id;
    console.log(req.params.pr_id);
    var producto = await productoModel.getProductosId(id);

    res.render('admin/modificar', {
        layout: 'admin/layout',
        producto
    })
  });

  router.post('/modificar', async (req,res, next)=>{
    try {
        var obj ={
            pr_descripcion:req.body.descripcion,
            pr_precio:req.body.precio,
            pr_cantidad:req.body.cantidad

        }
    
        console.log(obj)

       // var id =req.body.id;

        await productoModel.modificarProductoId(obj,req.body.id);
        res.redirect('/admin/productos');
    } catch (error) {
        console.log(error)
        res.render('admin/modificar',{
            layout:'admin/layout',
            error:true,
            message: 'no se modifico producto'
        })
    }
  })

  module.exports = router;

