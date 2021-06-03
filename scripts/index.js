import { buscar } from "./modules/buscar.js";
document.addEventListener("DOMContentLoaded",()=>{

    var searchBox = document.getElementById("search-form");
    var offset =0;


    

    searchBox.addEventListener("submit",(e)=>{
        e.preventDefault();
        buscar(offset,searchBox);
    })
    
})


