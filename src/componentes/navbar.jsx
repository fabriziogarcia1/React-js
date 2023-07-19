import App from "../App.js";
import CartWidget  from "./cartwidget/carrito.jsx";


export const Navbar = () => {
    return (
        <div className="header">
            <p>titulo de Ecomerce</p>
            <p>Perfume de hombre</p>
            <p>Perfume de mujer</p>
            <p>Contacto</p>
            <p> <CartWidget /> </p> 
        </div>
    );
    
}
export default Navbar;