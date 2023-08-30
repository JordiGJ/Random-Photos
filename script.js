// get elements
const imgContainer = document.querySelector(".img-container");
const button = document.querySelector("button");

// variables
const url = "https://picsum.photos/300?random";
//functions

function getData() {
  for (let i = 0; i < 6; i++) {
    const pic = document.createElement("img");
    const picSrc = `${url}=${Math.floor(Math.random() * 3000)}`;
    pic.src = picSrc;
    imgContainer.append(pic);
  }
}

// event listeners
button.addEventListener("click", getData);

// init
getData();
