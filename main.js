// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" 
// instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". 
// For numbers which are multiples of both five and seven print "ChickenMonkey".

// Original code:
// function chickenMonkey () {
    // for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {

// Alternative code:
// function chickenMonkey (num1, limit) {
//     for (let currentNumber = num1; currentNumber <= limit; currentNumber++) {

    function chickenMonkey (currentNumber, limit) {  // Setting parameters allows you to set a range of numbers
        for (currentNumber; currentNumber <= limit; currentNumber++) {  //You don't need to define variable here b/c you set parameter
            if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
                console.log("ChickenMonkey") 
            } 
             // Divide the current number by 5, and check if the remainder is 0
            else if (currentNumber % 5 === 0) {
                console.log("Chicken")
            }
            // Divide the current number by 7, and check if the remainder is 0
            else if (currentNumber % 7 === 0) {
                console.log("Monkey")
            }
            else {
                console.log(currentNumber) 
            }
        }
    }
    chickenMonkey(1, 100); 