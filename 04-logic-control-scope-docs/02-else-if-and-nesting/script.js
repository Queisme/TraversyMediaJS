const d = new Date(10, 30, 2032, 6, 0, 0);
const hour = d.getHours();

if( hour < 12 ){
  console.log("Good Morning");
  if ( hour === 6){
    console.log("Wake up!");
  }
} else if(hour < 18) {
  console.log("Good Afternoon");
} else {
  console.log("Good Night");

  if (hour >= 20){
    console.log("Goto Bed!");
  }
}

if (hour >= 7 && hour < 15){
  console.log("Work work work!");
}
if (hour === 6 || hour === 20){
  console.log("Brush your teeth!");
}