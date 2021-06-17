export var changeTheme = () =>{
    document.body.style.transition="0.5s ease-in-out all";
    document.body.classList.toggle("dark");
    setTimeout(()=>{
        document.body.style.transition="unset";
    },300)
}