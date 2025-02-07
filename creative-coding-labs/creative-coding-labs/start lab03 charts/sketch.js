let data;
let cleanedData = [];
let charts = [];


function preload(){
    data = loadTable("data/combined.csv", "csv", "header")
}


function setup(){

    createCanvas(500,500);
    angleMode(DEGREES);
    noLoop();
    cleanData();
    charts.push(new BarChart(cleanedData,"Age_Group","Female",400,400,100,415,12,50,450));
    // charts.push(new BarChart(cleanedData,"Age_Group","Male",200,200,10,15,2,250,450));
    // charts.push(new BarChart(cleanedData,"Age_Group","Total",150,400,30,15,2,50,200));


}



function draw(){
    background(125,125,125);
    // charts.forEach(chart => chart.renderBars())
    charts.forEach(chart => chart.renderBars())
    charts.renderAxis();
    charts.renderLabels();

}


function cleanData(){

    for (let i = 0; i<data.rows.length;i++){
        cleanedData.push(data.rows[i].obj)
    }


    for (let i = 0; i<cleanedData.length;i++){
        cleanedData[i].Female = parseInt(cleanedData[i].Female)
        cleanedData[i].Male = parseInt(cleanedData[i].Male)
        cleanedData[i].Total = parseInt(cleanedData[i].Total)
    }
}

