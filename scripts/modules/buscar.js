import { API } from "./APIFunctions.js";
import { parseGifos } from "./parser.js";

export var buscar = async (offset,searchBox) =>{
    var resultBox = document.getElementById("result-box");
    var trendingBox = document.querySelector("div.trending-topics");
    var searchValue = new FormData(searchBox).get("search-value");
    var gifs = await API.getSearchResults(searchValue,12,offset);
    var title = `<h2>${searchValue}</h2>`
    var noResults=`<div id="noResults">
<img src="./assets/icon-busqueda-sin-resultado.svg">
<p>Intenta con otra búsqueda</p>
</div>`;
    
    console.log(gifs.length,gifs);
    if(trendingBox.classList.contains("noVisible")) trendingBox.classList.add("noVisible");
    resultBox.innerHTML=title + ((gifs.length==0)?noResults:parseGifos(gifs));
    return gifs;
}



