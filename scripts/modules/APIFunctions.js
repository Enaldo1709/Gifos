API={
    API_URL:"https://api.giphy.com/v1/gifs/",
    endpoint:{
        trending:"trending",
        search:"search"
    },
    API_KEY:"NuVlDIlFFGWkBul3ybUedOCkHbQjm0RI",

    pullGifos: async (url)=>{
        var responseText=fetch(url)
        .then(response => response.json())
        .then(response => response.data)
        .then(response => {
            let responseText = '';
            response.forEach(object => {
                responseText+=`<div id="card">\n\t<img src="${object.images.original.webp?object.images.original.webp:object.images.original.url}">\n\t<div id="cover">\n\t\t<a href="${object.url}"><button>Ver en GIPHY</button></a>\n\t</div>\n</div>`;
            });
            return responseText;   
        })
        .catch(error => {console.error("Error en la respuesta del servidor: "+error.message+'\n'+error.stack);})
        return responseText;
    },

    getTrendingGifos:async (limit=12,offset=0)=>{
        url=API_URL+endpoint.trending+`?api_key=${API_KEY}&limit=${limit}`+(offset==0)?'':`&offset=${offset}`;
        responseText= await pullGifos(url);
    },

    getSearchResults:async (query,limit=12,offset=0) =>{
        url=API_URL+endpoint.search+`?api_key=${API_KEY}&q=${query}&limit=${limit}`+(offset==0)?'':`&offset=${offset}`;
        responseText= await pullGifos(url);
    }
}