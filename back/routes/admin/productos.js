var express = require('express');
var router = express.Router();
var productoModel = require('../../models/productoModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy  = util.promisify(cloudinary.uploader.destroy);

router.get('/',async function(req, res, next) {
    var producto = await productoModel.getProductos();

    producto = producto.map(producto =>{
        if (producto.pr_img) {
            const imagen = cloudinary.image(producto.pr_img, {
                width:100,
                height:100,
                crop:'fill'
            });
            return{
                ...producto,
                imagen
            }
        } else {
            return{
                ...producto,
                imagen: ''
            }
        }
    }); 

    


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
        var pr_img = '';
        //console.log()
        if (req.files && Object.keys(req.files).length>0){
            imagen = req.files.pr_img;
            pr_img = (await uploader(imagen.tempFilePath)).public_id;
        }


        if (req.body.pr_descripcion != "" && req.body.pr_precio != "" && req.body.pr_cantidad != "" ){
  //          if (!req.body.pr_img){
  //              req.body.pr_img = "no data";
  //          }
        await productoModel.insertProductos({
            ...req.body,
            pr_img
        });
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
    var id = req.params.pr_id;
    let producto = await productoModel.getProductosId(id);
    if (producto.pr_img) {
        await (destroy(producto.pr_img));
    }
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
        let pr_img = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
            pr_img =null;
            borrar_img_vieja = true;
        } else {
                if (req.files && Object.keys(req.files).length >0) {
                    imagen =req.files.imagen;
                    pr_img = (await uploader(imagen.tempFilePath)).public_id;
                    borrar_img_vieja = true;
                }
        }

        if (borrar_img_vieja && req.body.img_original) {
            await (destroy(req.body.img_original));
        }

        var obj ={
            pr_descripcion:req.body.descripcion,
            pr_precio:req.body.precio,
            pr_cantidad:req.body.cantidad,
            pr_img

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

