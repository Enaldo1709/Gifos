var methods = {
    trending:{
        url:'https://api.giphy.com/v1/gifs/trending',
        reqKeyw:false,
        reqKey:''
    },
    search:{
        url:'https://api.giphy.com/v1/gifs/search',
        reqKeyw:true,
        reqKey:'q'
    }
};

var extraerGifs = async (API_URL) =>{
    var responseText= fetch(API_URL)
    .then(response => response.json())
    .then(response => response.data)
    .then(response => {
        let responseText='';
        for (const object of response) {
            console.log(object);
            responseText+=`
            <div id="card">
                <img src="${object.images.original.webp?object.images.original.webp:object.images.original.url}">
                <div id="cover">
                    <a href="${object.url}"><button>Ver en GIPHY</button></a>
                </div>
            </div>
            `
        }
        //console.log(responseText);
        console.log(responseText);
        return responseText;
    })
    .catch(error => {console.log("Error en la respuesta del servidor: "+error.message)});
    return responseText;
}

export var obtenerGifs = async (parent,method,limit=10,keyword="") => {
    let API_KEY ='NuVlDIlFFGWkBul3ybUedOCkHbQjm0RI';
    try{
        let API_URL = `${methods[method].url}?api_key=${API_KEY}${(methods[method].reqKeyw)?'&'+methods[method].reqKey+'='+keyword:''}&limit=${limit}`;
        console.log(API_URL);
        var responseText = await extraerGifs(API_URL);
        return responseText;

    }catch(error){
        console.log("El método no es válido");
        console.error(error);
    }
    
}