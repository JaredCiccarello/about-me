'use strict'

let welcome = alert('Welcome to my page!');
let score = 0;
// Question 1
function greeting() {
    let greeting = prompt('You remind me of someone special, whats your name?').toLocaleLowerCase();
    if (greeting === 'no' || greeting === 'n') {
        score++
        alert('Pretty please?')
    } else {
        alert(greeting + ' is a lovely name, before we move forward I would like to play a game!');
    }
}
greeting();

// Question 2
function marine() {
    let marine = prompt('Do I look like I could have been in the military? Yes/No').toLowerCase();
    if (marine === 'yes' || marine === 'y') {
        score++
        alert('Youre on a roll! I actually worked there for 5 years!')
    } else {
        alert('Wow, usually people can tell right away!')
    }
}
marine()

function japan() {
    let japan = prompt('Have you ever been to japan? Yes or No').toLowerCase();
    if (japan === 'yes' || japan === 'y') {
        score++
        alert('Really? Thats awesome! It was the best experience of my life.');
    } else {
        alert('I definitely recommend it!')
    }
}
japan()

function mma() {
    let mma = prompt('Have you ever trained in MMA? Yes or No').toLocaleLowerCase();
    if (mma === 'yes' || mma === 'y') {
        score++
        alert('Oh cool, maybe you can teach me something!');
    } else {
        alert('If you ever give it try let me know what your thoughts were!')
    }
}
mma()

function ocSpray() {
    let ocSpray = prompt('Would you believe that I willingly put peppers into my eyes?').toLocaleLowerCase();
    if (ocSpray === 'yes' || ocSpray === 'y') {
        score++
        alert('It felt like the longest 2 hours of my life!');
    } else {
        alert('I actually did it 3 times if you can belieive it.')
    }
}
ocSpray()


let attemptsRemaining = 4;

while (attemptsRemaining > 0) {
    attemptsRemaining--;
console.log (attemptsRemaining);

    let jaredCatAge = parseInt(prompt('Did you know I have a cat? Guess her age you have  ' + attemptsRemaining + ' guesses left.'));

    if (jaredCatAge === NaN){
        alert ('Thats not an age for a cat! ' + attemptsRemaining + ' guesses left.');
        attemptsRemaining++;
    }
    else if (jaredCatAge > 3){
        alert('That guess is too high! She might be old but shes not that old. ' + attemptsRemaining + ' guesses left.');
    }
    else if (jaredCatAge < 3){
        alert('That guess is too low. She wasnt born yesterday you know! ' + attemptsRemaining + ' guesses left.');
    }
    if (jaredCatAge === 3){
        alert('That is absolutely right!')
        score++
        break;
    }
    if (attemptsRemaining === 0){
        alert('You have no attempts remaining. The correct answer is 3! She was just a baby when we met.');
    }
}

const animeList = ['trigun', 'pokemon', 'yugioh', 'cowboy bebop', 'inuyasha', 'sailor moon', 'dragon ball z'];
const correctAnime = 'yugioh'
let guesses = 7;

while (guesses > 0) {
    const guess = prompt(`Guess the most dramatic anime from my childhood. You have ${guesses} guesses left.`);
    
    if (guess.toLowerCase() === correctAnime) {
        alert(`Congratulations! Yugioh was the most ridiculous anime I have ever seen."${correctAnime}" was the correct answer. Your final score is ${score}`);
        break;
    } else {
        guesses--;
        alert(`Sorry, "${guess}" is not the correct answer. Please try again.`);
    }
}
if (guesses === 0) {
    alert(`Game over! The correct answer was "${correctAnime}". Your final score is ${score}.`);
}
