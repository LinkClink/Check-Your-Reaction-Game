

var clickedTime;
var createdTime;
var reactionTime;
//funkcja wprowadzenia kolka w losowym miejscu i czasu
function makeBox() {

    var time = Math.random();
    time = time * 2000;
    setTimeout(function() {

        document.getElementById("kolko").style.borderRadius = "150px";


        var top = Math.random(); //losowa liczba
        top = top * 500;
        var left = Math.random(); //losowa liczba
        left = left * 1000;
        document.getElementById("kolko").style.top = top + "px";  //losowe miejsce
        document.getElementById("kolko").style.left = left + "px";
        document.getElementById("kolko").style.display = "block";
        createdTime = Date.now();
    }, time);
}
//funkcja sprawdzania klikniencza
document.getElementById("kolko").onclick = function() {
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000; //czas reakcji
    document.getElementById("time").innerHTML = reactionTime;
    this.style.display = "none"; //wyczyscia ekran
    makeBox();
}

makeBox();

