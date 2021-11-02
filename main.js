var mouseevent=" ";
var lastpostion_x,lastpostion_y;
canvas=document.getElementById("my_canvas");
ctx=canvas.getContext;
var color = "black";


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
	mouseevent="mousedown";
	
	
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
	current_postion_of_mousex=e.clientX-canvas.offsetLeft;
	current_postion_of_mousey=e.clientY-canvas.offsetTop;
	if(mouseevent=="mousedown"){
		ctx.beginPath();
		ctx.strokeStyle=color;
		ctx.lineWidth=1;
		ctx.moveTo(lastpostion_x, lastpostion_y);
		ctx.lineTo(current_postion_of_mousex, current_postion_of_mousey);
		ctx.stroke();
	
	}
lastpostion_x=current_postion_of_mousex;
	lastpostion_y=current_postion_of_mousey;
	
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
	mouseevent="mouseup";
	
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
	mouseevent="mouseleave";
}