import { API } from "./APIFunctions.js";

export var Tags ={
    running : true,
    setTrendingTags : async () => {
        var tags = document.getElementById("trending-topics")
        var topics = await API.getTrendingTags();
        tags.innerText=topics;
    },
    startService:()=> {
        Tags.running=true;
        Tags.setTrendingTags();
        Tags.updateTrendingTags();
    },
    stopService:()=>{
        Tags.running=false;
    },

    updateTrendingTags : () => {
        setInterval(() => {
            if (Tags.running){
                Tags.setTrendingTags();
            }
        }, 10000);
    }

}



