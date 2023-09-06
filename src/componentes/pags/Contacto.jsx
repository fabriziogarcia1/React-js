import { useForm } from "react-hook-form";
import './contacto.css';
const Contacto = () =>{
    
const {register, handleSubmit} = useForm();
const enviar = (data) =>{
    console.log(data)
}

    return(
        <div>
            <h2 className="titulo_pagina">Contacto</h2>
            <form className="formulario_contacto" onSubmit={handleSubmit(enviar)}>
                
                <input className="input_contacto" type="text" 
                placeholder="Ingresa tu nombre" {...register ("nombre")}
                />

                <input className="input_contacto"  
                 type="email" placeholder="Ingresa tu Email"
                 {...register ("email")}
                 />

                <button className="boton_enviar" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto