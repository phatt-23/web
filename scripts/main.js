document.querySelector("h1")
    .addEventListener("click", 
        () => {
            alert("Bruuuuh!");
        });

const myImage = document.querySelector("img");

myImage.onclick = ()=> {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/box.png") {
        myImage.setAttribute("src", "images/human.png");
    } else {
        myImage.setAttribute("src", "images/box.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = ()=> setUsername();

function setUsername() {
    const myName = prompt("Enter username.");
    if(!myName) {
        setUsername();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `you, ${myName}, are gay.`;
    }
}

if(!localStorage.getItem("name")) {
    setUsername();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `you, nigga ${storedName}, are gay!`;
}