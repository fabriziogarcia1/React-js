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
                    <a href="#">Peliculas 2023</a>
                    <a href="#">peliculas 2022</a>
                    <a href="#">Contacto</a>
                    <a href=""> <CartWidget /> </a> 
                </div>
            </nav>
            
        </div>
        </header>
        
    );
    
}
export default Navbar;