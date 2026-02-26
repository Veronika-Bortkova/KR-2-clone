fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then((users) => {
        // console.log(users);
        let arrDivBloks = Array.from(document.getElementsByClassName("block"));
           arrDivBloks.forEach((divBlock, index) =>{
            if (users[index]) {
                let divTitle = document.createElement("div");
                divTitle.className = "title";
                let divId = document.createElement("div");
                divId.className = "id";
                let divName = document.createElement("div");
                divName.className = "name";
                let buttonDetails = document.createElement("a");
                buttonDetails.className = "details";
                buttonDetails.href = "pages/user-details.html?id=" + users[index].id;
                buttonDetails.innerText = "Details";
                divName.className = "name";
                divTitle.innerText = "User" + " " + (index + 1);
                divId.innerText = "Id - " + users[index].id;
                divName.innerText = "Name - " + users[index].name;
                divBlock.append(divTitle, divId, divName, buttonDetails);
            }
           });
});