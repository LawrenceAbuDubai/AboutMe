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


var favGame = prompt("what is your fav game?");
favGame.toLowerCase();
if(favGame === "days gone" || favGame === "dota"){
    document.write("<br>niiice , i love " + favGame + " too , its one of my favorites!!");
} else {
    document.write("<br>seems like a good game for sure but didnt try it yet");
}

var favSong = prompt("what song do you like to listen to the most ?");
favSong.toLowerCase();
if(favSong === "valhalla"){
    document.write("<br>i love that song tooo ");
}
else{
    document.write("<br>did not hear this one before...")
}

var toVisit = prompt("what country you would like to visit?");
toVisit.toLowerCase();
if(toVisit === "iceland"){
    document.write("<br>me too , it looks very amazing");
}
else{
    document.write("<br>that is a good choice for sure, for me i would like to visit iceland..")
}


var guessNum = prompt("pick a number between 1 and 10");



let i = 0;
let mark = 0;

for (i; i < 4; i++) {
    var guessNum = prompt("pick a number between 1 and 10");
    if (guessNum == 3) {
        alert("correct!!! the number is three 3!!");
        break
    } else{
        alert("sorry but its not the correct answer, a little hint : its of the of the first 3 odd numbers 😉")
    }
}

let favMovies = ['enemy at the gates', 'hunger games', 'world war Z','gorwn ups','hangover','lord of the rings','zombieland','warrior','hacker','gangs of newyork'];

for (let j = 0; j < 6; j++) {
    var guessMovie = prompt('i have 10 top movies , can you guess them??');
    for (let l = 0; l < favMovies.length; l++) {
        if (guessMovie === favMovies[l]) {
            mark++;
        } else {
            continue
        }
    }
}
if (mark < 5) {
    alert("aww..sorry but you got only "+ mark + " answers correct..")
} else if (mark >= 5 && mark <= 9) {
    alert("thats good !!! you got " + mark + " answers correct, you know me for sure!!")
} else {
    alert("wow!! you got all answers correct!! you know me 10000%!!!")
}


// console.log("that is all for this round " + userName + " it was fun so hope we can continue next time 😁");
alert("that is all for this round " + userName + " it was fun so hope we can continue next time 😁");

