
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Componentes/Layout/Header';
import Nav from './Componentes/Layout/Nav';
import Footer from './Componentes/Layout/Footer';
import Homepage from './Paginas/Homepage';
import Colecciones from './Paginas/Colecciones';
import Shop from './Paginas/Shop';
import Somos from './Paginas/Somos';
import Contacto from './Paginas/Contacto';
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Colecciones" element={<Colecciones />} />
        <Route path="/Somos" element={<Somos />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
