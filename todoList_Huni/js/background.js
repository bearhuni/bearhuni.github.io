
// const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `../img/${chosenImage}`;

// document.body.appendChild(bgImage);





const body = document.querySelector('body');

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const bgImage = document.createElement("img")

const chosenImage = images[Math.floor(Math.random() * images.length)];
bgImage.src = `../img/${chosenImage}`;
bgImage.alt = 'background images';
bgImage.classList.add('bgImage');
    
body.prepend(bgImage);