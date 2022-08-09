"use strict"

let nameForm=document.querySelector(".name");
let emailForm=document.querySelector(".email");
let messageForm=document.querySelector(".message");

let buttonForm=document.querySelector(".btn-submit");

buttonForm.addEventListener("click",()=>{
     let cantArrobas=0;
    for(let i=0;i<emailForm.value.length;i++){
        if(emailForm.value[i]=='@')cantArrobas++;
    } 
     
    if(cantArrobas!=1)document.querySelector(".alert").style.display="flex";
    else if(nameForm.value==""||emailForm.value==""||messageForm.value==""){
        document.querySelector(".alert").style.display="flex";
    }else{
        document.querySelector(".text-email").innerHTML=emailForm.value;
        document.querySelector(".text-name").innerHTML=nameForm.value;
        document.querySelector(".text-msj").innerHTML=messageForm.value;
    }
});

document.getElementById("btn_understand").addEventListener("click",()=>{
    document.querySelector(".alert").style.display="none";
});

