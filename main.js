function drawLine(startX, startY, endX, endY, lineWidth){
	ctx.moveTo(startX, startY);
	ctx.lineTo(endX, endY);
    ctx.lineWidth = lineWidth;
	ctx.stroke();
};

function drawCanvas(paddle1X, paddle1Y, paddle2X, paddle2Y){
    padLX = paddle1X;
    padLY = paddle1Y;
    padRX = paddle2X;
    padRY = paddle2Y;
    drawLine(560, 50, 560, 930, 10);
    drawLine(510, 700, 510, 930, 10);
    drawLine(50, 700, 50, 930, 10);
    drawLine(50, 740, paddle1X, paddle1Y, 10);
    drawLine(paddle2X, paddle2Y, 510, 740, 10);
};

function drawPaddle1(paddle1X, paddle1Y){
    padLX = paddle1X;
    padLY = paddle1Y;
    drawLine(560, 50, 560, 930, 10);
    drawLine(510, 700, 510, 930, 10);
    drawLine(50, 700, 50, 930, 10);
    drawLine(50, 740, paddle1X, paddle1Y, 10);
    drawLine(padRX, padRY, 510, 740, 10);
}

function drawPaddle2(paddle2X, paddle2Y){
    padRX = paddle2X;
    padRY = paddle2Y;
    drawLine(560, 50, 560, 930, 10);
    drawLine(510, 700, 510, 930, 10);
    drawLine(50, 700, 50, 930, 10);
    drawLine(50, 740, padLX, padLY, 10);
    drawLine(paddle2X, paddle2Y, 510, 740, 10);
}

var c = document.getElementById("outerCan");
var ctx = c.getContext("2d");
var padLX = 250;
var padLY = 780;
var padRX = 310;
var padRY = 780;
drawCanvas(250, 780, 310, 780);


document.addEventListener('keydown', function(event) {
    //left
    if((event.keyCode || event.which) == 90) {
        
        ctx.save();
        ctx.clearRect(0, 0, 600, 930);
        ctx.restore();
        ctx.beginPath();
        drawPaddle1(270, 740);
    }
    //right
    else if((event.keyCode || event.which) == 191) {
        ctx.save();
        ctx.clearRect(0, 0, 600, 930);
        ctx.restore();
        ctx.beginPath();
        drawPaddle2(290, 740);
    }
    
});

document.addEventListener('keyup', function(event) {
    //left
    if((event.keyCode || event.which) == 90) {
        ctx.save();
        ctx.clearRect(0, 0, 600, 930);
        ctx.restore();
        ctx.beginPath();
        drawPaddle1(250, 780);
    }
    //right
    else if((event.keyCode || event.which) == 191) {
        ctx.save();
        ctx.clearRect(0, 0, 600, 930);
        ctx.restore();
        ctx.beginPath();
        drawPaddle2(310, 780);
    }   
});



