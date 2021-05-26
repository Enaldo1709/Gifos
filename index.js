import {obtenerGifs} from "./obtener.js";

let container = document.getElementById("container");
let searchForm = document.getElementById("searchBox");
let searchBox = document.getElementsByName("search")[0];
let refreshBtn = document.getElementById("refresh");

let refreshTrending = async () =>{
    container.innerHTML = await obtenerGifs(container,'trending',12);
    document.getElementById('sectiontitle').innerText = 'Trengin GIFs';
    refreshBtn.innerHTML='<i class="fas fa-redo-alt"></i>';
}

searchForm.addEventListener("submit", async (event)=>{
    event.preventDefault();
    console.log(`SUBMITTED: value= ${searchBox.value}`);
    document.getElementById('sectiontitle').innerText = `Resultados de la búsueda de "${searchBox.value}".`;
    refreshBtn.innerHTML='Trending';
    container.innerHTML= await obtenerGifs(container,'search',12,searchBox.value);

})



refreshBtn.addEventListener("click",()=>{
    refreshTrending();
    console.log('REFRESHED')
})

refreshTrending();