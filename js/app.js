'use strict'

// remember no .includes() and .join() and no functions ()

// Add console.log() messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your console.log() messages and replace them with the alerts() to complete the project. 


// let welcome = alert('Welcome to my page!');

// // Question 1

// function greeting() {
//     let greeting = prompt('You remind me of someone special, whats your name?'); 
//     if {
//     alert(greeting + ' is a lovely name, before we move forward I would like to play a game!');
//     {
//     } else {
//         greeting === 'no' || greeting === 'n'
//         alert('Pretty please?')
//     }
// }
// greeting()






let welcome = alert('Welcome to my page!');

// Question 1
function greeting() {
    let greeting = prompt('You remind me of someone special, whats your name?').toLocaleLowerCase();
    if (greeting === 'no' || greeting === 'n') {
        // console.log("good job!")
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
        // console.log("Great job!")
        alert('Youre on a roll! I actually worked there for 5 years!')
    } else {
        alert('Wow, usually people can tell right away!')
    }
}
marine()


// Question 3
function japan() {
    let japan = prompt('Have you ever been to japan? Yes or No').toLowerCase();
    if (japan === 'yes' || japan === 'y') {
        // console.log ("You're good at this!")
        alert('Really? Thats awesome! It was the best experience of my life.');
    } else {
        alert('I definitely recommend it!')
    }
}
japan()


// Question 4
function mma() {
    let mma = prompt('Have you ever trained in MMA? Yes or No').toLocaleLowerCase();
    if (mma === 'yes' || mma === 'y') {
        // console.log("Seems like you already know me.")
        alert('Oh cool, maybe you can teach me something!');
        // console.log(mma);
    } else {
        alert('If you ever give it try let me know what your thoughts were!')
    }
}
mma()


// Question 5
function ocSpray() {
    let ocSpray = prompt('Would you believe that I willingly put peppers into my eyes?').toLocaleLowerCase();
    if (ocSpray === 'yes' || ocSpray === 'y') {
        console.log("Good answer!")
        alert('It felt like the longest 2 hours of my life!');
    } else {
        alert('I actually did it 3 times if you can belieive it.')
    }
}
ocSpray()

// Question 6 instructions
// As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
// Add a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.
// Question 6
// response if:
// - guess is too high
// - guess is too low
// - guess is correct
// - how many attempts they have left
// - if there are no attempts left
// - if there are no attempts left, give them the answer
// let attemptsRemaining = 4
// let userHasAnsweredCorrectly = false
// // console.log("You have only 4 attempts");


// Question 6
let attemptsRemaining = 4;

while (attemptsRemaining > 0) {
    attemptsRemaining--;
console.log 
    let jaredCatAge = parseInt(prompt('Did you know I have a cat? Guess his age'));

    if (jaredCatAge === NaN){
        alert ('Thats not an age for a cat!');
        attemptsRemaining++;
    }
    else if (jaredCatAge > 3){
        alert('That guess is too high! She might be old but shes not that old.');
    }
    else if (jaredCatAge < 3){
        alert('That guess is too low. She wasnt born yesterday you know!');
    }
    if (jaredCatAge === 3){
        alert('That is absolutely right!')
        break;
    }
    if (attemptsRemaining === 0){
        alert('The correct answer is 3! She was 2 when we met a year ago.');
    }
}


// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

// As a user, I would like to know my final score so that I can know how well I did.
// Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.



// Question 7
let guess = 7
while (lives) = []

// let myFavPasta = [Penne, Rigatoni, Linguine, ]

// for (i=0;i<7;i++)

// while (guess){
//     guess-;
//     console.log('I am in the while loop. you have ${attempts} attempts remaining.')
// }

// for (let i = 0; i < attempts; i++) {
//     console.log('I am in the for loop. You have ${attempts - i} attempts remaining')
// }













// QUESTION 7
// let myFavColors = ['blue', 'cream', 'gold'];
// let userResponse = 'orange';

// // WHILE LOOP

// let attemptsRemaining = 3;
// let userHasAnsweredCorrectly = false;

// while (attemptsRemaining) {
//   attemptsRemaining--;
//   console.log(`I am in the while loop. You have ${attemptsRemaining} attempts remaining.`);
//   for (let i = 0; i < myFavColors.length; i++) {
//     // console.log(userResponse, myFavColors[i]);
//     if (userResponse === myFavColors[i]) {
//       console.log('Your correct');
//       score++;
//     }
//   }
// }

// for (let i = 0; i < attempts; i++) {
//   console.log(`I am in the for loop. You have ${attempts - i - 1} attempts remaining`);
//   for (let j = 0; j < myFavColors.length; j++) {
//     // console.log(userResponse, myFavColors[j]);
//     if (userResponse === myFavColors[j]) {
//       console.log('Your correct');
//     }
//   }
// }
