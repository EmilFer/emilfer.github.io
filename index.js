window.onload = function() {
    generateBackdrop();
};

window.onresize = function() {
    generateBackdrop();
}

function generateBackdrop() {

    var element = document.getElementById("backdrop");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var boxes = new Array(0);

    canvas.width = window.innerWidth;
    canvas.height = element.offsetHeight;


    var minBoxSize = Math.floor(Math.min(canvas.height, canvas.width) / 20);
    var boxAmount = canvas.height * 5;
    var horizontals = Math.ceil(canvas.width / minBoxSize);
    var verticals = Math.ceil(canvas.height / minBoxSize);

    while (boxes.length < boxAmount) {
        var x = randomIntInRange(0, horizontals) * minBoxSize;
        var y = randomBiasedIntInRange(0, verticals) * minBoxSize;
        var size = selectSize() * minBoxSize;
        var color = randomLeafColor();
        boxes.push(new Box(x, y, size, color));
    }

    drawBackdrop(boxes, ctx);
}

function drawBackdrop(boxes, ctx) {
    for (var i = 0; i < boxes.length; i++) {
        var box = boxes[i];
        ctx.fillStyle = box.color;
        ctx.fillRect(box.x, box.y, box.size, box.size);
    }
}

function randomInRange(min, max) {
    var r = Math.random();
    return min + (max - min) * r;
}

function randomIntInRange(min, max) {
    var r = randomInRange(min - 1, max)
    return Math.floor(r) + 1;
}

function randomBiasedIntInRange(min, max) {
    var r = Math.random();
    r = Math.sqrt(Math.sqrt(r));
    var val = min + (max - min) * r;
    return Math.floor(val) + 1;
}

function selectSize() {
    var r = Math.random();
    if (r < 0.05) {
        return 3;
    }
    if (r < 0.4) {
        return 2;
    }
    return 1;
}

function randomLeafColor() {
    var r = (50).toString(16).padEnd(2, "0");
    var g = randomIntInRange(150, 255).toString(16).padEnd(2, "0");
    var b = (100).toString(16).padEnd(2, "0");
    return "#" + r + g + b;
}

class Box {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
}
