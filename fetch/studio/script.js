//TODO: Add Your Code Below
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            
            let astronautInfo = document.getElementById("container");
            astronautInfo.innerHTML =`<div>Number of Astronauts: ${json.length}</div>`
            let ordered = json.sort(function (a, b) {
                return a.hoursInSpace - b.hoursInSpace;
            });
            for (item in ordered){
                if (ordered[item].active === true){
                    astronautInfo.innerHTML +=`
        <div class="astronaut">
            <div class="bio">
                <h3>${ordered[item].firstName} ${ordered[item].lastName}</h3>
                <ul>
                <li>Hours in space: ${ordered[item].hoursInSpace}</li>
                <li class="active">Active: ${ordered[item].active}</li>
                <li>Skills: ${ordered[item].skills}</li>
                </ul>
                </div>
            <img class="avatar" src="${ordered[item].picture}">
        </div>`;

                } else{
                astronautInfo.innerHTML +=`
        <div class="astronaut">
            <div class="bio">
                <h3>${ordered[item].firstName} ${ordered[item].lastName}</h3>
                <ul>
                <li>Hours in space: ${ordered[item].hoursInSpace}</li>
                <li>Active: ${ordered[item].active}</li>
                <li>Skills: ${ordered[item].skills}</li>
                </ul>
                </div>
            <img class="avatar" src="${ordered[item].picture}">
        </div>`;}
            }
        })
            
        
    })
})