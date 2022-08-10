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
                    <p class="name-card">${character.name}</p>
                    <p><span class="data-card">ID:</span> ${character.id}</p>
                    <p><span class="data-card">Species:</span> ${character.species}</p>
                    <p><span class="data-card">Origin:</span> ${character.origin.name}</p>
                    <p><span class="data-card">Status:</span> <span class="${character.status=='Alive' ? 'green' : 'red'}${character.status=='unknown' ? 'unknown' : ''}">${character.status}<span></p>
                </div>

            </div>
        `;
    });  
          
   
      document.getElementById("cards").innerHTML += elementCharacter; 
}