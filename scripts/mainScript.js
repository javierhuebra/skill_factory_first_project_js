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