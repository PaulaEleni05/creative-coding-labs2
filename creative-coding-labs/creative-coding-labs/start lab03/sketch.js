let data;
let cleanedData =[];
let femaleScores;
let ageGroups;
let chartHeight = 300;
let chartWidth = 400;
let barWidth = 30;
let margin =15;
let gap;
let scaler;
let axisThickness = 5;
let chartPosX = 50;
let chartPosY = 400;
let axisColour;
let barColour; 
let axisTextColour;

function preload(){
data = loadTable('data/Combined.csv','csv','header')
}



function setup() {
createCanvas(600,600)
angleMode(DEGREES)
noLoop()
cleanData();  
femaleScores = cleanedData.map(row => row.Female)
ageGroups = cleanedData.map(row => row.Age_Group)
console.log(femaleScores,ageGroups);

gap = (chartWidth - (femaleScores.length * barWidth) - (margin*2))/(femaleScores.length-1)
scaler = chartHeight/(max(femaleScores));


axisColour = color(255,205,0)
barColour = color(0,255,0)
axisTextColour = color(255,255,255)


}




function draw(){
    background(25,90,0);

    push();
    translate(chartPosX,chartPosY)
    noFill();
    stroke(axisColour);
    strokeWeight(axisThickness);
    line (0,0,0,-chartHeight)
    line (0,0,chartWidth,0)

    push ();
    translate (margin,0)
    for(let i=0; i<femaleScores.length; i++){
    let xPos = (barWidth + gap)*i;
    fill(barColour);
    noStroke();
    rect (xPos,0,barWidth, -femaleScores[i]*scaler)
    fill (axisTextColour);
    noStroke();
    textAlign(LEFT,CENTER);
    textSize(16);
    push()
    translate(xPos + (barWidth/2),10)
    rotate(60)
    text (ageGroups[i], 0, 0);
    pop()
    }
    pop ();

    pop ();

}




// function setup() {
//     createCanvas(500,500)
//     angleMode(DEGREES)
//     noLoop()
//     cleanData();
    // i ="John"

    // for(let i=0; i<data.rows.length; i++) {
    //     cleanData.push(data.rows[i].obj)
    
    // }


    // for(let i=0; i<data.rows.length; i++) {
    //     cleanData[i].Female =parseInt(cleanData[i].Female)
    //     cleanData[i].Male =parseInt(cleanData[i].Male)
    //     cleanData[i].Total =parseInt(cleanData[i].Total)

        // cleanData.push(data.rows[i].obj)
    // }


// }






// function draw(){
//     background(0,255,0)
//     fill (255,0,0);
//     stroke(0,0,0);

//     push();
//     translate(300,300);
//     rotate (-45);
//     fill (255,0,0);
//     stroke(0,0,0);
//     rect (0,0,100,100);
//     pop();



//     push();
//     translate (150,150);
//     rotate (30);
//     fill (255,0,255);
//     stroke(0,0,0);
//     rect (0,0,100,100);
//     pop();

  // console.log(i)



//let femaleAges = []
// [0,0,13,30.......]
// for(let i=0; i<cleanedData.length; i++){
//     // console.log(i);
//     femaleAges.push(cleanedData[i].Female)
//     console.log(femaleAges);

//     }


//second method
// cleanedData.forEach(
//     function(row){
//         femaleAges.push(row.Female)
//     }

// )





//third method
// cleanedData.forEach(
// row => {femaleAges.push(row.Female)}

// );





//forth method
// let femaleAges = cleanedData.map(row => row.Female)
// let filteredFemaleAges = femaleAges.filter(number => number > 3)


// console.log(filteredFemaleAges);



// let femaleScores = cleanedData.map(row => row.Female)

// let ageGroups = cleanedData.map(row => row.Age_Group)

// console.log(femaleScores,ageGroups);



// }

// function cleanData 






function cleanData(){

    for(let i=0; i<data.rows.length; i++) {
        cleanedData.push(data.rows[i].obj)
    }

    for(let i=0; i<data.rows.length; i++) {
        cleanedData[i].Female = parseInt(cleanedData[i].Female)
        cleanedData[i].Male = parseInt(cleanedData[i].Male)
        cleanedData[i].Total = parseInt(cleanedData[i].Total)

        // cleanData.push(data.rows[i].obj)
    }


}



//JavaScript method
// let i = Math.sin(45)
// console.log(i)

//Function draw
//let i = sin(45)
// let i = Math.pow(5,2)
// console.log(i)
//testing one drive sync
