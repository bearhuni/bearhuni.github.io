function myFunction(){
    var colorCode = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
   
    document.body.style.backgroundColor = myFunction() + 'linear-gradient('
        + 'to right' + ', ' + colorCode + ', ' + colorCode + ')';
}


// function setGradient() {
//     body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
//     css.textContent = body.style.background;
// }

// function randomColor() {
//     var newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
//     return newColor;
// }

// function randomGradient() {
//     color1.value = randomColor();
//     color2.value = randomColor();
//     setGradient();
// }