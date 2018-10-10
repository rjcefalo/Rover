// Rover Object Goes Here
// ======================
var rover= {
  direction: "N",
  x: 0,
  y: 0,
  travelLog,
}
//Keeps track of where has rover been
var travelLog={
  x:[],
  y:[]
}
//Board, anything that isn't null is and obstacle
var board = [ 
  [null,null,null,null,null,null,null,null,null,null],
  ["x ",null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null] ];
// ======================
//Checks if there's an object in front of rover(It doesn't check the back so it just runs over your dog)
function checkFront(){
  switch(rover.direction){
    case "S":
      var yAux=(rover.y)+1;
      if(board[yAux][rover.x]==null){
        return true;
      }
      else return false;
    case "N":
      var yAux=(rover.y)-1;
      if(board[yAux][rover.x]==null){
        return true;
      }
      else return false;
    case "E":
      var xAux=(rover.x)-1;
      if(board[rover.y][xAux]==null){
        return true;
      }
      else return false;
    case "W":
      var xAux=(rover.x)+1;
      if(board[rover.y][xAux]==null){
        return true;
      }
      else return false;
  }
}

//Says where the rover is, and which direction is it looking at
function position(){
  travelLog.x.push(rover.x);
  travelLog.y.push(rover.y);
  console.log("Rover's position is (" + rover.x + "," + rover.y+") looking: " + rover.direction);
}
//Moves forwards if it's within the board dimensions, and if there are no obstacles in front
function moveForward(){
  switch(rover.direction){
    case "N":
      if (rover.y>0 && rover.y<=9 && checkFront()){
        rover.y-=1;
      }
      else return console.log("Rover is stuck in a wall, can't move forward");
      break;
    case "S":
      
      if (rover.y>=0 && rover.y<9 && checkFront()){
        rover.y+=1;
      }
      else return console.log("Rover is stuck in a wall, can't move forward");
      break;
    case "E":
      if (rover.x>0 && rover.x<=9 && checkFront()){
        rover.x-=1;
      }
      else return console.log("Rover is stuck in a wall, can't move forward");
      break;
    case "W":
      if (rover.x>=0 && rover.x<9 && checkFront()){
        rover.x+=1;
      }
      else return console.log("Rover is stuck in a wall, can't move forward");
      break;
  }
  position();
}
//Moves backwards if it's within the board dimensions
function moveBackward(){
  switch(rover.direction){
    case "S":
      if (rover.y>0 && rover.y<=9){
        rover.y-=1;
      }
      else return console.log("Rover is stuck in a wall, good there's not a sword in front");
      break;
    case "N":
      if (rover.y>=0 && rover.y<9){
        rover.y+=1;
      }
      else return console.log("Rover is stuck in a wall, good there's not a sword in front");
      break;
    case "W":
      if (rover.x>0 && rover.x<=9){
        rover.x-=1;
      }
      else return console.log("Rover is stuck in a wall, good there's not a sword in front");
      break;
    case "E":
      if (rover.x>=0 && rover.x<9){
        rover.x+=1;
      }
      else return console.log("Rover is stuck in a wall, good there's not a sword in front");
      break;
  }
  position();
}
//Turns left
function turnLeft(){
  switch(rover.direction){
    case "N":
      rover.direction="E";
      break;
    case "E":
      rover.direction="S";
      break;
    case "S":
      rover.direction="W";
      break;
    case "W":
      rover.direction="N";
      break;
  }
  console.log("Rover turned " + rover.direction);
}
//Turns right
function turnRight(){
  switch(rover.direction){
    case "N":
      rover.direction="W";
      break;
    case "E":
      rover.direction="N";
      break;
    case "S":
      rover.direction="E";
      break;
    case "W":
      rover.direction="S";
      break;
  }
  console.log("Rover turned " + rover.direction);
}
//Takes commands so rover can follow them (L-Left, R-Right, F-Forward, B-Backward)
function simonSays(input){
  for(var i=0;i<input.length;i++){
    switch(input[i]){
      case"L":
      case "l":
        turnLeft();
        break;
      case"R":
      case "r":
        turnRight();
        break;
      case"F":
        case "f":
        moveForward();
        break;
      case"B":
      case "b":
        moveBackward();
        break;

      default:
        console.log(input[i] + " is not a valid input");
    }
  }
//At the end of simonSays() function it says where rover has been from travelLog
  console.log("Rover left a trace");
  for(var i=0;i<travelLog.x.length;i++){
    console.log("("+travelLog.x[i]+","+travelLog.y[i]+")");
  }
}
