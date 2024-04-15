//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Nav = (props)=>{
    return(
    <nav>
        <div>
        <ul>
            <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined}>HOME</NavLink></li>
            <li><NavLink to="/Shop" className={({isActive}) => isActive ? "activo" : undefined}>SHOP</NavLink></li>
            <li><NavLink to="/Colecciones" className={({isActive}) => isActive ? "activo" : undefined}>COLECCIONES</NavLink></li>
            <li><NavLink to="/Somos" className={({isActive}) => isActive ? "activo" : undefined}>QUIENES SOMOS</NavLink></li>
            <li><NavLink to="/Contacto" className={({isActive}) => isActive ? "activo" : undefined}>CONTACTO</NavLink></li>
        </ul>
        
        </div>
    </nav>
    );
}

export default Nav;