'use strict';

let userName = prompt("😀😀hii , welcome to my site, what is your name? ");

let mark = 0;

alert("nice to meet you " + userName);

alert("lets play a guessing game. ");

function favFoodF(){
var favFood = prompt("is my favorite food pizza ? yes/no");
favFood.toLowerCase();
if(favFood === "yes"){
    alert("correct!!");
    mark++;
}
else{
    alert("incorrect , its pizza ")
}
}
favFoodF();
alert("next question!");

function sparetimeF(){
    var sparetime = prompt("do you think i play games in my spare time ?? yes/no ");
sparetime.toLowerCase();
if(sparetime === "yes"){
    alert("correct !!! i play video games in my spare time ");
    mark++;
}
else{
    alert("incorrect i play games in my spare time")
}}
sparetimeF();




function favGameF(){
    var favGame = prompt("is my favorite game dota? yes/no ");
favGame.toLowerCase();
if(favGame === "yes"){
    alert("correct !! that is my fav game ");
    mark++;
} else {
    alert("incorrect , its dota");
}
}
favGameF();



function favSongF(){
    var favSong = prompt("is my fav song valhalla ? yes/no ");
    favSong.toLowerCase();
    if(favSong === "yes"){
        alert("yes!!! it is valhalla for sure ");
        mark++;
    }
    else{
        alert("incorrect it is valhalla")
    }
}
favSongF();


function toVisitF(){
    var toVisit = prompt("do you think i want to visit iceland? yes/no");
    toVisit.toLowerCase();
    if(toVisit === "yes"){
        alert("yes!! it is iceland, i love the nature views in it");
        mark++;
    }
    else{
        alert("sorry but i would like to visit iceland..")
    }
      
}
toVisitF();



function guessNumF(){
 


let i = 0;

    for (i; i < 4; i++) {
        let guessNum = Number(prompt("pick a number between 1 and 10"));
        if (guessNum > 3) {
            alert('too high');
        } else if (guessNum < 3) {
            alert('too low');
        } else if (guessNum == 3) {
            alert('correct');
            mark++;
            break;
        }
        
        
    }
    alert("the right answer is 3");
}

guessNumF();



 

function favMoviesF(){
    let favMovies = ['enemy at the gates', 'hunger games', 'world war Z','gorwn ups','hangover','lord of the rings','zombieland','warrior','hacker','gangs of newyork'];



for (let j = 0; j < 6; j++) {
    var guessMovie = prompt('i have 10 top movies , can you guess one of them??');
    for (let l = 0; l < favMovies.length; l++) {
        if (guessMovie === favMovies[l]) {
            alert("thats correct!!");
            mark++;
            j = 7;
            break;
        } 
    }

}





}

favMoviesF();

alert(`your mark is ${mark} out of 7`);





