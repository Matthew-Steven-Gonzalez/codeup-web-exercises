"use strict";

// Warmup 10/20


let potato =
    {
        name: "Potato",
        quantity: "2",
        price: "$7.89"
        }
function getPrice(obj){
    return obj.price ;
}

console.log(getPrice(potato));





// Warmup 10/21

function getLongestString(arr){
    let longestStr = "";
    for (let str of arr){
        if(str.length > longestStr.length){
            longestStr = str;
        }
    }
    return longestStr;
}

