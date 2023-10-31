// Write your JavaScript code here.

function takeOff(){
    let imgObj = document.getElementById('rocket');
    imgObj.style.position = 'absolute';
    imgObj.style.left = '0px';
    imgObj.style.right = '0px';
    imgObj.style.bottom = '0px';
    let flightStatus = document.getElementById('flightStatus');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let shuttleWidth = document.getElementById('spaceShuttleWidth');
    let bg = document.getElementById('shuttleBackground');
    const up = this.document.getElementById('up');
    const down = this.document.getElementById('down');
    const right = this.document.getElementById('right');
    const left = this.document.getElementById('left');
    const takeOffButton = document.getElementById('takeoff');
    const landingButton = document.getElementById('landing');
    const missionAbortButton = document.getElementById('missionAbort')

    takeOffButton.addEventListener("click", function() {
        let readyForTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (readyForTakeOff){
            flightStatus.innerHTML = "Shuttle in flight.";
            bg.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML = '10000';
        }
    });
    landingButton.addEventListener("click", function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        bg.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
        
    });
    missionAbortButton.addEventListener("click", function() {
        let abort = window.confirm("Confirm that you want to abort the mission.");
        if (abort){
            flightStatus.innerHTML = "Mission aborted.";
            bg.style.backgroundColor = 'green';
            shuttleHeight.innerHTML = '0';
        }
    });
    up.addEventListener("click", function(){
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + parseInt('10000');
        imgObj.style.bottom = parseInt(imgObj.style.bottom) + parseInt('10') + 'px';
    });
    down.addEventListener("click", function(){
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - parseInt('10000');
        imgObj.style.bottom = parseInt(imgObj.style.bottom) - parseInt('10') + 'px';
    });
    right.addEventListener("click", function(){
        imgObj.style.left = parseInt(imgObj.style.left) + parseInt('10') + 'px';
    });
    left.addEventListener("click", function(){
        imgObj.style.left = parseInt(imgObj.style.left) - parseInt('10') + 'px';
    });
    

}

// Remember to pay attention to page loading!

window.addEventListener("load",takeOff);



