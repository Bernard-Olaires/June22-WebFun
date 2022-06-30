// 1. print odds 1-20 
// using a loop write code that will console.log all the odd values from 1 upt to 20

for (var i=1; i < 20; i+=2) {
    console.log(i);
}

// 2. decreasing multiples of 3 
// Using a loop write code that will console.log all of the values that are evenly divisble by 3 from 100 down to 0

for (var i = 100; i > -1; i--) {
    if(i % 3 == 0) {
        console.log(i);
    }
}

// 3. Print the Sequence 
// using a loop write code that will conole.log 4, 2.5, 1, -0.5, -2, -3.5

for (var i = 4; i > -4; i-=1.5) {
    console.log(i);
}


// $Sigma - 
// write code that will add all of the values from 1-100 some variable sum and the end conole.log
// the result 1 + 2 + 3 + . . . + 98 + 99 + 100]. We should get back 5050 at end 

var sum = 0;
for (var i = 1; i < 101; i++) {
    sum += i;
}
console.log(sum);

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product 
// and at the end console.log the results [1 * 2 * 3 * ... 10 * 11 * 12] We should get back 479001600 at the end.

var product = 1;
for (var i = 1; i < 13; i++) {
    product *= i;
}
console.log(product);

