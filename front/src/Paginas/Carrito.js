import React from "react";

const Carrito = ({ carrito ,setCarrito}) => {
  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };
  
  const agregarUnidad = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad += 1;
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

 

  console.log("Carrito en Carrito.js:", carrito);
  return (
    <div>
      <h2>Carrito de Compras</h2>
  
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>
            <img src={producto.imagen} alt={producto.pr_descripcion} />
            {producto.pr_descripcion} - ${producto.pr_precio}
            <button onClick={() => eliminarDelCarrito(index)}>Eliminar</button>
            <button onClick={() => agregarUnidad(index)}>Agregar 1 unidad</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carrito;