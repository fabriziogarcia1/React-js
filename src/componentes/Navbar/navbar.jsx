import App from "../../App.js";
import CartWidget  from "../cartwidget/carrito.jsx";
import './navbar.css';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header >
        <div className="header">
            <nav className="navHeader">
                <div className="Titulo">
                    <a href="#">Cine Black</a>
                </div>
                <div className="ItemsNavbar">
                <ul>
                    <li><Link className="menu-link" to="#">Peliculas 2023   </Link></li>
                    <li><Link className="menu-link" to="#">peliculas 2022   </Link></li>
                    <li><Link className="menu-link" to="/Contacto">Contacto </Link></li>
                    <li><Link className="menu-link" to="#"> <CartWidget />  </Link></li>
                </ul>
                </div>
            </nav>
            
        </div>
        </header>
        
    );
    
}
export default Navbar;