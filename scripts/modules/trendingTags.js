import { API } from "./APIFunctions.js";

export var Tags ={
    running : true,
    setTrendingTags : async () => {
        var tags = document.getElementById("trending-topics")
        var topics = await API.getTrendingTags();
        tags.innerText=topics;
    },
    updateTrendingTags : () => {
        setInterval(() => {
            Tags.setTrendingTags();
        }, 10000);
    }

}



