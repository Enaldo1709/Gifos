import { isFavorito } from "./isFavorito.js";
export var parseGifos=(gifs)=>{
    /**
    * Funcion que formatea los gif en formato de las tarjetas HTML
    * @param{[gifs[]: gifs}
    * @return{string: reponseText}
   */
   let responseText = '';
   gifs.forEach(gif => {
       responseText+=`<div class="card">
<img src="${gif.image.default}">
<div class="cover">
   <nav>
       <button onclick="Favoritos.addFavorito('${gif.id}')" id="${gif.id}"><i id="i${gif.id}" class="${isFavorito(gif.id)?"fas":"far"} fa-heart"></i></button>
       <a href="${gif.image.url}" target="_blank" download="true"><button id="download"><i class="fas fa-download"></i></button></a>
       <button onclick="openFullScreen(${gif.id})"><i class="fas fa-expand-alt"></i></button>
   </nav>
   <h4>${gif.user?gif.user:'User'}</h4>
   <a href="${gif.url}" target="_blank" class="title"><h3>${gif.title?gif.title:'Title'}</h3></a>
</div>
</div>`;
   });
   return responseText;
}