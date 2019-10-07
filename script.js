let button = null;

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     event.preventDefault();
     let pilotInput = document.querySelector("input[name=pilotName]");
     let copilotInput = document.querySelector("input[name=copilotName]");
     let fuel = document.querySelector("input[name=fuelLevel]");
     let cargo = document.querySelector("input[name=cargoWeight]");
     let fuelLow = (fuel.value < 10000) ? true : false;
     let cargoHigh = (cargo.value > 10000) ? true : false;

     if (pilotInput.value === "" || copilotInput.value === "" || (fuel.value)==="" || cargo.value===""){
       alert("All fields required!");
       event.preventDefault();
     }
      else if (isNaN(fuel.value) || isNaN(cargo.value)){
      alert("Information invalid!");
      event.preventDefault();
     }
     else {
       document.getElementById("pilotStatus").style.visibility = "visible";
       document.getElementById("copilotStatus").style.visibility = "visible";
       document.getElementById("pilotStatus").innerHTML = `${pilotInput.value} is ready for launch.`;
       document.getElementById("copilotStatus").innerHTML = `${copilotInput.value} is ready for launch.`;
       /// all validation in here
     };
     if(fuelLow){
       document.getElementById("fuelStatus").style.visibility = "visible";
       document.getElementById("fuelStatus").innerHTML = "Not enough fuel for launch!";
       document.getElementById("fuelStatus").style.color = "red";
       document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
       document.querySelector("h2").style.color = "red";
     };
     if(cargoHigh){
       document.getElementById("cargoStatus").style.visibility = "visible";
       document.getElementById("cargoStatus").innerHTML = "Too much mass for take off!";
       document.getElementById("cargoStatus").style.color = "red";
       document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
       document.querySelector("h2").style.color = "red";
     };
     if(!fuelLow && !cargoHigh){
       document.querySelector("h2").innerHTML = "Shuttle is ready for launch";
       document.querySelector("h2").style.color = "green";
     }
   });
 });

window.addEventListener("load", function() {
  fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      // Access the JSON in the response
      response.json().then( function(json) {
        const div = document.getElementById("missionTarget");
        div.innerHTML = `
          <ul>
            <li>Name: ${json[2].name}</li>
            <li>Diameter: ${json[2].diameter}</li>
            <li>Star: ${json[2].star}</li>
            <li>Distance from Earth: ${json[2].distance}</li>
<li>Number of Moons: ${json[2].moons}</li>
          </ul>
<img src="${"https://www.nasa.gov/centers/langley/images/content/698148main_Brains_904_2.jpg"}"></img>
        `;
      });
  });
});







