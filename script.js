 /* 
    SCRIPT.JS

    This is where you'll complete the SkillBuilder. Look at the Markdown tab (in the same pane as the console) for detailed README instuctions!
*/

function calculateCarpet() {
  // 👇 Write your code here 👇
  getRoomWidth(1);
  let room1Width = getRoomWidth(1);
  getRoomWidth(2);
  let room2Width = getRoomWidth(2);
  getRoomLength(1);
  let room1Length = getRoomLength(1);
  getRoomLength(2);
  let room2Length = getRoomLength(2);
  
  let room1Area = room1Width * room1Length;
  let room2Area = room2Width * room2Length;
  let totalArea = (room1Area + room2Area) * 1.1;
  console.log("click");
  result = showResult(totalArea);
}

calculateCarpetTest();

/* LEVEL UP! (optional) 
	1. Function explanations:
    - getRoomWidth(roomNumber) > this allows the code to get the value the user
    inputted into the text field for the width for room 1 or 2 (depending on the
    number in the parenthesis), which is then stored into the let variable
    room1Width/room2Width that can be used to get the totalArea

    - showResult(totalArea) > this shows the user the total square foot after all
    of the equations have been calculated and the "calculate" button is clicked

	2. Custom styles added: 
    - new logo
    - new font
    - new color palette
    - changed the button, result box, and form box to have rounded edges

*/