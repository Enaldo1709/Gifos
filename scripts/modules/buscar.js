import { API } from "./APIFunctions.js";
import { Favoritos } from "./favoritos.js";
import { parseGifos } from "./parser.js";


export var buscar = async (offset,searchBox) =>{
    
    var searchValue = new FormData(searchBox).get("search-value");
    var gifs = await API.getSearchResults(searchValue,12,offset);
    
    render(gifs,searchValue);
}

var render = async (gifs,searchValue) =>{
    console.log(gifs);
    var resultBox = document.getElementById("result-box");
    var trendingBox = document.querySelector("div.trending-topics");
    var title = `<h2>${searchValue}</h2>`
    var noResults=`<div id="noResults">
    <img src="./assets/icon-busqueda-sin-resultado.svg">
    <p>Intenta con otra búsqueda</p>
</div>`;

    var verMasBtn = `<div class="ver-mas-container"><button id="ver-mas-btn">VER MÁS</button></div>`;

    if(!(trendingBox.classList.contains("noVisible"))) trendingBox.classList.add("noVisible");
    resultBox.innerHTML=title + ((gifs.length==0)?noResults:`${parseGifos(gifs)}${verMasBtn}`);

    gifs.forEach(gif=>{
        document.getElementById(`fav-btn-${gif.id}`).addEventListener("click",()=>{
            Favoritos.addFavorito(gif.id);
        })
    })
    document.getElementById("ver-mas-btn").addEventListener("click",async ()=>{
        gifs= await buscarMas(gifs,searchValue);
        render(gifs,searchValue);
    })
}

var buscarMas = async (gifs,searchValue) =>{
    var resultado=gifs;
    var nuevos = await API.getSearchResults(searchValue,12,resultado.length);
    nuevos.forEach(gif=>{
        resultado.push(gif);
    })
    console.log(resultado);
    return resultado;
}

