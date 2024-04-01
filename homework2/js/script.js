let circle = document.querySelector(".circle");


let velocity = 10;

document.addEventListener("keydown", function(e) {
    let currentPositionX = parseInt(circle.style.left) || 0;
    let currentPositionY = parseInt(circle.style.top) || 0;
    let box = document.querySelector(".box");
    switch (e.key) {
        case "ArrowRight":
            if (currentPositionX + velocity +  circle.offsetWidth <= box.offsetWidth) {
                circle.style.left = currentPositionX + velocity + "px";
            }
            else{
                circle.style.left = "0px";
            }
            break;
        case "ArrowLeft":
            if (currentPositionX - velocity >= 0) {
                circle.style.left = currentPositionX - velocity + "px";
            }
            else{
                circle.style.left = "90%";
            }
            break;
        case "ArrowDown":
            if (currentPositionY + velocity + circle.offsetHeight <= box.offsetHeight) {
                circle.style.top = currentPositionY + velocity + "px";
            }
            else{
                circle.style.top = "0px";
            }
            break;
        case "ArrowUp":
            if (currentPositionY - velocity >= 0) {
                circle.style.top = currentPositionY - velocity + "px";
            }
            else{
                circle.style.top = "90%";
            }
            break;
    }
});
