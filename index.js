window.onload = function() {
    generateBackdrop();
};

window.onresize = function() {
    generateBackdrop();
}

function generateBackdrop() {
    var element = document.getElementById("backdrop");
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = element.offsetHeight;

    var ctx = canvas.getContext("2d");

    ctx.moveTo(0,0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.stroke();

    console.log(canvas.width + ", " + canvas.height)
}

function randomInRange(min, max) {
    var r = Math.random();
    return min + (max - min) * r;
}