"use strict"
let i=1;
function makeRequest(value){
    const URL_USERS = `https://rickandmortyapi.com/api/character/?page=${value}`;
    fetch(URL_USERS) // Infiere en que el pedido es un GET
        .then((response) => response.json())
        .then((data) => showData(data)); 
}

makeRequest(i);

 document.querySelector("#load-btn").addEventListener("click",()=>{
    i++;
    makeRequest(i);
 });

 
 function showData(data){
     console.log("Data", data);
     let elementCharacter = ``;
     data.results.map((character)=>{
        console.log(character)
        elementCharacter += `
            <div class='card'>
                <img src='${character.image}'>
                <div>
                    <p>Name: ${character.name}</p>
                    <p>ID: ${character.id}</p>
                    <p>Species: ${character.species}</p>
                    <p>Origin: ${character.origin.name}</p>
                    <p>Status: ${character.status}</p>
                </div>

            </div>
        `;
    });  
          
   
      document.getElementById("cards").innerHTML += elementCharacter; 
}