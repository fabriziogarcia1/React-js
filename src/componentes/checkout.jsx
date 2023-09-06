import React, { useContext, useState } from 'react';
import { CartContext } from './context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc} from "firebase/firestore";
import { db } from "./Firebase/config";


const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito} = useContext(CartContext);
     
    const {register, handleSubmit} = useForm();

    const comprar = (data) =>{
   const pedido = {
    cliente : data,
    productos : carrito,
    total : precioTotal(),
    
   }
   console.log(pedido);

   const pedidosRef = collection(db, "pedidos");


   addDoc(pedidosRef, pedido)
   .then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
   })
}

if (pedidoId) {
    return (
        <div className="container">
            <h1 className="main-title">Muchas gracias por tu compra</h1>
            <p>Tu número de pedido es: {pedidoId}</p>
        </div>
    )
}

  
  
    return (
   
        <div>
            <h2 className="titulo_pagina">Finalizar compra</h2>
            <form className="formulario_contacto" onSubmit={handleSubmit(comprar)}>
                
                <input className="input_contacto" type="text" placeholder="Ingresa tu nombre" {...register ("nombre")}
                />

                <input className="input_contacto" type="email" placeholder="Ingresa tu Email"{...register ("email")}
                 />

                <button className="boton_enviar" type="submit">Comprar</button>
            </form>
        </div>
      
   
  )
}

export default Checkout;