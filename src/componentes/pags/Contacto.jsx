import React, { useState } from "react";
import './contacto.css';
const Contacto = () =>{
    


    const [valores, setValores] = useState({
        nombre:"", 
        email:"",
});
  
    const handleSubmit = (e) => {
          e.preventDefault();
         console.log("enviado", {valores})
         
    }
    
const handleValores = (e) =>{
setValores({...valores,
    [e.target.name]: e.target.value
})
}


    return(
        <div>
            <h2 className="titulo_pagina">Contacto</h2>
            <form className="formulario_contacto" onSubmit={handleSubmit}>
                <input 
                className="input_contacto" 
                type="text" 
                placeholder="Ingresa tu nombre"
                value={valores.nombre}
                onChange={handleValores} 
                name="nombre"/>

                <input
                 className="input_contacto" 
                 type="email"
                 placeholder="Ingresa tu Email"
                 value={valores.email}
                 onChange={handleValores}
                 name="email"
                 />

                <button className="boton_enviar" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto