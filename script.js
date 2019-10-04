// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
let button = null;

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     event.preventDefault();
     let pilotInput = document.querySelector("input[name=pilotName]");
     let copilotInput = document.querySelector("input[name=copilotName]");
     let fuel = document.querySelector("input[name=fuelLevel]");
     let cargo = document.querySelector("input[name=cargoWeight]");
     if (pilotInput.value === "" || copilotInput.value === "" || (fuel.value)==="" || cargo.value===""){
       alert("All fields required!");
       event.preventDefault();
     }
      else if (isNaN(fuel.value) || isNaN(cargo.value)){
      alert("Information invalid!");
      event.preventDefault();
     }
     else {
       document.getElementById("pilotStatus").innerHTML = `${pilotInput} is ready for launch.`;
       document.getElementById("copilotStatus").innerHTML = `${copilotInput} is ready for launch.`;
       /// all validation in here
     }
   });
 });

function init () {
  button = document.getElementById("formSubmit").onclick = function(event){
    document.querySelector("faultyItems").style.visibility = "visible";
  };
};


