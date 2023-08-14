import Item from "../item/Item"

const ItemList =( {peliculas, titulo} ) => {
    return (
        <div>
            <h2>{titulo}</h2>
            <div  className="DivContenedor">
               { peliculas.map((prod) => <Item pelicula={prod} key={prod.id} />)}
            </div>
        </div>
    )
};
export default ItemList;