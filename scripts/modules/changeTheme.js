export var changeTheme = () =>{
    const link = document.getElementById("link-modo-oscuro");
    const linkMobile = document.getElementById("link-modo-oscuro-mobile");

    if (link.innerText === "MODO NOCTURNO" && linkMobile.innerText === "Modo Nocturno"){
        link.innerText = "MODO DIURNO";
        linkMobile.innerText = "Modo Diurno";
    }else{
        link.innerText = "MODO NOCTURNO";
        linkMobile.innerText = "Modo Nocturno";
    }


    document.body.style.transition="0.5s ease-in-out all";
    document.body.classList.toggle("dark");
    setTimeout(()=>{
        document.body.style.transition="unset";
    },500)
}