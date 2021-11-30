var draw="";
var canvas=document.getElementById("myCanvas");
var context=canvas.getContext("2d");
var lastx,lasty;
canvas.addEventListener("mousedown",mouse_down)
function mouse_down(){
    draw="myMouseDown"
    console.log(draw)
}
canvas.addEventListener("mouseleave",mouse_leave)
function mouse_leave(){
    draw="myMouseLeave"
    console.log(draw)
}
canvas.addEventListener("mouseup",mouse_up)
function mouse_up(){
    draw="myMouseUp"
    console.log(draw)
}
canvas.addEventListener("mousemove",mouse_move)
function mouse_move(e){
    var current_position_x=e.clientX-canvas.offsetLeft
    var current_position_y=e.clientY-canvas.offsetTop
    if(draw=="myMouseDown"){
        context.beginPath()
        context.strokeStyle="black";
        context.lineWidth=5;
        context.moveTo(lastx,lasty)
    context.lineTo(current_position_x,current_position_y);
    context.stroke();
    }
    lastx=current_position_x;
    lasty=current_position_y;
}