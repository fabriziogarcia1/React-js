import { useContext, useState } from "react";
import './itemdetail.css';
import ItemCount from "./itemCount";
import { CartContext } from "../context/CartContext";


const ItemDeta = ({item}) =>{
    
  const { carrito, agregarAlCarrito} = useContext(CartContext)
  console.log(carrito)

  const [cantidad, setCantidad] = useState(1);
  const handleRestar = () => {
    cantidad > 1 && setCantidad (cantidad - 1);
  };
  const handleSumar = () => {
    cantidad < item.stock && setCantidad (cantidad + 1);
  };
 
    return (
        <div className="card_detail">       
        <div className="colum-uno-detail">   
                <img  className = "img_detail" src={item.img} alt={item.titulo} />
                <p className="Titulo_detail">{item.titulo}</p>
                <p className="Precio_detail">${item.precio}</p>
        </div>  
        <div className="columna-dos-detail">
    <p>{item.descripcion}</p>
    <ItemCount 

     cantidad={cantidad}
     handleSumar={ handleSumar} 
     handleRestar={handleRestar} 
     handleAgregar={() => {agregarAlCarrito(item,cantidad)}}
     
     />
    </div>
   
</div>
    )
};
export default ItemDeta;
