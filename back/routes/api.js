require('dotenv').config();
var express = require('express');
var router = express.Router();
var productoModel = require('../models/productoModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy  = util.promisify(cloudinary.uploader.destroy);
var nodemailer = require ('nodemailer');



router.get('/productos',async function(req, res, next) {
    var producto = await productoModel.getProductos();

    producto = producto.map(producto =>{
        if (producto.pr_img) {
            const imagen = cloudinary.url(producto.pr_img, {
                width:100,
                height:100,
                crop:'limit'
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
 res.json(producto);
});

router.post('/contacto',async (req,res)=>{
    const mail = {
        to:'nramos.noelia@gmail.com',
        subjet:'Contacto web',
        html: `${req.body.nombre} ${req.body.apellido} se contacto a traves de la web y quiere mas informacion a este correo: ${req.body.email} <br> Ademas, hizo el 
        siguiente comentario:${req.body.mensaje}<br> Su tel es: ${req.body.telefono} y direccion ${req.body.direccion} `
    }

    const transport =nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    });
    
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje Enviado'
    });
}); //cierra post api

    module.exports = router;