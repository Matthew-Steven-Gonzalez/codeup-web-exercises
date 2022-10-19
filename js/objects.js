(function() {
    "use strict";

    /**
     * TODOne:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Matthew",
        lastName: "Gonzalez",
        sayHello : function(){
            console.log("Hello from " + person.firstName + " " + person.lastName+ "!")
        }
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODOne:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    console.log(person.sayHello());;

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // console.log(shoppers[0]);
    // console.log(shoppers[2]);
    // console.log(shoppers[1]);

    // for( let i = 0; i < shoppers.length; i++) {
    //     if (shoppers[i].amount > 200) {
    //         console.log(shoppers[i].name + " \n Original Price: $" + (shoppers[i].amount).toFixed(2) + " \n Discount: $" + (shoppers[i].amount * .12).toFixed(2) + "\n Final Price: $" + ((shoppers[i].amount) - (shoppers[i].amount * .12)).toFixed(2));
    //     } else {
    //         console.log(shoppers[i].name + "\n Original Price: $" + (shoppers[i].amount).toFixed(2) + "\n No Discount applied.  \n Final Price: $" + (shoppers[i].amount).toFixed(2));
    //     }
    // }

    shoppers.forEach(function(shopper){
        if (shopper.amount > 200) {
            console.log(shopper.name + " \n Original Price: $" + (shopper.amount).toFixed(2) + " \n Discount: $" + (shopper.amount * .12).toFixed(2) + "\n Final Price: $" + ((shopper.amount) - (shopper.amount * .12)).toFixed(2));
        } else {
            console.log(shopper.name + "\n Original Price: $" + (shopper.amount).toFixed(2) + "\n No Discount applied.  \n Final Price: $" + (shopper.amount).toFixed(2));
        }
    })

    /** TODOne:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // let books = [
    //     {
    //         title: "The Salmon of Doubts",
    //         author: {
    //             firstName: "Douglas",
    //             lastName: "Adams"
    //         }
    //     },
    //     {
    //         title: "Walkaway",
    //         author: {
    //             firstName: "Cory",
    //             lastName: "Doctorow"
    //         }
    //     },
    //     {
    //         title: "A Brief History of Time",
    //         author: {
    //             firstName: "Stephen",
    //             lastName: "Hawkings"
    //         }
    //     }
    // ];


    /**
     * TODOne:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    //
    // for( let i = 0; i < books.length;i++){
    //     console.log("Book #" + (i+1)+ "\n" + "Title: " + books[i].title + "\n" + "Author: " + books[i].author.firstName + " " + books[i].author.lastName + "\n ---");
    // }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(title, author_first, author_last) {
        this.title = title;
        this.firstName = author_first;
        this.lastName = author_last;

    }

    function showBookInfo(book){
        console.log("title: " + this.title + " \n By: " + this.firstName + this.lastName)
    }

    let books = [
        new createBook("The Salmon of Doubt","Douglas","Adams"),
        new createBook("Walkaway","Cory","Doctorow"),
        new createBook("A Brief History of Time","Stephen","Hawkings")
    ]


    // showBookInfo();

    for( let i = 0; i < books.length;i++){
        console.log("Book #" + (i+1)+ "\n" + "Title: " + books[i].title + "\n" + "Author: " + books[i].firstName + " " + books[i].lastName + "\n ---");
    }

})();
