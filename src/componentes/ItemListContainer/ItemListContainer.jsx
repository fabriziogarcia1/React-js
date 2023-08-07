import { useState, useEffect } from "react";
import './card.css';
import ItemList from "./ItemList/index.jsx";
import { PeliculasCartelera } from '../pedirproductos/PeliculasCartelera.js';



export const ItemListContainer = () => {
    //const donde estan las peliculas
   
    const [peliculas, setPeliculas] = useState([]);
  
    console.log(peliculas)
    useEffect(() => {
     PeliculasCartelera()
   .then((res) =>{
    setPeliculas(res);

   })
   }, [])
   
    

    return (
        <div className="DivContenedor">
            <ItemList peliculas={peliculas} />
        </div>
    );
}
export default ItemListContainer;