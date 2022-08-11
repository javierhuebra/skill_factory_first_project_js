const URL_USERS = "https://jsonplaceholder.typicode.com/users";
fetch(URL_USERS) // Infiere en que el pedido es un GET
     .then((response) => response.json())
     .then((data) => showData(data)); 

 
 function showData(data) {
     console.log("Data", data);
     let elementUser = ``;
     data.map((user)=>{
        console.log(user);
         elementUser += `
         <div class='user'>
            <div class="u-table user-id">${user.id}</div>
            <div class="u-table">${user.name}</div>
            <div class="u-table">${user.email}</div>
            <div class="u-table">${user.phone}</div>
            <div class="u-table">${user.address.city}</div>
            <div class="u-table">${user.company.name}</div>
         </div>`;
     }) 
          
   
     document.getElementById("users").innerHTML = elementUser;
 }