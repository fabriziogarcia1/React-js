
import React,{ useEffect, useState} from "react";
import ItemDeta from "./itemDeta";
import { pedirItemPorId } from "../pedirproductos/PeliculasCartelera";

export const ItemDetailContainer =( {itemId} ) => {
  const [item, setItem] = useState(undefined)
  
  useEffect(() => {
    pedirItemPorId(itemId)
    .then((res) =>{
      setItem(res);
    })
  }, [itemId])
  

  return (
      <div>
        {item && <ItemDeta item={item} /> }
        </div>
    )
};

export default ItemDetailContainer;