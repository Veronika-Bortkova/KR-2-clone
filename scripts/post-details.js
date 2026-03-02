function firstСapitalLettere(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let paramsURL = new URLSearchParams(window.location.search);
let id = paramsURL.get("id");

fetch("https://jsonplaceholder.typicode.com/posts/"+id)
    .then(res => res.json())
    .then((objPost) => {
        let divWrapperTopBlock = document.getElementById("wrapperDivsTopBlock");
        let divWrapperItem = document.getElementById("wrapperItem");
        let h1 = document.createElement("h1");
        h1.innerText = "Post - " + id + " details";
        divWrapperItem.append(h1);
        for (const Key in objPost) {
            let divInfoPost = document.createElement("div");
            divInfoPost.className = "item";
            if (Key ==="body"){
                divInfoPost.innerHTML = `${firstСapitalLettere(Key)}:  <p>${firstСapitalLettere(String(objPost[Key]))}</p>`;
                divWrapperItem.append(divInfoPost);
            } else {
                divInfoPost.innerText = firstСapitalLettere(Key) + ": " + firstСapitalLettere(String(objPost[Key]));
                divWrapperItem.append(divInfoPost);
            }
        }

    });
let h2 = document.getElementsByTagName("h2");
h2[0].innerText = "Comments on Post" + " " + id;
fetch("https://jsonplaceholder.typicode.com/posts/" + id + "/comments")
    .then(res => res.json())
    .then((comments) =>{
        let divWrapperBottomBlock = document.getElementById("wrapperBottomBlock");
        let divWrapperBottomItem = document.getElementById("wrapperBottomItem");
        comments.forEach(value =>{
            let divWrapperComment = document.createElement("div");
            divWrapperComment.className = ("divWrapperComment");
            for (const Key in value) {
                let divItemComment = document.createElement("div");
                divItemComment.className = "ItemComment";
                divItemComment.innerText = firstСapitalLettere(Key) +": "+ firstСapitalLettere(String(value[Key]));
                divWrapperComment.append(divItemComment);
            }
            divWrapperBottomItem.append(divWrapperComment);
            divWrapperBottomBlock.append(divWrapperBottomItem);
        });
    });
