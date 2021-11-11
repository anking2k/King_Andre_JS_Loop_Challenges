//Prints odds 1-20
console.log("The odd numbers 1-20 are: ")
for (let i = 1; i < 21; i++) {
    if (i % 2 == 1) {
    console.log(i)}
} 

//Decreasing Multiples of 3
console.log("The numbers less than 100 that are divisible by 3 are: ")
for (let i = 100; i > 0; i--) {
    if (i % 3 == 0) {
    console.log(i)}
} 

  //Decreasing Multiples of 3
console.log("The printed numbers in the sequence are as follows: ")
for(let i = 4; i >- 4; i -= 1.5) {
    console.log(i);
}

//Sigma
console.log("The answers for sigma are: ")
sum = 0;
for (let i = 1; i < 101; i++) {
    sum = i + sum;
    console.log(sum)    
}  

//Factorial
console.log("The answers for factorial are: ")
product = 1;
for (let i = 1; i < 13; i++) {
    product = i * product;
    console.log(product)    
}  
