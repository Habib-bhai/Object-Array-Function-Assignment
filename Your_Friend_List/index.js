"use strict";
// // Assignment 1: Building Your Friend List
Object.defineProperty(exports, "__esModule", { value: true });
let people = {
    friends: []
};
let friend1 = {
    firstName: "Anees",
    lastName: "Haneef",
    ID: 1
};
let friend2 = {
    firstName: "Faiq",
    lastName: "Ali",
    ID: 2
};
let friend3 = {
    firstName: "Habib",
    lastName: "Ullah",
    ID: 3
};
people.friends.push(friend1, friend2, friend3);
console.log(people);
