var rCar;
var bCar;
var myBackground;
function startGame() {
    bCar = new component(40, 40, "new-blue-car-cartoon-transportation-free-sports.png", 300, 120, "image");
    rCar = new component(40, 40, "red_car.png", 540, 120, "image");
    myBackground = new component(880, 470, "soccer_field_311115.jpg", 0, 0, "image");
    arena.start();
}
var arena = {
    canvas: document.createElement("canvas"), start: function () {
        this.canvas.width = 880;
        this.canvas.height = 470;
        this.context = this.canvas.getContext("2d");

        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateArena, 20);

        window.addEventListener('keydown', function (e) {
            arena.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            arena.key = false;
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.area = arena
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function () {
        ctx = arena.context;
        if (type == "image") {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}
/*Key Pressed*/
function updateArena() {
    arena.clear();
    myBackground.newPos();
    myBackground.update();
    rCar.newPos();
    rCar.update();
    rCar.speedX = 0;
    rCar.speedY = 0;

    bCar.newPos();
    bCar.update();
    bCar.speedX = 0;
    bCar.speedY = 0;

    //left arrow
    if (arena.key && arena.key == 37) {
        rCar.speedX = -1;
    }
    //right arrow
    if (arena.key && arena.key == 39) {
        rCar.speedX = 1;
    }
    //up arrow
    if (arena.key && arena.key == 38) {
        rCar.speedY = -1;
    }
    //down arrow
    if (arena.key && arena.key == 40) {
        rCar.speedY = 1;
    }
    //left (a)
    if (arena.key && arena.key == 65) {
        rCar.speedX = -1;
    }
    //right (d)
    if (arena.key && arena.key == 68) {
        rCar.speedX = 1;
    }
    //up (w)
    if (arena.key && arena.key == 87) {
        rCar.speedY = -1;
    }
    //down (s)
    if (arena.key && arena.key == 83) {
        rCar.speedY = 1;
    }
    rCar.newPos();
    rCar.update();

    rCar.newPos();
    rCar.update();
}
document.getElementById("buttonQ").onclick = function () {
    location.href = "EndGame.html";
}