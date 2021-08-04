'use strict';

var userName = prompt("😀😀hii , welcome to my site, what is your name? ");

//console.log("nice to meet you " + userName);
alert("nice to meet you " + userName);

alert("lets play a guessing game. ");

function favFoodF(){
var favFood = prompt("do you know whats my favorite food?");
favFood.toLowerCase();
if(favFood === "pizza"){
    alert("correct!! its pizza 🍕");
}
else{
    alert("sorry but no...my fav is pizza")
}
}
favFoodF();
alert("next question!");
// var favFood = prompt("do you know whats my favorite food?");
// favFood.toLowerCase();
// if(favFood === "pizza"){
//     alert("correct!! its pizza 🍕");
// }
// else{
//     alert("sorry but no...my fav is pizza")
// }

//console.log("correct answer is pizza");


//console.log("next question!");
// alert("next question!");
function sparetimeF(){
    var sparetime = prompt("what do you think i do in my spare time?");
sparetime.toLowerCase();
if(sparetime === "games"){
    alert("correct !!! i play video games in my spare time ");
}
else{
    alert("sorry but  right answer is games...")
}}
sparetimeF();


// var sparetime = prompt("what do you think i do in my spare time?");
// sparetime.toLowerCase();
// if(sparetime === "games"){
//     alert("correct !!! i play video games in my spare time ");
// }
// else{
//     alert("sorry but  right answer is games...")
// }
//console.log("correct answer is games");

function favGameF(){
    var favGame = prompt("can you guess my fav game??");
favGame.toLowerCase();
if(favGame === "days gone" || favGame === "dota"){
    alert("correct !! that is my fav game ");
} else {
    alert("sorry , i love days gone and dota the most");
}
}
favGameF();

// var favGame = prompt("can you guess my fav game??");
// favGame.toLowerCase();
// if(favGame === "days gone" || favGame === "dota"){
//     alert("correct !! that is my fav game ");
// } else {
//     alert("sorry , i love days gone and dota the most");
// }
//console.log("correct answer is dota or days gone");

function favSongF(){
    var favSong = prompt("do you know whats my favorite song ?");
    favSong.toLowerCase();
    if(favSong === "valhalla"){
        alert("yes!!! it is valhalla for sure ");
    }
    else{
        alert("sorry but my fav is valhalla...")
    }
}
favSongF();
// var favSong = prompt("do you know whats my favorite song ?");
// favSong.toLowerCase();
// if(favSong === "valhalla"){
//     alert("yes!!! it is valhalla for sure ");
// }
// else{
//     alert("sorry but my fav is valhalla...")
// }

//console.log("correct answer is valhalla ");

function toVisitF(){
    var toVisit = prompt("can you guess what country i would love to visit the most?");
    toVisit.toLowerCase();
    if(toVisit === "iceland"){
        alert("yes!! it is iceland, i love the nature views in it");
    }
    else{
        alert("sorry but i would like to visit iceland..")
    }
      
}
toVisitF();
// var toVisit = prompt("can you guess what country i would love to visit the most?");
// toVisit.toLowerCase();
// if(toVisit === "iceland"){
//     alert("yes!! it is iceland, i love the nature views in it");
// }
// else{
//     alert("sorry but i would like to visit iceland..")
// }

//console.log("correct answer is iceland");

//var guessNum = prompt("pick a number between 1 and 10");


function guessNumF(){
 //   var guessNum = prompt("pick a number between 1 and 10");

//console.log("correct answer is 3");


let i = 0;
let mark = 0;

for (i; i < 4; i++) {
    var guessNum = prompt("pick a number between 1 and 10");
    if (guessNum == 3) {
        alert("correct!!! the number is three 3!!");
        break;
    } else{
        alert("sorry but its not the correct answer, a little hint : its of the of the first 3 odd numbers 😉")
    }
}
}

guessNumF();

// var guessNum = prompt("pick a number between 1 and 10");

// //console.log("correct answer is 3");


 let i = 0;
 let mark = 0;

 for (i; i < 4; i++) {
     var guessNum = prompt("pick a number between 1 and 10");
     if (guessNum == 3) {
         alert("correct!!! the number is three 3!!");
         break;
     } else{
         alert("sorry but its not the correct answer, a little hint : its of the of the first 3 odd numbers 😉")
     }
 }

function favMoviesF(){
    let favMovies = ['enemy at the gates', 'hunger games', 'world war Z','gorwn ups','hangover','lord of the rings','zombieland','warrior','hacker','gangs of newyork'];

//console.log("correct answer is enemy at the gates', 'hunger games', 'world war Z','gorwn ups','hangover','lord of the rings','zombieland','warrior','hacker','gangs of newyork");



for (let j = 0; j < 6; j++) {
    var guessMovie = prompt('i have 10 top movies , can you guess them??');
    for (let l = 0; l < favMovies.length; l++) {
        if (guessMovie === favMovies[l]) {
            mark++;
        } else {
            continue;
        }
    }
}

if (mark < 3) {
    alert("aww..sorry but you got only "+ mark + " answers correct..")
} else if (mark >= 3 && mark <= 5) {
    alert("thats good !!! you got " + mark + " answers correct, you know me for sure!!")
} else {
    alert("wow!! you got all answers correct!! you know me 10000%!!!")
}


// console.log("that is all for this round " + userName + " it was fun so hope we can continue next time 😁");
alert("that is all for this round " + userName + " it was fun so hope we can continue next time 😁");


}

favMoviesF();

// let favMovies = ['enemy at the gates', 'hunger games', 'world war Z','gorwn ups','hangover','lord of the rings','zombieland','warrior','hacker','gangs of newyork'];

// //console.log("correct answer is enemy at the gates', 'hunger games', 'world war Z','gorwn ups','hangover','lord of the rings','zombieland','warrior','hacker','gangs of newyork");



// for (let j = 0; j < 6; j++) {
//     var guessMovie = prompt('i have 10 top movies , can you guess them??');
//     for (let l = 0; l < favMovies.length; l++) {
//         if (guessMovie === favMovies[l]) {
//             mark++;
//         } else {
//             continue
//         }
//     }
// }

// if (mark < 3) {
//     alert("aww..sorry but you got only "+ mark + " answers correct..")
// } else if (mark >= 5 && mark <= 9) {
//     alert("thats good !!! you got " + mark + " answers correct, you know me for sure!!")
// } else {
//     alert("wow!! you got all answers correct!! you know me 10000%!!!")
// }


// // console.log("that is all for this round " + userName + " it was fun so hope we can continue next time 😁");
// alert("that is all for this round " + userName + " it was fun so hope we can continue next time 😁");



