function firstСapitalLettere(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let paramsURL = new URLSearchParams(window.location.search);
let id = paramsURL.get("id");

fetch("https://jsonplaceholder.typicode.com/users"+"/"+id)
    .then(res => res.json())
    .then((objDetails) => {
        let divTopBlock = document.getElementById("topBlok");
        let titlPage = document.createElement("h1");
        titlPage.innerText = "User - " + id + " " + "details";
        divTopBlock.append(titlPage);
        for (const Key in objDetails) {
            if (Key === "address") {
                let divParamAdr = document.createElement("div");
                divParamAdr.className = "item";
                let ulAddress = document.createElement("ul");
                let divTitleAddress = document.createElement("div");
                divTitleAddress.innerText = "Address:";
                divTopBlock.append(divTitleAddress);
                for (const ulAddressKey in objDetails.address) {
                    if (ulAddressKey === "geo") {
                        let liTitleGeo = document.createElement("li");
                        let ulGeo = document.createElement("ul");
                        liTitleGeo.innerText = "Geo:";
                        for (const KeyGeo in objDetails.address.geo) {
                            let liGeo = document.createElement("li");
                            liGeo.innerText = firstСapitalLettere(KeyGeo) + ":" + " " + objDetails.address.geo[KeyGeo];
                            ulGeo.append(liGeo);
                        }
                        ulAddress.append(liTitleGeo);
                        ulAddress.append(ulGeo);
                    } else {

                        let liAdres = document.createElement("li");
                        liAdres.className = "liAdress";
                        liAdres.innerText = firstСapitalLettere(ulAddressKey) + ":" + " " + objDetails.address[ulAddressKey];
                        ulAddress.append(liAdres);
                    }
                }
                divParamAdr.append(ulAddress);
                divTopBlock.append(divParamAdr);
            } else if(Key === "company"){
                let divParamComp = document.createElement("div");
                divParamComp.className = "item";
                let ulCompany = document.createElement("ul");
                let divTitleCompany = document.createElement("div");
                divTitleCompany.innerText = "Company:";
                divTopBlock.append(divTitleCompany);
                for (const ulCompanyKey in objDetails.company) {
                    let liCompany = document.createElement("li");
                    liCompany.className = "liCompany";
                    liCompany.innerText = firstСapitalLettere(ulCompanyKey) + ":" + " " + objDetails.company[ulCompanyKey];
                    ulCompany.append(liCompany);
                }
                divParamComp.append(ulCompany);
                divTopBlock.append(divParamComp);
            } else {
                let divParam = document.createElement("div");
                divParam.className = "item";
                divParam.innerText = firstСapitalLettere(Key) + ":" + " " + objDetails[Key];
                divTopBlock.append(divParam);
            }
        }
        // console.log(objDetails);//========================================
    });

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(res => res.json())
    .then((posts) => {
        let divBottomBlock = document.getElementById("bottomBlock");
        let buttonPosts = document.getElementById("buttonPosts");
        buttonPosts.addEventListener("click", function (ev){

            let divWrapper = document.createElement("div");
            divWrapper.className = "divWrapper";
            posts.forEach(posts =>{
            let divPostTitle = document.createElement("div");
            divPostTitle.className = "divPostTitle";
            let divPostWrapper = document.createElement("div");
            divPostWrapper.className = "divPostsWrapper";
            divPostTitle.innerText ="Post title: " + firstСapitalLettere(posts.title);
            let buttonPostDetalis = document.createElement("a");
            buttonPostDetalis.className = "buttonPostDetalis";
            buttonPostDetalis.href = "pages/post-details.html"
                // ?" + posts.id;
            buttonPostDetalis.innerText = "Post details";
            divPostWrapper.append(divPostTitle, buttonPostDetalis);
            divWrapper.append(divPostWrapper);
            divBottomBlock.append(divWrapper);
            });

        })


        console.log(posts);

    });

