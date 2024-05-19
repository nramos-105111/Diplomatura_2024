import React from 'react';
import { Link } from 'react-router-dom';


const ProductoItem = (props)=>{
    const {descripcion, precio,cantidad,imagen,body,agregarAlCarrito, producto} = props;
    const handleClick = () => {
        agregarAlCarrito(props.producto);
      };
    return(

<div className="item">
      <figure>
        <img src={imagen} className="img-s" alt={descripcion} />
      </figure>
      <div className="info-item">
        <h2>{descripcion}</h2>
        <p className="precio">Precio: ${precio}</p>
        <p className="cantidad">Cantidad:{cantidad}</p>
        <button className="bn" onClick={handleClick}>Lo quiero!</button>
        <div dangerouslySetInnerHTML={{__html:body}}/>
        <Link to="/Carrito">Ir al Carrito</Link>
      </div>
    </div>
    
    );
}

export default ProductoItem;