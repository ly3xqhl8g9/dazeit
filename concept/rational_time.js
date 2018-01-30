var UNIX_MILLISECONDS = (new Date()).getTime()
var HOLOCENE_ADD = 0
var UNIX_START_YEAR = HOLOCENE_ADD + 1970

var SIDEREAL_YEAR = 31558149.504
var MILLISECOND_TO_MILLIBLINK = 3.1687536047487507

var UNIX_MILLIBLINKS = UNIX_MILLISECONDS * MILLISECOND_TO_MILLIBLINK

var MILLIBLINKS_IN_CYLIPSE = 100000000000
var MILLIBLINKS_IN_COURSE  =  10000000000
var MILLIBLINKS_IN_STAGE   =   1000000000
var MILLIBLINKS_IN_STANCE  =    250000000
var MILLIBLINKS_IN_TIDE    =     10000000
var MILLIBLINKS_IN_MOMENT  =       100000
var MILLIBLINKS_IN_BLINK   =         1000


var currentCylipse = UNIX_START_YEAR + Math.round(UNIX_MILLIBLINKS / MILLIBLINKS_IN_CYLIPSE)
var milliblinksCurrentCylipse = UNIX_MILLIBLINKS - 
                                    (currentCylipse - UNIX_START_YEAR) * MILLIBLINKS_IN_CYLIPSE

var currentCourse = Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_COURSE)

var currentStage = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_STAGE)) % 10

var currentStance = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_STANCE)) % 4

var currentTide = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_TIDE)) % 100

var currentMoment = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_MOMENT)) % 100

var currentBlink = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_BLINK)) % 100


console.log(`UNIX Milliseconds: ${UNIX_MILLISECONDS}`)
console.log(`UNIX Milliblinks: ${UNIX_MILLIBLINKS}`)


console.log(`Milliblinks in Current Cylipse: ${milliblinksCurrentCylipse}`)
console.log(`Current Cylipse: ${currentCylipse}`)

// console.log(`Current Course: ${currentCourse}`)
switch (currentCourse) {
    case 1:
        console.log("Current Course: 1. Socrates")
        break;
    case 2:
        console.log("Current Course: 2. Plato")
        break;
    case 3:
        console.log("Current Course: 3. Aristotle")
        break;
    case 4:
        console.log("Current Course: 4. Nagarjuna")
        break;
    case 5:
        console.log("Current Course: 5. Kindi")
        break;
    case 6:
        console.log("Current Course: 6. Farabi")
        break;
    case 7:
        console.log("Current Course: 7. Rushd")
        break;
    case 8:
        console.log("Current Course: 8. Hegel")
        break;
    case 9:
        console.log("Current Course: 9. Husserl")
        break;
    case 10:
        console.log("Current Course: 10. Deleuze")
        break;
    default:
        console.log("?")
        break;
}


// console.log(`Current Stage: ${currentStage}`)
switch (currentStage) {
    case 1:
        console.log("Current Stage: 1. Galileo")
        break;
    case 2:
        console.log("Current Stage: 2. Leibniz")
        break;
    case 3:
        console.log("Current Stage: 3. Newton")
        break;
    case 4:
        console.log("Current Stage: 4. Bayes")
        break;
    case 5:
        console.log("Current Stage: 5. Euler")
        break;
    case 6:
        console.log("Current Stage: 6. Gauss")
        break;
    case 7:
        console.log("Current Stage: 7. Maxwell")
        break;
    case 8:
        console.log("Current Stage: 8. Lovelace")
        break;
    case 9:
        console.log("Current Stage: 9. Planck")
        break;
    case 10:
        console.log("Current Stage: 10. Turing")
        break;
    default:
        console.log("?")
        break;
}


// console.log(`Current Stance: ${currentStance}`)
switch (currentStance) {
    case 1:
        console.log("Current Stance: 1. Set")
        break;
    case 2:
        console.log("Current Stance: 2. Rise")
        break;
    case 3:
        console.log("Current Stance: 3. Hold")
        break;
    case 4:
        console.log("Current Stance: 4. Break")
        break;
    default:
        console.log("?")
        break;
}


console.log(`Current Tide: ${currentTide}`)
console.log(`Current Moment: ${currentMoment}`)
console.log(`Current Blink: ${currentBlink}`)
