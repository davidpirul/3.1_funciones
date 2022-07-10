function pintar(color) {
    ele = document.getElementById("ele1");
    ele.style.backgroundColor = color;
}

pintar ('green');

function yellow() {
    ele.style.backgroundColor = 'yellow';
}

ele = document.getElementById("ele1");
ele.addEventListener("click", yellow);


