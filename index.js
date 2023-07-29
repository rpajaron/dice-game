var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6)
var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", images1);
document.querySelector(".img2").setAttribute("src", images2);
if (images1 > images2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (images2 > images1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}
console.log(randomNumber1);