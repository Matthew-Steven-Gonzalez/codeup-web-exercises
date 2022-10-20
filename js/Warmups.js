"use strict";


let potato =
    {
        name: "Potato",
        quantity: "2",
        price: "$7.89"
        }



function getPrice(obj){
    return (obj.price) ;
}

console.log(getPrice(potato));