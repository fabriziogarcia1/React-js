import React from 'react';
import { CartContext } from './context/CartContext';
import { useForm } from 'react-hook-form';


function checkout() {

    const { carrito, precioTotal, vaciarCarrito} = useContext(CartContext);
     
    const {register, handleSubmit} = useForm();
const comprar = (data) =>{
   const pedido = {
    cliente : data,
    productos : carrito,
    total : precioTotal,
    
   }
   console.log(pedido);
}

  
  
    return (
    <div>
        <div>
            <h2 className="titulo_pagina">Finalizar compra</h2>
            <form className="formulario_contacto" onSubmit={handleSubmit(enviar)}>
                
                <input className="input_contacto" type="text" 
                placeholder="Ingresa tu nombre" {...register ("nombre")}
                />

                <input className="input_contacto"  
                 type="email" placeholder="Ingresa tu Email"
                 {...register ("email")}
                 />

                <button className="boton_enviar" type="submit">Comprar</button>
            </form>
        </div>
    
    </div>
  )
}

export default checkout