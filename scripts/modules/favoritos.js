import { API } from "./APIFunctions.js";
import {parseGifos} from "./parser.js";
import { Tags } from "./trendingTags.js";

export var Favoritos = {
    favoritosTemplate:`<div class="favoritos-container">
    <img src="../assets/icon-favoritos.svg" alt="Favoritos" class="favoritos-icon">
    <h2>Favoritos</h2>
</div>
<div id="result-box"></div>`,

    emptyTemplate:`<div class="favoritos-empty-container">
    <img src="../assets/icon-fav-sin-contenido.svg" alt="Favoritos" class="favoritos-icon-empty">
    <p>"¡Guarda tu primer GIFO en Favoritos para que se muestre aquí!"</p>
</div>`,

    gifs:localStorage.getItem("GIFOS_FAVORITOS")?JSON.parse(localStorage.getItem("GIFOS_FAVORITOS")):[],

    initService: ()=>{
        document.getElementById("link-favoritos").addEventListener("click",()=>{
            Tags.stopService();
            Favoritos.favoritosRenderTemplate();
        });

        document.getElementById("link-favoritos-mobile").addEventListener("click",()=>{
            Tags.stopService()
            Favoritos.favoritosRenderTemplate();
        });

    },

    favoritosRenderTemplate:()=>{
        const container = document.getElementById("container");
        container.classList=[];
        container.classList.add("favoritos");
        var verMasBtn = `<div class="ver-mas-container"><button id="ver-mas-btn">VER MÁS</button></div>`;

        Favoritos.updateGifs();
        container.innerHTML=Favoritos.favoritosTemplate;
        const resultBox = document.getElementById("result-box");

        if (Favoritos.gifs.length){
            
            console.log(resultBox);
            console.log(Favoritos.gifs);
            resultBox.innerHTML = `${parseGifos(Favoritos.gifs)}${(Favoritos.gifs.length>12)?verMasBtn:""}`;

        }else{
            resultBox.innerHTML=Favoritos.emptyTemplate;
        }
        
    },

    updateGifs:()=>{
        Favoritos.gifs=localStorage.getItem("GIFOS_FAVORITOS")?JSON.parse(localStorage.getItem("GIFOS_FAVORITOS")):[];
    },

    saveGifs: () =>{
        localStorage.setItem("GIFOS_FAVORITOS",JSON.stringify(Favoritos.gifs));
    },
    
    isFavorito: (id)=>{
        var favorito = false;
        Favoritos.updateGifs();
        Favoritos.gifs.forEach(gif=> favorito=(gif.id===id)?true:favorito);
        return favorito;
    },

    addFavorito: async (id)=>{
        const cardFavoritebButtonIcon = document.getElementById(`i${id}`);
        cardFavoritebButtonIcon.classList.toggle("fas");
        cardFavoritebButtonIcon.classList.toggle("far");
        Favoritos.updateGifs();
        if(Favoritos.isFavorito(id)){
            let index=0;
            Favoritos.gifs.forEach(gif => {
                if(gif.id === id) {
                    index=Favoritos.gifs.indexOf(gif);
                }
            });
            Favoritos.gifs.splice(index,1);
            Favoritos.saveGifs();
        }else{
            var gif = await API.getGifByID(id);
            Favoritos.gifs.push(gif);
            Favoritos.saveGifs();
        }
    }
}


