function setRandomLeft(imageWidth) {
    return (Math.random() * (window.innerWidth - imageWidth)) + "px";
}

function setRandomTop(imageHeight) {
    return (Math.random() * (window.innerHeight - imageHeight)) + "px";
}

function drawcircle(name){
try{
    document.getElementById(name).remove();
}catch{
    console.log("#ff");
}
    var div = document.createElement("div");
    /* デバッグ時はここを赤に*/
    div.style.backgroundColor = "transparent";
    div.style.position = "fixed";
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.zIndex = "-4";
    div.style.left = setRandomLeft(100);
    div.style.top = setRandomTop(100);
    div.className ="loader-6";
    div.id = name;
    document.getElementById("bd").appendChild(div);
    document.getElementById(name).appendChild(document.createElement("span"));
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

window.onload = async function(){
    /*アニメより0.1秒長く*/
setInterval("drawcircle('d1')", 1100);
await sleep(1*400);
setInterval("drawcircle('d2')", 1100);
await sleep(1*700);
setInterval("drawcircle('d3')", 1100);
}