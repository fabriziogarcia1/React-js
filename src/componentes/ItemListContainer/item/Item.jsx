import React from "react";

 const Item = ( {pelicula} ) => {
  return (
    <div className="cardPeliculas">             
    <img  className = "cardImagen" src={pelicula.img} alt={pelicula.titulo} />
    <p>{pelicula.titulo}</p>
    <p>${pelicula.precio}</p>
    <p>{pelicula.descripcion}</p>
    
    
</div>)
}
export default Item
