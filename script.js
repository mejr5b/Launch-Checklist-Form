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

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     let pilotInput = document.querySelector("input[name=pilotName]");
     let copilotInput = document.querySelector("input[name=copilotName]");
     let fuel = document.querySelector("input[name=fuelLevel]");
     let cargo = document.querySelector("input[name=cargoWeight]");
     if (pilotInput.value === "" || copilotInput.value === "" || isNaN(fuel.value) || isNaN(cargo.value)){
       alert("All fields required!");
       event.preventDefault();
     }
   });
 });




