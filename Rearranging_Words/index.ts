// Assignment 2:Manipulating an Array: Rearranging Words

let scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

//to convert the boolean and number into string
scrambledArray[2] = scrambledArray[2].toString()
scrambledArray[3] = scrambledArray[3].toString()

//creating an empty array in which the strings will be stored in order
let rearrangedArray: string[] = []

rearrangedArray.push(scrambledArray.pop() as string)
rearrangedArray.push(scrambledArray[4] as string)
rearrangedArray.push(scrambledArray[5] as string)
rearrangedArray.push(scrambledArray.shift() as string)
rearrangedArray.push(scrambledArray.shift() as string)
rearrangedArray.push(scrambledArray.pop() as string)

console.log(rearrangedArray);

let arrangedSentence = rearrangedArray.join(" ")
console.log(arrangedSentence);
