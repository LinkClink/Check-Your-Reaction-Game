
var clickedTime;
var createdTime;
var reactionTime;
var avgtime;

var clickval = 1;

var spawnval = 3000;

var top_size_1 = 25; // -3
var top_size_2 = 25; // -3

var left_size_1 = 50;
var left_size_2 = 25;

//function: entering circle at random place and random time
function makeBox()
{
    var time = Math.random();
    time = time * spawnval;
	
    setTimeout(function() 
	{

        document.getElementById("circle").style.borderRadius = "150px";

        var top = Math.floor(Math.random() * top_size_1) + top_size_2; //random value   (25 25)
        
        var left = Math.floor(Math.random() * left_size_1) + left_size_2; //random value (50 25) 
        
        document.getElementById("circle").style.top = top + "%";  //random place
        document.getElementById("circle").style.left = left + "%";
        document.getElementById("circle").style.display = "block";
        createdTime = Date.now();
    }, time);
}

//function: checking touch
document.getElementById("circle").onclick = function() 
{
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000; //time reaction
	
    document.getElementById("time").innerHTML = reactionTime.toFixed(3);
	document.getElementById("avg").innerHTML = (reactionTime / clickval).toFixed(3);
	
	clickval += 1;
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
///

//changes circle radius
document.getElementById("circleradius1").onclick = function() 
{
  document.getElementById("circle").style.width = "80px";
  document.getElementById("circle").style.height = "80px";
}

document.getElementById("circleradius2").onclick = function() 
{
  document.getElementById("circle").style.width = "70px";
  document.getElementById("circle").style.height = "70px";
}

document.getElementById("circleradius3").onclick = function() 
{
  document.getElementById("circle").style.width = "50px";
  document.getElementById("circle").style.height = "50px";
}

document.getElementById("circleradius4").onclick = function() 
{
  document.getElementById("circle").style.width = "20px";
  document.getElementById("circle").style.height = "20px";
}
////

//circle spawn time
document.getElementById("spawntime1").onclick = function() 
{spawnval = 3000;}

document.getElementById("spawntime2").onclick = function() 
{spawnval = 2000;}

document.getElementById("spawntime3").onclick = function() 
{spawnval = 1000;}
////




