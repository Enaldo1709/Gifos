import { buscar } from "./modules/buscar.js";
import {renderHomeStart} from "./home.js";
import { changeTheme } from "./modules/changeTheme.js";
import { Slider } from "./modules/trendingSlider.js";


document.addEventListener("DOMContentLoaded",()=>{
    var gifs=[];
    var header = document.getElementsByTagName("header")[0];
    var footer = document.getElementsByTagName("footer")[0];


    renderHomeStart();
    var searchBox = document.getElementById("search-form");
    var offset =0;

    Slider.init();
    
    document.getElementById("link-modo-oscuro").addEventListener("click",changeTheme)
    
    searchBox.addEventListener("submit",(e)=>{
        e.preventDefault();
        gifs = buscar(offset,searchBox);
    })
    
})


