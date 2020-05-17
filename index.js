window.onload = function() {
    generateBackdrop();
};

function generateBackdrop() {
    var element = document.getElementById("backdrop");
    var width = window.innerWidth;
    var rootWidth = Math.sqrt(width);

    for (var i = 0; i < rootWidth; i++) {
        var newElement = document.createElement("div");
        var size = randomInRange(10, rootWidth);
        newElement.style.width = size;
        newElement.style.height = size;
        newElement.style.backgroundColor = "rgb(0, " + randomInRange(0, 255) + ", 0)";
        newElement.style.margin = "5px";
        newElement.style.display = "grid";
        element.appendChild(newElement);
    }
}

function randomInRange(min, max) {
    var r = Math.random();
    return min + (max - min) * r;
}