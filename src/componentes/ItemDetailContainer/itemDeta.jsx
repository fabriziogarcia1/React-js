import { useContext, useState } from "react";
import { Link } from "react-router-dom";


const ItemDeta = ({item}) =>{
    return (
        <div className="cardPeliculas">             
    <img  className = "cardImagen" src={item.img} alt={item.titulo} />
    <p>{item.titulo}</p>
    <p>${item.precio}</p>
    <p>{item.descripcion}</p>
   
   
</div>
    )
};
export default ItemDeta;
