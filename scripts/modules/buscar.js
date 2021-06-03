import { API } from "./APIFunctions.js";

export var buscar = async (offset,searchBox) =>{
    var resultBox = document.getElementById("result-box");
    var trendingBox = document.querySelector("div.trending-topics");
    
    var searchValue = new FormData(searchBox).get("search-value");
    var resultado = await API.getSearchResults(searchValue,12,offset);
    var noResults='No hay resultados';
    
    trendingBox.classList.contains("noVisible")?null:trendingBox.classList.add("noVisible");
    resultBox.innerHTML=(resultBox.innerHTML==='' && resultado==='')?noResults:resultado;

}



