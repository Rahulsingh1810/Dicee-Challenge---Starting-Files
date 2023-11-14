        var randomvariable1= Math.floor(Math.random()*6)+1;
        var randomDiceImage="dice" +randomvariable1 + ".png";
        var randomImagesource="./images/"+ randomDiceImage;

        var image1 = document.querySelectorAll("img")[0];
        image1.setAttribute("src",randomImagesource);
        
        
        var randomvariable2= Math.floor(Math.random()*6)+1;
        var randomDiceImage2="dice" +randomvariable2 + ".png";
        var randomImagesource2="./images/"+ randomDiceImage2;

        var image1 = document.querySelectorAll("img")[1];
        image1.setAttribute("src",randomImagesource2);

        var resultText = document.querySelector("h1");

        if (randomvariable1>randomvariable2)
        {
            resultText.innerHTML="PLAYER 1 WINS"

        }
        else if(randomvariable2>randomvariable1)
        {
            resultText.innerHTML="PLAYER 2 WINS";
        }
        else
        {
            resultText.innerHTML="DRAW";
        }
        
        