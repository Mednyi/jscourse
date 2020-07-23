let createTank = () => ({ammo:100, armor:100});
let createTenItems = createItem => { // createItem - callback
    let arr = [];
    for(let i = 0; i<10 ; i++) {
        const item = createItem();
        arr.push(item)  // push - add element to array
    }
    return arr
};

// ex 1
const tanks = createTenItems(createTank);
console.log(tanks);

// ex 2
let generateNumberFabric = () => {
    let i = 0;
    return function () {
        return i++;
    };
};

let generateNum = generateNumberFabric();
// let generateNum2 = generateNumberFabric();

const numbers = createTenItems(generateNum);
console.log(numbers);
