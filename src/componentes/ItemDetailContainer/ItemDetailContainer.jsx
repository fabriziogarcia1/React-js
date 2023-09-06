import { useEffect, useState} from "react";
import ItemDeta from "./itemDeta";
import { useParams } from "react-router-dom";
import {doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/config"

const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {

    const docRef = doc(db, "Productos", id);
    getDoc(docRef)
      .then((resp) => {
        setItem(
          { ...resp.data(), id: resp.id }
        );
      })

  }, [id])
  

return (
  <div>
      {item && <ItemDeta item={item} />}
  </div>
)
}

export default ItemDetailContainer;