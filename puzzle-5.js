// Help Rudy the Red Dot collect all the green dots!

// Control Rudy with the following commands:
//  up();                   -- moves Rudy up one square
//  down();                 -- ...down one square
//  left();                 -- ...left one square
//  right();                -- ...right one square

// Interact with Rudy's environment using the following commands:
//  remainingDots();        -- returns the number of green dots remaining
//  getColor();             -- returns the color of Rudy's square
//  setColor(color);        -- changes the color of Rudy's square, opens gates if colors match


function go (n, direction) {
 var steps = 0;
 while (steps < n){
   direction();
   steps = steps + 1;
 }
}
  
  go(2,right);
 if (getColor() =="red"){
  up();
}else{
  down();}
  go(2,right);
 if (getColor() =="red"){
  up();
}else{
  down();}
  go(2,right);
 if (getColor() =="red"){
  up();
}else{
  down();}
  go(3,right);
