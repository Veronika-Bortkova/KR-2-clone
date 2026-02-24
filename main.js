fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((users) => {
        console.log(users);
        let arrDivBloks = Array.from(document.getElementsByClassName("block"));
           arrDivBloks.forEach((divBlock, index) =>{
               // if (users[index]) {
               let divId = document.createElement("div");
               divId.className = "name";
               let divName = document.createElement("div");
               divName.className = "name";
               divId.innerText = users[index].id;
               divName.innerText = users[index].name;
               divBlock.append(divId, divName);
               // }
           });
    });