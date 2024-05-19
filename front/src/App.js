
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Layout/Header';
import Nav from './Componentes/Layout/Nav';
import Footer from './Componentes/Layout/Footer';
import Homepage from './Paginas/Homepage';
import Colecciones from './Paginas/Colecciones';
import Shop from './Paginas/Shop';
import Somos from './Paginas/Somos';
import Contacto from './Paginas/Contacto';
import Carrito from './Paginas/Carrito';
import { useState } from 'react';


function App() {
  const [carrito, setCarrito] = useState([]); // Define el estado del carrito
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Shop" element={<Shop carrito={carrito} setCarrito={setCarrito} />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Colecciones" element={<Colecciones />} />
        <Route path="/Somos" element={<Somos />} />
        <Route path="/Carrito" element={<Carrito carrito={carrito} setCarrito={setCarrito}/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
