(function(){
    "use strict";

    /**
     * TODOne:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

let names = ["James", "Tony", "Ezikiel" , "Jones"];

    /**
     * TODOne:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

console.log(names.length);

    /**
     * TODOne:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);


    /**
     * TODOne:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    /**
     * TODOne:
     * Refactor your above code to use a `forEach` loop
     */

names.forEach(function(names) {
        console.log(names);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

function firstItem(array){
    return "The first Item in the array is: " + array[0] + ".";
    }

    console.log(firstItem(names));

function secondItem(array){
    return "The second item in the array is: " + array[1] + ".";
    }

console.log(secondItem(names));

function lastItem(array) {
    return "The last item in the array is: " + array[array.length -1] + ".";
    }

    console.log(lastItem(names));

})();
