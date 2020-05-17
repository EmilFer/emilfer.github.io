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
    var boxes;

    canvas.width = window.innerWidth;
    canvas.height = element.offsetHeight;

    var minBoxSize = Math.sqrt(canvas.width);
    var squares = minBoxSize * 5;
    var verticalBoxes = Math.ceil(canvas.height / minBoxSize);
    var horizontalBoxes = Math.ceil(canvas.width / minBoxSize);

    boxes = new Array(horizontalBoxes);

    for (var i = 0; i < boxes.length; i++) {
        boxes[i] = new Array(verticalBoxes);
    }

    for (var i = 0; i < boxes.length; i++) {
        for (var j = 0; j < boxes[i].length; j++) {
            boxes[i][j] = new Box(minBoxSize, minBoxSize);
        }
    }

    console.log(boxes.length + ", " + boxes[0].length);

    drawBackdrop(boxes, ctx);
}

function drawBackdrop(boxes, ctx) {
    for (var i = 0; i < boxes.length; i++) {
        for (var j = 0; j < boxes[i].length; j++) {
            var place = boxes[i][j].x;
            var size = boxes[i][j].x - 1;
            ctx.fillRect(i * place + 1, j * place + 1, size, size);
        }
    }
}

function randomInRange(min, max) {
    var r = Math.random();
    return min + (max - min) * r;
}

class Square {
    constructor() {
        this.boxes = new Array(0);
        this.color = "#00FF00"
    }
}


class Box {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
