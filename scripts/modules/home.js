import { Tags } from "./trendingTags.js";
import { changeTheme } from "./changeTheme.js";
import { API } from "./APIFunctions.js";

var homeHTML = `<h1>Inspírate, busca, guarda, y crea los mejores <span>GIFOS</span></h1>
<img src="./assets/ilustra_header.svg" alt="GIFOS">
<form id="search-form">
    <input type="search" name="search-value" placeholder="Busca GIFOS y más">
    <button type="submit"><i class="fas fa-search"></i></button>
</form>
<div class="trending-topics">
    <h2>Trending</h2>
    <p id="trending-topics"></p>
</div>
<div id="result-box"></div>`;

var container = document.getElementById("container");

export var renderHomeStart = () =>{

    container.classList=[];
    container.classList.add("home");
    container.innerHTML=homeHTML;

    Tags.startService();
    Tags.updateTrendingTags();

    document.getElementById("link-modo-oscuro").addEventListener("click",changeTheme)
    document.getElementById("link-modo-oscuro-mobile").addEventListener("click",changeTheme)
    
    document.querySelector("#menu-button").addEventListener("click",()=>{
        document.querySelector("#menu").classList.toggle("noVisible");
    })

    
}