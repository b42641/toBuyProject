//  Peterson_David_assignment3.js
// David Peterson 2013/3/19
// SID 1303 assignment 3
//




// Key index for Summit Choice
var peakChosen // index number of peak chosen to climb

// Boolean return of trail or not
var trail2Summit = function(peakChosen) {
return json2.highPeaks2[peakChosen].peakTrail;
};

//
var trailMessage = function() {
    var trailRespond = " ";
    if (trail2Summit (peakChosen)) {
        trailRespond =  "The trail up the summit is well marked. Enjoy your hike."
    } else {
        trailRespond = "Since the summit is not marked by a trail, bring a map and gps."
    }
    return trailRespond
};


// Original set up until I was able get json working.
// left in program because of array and function (and it was getting too late to change.)
var peak = {
    peakName: "Marcy",
    peakHeight: 5344,
    peakTrail: false,
    peakTrailhead: ["St. Johns", "Upper Works", "Elk Lake"],
    peakTrailLength: [10, 9, 16],
    hikeTo: function(trailHead) {},
    
    chooseTrailhead: function () {
        console.log("The following are trailheads to the peak: ")
        for (var i = 0; i < peak.peakTrailhead.length; i++) {
            var potentialTrails = peak.peakTrailhead[i];
            console.log(potentialTrails);
        } //for
            return peak.peakTrailLength;
    }, //chooseTrailhead
    
    desiredTrailhead: function(trailChoice) {
        trailChoice -= 1;
        console.log("Since you desire to begin at " + peak.peakTrailhead[trailChoice] + ". The length is " + peak.peakTrailLength[trailChoice] + " miles.");
    
    } // desiredTrailhead   
}; //var

// Various variables 
var hikeLength = [6, 5, 4];
var jerkyTaken = [50, 30, 20];



//while hiking take a 10 minute break every 60 minutes of hiking
console.log("Take a 10 minute hike every hour.");
var jerky=50;
var hikeMessage = function(minutesToHike) {console.log("Keep hiking, " + minutesToHike + " minutes until break.");}
var breakMessage = function(minutesToBreak) {console.log("Keep hiking, " + minutesToBreak + " until break.");}

// Eat Half the Remaining Jerky
var eatHalfTheJerky = function(jerkyRemaining) {
    var jerkyToEat = Math.floor(jerkyRemaining / 2);
    for (var i=jerkyToEat; i>0; i--) {
        console.log(i + " pieces of jerky left to eat on this break");
    }
    console.log ("Stop eating the jerky!");
    jerkyRemaining -= jerkyToEat;
    return jerkyRemaining;
};

//THE TRIP
// Keep time of the hike and break
var hikingTrip = function(hoursOfHiking) {
    var timeCount = 60; //hike for 60 minutes
    var breakCount = 10; //break for 10 minutes
    for (var i = hoursOfHiking; i>0; i--) {
        //hike for 60 minutes
        while (timeCount > 10) {
            timeCount -= 10;
            hikeMessage (timeCount);
        }// while timeCount
        
        console.log("Time to take a break.");
        //eat half the jerky
        jerky = eatHalfTheJerky(jerky);
    
        while (breakCount > 0) {
            breakCount -= 5;
            console.log("There are " + breakCount + " minutes of break time left.");
        }//while breakCount
    
        console.log("Time to get moving.")
        timeCount = 60;
        breakCount = 10;
        hikeMessage (timeCount);

    } //for hours of hiking
    console.log("We are there!");
} // hikingTrip

// Checkpoints for Trip - mutator, setter, getter, etc.
var checkPoints = ["Trailhead", "Cross Creek", "Ascend", "Summit", "Descend", "Cross Creek", "Trailhead"]
var displayCheckPoints = function(displayCheckPoints) {
console.log("Evaluate Checkpoints: " + displayCheckPoints);
}
var removeCheckPoints = function(howMany) {
    checkPoints.splice(1,howMany);
};
var addCheckPoints = function(finalCheckPoint) {
    checkPoints.push(finalCheckPoint);
};


//-------------------------------
// Begin Adventure
//--------------------------------
console.log("The Adventure Begins Here");

// Choose Peak
console.log("Which peak do you want to climb?");
for (var i=0; i < json2.highPeaks2.length; i++) {
    console.log("[" + (i+1) + "] " + json2.highPeaks2[i].peakName + " Height: " + json2.highPeaks2[i].peakHeight + " feet - Difficulty: " + json2.highPeaks2[i].peakDifficulty + " - View Rating:" + json2.highPeaks2[i].peakView);
}

//Marcy Chosen
console.log("The first peak is chosen.");
var userChoice = 1; // represent user choosing first peak
peakChosen = userChoice - 1; // set the index number

// List trailhead options by displaying each potential trailhead // array return
var trailLengths = peak.chooseTrailhead ();
for (var i=0; i<trailLengths.length; i++) {
    console.log(peak.peakTrailhead[i] + " is " + trailLengths[i] + " miles in length.");
}

// Return the desired trail (third)
peak.desiredTrailhead (3);

//Does the peak have a trail? If it is a trailless peak, we need map and gps //Boolean
console.log(trailMessage());

// make the trip
console.log("Begin Trip");
hikingTrip (hikeLength[2]);

// What did you think? Return an Object
console.log("What do you want to do next? Here is a look at the top five peaks."); 
for (var key in highPeaks2) {
    var peakName = highPeaks2[key];
    console.log(key);
    console.log(peakName);
}

// Work with Checkpoint List.
displayCheckPoints(checkPoints); //array argument
//Remove first Checkpoints - Mutator of Checkpoints
removeCheckPoints(4);
displayCheckPoints (checkPoints); //array argument
//add checkpoint
addCheckPoints("Car");
displayCheckPoints (checkPoints); //array argument



console.log("finished");