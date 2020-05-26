console.log('JS is connected.');

//numSpaceFrens will be replaced with an array containing the names of people in space.
const numSpaceFrens = Math.floor(Math.random()*5)+1;
const frenSpacingDegrees = 360/numSpaceFrens;

const addFren = (axisNumber) => {
  document.getElementById(`spacefrens`).innerHTML += 
    `<div class= "space_fren_axis" id="axis${axisNumber}">
      <img id="spacefren" src="assets/images/SpaceFren.png">
    </div>`;
};

//the variable numSpaceFrens here will be replaced with the length of the array of people in space.
for (i = 0; i < numSpaceFrens; i++) {
  addFren();
};

console.log(numSpaceFrens);
console.log(frenSpacingDegrees);
