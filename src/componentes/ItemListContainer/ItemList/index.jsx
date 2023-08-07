import Item from "../item/Item"

const ItemList =( {peliculas} ) => {
    return (
        <div  className="DivContenedor">
            { peliculas.map((prod)=> <Item pelicula={prod} key={prod.id} />)}
        </div>
    )
};
export default ItemList;