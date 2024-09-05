// document.getElementById("count-el").innerText = 8;
/*
let count = 0;

count = 1;

count = count + 1;

count += 1;

count++;

console.log(count);

let myAge = 46;
console.log(myAge);

let count = 5 + 2;

console.log(count);

let firstBatch = 5;
let secondBatch = 7;

let count = firstBatch + secondBatch;

console.log(count);

let myAge = 46;
let humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;

console.log("My dog age is " + myDogAge);

*/

// ctrl + k + c

// let bonusPoints = 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0;

function increment() {
    console.log("The button was clicked!");
    count++;
    console.log("Counter: " + count);
    // document.getElementById("count-el").innerText = count;
    // countEl.innerText = count;
    countEl.textContent = count;
    // document.getElementById("count-el").innerHTML = count;
}

let saveEl = document.getElementById("save-el");
console.log(saveEl);

function save() {
    console.log("Saving: " + count);

    //saveEl.innerText += " " + count + " -";
    saveEl.textContent += " " + count + " -";

    countEl.textContent = 0;
    count = 0;
}


// function countdown() {
//     console.log(5);
//     console.log(4);
//     console.log(3);
//     console.log(2);
//     console.log(1);
//     console.log(0);
// }

// countdown();
// countdown();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3;
//     console.log(totalTime);
// }

// logLapTime();

// let lapscopleted = 0;

// function incrementLap() {
//     lapscopleted++;
//     console.log("Laps completed: " + lapscopleted);
// }

// incrementLap();
// incrementLap();
// incrementLap();
// incrementLap();
// incrementLap();

// let userName = "Gon";
// let message = "You have trhee new notifications";

// console.log(message + ", " + userName + "!");

// let messageToUser = message + ", " + userName + "!";

// console.log(messageToUser);

// let myName = "Gonzalo";
// let greeting = "Hello, my name is ";
// let myGreeting = greeting + myName;

// console.log(myGreeting);

// console.log(4 + 5); // 9
// console.log("2" + "4"); // 24
// console.log("5" + 1); // 51
// console.log(100 + "100"); // 100100

// let welcomeEl = document.getElementById("welcome-el");

// let myName = "Gonzalo";
// let greeting = "Hello, my name is ";
// let myGreeting = greeting + myName;

// welcomeEl.innerText = myGreeting;

// welcomeEl.innerText += " ✌️";