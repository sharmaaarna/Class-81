
Canvas = document.getElementById("olympic_art");
ctx=Canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 1;
ctx.arc(250, 250, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "Red";
ctx.lineWidth = 1;
ctx.arc(120, 250, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 1;
ctx.arc(380, 250, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 1;
ctx.arc(320, 300, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 1;
ctx.arc(180, 300, 50, 0, 2 * Math.PI);
ctx.stroke();