import { buscar } from "./modules/buscar.js";
import {renderHomeStart} from "./modules/home.js";
import { Slider } from "./modules/trendingSlider.js";


document.addEventListener("DOMContentLoaded",()=>{
    var gifs=[];
    var header = document.getElementsByTagName("header")[0];
    var footer = document.getElementsByTagName("footer")[0];
    

    renderHomeStart();
    var searchBox = document.getElementById("search-form");
    var offset =0;

    Slider.init();
    
    
    
    
    searchBox.addEventListener("submit",(e)=>{
        e.preventDefault();
        gifs = buscar(offset,searchBox);
        if (gifs.length>0){
            gifs.forEach(gif=>{
                document.getElementById(`fav-btn-${gif.id}`).addEventListener("click",()=>{
                    Favoritos.addFavorito(gif.id);
                });
            })
        }
    })
    
})


