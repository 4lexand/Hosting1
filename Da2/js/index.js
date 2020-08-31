function playGame()
{
    var randomNumberOne=Math.floor(math.random()*6)+1;
    var randomImageOnePath= "images/"+randomNumerOne+".png";

    var randomNumerTwo=Math.floor(Math.random()*6)+1;
    var randomImageTwoPath="images/"+randomNumberTwo+".png";

    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImageOnePath);

    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImageTwoPath);

    if(randomNumberOne>randomNumerTwo)
    {
        document.querySelector("h1").innerHTML="Jugador 1 Gano ❤👍"
    }
    else if (randomNumberTwo>randomNumerOne)
    {
        document.querySelector("h1").innerHTML="Jugador 2 Gano ❤👍"
    }
    else
    {
        document.querySelector("h1").innerHTML="❤👍EMPATE ❤👍"
      
    }
}

document.querySelector("button").addEventListener ("click",playGame);