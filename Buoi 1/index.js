//const, let, var
//object
// const student = {
//     name: 'a', 
//     post: function () {
//         console.log('post');
//     }
// }

//1. Given the year, return the century it is in

// function centuryFind(n) {
    
//     console.log(Math.floor((n-1)/100) +1); 
// }
// let n = prompt("Enter the year: ");
// centuryFind(n)

//2.Given the string, check if it is a palindrome
//aabaa = true
//abac = false
//if(inputString.index[i]!==inputString(inputString.length-1-index)...)
// function checkPalindrome(inputString) {
//     let n = inputString.split("").reverse().join("");
//     if (n===inputString) console.log("true");
//     else console.log("false");
// }
// let n = prompt("Enter String");
// checkPalindrome(n);

//3.Given an array of number, find the pair of adjacent elements
// that has the largest product and return that product.
//inputArray = [3, 6, -2]
//adjacentElementsProduct(inputArray) = 21

// function adjacentElementsProduct(inputArray) {
//     let max = inputArray[0]*inputArray[1];
//     for (let i = 1; i <= inputArray.length; i++) {
//         if(inputArray[i]*inputArray[i-1]>max)
//             max = inputArray[i]*inputArray[i-1];
//     }
//     console.log(max);
// }
// let arr = [3,6,-2,5,7,6]
// adjacentElementsProduct(arr);



//4.a.Given an array of number, find the oddNumber;
//b.find but not use loop;
//use filter
// function findOdd(arr) {
//     return arr%2==0;
// }

// let arr=[1,2,3,4,5,6];
// let b=arr.filter(findOdd);
// console.log(b);


