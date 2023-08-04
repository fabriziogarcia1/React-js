import { useState, useEffect } from "react";
import './card.css';
import data from "../data/Peliculas.json";//Producto de peliculas
import { Link } from "react-router-dom";

export const ItemListContainer = () => {
    //const donde estan las peliculas
    const[peliculas, setPeliculas] = useState([]);

    const PeliculasCartelera = () =>{
        return new Promise ( (resolve, reject)=>{
            resolve(data)
        });
    }

    useEffect(() =>{
        PeliculasCartelera()
         .then((res) =>{
            setPeliculas (res);
         })
    }, [])
    

    return (
        <div className="DivContenedor">
             {
              peliculas.length > 0 &&
 
              peliculas.map((pelicula) => {
                return(
                
                <div className="cardPeliculas">
                    
                     <img  className = "cardImagen" src={pelicula.img} alt={pelicula.titulo} />
                     <p>{pelicula.titulo}</p>
                     <p>${pelicula.precio}</p>
                     <p>{pelicula.descripcion}</p>
                     <Link to={pelicula.id}>Ver mas</Link>
                </div>
                )
              })
            }
              
        </div>
    );
}
export default ItemListContainer;