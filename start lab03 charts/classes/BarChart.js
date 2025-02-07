class BarChart{
    constructor(_data,_xValue, _yValue,_chartWidth,_chartHeight,_chartPosX,_chartPosY,_barWidth,_margin){
        this.data = _data
        this.xValue = _xValue;
        this.yValue = _yValue;
        this.chartWidth = _chartWidth;
        this.chartHeight = _chartHeight;
        this.chartPosX = _chartPosX;
        this.chartPosY = _chartPosY;
        this.barWidth = _barWidth;
        this.margin = _margin;

        this.axisColor = color(0,0,0);
        this.barColor = color(125,200,30);
        this.textCol = color(255,255,255);
        this.numTicks =5;
        this.thickLenght

        this.gap = (this.chartWidth - (this.data.length * this.barWidth)-(this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight/(max(cleanedData.map(row => row[this.yValue])));

    }





    renderBars(){
        push();
            translate(this.chartPosX,this.chartPosY);
            // stroke(this.axisColor);
            // strokeWeight(this.chartWeight);
            // line(0,0,this.chartWidth,0);
            // line(0,0,0,-this.chartHeight);
    
            push();
                translate(this.margin,0);
        
                for(let i=0; i<this.data.length;i++){
           
                    noStroke();
                    push()
                    fill(this.barColor)
                    rect(((this.barWidth+this.gap)*i),0,this.barWidth,-this.data[i][this.yValue]*this.scaler)
                    textSize(12);
                    fill(this.textCol);
    
                     push();
                        stroke(this.barWidth/2);
                        translate(((this.barWidth+this.gap)*i),20)
                        rotate(45)
                        text(this.data[i][this.xValue],0,0)
                    pop();
    
                       
                }
            pop()
        pop();
    }







renderAxis(){
    push();
    translate(this.chartPosX,this.chartPosY);
    stroke(this.axisColor);
    strokeWeight(this.chartWeight);
    line(0,0,this.chartWidth,0);
    line(0,0,0,-this.chartHeight);

    // push();
    //     translate(this.margin,0);

    //     for(let i=0; i<this.data.length;i++){
   
    //         noStroke();
    //         push()
    //         fill(this.barColor)
    //         rect(((this.barWidth+this.gap)*i),0,this.barWidth,-this.data[i][this.yValue]*this.scaler)
    //         textSize(12);
    //         fill(this.textCol);

    //          push();
    //             stroke(this.barWidth/2);
    //             translate(((this.barWidth+this.gap)*i),20)
    //             rotate(45)
    //             text(this.data[i][this.xValue],0,0)
    //         pop();

               
    //     }
    // pop()
pop();
}





renderLabels(){
    push();
    translate(this.chartPosX,this.chartPosY);
    // stroke(this.axisColor);
    // strokeWeight(this.chartWeight);
    // line(0,0,this.chartWidth,0);
    // line(0,0,0,-this.chartHeight);

    push();
        translate(this.margin,0);

        for(let i=0; i<this.data.length;i++){
   
            noStroke();
            push()
            fill(this.barColor)
            rect(((this.barWidth+this.gap)*i),0,this.barWidth,-this.data[i][this.yValue]*this.scaler)
            textSize(12);
            fill(this.textCol);

             push();
                stroke(this.barWidth/2);
                translate(((this.barWidth+this.gap)*i),20)
                rotate(45)
                text(this.data[i][this.xValue],0,0)
            pop();

               
        }
    pop()
pop();


}


renderTicks(){
    push()
    translate(this.chartPosX,this.chartPosY);
    noFill()
    stroke(this.axisTickColor);
    strokeWeight(this.chartThickWeight);
    // line(0,0,this.chartWidth,0);
    // line(0,0,0,-this.chartHeight);

    let tickIncrement = this.chartHeight/5/numTicks;
     for (let i = 0; i <= 5 ; i++) {
            // line (0,20*i,-10,0)    
            line (0,-tickIncrement*i,-10,-tickIncrement*i)        
    
     }
      
    pop()


}




}



// function draw(){

//     background(125,125,125);
//     charts.forEach(chart => chart.render())
    

// }



