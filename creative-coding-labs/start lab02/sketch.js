let friend01 ={name:"Sam", age: 46, bowling:true}
let friend02 ={name:"Max", age: 29, bowling:false}
let friend03 ={name:"Lydia", age: 21, bowling:false}
let friend04 ={name:"Alex", age: 27, bowling:true}
let friend05 ={name:"David", age: 32, bowling:true}

let friends =[];
let friendAges =[];
let friendBowlingAges =[];


friends.push(friend01);
friends.push(friend02);
friends.push(friend03);
friends.push(friend04);
friends.push(friend05);

// for(let index=0; index<5; index++){
//     console.log(friends[index].name)
// }

for(let index=0; index<5; index++){
    friendAges.push(friends[index].age) 
}


// for(let index=0; index<5; index++){
//     if(friends[index].bowling == true){
//         friendBowlingAges.push(friends[index].age) 
//     }
// }



//Now how to code
function calcAvg(arrayNums) {    
    // declare a start value
    let startValue=0;
    // set a startValue equal to zero

    // loop throught my Array
    // add the value to the startValue
    //end loop
    for (let i=0; i<arrayNums.length; i++){
        startValue = startValue + arrayNums[i]
    }

    return startValue/arrayNums.length;

    // return startvalue/number of values

}




// for(let i =0; i<100; i++){
//     console.log[i]
// }


// for(let i =0; i<100; i++){
//     if(i%5==0){console.log(i)}
// }



// function median(arrayNums){
//     if(arrayNums.length%2==0){
//         console.log("it's even baby")
//     }else {
//         console.log[Math.floor(arrayNums.lenght/2)]
//     }
// }


// function median(arrayNums){
//     if(arrayNums.length%2==0){
//         console.log("it's even baby")
//     }else {
//         return arrayNums[Math.floor(arrayNums.length/2)]
//     }
// }


//Now how to code
function median(arrayNums){
    arrayNums.sort((a,b) => (a-b))

    if(arrayNums.length%2==0){
        // console.log("it's even baby")
        let endNum = arrayNums.length/2
        let startNum = endNum - 1

        return (arrayNums[startNum] + arrayNums[endNum])/2

    } else {
        return arrayNums[Math.floor(arrayNums.length/2)]
    }
}





//Notes
//[]Arrays, access by index, put the array name.  
//()Functions, inside parameters
//{}Objects, when I see . property of an object. taking an object/bringing out a spefic object. JavaScript grants access to the data inside an object.  
//dot and then name of the property
//% Modules, tells you the reminder . to work out if its odd or even.
//testing onedrive sync