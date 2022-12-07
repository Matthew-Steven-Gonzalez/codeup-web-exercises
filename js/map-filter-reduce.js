"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLanguages = users.filter((user) => user.languages.length >= 3);

let theirEmails = users.map((user) => user.email );

const YOE = users.reduce((accumulator, currentValue) => accumulator + currentValue.yearsOfExperience, 0) / users.length;

const longestEmail = users.reduce((longest, user) => user.email.length > longest.email.length ? user : longest);

const usersNames = users.reduce((names, user,index) => {
    if( index < users.length -1){
        return names += user.name + ", ";
    }
    else{
        return names += "and " + user.name + ".";
    }
},"Your instructors are: " );

const listOfLanguages = users.reduce((languages, user) => {
    for(const language of user.languages){
        if(!languages.includes(language)){
            languages.push(language);
        }
    }
    return languages;
},[]);


console.log(theirEmails);

console.log(threeLanguages);

console.log(YOE);

console.log(longestEmail);

console.log( usersNames);

console.log(listOfLanguages);