
var clickedTime;
var createdTime;
var reactionTime;

//function: entering circle at random place and random time
function makeBox()
{
    var time = Math.random();
    time = time * 2000;
	
    setTimeout(function() 
	{

        document.getElementById("circle").style.borderRadius = "150px";

        var top = Math.random(); //random value
        top = top * 500;
        var left = Math.random(); //random value
        left = left * 1000;
        document.getElementById("circle").style.top = top + "px";  //random place
        document.getElementById("circle").style.left = left + "px";
        document.getElementById("circle").style.display = "block";
        createdTime = Date.now();
    }, time);
}
//function: checking touch
document.getElementById("circle").onclick = function() 
{
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000; //time reaction 
    document.getElementById("time").innerHTML = reactionTime;
    this.style.display = "none"; //display clear
    makeBox();
}

makeBox();

//changes circle colors
document.getElementById("circlebut1").onclick = function() 
{document.getElementById("circle").style.backgroundColor = "green";}

document.getElementById("circlebut2").onclick = function() 
{document.getElementById("circle").style.backgroundColor = "white";}

document.getElementById("circlebut3").onclick = function() 
{document.getElementById("circle").style.backgroundColor = "red";}





