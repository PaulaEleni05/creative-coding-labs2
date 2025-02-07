let age;
const dob="20/05/2005";

// let yobString = dob.substring(6,10);
// let yobNum = parseInt(yobString);


// let yob = parseInt(dob.substring(6,10));
// console.log(yob)

age = 2025 - parseInt(dob.substring(6,10));

let friends = ["Lydia","Alyssa","Ellen","Louise"];
// let arrayLength = friends.length;


friends.splice(2,1,"Paula")

// friends.push("Louise");



// for(let num=0; num<10; num++){
// console.log(num)
// }



for(let num=0; num<friends.length; num++){
    console.log(friends[num])

}

//Notes
//[]Arrays, access by index, put the array name.  
//()Functions, inside parameters
//{}Objects, when I see . property of an object. taking an object/bringing out a spefic object.  how JavaScript grants access to the data inside an object.  
//dot and then name of the property

let myFriend = {name:"Paula", age:19, eirCode:"A94V5F4"}
