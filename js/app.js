'use strict';

var userName = prompt("😀😀hii , welcome to my site, what is your name? ");

//console.log("nice to meet you " + userName);
alert("nice to meet you " + userName);

alert("lets play a guessing game. ");

var favFood = prompt("what is you fav food??");
favFood.toLowerCase();
if(favFood === "pizza"){
    document.write("ohhh pizza is my fav tooo!!! 🍕");
}
else{
    document.write("thats delicious  but i love pizza more🍕...")
}

//console.log("next question!");
alert("next question!");

var sparetime = prompt("what would you like to do more in your spare time ?");
sparetime.toLowerCase();
if(sparetime === "games"){
    document.write("<br>niiice , i love playing games too in my sparetime🎮");
}
else{
    document.write("<br>that sounds good but i love playing games more🎮...")
}

// console.log("that is all for this round " + userName + " it was fun so hope we can continue next time 😁");
alert("that is all for this round " + userName + " it was fun so hope we can continue next time 😁");

