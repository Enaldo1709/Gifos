import { API } from "./APIFunctions.js";

export var Favoritos = {
    favoritosTemplate:`<div id="favoritos-container">
    <img src="../assets/icon-favoritos.svg" alt="Favoritos">
    <h2>Favoritos</h2>
</div>
<div id="result-box"></div>`,

    emptyTemplate:`<div id="favoritos-empty-container">
    <img src="../assets/icon-fav-sin-contenido.svg" alt="Favoritos">
    <p>"¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!"</p>
</div>`,

    gifs:localStorage.getItem("GIFOS_FAVORITOS")?JSON.parse(localStorage.getItem("GIFOS_FAVORITOS")):[],

    container:document.getElementById("container"),

    favoritosRenderTemplate:()=>{
        Favoritos.container.classList=[];
        Favoritos.container.classList.add("favoritos");
        Favoritos.container.innerHTML=homeHTML;
    },

    updateGifs:()=>{
        Favoritos.gifs=localStorage.getItem("GIFOS_FAVORITOS")?JSON.parse(localStorage.getItem("GIFOS_FAVORITOS")):[];
    },

    saveGifs: () =>{
        localStorage.setItem("GIFOS_FAVORITOS",JSON.stringify(Favoritos.gifs));
    },

    addFavorito: async (id)=>{
        const cardFavoritebButtonIcon = document.getElementById(`i${id}`);
        cardFavoritebButtonIcon.classList.toggle("fas");
        cardFavoritebButtonIcon.classList.toggle("far");
        Favoritos.updateGifs();
        var gif = await API.getGifByID(id);
        Favoritos.gifs.push(gif);
        Favoritos.saveGifs();
    }
    

}
