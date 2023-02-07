// 12.153 Create a Random Number
var randomNumber1 = Math.floor(Math.random() * 6)+1;  // 1-6

// 12.154 change the <img> tag to a random dice
var randomDiceImage1 = "dice"+randomNumber1+".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

// Also working solution
// document.querySelector(".img1").setAttribute("src", randomImageSource);




// 12.155 Change both <img> elements
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomDiceImage2 = "dice"+ randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);





// 12.156 Change the title to display a winner 
if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent = "Player1 Wins !🚩";
}

else if (randomNumber1 < randomNumber2)
{
    document.querySelector("h1").textContent = "Player2 Wins !🚩";
}

else 
{
    document.querySelector("h1").textContent = "Draw !";
}

console.log(diceImage);


// document.querySelector(".img2").setAttribute("src", "diceImage");
// document.querySelector("p").setAttribute("fontSize", "10rem");