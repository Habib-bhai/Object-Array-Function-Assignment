"use strict";
// Assignment 2:Manipulating an Array: Rearranging Words
Object.defineProperty(exports, "__esModule", { value: true });
let scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
//to convert the boolean and number into string
scrambledArray[2] = scrambledArray[2].toString();
scrambledArray[3] = scrambledArray[3].toString();
//creating an empty array in which the strings will be stored in order
let rearrangedArray = [];
rearrangedArray.push(scrambledArray.pop());
rearrangedArray.push(scrambledArray[4]);
rearrangedArray.push(scrambledArray[5]);
rearrangedArray.push(scrambledArray.shift());
rearrangedArray.push(scrambledArray.shift());
rearrangedArray.push(scrambledArray.pop());
console.log(rearrangedArray);
let arrangedSentence = rearrangedArray.join(" ");
console.log(arrangedSentence);
