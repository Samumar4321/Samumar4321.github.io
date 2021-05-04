
function paint() {
    let c = document.getElementById("faccina");
    let ctx = c.getContext("2d");
    //faccia
    ctx.beginPath();    
    ctx.arc(400,400,200,0,Math.PI*2,false);      
    ctx.fillStyle="yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();  
    //occhio sx
    ctx.beginPath();    
    ctx.arc(330,300,35,0,Math.PI*2,false);      
    ctx.fillStyle="black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //pupilla sx
    ctx.beginPath();    
    ctx.arc(330,300,10,0,Math.PI*2,false);      
    ctx.fillStyle="white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();  
    //occhio dx
    ctx.beginPath();    
    ctx.arc(470,300,35,0,Math.PI*2,false);      
    ctx.fillStyle="black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    //pupilla dx
    ctx.beginPath();    
    ctx.arc(470,300,10,0,Math.PI*2,false);      
    ctx.fillStyle="white";
    ctx.fill();
    ctx.stroke();
    ctx.closePath(); 
    //bocca
    ctx.beginPath();    
    ctx.arc(400,475,65,Math.PI,0,true);      
    ctx.fillStyle="red";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
 

}