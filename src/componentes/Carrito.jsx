import React, { useContext } from 'react'
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

function Carrito() {
  const { carrito, precioTotal, vaciarCarrito} = useContext(CartContext);
  const handleVaciar = () => {
vaciarCarrito();
  }
  
  
  return (
    <div>
        <h2>
          Carrito
        </h2>
        {
          carrito.map((prod) => (
          <div key={prod.id}>
            <h3>{prod.titulo}</h3>
            <p>precio unitario: ${prod.precio}</p>
            <p>precio total: ${prod.precio * prod.cantidad }</p>
            <p>Meses:{prod.cantidad}</p>
          </div>
          
          ))
        }
    <h4>Precio total:{precioTotal()}</h4>
    <button onClick={handleVaciar}> Vaciar</button>
    <Link to ="/checkout">Finalizar compra</Link>
    </div>
  )
}

export default Carrito;