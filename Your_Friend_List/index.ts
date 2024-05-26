// // Assignment 1: Building Your Friend List

let people = {
    friends: [] as {firstName: string,lastName: string,ID: number}[]
}

let friend1 = {
    firstName: "Anees",
    lastName: "Haneef",
    ID: 1
}
let friend2 = {
    firstName: "Faiq",
    lastName: "Ali",
    ID: 2
}
let friend3 = {
    firstName: "Habib",
    lastName: "Ullah",
    ID: 3
}


people.friends.push(friend1,friend2,friend3)
console.log(people);


