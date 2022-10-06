"use strict";

console.log("Hello from external JavaScript!");

alert("Welcome to my Website!");

var color = prompt("What's your favorite color?");

alert("Great, " + color + " is my favorite color too!");

alert("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?")
var CPD = 3;

var littlemeraidDays = prompt("How many days for The Little Mermaid? (hint: 3 days)");

var BrotherBearDays = prompt("How many days for Brother Bear? (hint: 5 days )");

var HerculesDays = prompt("And lastly how many days for Hercules? (hint: 1 days)");

var movieFee = (littlemeraidDays * CPD) + (BrotherBearDays * CPD) + ( HerculesDays * CPD);

alert("$" + movieFee + " is how much you owe for movies. ");


alert("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.")

var googleHour = prompt("How many hours did you work at Google? (hint: 6 hours)");

var amazonHour = prompt("How many hours did you work at Amazon? (hint: 4 hours)");

var facebookHour = prompt("How many hours did you work at Facebook? (hint:10 hours)");

var googlePay = googleHour * 400;

var amazonPay = amazonHour * 380;

var facebookPay = facebookHour * 350;

alert("You made a total of $" + (googlePay + amazonPay + facebookPay) + " with $" + googlePay+ " from Google, $" + amazonPay + " from Amazon, and $" + facebookPay + " from Facebook.");

var classNotFull = confirm("is the class full? (Ok = Yes / Cancel = No)");

var classConflict = confirm("Does the class conflict with your schedule? (Ok = Yes / Cancel = No)");

if (classConflict === true  || classNotFull === true) {
    alert("You cannot register for this class.");
}else {
    alert("You can register for this class.");
}

var membership = confirm("Are you a Premium member? (Ok = Yes / Cancel = No)");

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