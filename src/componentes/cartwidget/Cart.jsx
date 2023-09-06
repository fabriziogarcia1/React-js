import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


export const CartWidget = () => {
    const {cantidadEnCarrito} = useContext(CartContext);
    return(
        <div>
            
           <i className="bi bi-cart3">{cantidadEnCarrito()}</i>
           
        </div>
    );
}
export default CartWidget;