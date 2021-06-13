document.addEventListener("DOMContentLoaded",()=>{
    const container = document.querySelector("div#slider");
    const cards = document.querySelectorAll("div.slider-card-container");
    const btnLeft = document.querySelector("button#slider-left");
    const btnRigth = document.querySelector("button#slider-right");

    container.insertAdjacentElement("afterbegin",cards[cards.length -1]);
    
    const Next = () =>{
        container.style.marginLeft="-200%";
        container.style.transition = "0.3s ease all";
        setTimeout(()=>{
            let First = document.querySelectorAll("div.slider-card-container")[0];
            container.insertAdjacentElement("beforeend",First);
            container.style.transition="unset";
            container.style.marginLeft="-100%";
        },300)
    }

    const Prev = () =>{
        container.style.marginLeft="0";
        container.style.transition = "0.3s ease all";
        setTimeout(()=>{
            let Last = document.querySelectorAll("div.slider-card-container")[cards.length -1];
            container.insertAdjacentElement("afterbegin",Last);
            container.style.transition="unset";
            container.style.marginLeft="-100%";
        },300)
    }

    btnRigth.addEventListener("click",Next);
    btnLeft.addEventListener("click",Prev);

})
