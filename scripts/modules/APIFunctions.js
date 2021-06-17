/**
 * @fileoverview
 * Objeto que define la API, sus propiedades y los métodos 
 * usados para consultar la API.
 * @author Enaldo Narváez
 */
export var API={
    /**
     * Propiedad que define la url de la API
     * @type{string}
     */
    API_URL:"https://api.giphy.com/v1/",
    
    /**
     * Propiedad que define los endpoints de la API
     * @type{object}
     */
    endpoint:{
        trending:"gifs/trending",
        search:"gifs/search",
        suggestions:"tags/related/",
        trendingTopics:"trending/searches"
    },

    /**
     * Propiedad que contiene el API key para poder usar la API
     * @type{string}
     */
    API_KEY:"NuVlDIlFFGWkBul3ybUedOCkHbQjm0RI",

    pullGifos: async (url)=>{
        /**
         * Funcion que consulta la API
         * @param{string: url}
         * @return{[gifs[]: gifs}
        */
        
        var gifs =fetch(url)
        .then(response => response.json())
        .then(response => response.data)
        .then(response => {
            //console.log(response);
            var gifs = []; var gif = {};
            response.forEach(object => {
                gif = {
                    id:response.id,
                    title:object.title,
                    image:object.images.fixed_height_downsampled.webp?{
                        url:object.images.fixed_height_downsampled.url,
                        webp:object.images.fixed_height_downsampled.webp,
                        default:object.images.fixed_height_downsampled.webp
                    }:object.images.fixed_height_downsampled.url?{
                        url:object.images.fixed_height_downsampled.url,
                        default:object.images.fixed_height_downsampled.url
                    }:object.images.original.webp?{
                        url:object.images.original.url,
                        webp:object.images.original.webp,
                        default:object.images.original.webp
                    }:{
                        url:object.images.original.url,
                        default:object.images.original.url
                    },
                    user:object.username,
                    url:object.url
                };
                gifs.push(gif);
                
            });
            return gifs;
        })
        .catch(error => {console.error("Error en la respuesta del servidor: "+error.message+'\n'+error.stack);})
        return gifs;
    },


    getTrendingGifos:async (limit=12,offset=0)=>{
        /**
         * Funcion que retorna los trending Gifs de la API
         * @param{number: limit}
         * @param{number: offset}
         * @return{[gifs[]: gifs}
        */
        var url = `${API.API_URL}${API.endpoint.trending}?api_key=${API.API_KEY}&limit=${limit}${(offset==0)?'':`&offset=${offset}`}`;

        console.log(url);
        return  await API.pullGifos(url);
    },

    getSearchResults:async (query,limit=12,offset=0) =>{
        /**
         * Funcion que retorna los Gifs resultantes de la búsqueda.
         * @param{string: query}
         * @param{number: limit}
         * @param{number: offset}
         * @return{[gifs[]: gifs}
        */
        var url=`${API.API_URL}${API.endpoint.search}?api_key=${API.API_KEY}&q=${query}&limit=${limit}${(offset==0)?'':(`&offset=${offset}`)}`;
        //console.log(url)
        return await API.pullGifos(url);
    },
    getRelatedTags:async (term,requested=8)=>{
        /**
         * Funcion que retorna los terminos relacionados a los caracteres 
         * ingresados en la caja de búsqueda.
         * @param{string: term}
         * @param{number: requested}
         * @return{string[]: tags}
        */
        var url=API.API_URL+API.endpoint.suggestions+term+`?api_key=${API.API_KEY}`;
        var tags=fetch(url)
        .then(response => response.json())
        .then(response => response.data)
        .then(response =>{
            let tags=[];
            if (response.lenght >= requested){
                for (let i=0;i<requested;i++){
                    tags.push(response[i].name);
                }
            }else{
                response.forEach(value =>{
                    tags.push(value.name);
                })
            }
            return tags;
        })
        .catch(error => {console.error("Error en la respuesta del servidor: "+error.message+'\n'+error.stack);})
        return tags;
    },
    
    getTrendingTags : async (requested=5) =>{
        /**
         * Funcion que retorna los terminos más buscados ue son tendencia en el momento.
         * @param{string: term}
         * @param{number: requested}
         * @return{string[]: tags}
        */
        var url=API.API_URL+API.endpoint.trendingTopics+`?api_key=${API.API_KEY}`;
        var tags = fetch(url)
        .then(response => response.json())
        .then(response => response.data)
        .then(response => {
            let tags = "";
            var total = (requested<=response.length)?requested:response.length;
            for(let i = 0; i<total; i++){
                tags+=`${response[i].charAt(0).toUpperCase()}${response[i].slice(1)}${(i===(total-1))?"":", "}`
            }
            return tags;
        })
        .catch(error => {console.error("Error en la respuesta del servidor: "+error.message+'\n'+error.stack);})
        return tags;
    }
}