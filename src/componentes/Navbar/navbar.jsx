import App from "../../App.js";
import CartWidget  from "../cartwidget/carrito.jsx";


export const Navbar = () => {
    return (
        <div className="header">
            <nav>
                <div>
                    <a href="#">titulo de Ecomerce</a>
                </div>
            <a href="#">Perfume de hombre</a>
            <a href="#">Perfume de mujer</a>
            <a href="#">Contacto</a>
            <a href=""> <CartWidget /> </a> 
            </nav>
        </div>
    );
    
}
export default Navbar;