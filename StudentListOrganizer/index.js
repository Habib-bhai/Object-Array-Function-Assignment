"use strict";
// Assignment 4: Student List Organizer
// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?
Object.defineProperty(exports, "__esModule", { value: true });
let students = [
    { name: "habib",
        senior: true,
        assignmentCompleted: true
    },
    { name: "anees", senior: true, assignmentCompleted: true },
    { name: "faiq", senior: true, assignmentCompleted: false },
    { name: "uzair", senior: false, assignmentCompleted: true },
    { name: "mian bhai", senior: false, assignmentCompleted: false }
];
function seniorStudentsWithAssignmentCompleted(pramstudents) {
    // Checking which senior students have done their HW
    pramstudents.forEach(obj => {
        if (obj.senior === true && obj.assignmentCompleted === true) {
            console.log(`${obj.name} Has completed assignment and is a Senior student`);
        }
    });
}
seniorStudentsWithAssignmentCompleted(students);
//NOw, checking which  students haven't done their work and removing them to update the list.
function updatingStudentList(pramstudents) {
    return pramstudents.filter(obj => obj.assignmentCompleted);
}
let updated = updatingStudentList(students);
console.log(updated);
