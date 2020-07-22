'use strict';
// Factorial
let k = 1;
let n = 5;
while (n >= 1) {
    k *= n;
    n--;
}

// Equation
let a = 1;
let b = 2;
let c = 1;
let D = b**2 - 4*a*c;

if (D >= 0) {
    let x1 = (-b + D**(1/2))/2*a;
    let x2 = (-b - D**(1/2))/2*a;
    console.log(x1);
    console.log(x2);
} else {
    console.log("No");
}
