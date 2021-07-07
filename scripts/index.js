import { buscar } from "./modules/buscar.js";
import {renderHomeStart} from "./modules/home.js";
import { Slider } from "./modules/trendingSlider.js";
import {Favoritos} from "./modules/favoritos.js";


document.addEventListener("DOMContentLoaded",()=>{
    var gifs=[];
    var header = document.getElementsByTagName("header")[0];
    var footer = document.getElementsByTagName("footer")[0];
    

    renderHomeStart();
    Favoritos.initService();
    var searchBox = document.getElementById("search-form");
    var offset =0;

    Slider.init();
    
    
    
    
    searchBox.addEventListener("submit",(e)=>{
        e.preventDefault();
        buscar(offset,searchBox);
        
    })
    
})


