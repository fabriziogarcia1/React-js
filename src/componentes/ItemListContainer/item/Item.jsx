import React from "react";
import { Link } from "react-router-dom";

 const Item = ( {pelicula} ) => {
  return (
    <div className="cardPeliculas">             
    <img  className = "cardImagen" src={pelicula.img} alt={pelicula.titulo} />
    <p>{pelicula.titulo}</p>
    <p>${pelicula.precio}</p>
    <p>{pelicula.descripcion}</p>
    <Link to={`/item`}>ver mas</Link>
    
</div>)
}
export default Item
