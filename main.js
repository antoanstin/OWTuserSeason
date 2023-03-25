let live = parseInt(prompt("enter the month"));
var actual= new Date();
actual.setMonth(live);
var time=actual.getMonth();
if(0<=time&&time<4)
{
	console.log("fall");
}
else if(4<=time&&time<8)
{
	console.log("summer");
}
else{
	console.log("winter");
}