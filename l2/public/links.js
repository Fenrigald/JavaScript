// Basket button
const myLink1 = document.getElementById('hw1');
let checkLink1 = false;
myLink1.onclick = function(event){
    if(checkLink1 === false){
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "public/basket.js"; 
        document.getElementsByTagName("body")[0].appendChild(script);
        checkLink1 = true;
        myLink1.classList.add('clicked');
        return;
    } else {
        return;
    }
}

// Millionair button
const myLink2 = document.getElementById('hw2');
let checkLink2 = false;
myLink2.onclick = function(event){
    if(checkLink2 === false){
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "public/catalog.js"; 
        document.getElementsByTagName("body")[0].appendChild(script);
        checkLink2 = true;
        myLink2.classList.add('clicked');
        return;
    } else {
        return;
    }
}