import data from "../data/Peliculas.json"

export const PeliculasCartelera = () =>{
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
        resolve(data);
    },500)
  })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((el) => el.id ===   id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "No se encontró el producto papa"
            })
        }

    })
}


