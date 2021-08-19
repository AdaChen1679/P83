var mouseEvent = "empty";
var lpx , lpy;

var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext('2d');
var color = "blue";
var width = 3;

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent= "mouseUp";
}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown (e)
{
    color=document.getElementById("Input_color").value;
    width=document.getElementById("Input_width").value;
    mouseEvent= "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave (e)
{
    mouseEvent= "mouseLeave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove (e)
{
    cpx = e.clientX- canvas.offsetLeft;
    cpy = e.clientY- canvas.offsetTop;

    if (mouseEvent == "mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo (lpx, lpy);
    ctx.lineTo (cpx, cpy);
    ctx.stroke();

}
lpx = cpx;
lpy = cpy;
}
var n_width = screen.width;
var n_height = screen.height;

nw = n_width - 300;
nh = n_height - 200;

if (nw<992) 
{
    document.getElementById("myCanvas").width = nw;
    document.getElementById("myCanvas").height = nh;
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) 
{
    color=document.getElementById("Input_color").value;
    width=document.getElementById("Input_width").value;
lpx = e.touches[0].clientX - canvas.offsetLeft;
lpy = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
    cpx = e.touches[0].clientX - canvas.offsetLeft;
    cpy = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(lpx, lpy);
    ctx.lineTo(cpx, cpy);
    ctx.stroke();

    lpx = cpx;
    lpy = cpy;
}