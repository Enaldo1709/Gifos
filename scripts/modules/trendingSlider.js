import { API } from "./APIFunctions.js";
import { parseGifos } from "./parser.js";

export var Slider = {
    gifs:[],
    init:async () =>{
        const container = document.querySelector("div#slider");
        const btnLeft = document.querySelector("button#slider-left-btn");
        const btnRigth = document.querySelector("button#slider-right-btn");
        Slider.gifs=await API.getTrendingGifos(9,0);
        console.log(btnLeft);

        Slider.render();
        const cards = document.querySelectorAll("div.slider-card-container");
        const Last = cards[cards.length-1];
        container.insertAdjacentElement("afterbegin",Last);
        //setInterval(Slider.next,10000);

        btnLeft.addEventListener("click",Slider.prev);
        btnRigth.addEventListener("click",Slider.next);

    },
    next:() =>{
        let container = document.querySelector("div#slider");
        container.style.marginLeft="-200%";
        container.style.transition = "0.3s ease all";
        setTimeout(()=>{
            let First = document.querySelectorAll("div.slider-card-container")[0];
            container.insertAdjacentElement("beforeend",First);
            container.style.transition="unset";
            container.style.marginLeft="-100%";
        },300);
    },
    prev:() =>{
        let container = document.querySelector("div#slider");
        container.style.marginLeft="0";
        container.style.transition = "0.3s ease all";
        setTimeout(()=>{
            let cards = document.querySelectorAll("div.slider-card-container");
            let Last = cards[cards.length -1];
            container.insertAdjacentElement("afterbegin",Last);
            container.style.transition="unset";
            container.style.marginLeft="-100%";
        },300);
    },
    render:()=>{
        let container = document.querySelector("div#slider");
        let set=[]
        for (let i = 0;i<9;i=i+3){
            set.push(Slider.gifs.slice(i,i+3));
        }
        set.forEach(gifSet=>{
            var card = document.createElement("div");
            card.classList.add("slider-card-container");
            card.innerHTML=parseGifos(gifSet);
            container.insertAdjacentElement("beforeend",card);
        })
    }
}