import '../App.css'
import '../Estilos/Shop.css'
import { useState, useEffect } from "react";
import axios from 'axios';
import ProductoItem from "../Componentes/Novedades/ProductoItem";





const Shop = ({ carrito, setCarrito })=>{
    const [loading, setLoading] = useState(false);
    const [producto, setProductos] = useState([]);


    useEffect(()=>{
        const  cargaProductos = async () =>{
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);
        };
    
        cargaProductos();
    },[]);
    


    
      const agregarAlCarrito = (producto) => {
        const nuevoCarrito = [...carrito, producto];
        console.log("Nuevo carrito en Shop.js:", nuevoCarrito); // Agregar esta línea para depuración
        setCarrito(nuevoCarrito);
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      };

        return(
            <section className="contenedor-img">

      {
        loading ?(
            <p>Cargando..</p>
            
        ):(
            
           producto.map(item => <ProductoItem key={item.pr_id}
                descripcion={item.pr_descripcion}
                precio={item.pr_precio}
                cantidad={item.pr_cantidad}
                imagen={item.imagen}
                agregarAlCarrito={agregarAlCarrito} // Pasa la función agregarAlCarrito como prop
                producto={item} // Pasa el producto como prop
                />)
    
        )
      }
      </section>
        );



}
export default Shop;