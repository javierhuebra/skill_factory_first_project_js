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
            <div>${user.id}</div>
            <div>${user.name}</div>
            <div>${user.email}</div>
            <div>${user.phone}</div>
            <div>${user.address.city}</div>
            <div>${user.company.name}</div>
         </div>`;
     }) 
          
   
     document.getElementById("users").innerHTML = elementUser;
 }