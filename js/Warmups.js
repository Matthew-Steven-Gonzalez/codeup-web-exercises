"use strict";
//
// // Warmup 10/20
//
//
// let potato =
//     {
//         name: "Potato",
//         quantity: "2",
//         price: "$7.89"
//         }
// function getPrice(obj){
//     return obj.price ;
// }
//
// console.log(getPrice(potato));
//
//
//
//
//
// // Warmup 10/21
//
// function getLongestString(arr){
//     let longestStr = "";
//     for (let str of arr){
//         if(str.length > longestStr.length){
//             longestStr = str;
//         }
//     }
//     return longestStr;
// }
//
// //Warmup 10/26
//
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];
// function getTallestHamster(arr) {
//     let tallGuy = {heightInMM: 0};
//     // arr.forEach(function(hamster){
//     //     if( hamster.heightInMM > tallGuy.heightInMM){
//     //         tallGuy = hamster;
//     //     }else{
//     //         return tallGuy;
//     //     }
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i].heightInMM > tallGuy.heightInMM) {
// //             tallGuy = arr[i];
// //         } else {
// //         }
// //         return tallGuy;
// //     }
// // }
//     for(let el of arr){
//         if(el.heightInMM > tallGuy.heightInMM){
//             tallGuy = el;
//         }
//     }
//     return tallGuy;
// }
//
// console.log(getTallestHamster(hamsters));

// October 31st
function fizzbuzz(){
    for(let i = 0; i < 100;i++){
        if( i % 3 === 0 && i % 5 === 0){
            console.log("fizz/buzz");
        }
        else if(i % 3 === 0){
            console.log("fizz");
        }
        else if( i % 5 ===0){
            console.log("buzz");
        }
        else{
            console.log(i);
        }
    }
}


fizzbuzz();