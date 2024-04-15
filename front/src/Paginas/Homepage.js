//import { useState } from 'react'
import '../App.css'
import '../Estilos/Homepage.css'
import Contador from'../Componentes/Layout/Contador'

const Homepage = (props)=>{
    return (
        <main>
    
        <div id="noe-slide">
            <ul class="slider">
                <li id="slide1">
                    <h1>Barbie style</h1>
                    <img src="img/fashion-kids.jpg" alt="fashion-kids"/>
                </li>
                <li id="slide2">
                    <h1>Volver al cole</h1>
                    <img src="img/fashion-blue.jpg" alt="fashion-blue"/>
                </li>
                <li id="slide3">
                    <h1>Dia De Paseo</h1>
                    <img src="img/fashion-mostaza.jpg" alt="fashion-mostaza"/>
                </li>
                <li id="slide4">
                    <h1>Para todos los dias</h1>
                    <img src="img/fashion-rosa.jpg" alt="fashion-rosa"/>
                </li>
            </ul>
            
            <ul class="menu">
                <li>
                    <a href="#slide1">1</a>
                </li>
                <li>
                    <a href="#slide2">2</a>
                </li>
                <li>
                    <a href="#slide3">3</a>
                </li>
                <li>
                    <a href="#slide4">4</a>
                </li>
            </ul>
            <Contador />
            </div>
            
            <div>
             
            </div>
            </main>
    )
}

export default Homepage;