import { useState, useEffect } from "react";
import './card.css';
import ItemList from "./ItemList/index.jsx";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/config";




export const ItemListContainer = () => {
    //const donde estan las peliculas
   
    const [peliculas, setPeliculas] = useState([]);
    const [titulo, setTitulo ] = useState("Productos");
    const categoria = useParams().categoria;
  
      
   useEffect(() => {

    const productosRef = collection(db, "Productos");
const q = categoria ? query(productosRef, where("categoria", "==", categoria)): productosRef;
    
    getDocs(q)
    .then((resp) => {
     
        setPeliculas(
            resp.docs.map((doc) =>{
                return { ...doc.data(), id: doc.id }
            })
        )
    
    })

       
   }, [categoria])
   
    

    return (
        <div className="DivContenedor">
            <ItemList peliculas={peliculas} titulo={titulo} />
        </div>
    );
}
export default ItemListContainer;