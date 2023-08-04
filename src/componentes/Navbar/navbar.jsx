import App from "../../App.js";
import CartWidget  from "../cartwidget/carrito.jsx";
import './navbar.css';

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
                    <li><link className="menu-link" href="/">Peliculas 2023</link></li>
                    <li><link className="menu-link" href="/">peliculas 2022</link></li>
                    <li><link className="menu-link" href="/Contacto">Contacto</link></li>
                    <li><link className="menu-link" href="/"> <CartWidget /> </link></li>
                </ul>
                </div>
            </nav>
            
        </div>
        </header>
        
    );
    
}
export default Navbar;