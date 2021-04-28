function paint() {
    let c = document.getElementById("canvas1");
    let ctx = c.getContext("2d");
    let r = 50;
    let xstart = 75, ystart = 75;
    let x = xstart;
    let y = ystart;
    let dist = 10;

    ctx.strokeStyle = "rgba(0,167,255,1)"; 
    ctx.lineWidth = 5;
    ctx.beginPath();              
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();           
   

    let b = x + r + dist + (r * 2);
    x = b - r;
    ctx.moveTo(b, y);
    ctx.strokeStyle = "rgba(0,0,0,1)"; 
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = "rgba(255,0,47,1)"; 
    ctx.beginPath();
    b = x + r + dist + (r * 2);
    x = b - r;
    ctx.moveTo(b, y);
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    //2 riga
    let x2 = 75 + r + (dist / 2);
    let y2 = 75 + r;
    let l = x2 + r;

    ctx.strokeStyle = "rgba(255,189,0,1)"; 
    ctx.beginPath();
    ctx.moveTo(l, y2);
    ctx.arc(x2, y2, r, 0, Math.PI * 2, false);   
    ctx.stroke(); 
    ctx.closePath();       
    
    ctx.strokeStyle = "rgba(0,167,0,1)"; 
    ctx.beginPath();
    l = x2 + r + dist + (r*2);
    x2=l-r;
    ctx.moveTo(l, y2);
    ctx.arc(x2, y2, r, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

  
}