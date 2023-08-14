import { useState, useEffect } from "react";
import './card.css';
import ItemList from "./ItemList/index.jsx";
import { PeliculasCartelera } from '../pedirproductos/PeliculasCartelera.js';
import { useParams } from "react-router-dom";



export const ItemListContainer = () => {
    //const donde estan las peliculas
   
    const [peliculas, setPeliculas] = useState([]);
    const [titulo, setTitulo ] = useState("Productos");
    const categoria = useParams().categoria;
   console.log(categoria)
      
   useEffect(() => {
        PeliculasCartelera()
           .then((res) =>{
                if(categoria){
                setPeliculas(res.filter((prod) => prod.categoria === categoria));
                setTitulo (categoria);
}      else {
        setPeliculas(res);
    }
   })
   }, [categoria])
   
    

    return (
        <div className="DivContenedor">
            <ItemList peliculas={peliculas} titulo={titulo} />
        </div>
    );
}
export default ItemListContainer;