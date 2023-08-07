import React,{ useEffect, useState} from "react";
import ItemDeta from "./itemDeta";
import { pedirItemPorId } from "../pedirproductos/PeliculasCartelera";
import { useParams } from "react-router-dom";

export const ItemDetailContainer =(  ) => {
  
  const [item, setItem] = useState(null)
  const id = useParams ().id;
 
  useEffect(() => {
    pedirItemPorId(Number(id))
    .then((res) =>{
      setItem(res);
    })
  }, [id])
  

  return (
      <div>
        {item && <ItemDeta item={item} /> }
        </div>
    )
};

export default ItemDetailContainer;