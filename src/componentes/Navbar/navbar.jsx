import App from "../../App.js";
import CartWidget  from "../cartwidget/carrito.jsx";
import './navbar.css';

export const Navbar = () => {
    return (
        <header >
        <div className="header">
            <nav className="navHeader">
                <div>
                    <a href="#">Cine Black</a>
                </div>
            <a href="#">Peliculas 2023</a>
            <a href="#">peliculas 2022</a>
            <a href="#">Contacto</a>
            <a href=""> <CartWidget /> </a> 
            </nav>
        </div>
        </header>
        
    );
    
}
export default Navbar;