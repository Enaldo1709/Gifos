import { Favoritos } from "./favoritos.js";
export var isFavorito = (id)=>{
    var favorito = false;
    Favoritos.updateGifs();
    Favoritos.gifs.forEach(gif=> favorito=(gif.id===id)?true:favorito);
    return favorito;
}