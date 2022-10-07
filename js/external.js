"use strict";

console.log("Hello from external JavaScript!");

alert("Welcome to my Website!");

let color = prompt("What's your favorite color?");

alert("Great, " + color + " is my favorite color too!");

//3.1//


alert("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?")
let CPD = prompt("How much does it cost per day to rent a movie?");

let littlemeraidDays = parseFloat(prompt("How many days for The Little Mermaid? (hint: 3 days)"));

let BrotherBearDays = parseFloat(prompt("How many days for Brother Bear? (hint: 5 days )"));

let HerculesDays = parseFloat(prompt("And lastly how many days for Hercules? (hint: 1 days)"));

var movieFee = (littlemeraidDays * CPD) + (BrotherBearDays * CPD) + ( HerculesDays * CPD);

alert("$" + movieFee + " is how much you owe for movies. ");


//3.2//


alert("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.")

let googleHour = prompt("How many hours did you work at Google? (hint: 6 hours)");

let amazonHour = prompt("How many hours did you work at Amazon? (hint: 4 hours)");

let facebookHour = prompt("How many hours did you work at Facebook? (hint:10 hours)");

let googlePay = googleHour * 400;

let amazonPay = amazonHour * 380;

let facebookPay = facebookHour * 350;

alert("You made a total of $" + (googlePay + amazonPay + facebookPay) + " with $" + googlePay+ " from Google, $" + amazonPay + " from Amazon, and $" + facebookPay + " from Facebook.");


//3.3//

let classNotFull = confirm("is the class full? (Ok = Yes / Cancel = No)");

let classConflict = confirm("Does the class conflict with your schedule? (Ok = Yes / Cancel = No)");

if (classConflict == true  || classNotFull == true) {
    alert("You cannot register for this class.");
}else {
    alert("You can register for this class.");
}


//3.4//

let membership = confirm("Are you a Premium member? (Ok = Yes / Cancel = No)");

if (membership == false){
    var cart = prompt( "How many items do you have");
} else{
    alert("Welcome value customer");
}

if (cart >= 2 || membership == true){
    var discount = confirm("is the Offer Still valid? (Ok = Yes / Cancel = No)");
}
else{
    alert("NO DISCOUNT FOR YOU!!!!")
}

if (discount == true){
    alert("ENJOY THE SAVINGS!!!");
}
else{
    alert("Sorry no savings today!");
}