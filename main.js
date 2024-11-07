let userResponse = prompt("Enter froyo flavors");

// const froyo = {
//     chocolate: 0,
//     vanilla: 0,
//     strawberry: 0,
//     coffee: 0,
// }

// const orderArray = userResponse.split(",")

// for (let index = 0; index < orderArray.length; index++) {
//     if (orderArray[index] == "chocolate") {
//         froyo.chocolate++
//     } else if (orderArray[index] == "strawberry") {
//         froyo.strawberry++
//     } else if (orderArray[index] == "vanilla") {
//         froyo.vanilla++
//     } else if (orderArray[index] == "coffee") {
//         froyo.coffee++
//     } else {
//         alert("Not a compatable flavor, please choose from: strawberry, vanilla, coffee, chocolate")
//     }
// }
// console.table(froyo);


const froyo = {
    flavors:[]
};
const orderArray = userResponse.split('.'); //splitting the user response into individual strings at the comma

//count each flavor in the array
orderArray.forEach(flavor => {
    if (froyo.flavors[flavor]){ //if the flavor exists increase its count
        froyo.flavors[flavor] ++
    } else {
        froyo.flavors[flavor] = 1 //if it's a new flavor start the count at 1
    }
})
console.table(froyo.flavors);


