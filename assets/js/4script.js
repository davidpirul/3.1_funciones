var cubo1 = document.querySelector("#cubo1")
var cubo2 = document.querySelector("#cubo2")
var cubo3 = document.querySelector("#cubo3")
var cubo4 = document.querySelector("#cubo4")

var cambiarColor = '';

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        cambiarColor = 'yellow'
        console.log(cambiarColor)
    } else if (event.key === 's') {
        cambiarColor = 'red'
        console.log(cambiarColor)
    } else if (event.key === 'd') {
        cambiarColor = 'green'
        console.log(cambiarColor)
    } else {
        cambiarColor = ''
        console.log(cambiarColor)
    }
})

cubo1.addEventListener("click", function () {
    cubo1.style.backgroundColor = cambiarColor;

})

cubo2.addEventListener("click", function () {
    cubo2.style.backgroundColor = cambiarColor;

})

cubo3.addEventListener("click", function () {
    cubo3.style.backgroundColor = cambiarColor;
})

cubo4.addEventListener("click", function () {
    cubo4.style.backgroundColor = cambiarColor;

})
