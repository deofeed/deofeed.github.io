'use strict';

const BASE = "/imgs/"

let feeds = [
     {href:"/imgs/1.jpg"}
    ,{href:"/imgs/2.jpg"}
    ,{href:"/imgs/3.jpg"}
]

const feedno = 30;

const feed_list =[
    "1.jpeg"
    ,"2.jpeg"
    ,"3.jpeg"
]


function init(){
    console.log(`funtion init started. basepath : ${BASE} ::`)
    let mainbox = document.getElementById("mainbox");


    //for (const feed of feed_list){
    for(let i=1;i<=feedno;i++){
        let feed=`${i}.jpeg`
        console.log(`feed element img string: ${feed} ::`);
        let item = document.createElement("div");
        let imago = document.createElement("img");
        imago.src=BASE+feed;
        imago.id=feed;
        imago.class="feedimg"


        item.appendChild(imago);
        mainbox.appendChild(item);
    }

}

init();