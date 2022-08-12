"use strict"
let pos=[0,-100,-200];

let arrowLeft=document.querySelector(".arrow-left");
let arrowRight=document.querySelector(".arrow-right");
let i=0;
document.querySelector(`.circle${i+1}`).style.opacity='1';
arrowRight.addEventListener("click",()=>{
    document.querySelector(`.circle${i+1}`).style.opacity='0.4';
    i++;
    if(i>2) i=0;
    document.querySelector(".slider-items").style.left=`${pos[i]}%`
    document.querySelector(`.circle${i+1}`).style.opacity='1';
    
});
arrowLeft.addEventListener("click",()=>{
    document.querySelector(`.circle${i+1}`).style.opacity='0.4';
    i--;
    if(i<0) i=2;
    document.querySelector(".slider-items").style.left=`${pos[i]}%`
    document.querySelector(`.circle${i+1}`).style.opacity='1';
});

/* document.getElementById("got-btn").addEventListener("click",()=>{
    document.querySelector(".cortina").style.display="none";
}); */
document.querySelector(".cortina").addEventListener("click",()=>{
    document.querySelector(".cortina").style.display="none";
    document.querySelector(".advertising").style.left="40px";
    document.querySelector(".cont-adv2").style.right="70px";
});

document.querySelector(".x-ads").addEventListener("click",()=>{
    document.querySelector(".advertising").style.display="none";
});
document.querySelector(".p-ad2").addEventListener("click",()=>{
    document.querySelector(".cont-adv2").style.display="none";
});


document.querySelector(".x-ads").addEventListener("mouseover",()=>{
    document.querySelector(".x-ads").style.color="red";
    document.querySelector(".x-ads").innerHTML="Press here X";
    document.querySelector(".x-ads").style.left="0px";
    
    
});

