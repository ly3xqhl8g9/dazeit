//////////////////
// TABS
function setTabs() {
    let tabAbout = document.getElementById("tab-about");
    let tabConversion = document.getElementById("tab-conversion");

    let contentAbout = document.getElementById("content-about");
    let contentConversion = document.getElementById("content-conversion");


    tabAbout.addEventListener("click", function() {
        setActiveClassToTab(this);

        contentAbout.style.display = "block";
        contentConversion.style.display = "none";
    });

    tabConversion.addEventListener("click", function() {
        setActiveClassToTab(this);
        setDateValues();

        contentConversion.style.display = "block";
        contentAbout.style.display = "none";
    });
}

function setActiveClassToTab(element) {
    let ulTabs = document.getElementById("ul-tabs");

    for (let i = 0; i < ulTabs.children.length; i++) {
        let currentTab = ulTabs.children[i];
        currentTab.classList.remove("active");
    }

    element.classList.add("active");
}



//////////////////
// LOGIC
(function() {
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    Date.prototype.getMonthName = function() {
        return months[this.getMonth()];
    };
})();

let dateHours = document.querySelector('input[name="date-hours"]');
let dateMinutes = document.querySelector('input[name="date-minutes"]');
let dateSeconds = document.querySelector('input[name="date-seconds"]');
let dateDay = document.querySelector('input[name="date-day"]');
let dateMonth = document.querySelector('input[name="date-month"]');
let dateYear = document.querySelector('input[name="date-year"]');

let currentDate = new Date();


holocene.addEventListener('click', function() {
    HOLOCENE_ADD = 10000;
    setDateValues(HOLOCENE_ADD);
})


function calcRationalTime(UNIX_MILLISECONDS) {
    let holocene = document.getElementById("holocene-mark");
    let HOLOCENE_ADD = holocene.checked ? 10000 : 0;

    let UNIX_START_YEAR = 1970;

    let SIDEREAL_YEAR_IN_SECONDS = 31558149.504;
    let MILLISECOND_TO_MILLIBLINK = 3.1687536047487507;

    let UNIX_MILLIBLINKS = UNIX_MILLISECONDS * MILLISECOND_TO_MILLIBLINK;
    // console.log(UNIX_MILLIBLINKS);

    let MILLIBLINKS_IN_CYLIPSE = 100000000000;
    let MILLIBLINKS_IN_COURSE  =  10000000000;
    let MILLIBLINKS_IN_STAGE   =   1000000000;
    let MILLIBLINKS_IN_STANCE  =    250000000;
    let MILLIBLINKS_IN_TIDE    =     10000000;
    let MILLIBLINKS_IN_MOMENT  =       100000;
    let MILLIBLINKS_IN_BLINK   =         1000;


    let currentCylipse = UNIX_START_YEAR + Math.round(UNIX_MILLIBLINKS / MILLIBLINKS_IN_CYLIPSE);
    // console.log(currentCylipse);
    let milliblinksCurrentCylipse = UNIX_MILLIBLINKS -
                                        (currentCylipse - UNIX_START_YEAR) * MILLIBLINKS_IN_CYLIPSE;

    let currentCourse = Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_COURSE);
    let currentStage = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_STAGE)) % 11;
    let currentStance = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_STANCE)) % 5;
    let currentTide = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_TIDE)) % 101;
    let currentMoment = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_MOMENT)) % 101;
    let currentBlink = (Math.ceil(milliblinksCurrentCylipse / MILLIBLINKS_IN_BLINK)) % 101;

    // console.log(`UNIX Milliseconds: ${UNIX_MILLISECONDS}`);
    // console.log(`UNIX Milliblinks: ${UNIX_MILLIBLINKS}`);

    // console.log(`Milliblinks in Current Cylipse: ${milliblinksCurrentCylipse}`);
    // console.log(`Current Cylipse: ${currentCylipse}`);

    // console.log(`Current Course: ${currentCourse}`);
    let currentCourseString = "";
    switch (currentCourse) {
        case 1:
            currentCourseString = "1. Socrates";
            // console.log("Current Course: 1. Socrates");
            break;
        case 2:
            currentCourseString = "2. Plato";
            // console.log("Current Course: 2. Plato");
            break;
        case 3:
            currentCourseString = "3. Aristotle";
            // console.log("Current Course: 3. Aristotle");
            break;
        case 4:
            currentCourseString = "4. Nagarjuna";
            // console.log("Current Course: 4. Nagarjuna");
            break;
        case 5:
            currentCourseString = "5. Kindi";
            // console.log("Current Course: 5. Kindi");
            break;
        case 6:
            currentCourseString = "6. Farabi";
            // console.log("Current Course: 6. Farabi");
            break;
        case 7:
            currentCourseString = "7. Rushd";
            // console.log("Current Course: 7. Rushd");
            break;
        case 8:
            currentCourseString = "8. Hegel";
            // console.log("Current Course: 8. Hegel");
            break;
        case 9:
            currentCourseString = "9. Husserl";
            // console.log("Current Course: 9. Husserl");
            break;
        case 10:
            currentCourseString = "10. Deleuze";
            // console.log("Current Course: 10. Deleuze");
            break;
        default:
            // console.log("?")
            break;
    }

    // console.log(`Current Stage: ${currentStage}`);
    let currentStageString = "";
    switch (currentStage) {
        case 1:
            currentStageString = "1. Galileo";
            // console.log("Current Stage: 1. Galileo");
            break;
        case 2:
            currentStageString = "2. Leibniz";
            // console.log("Current Stage: 2. Leibniz");
            break;
        case 3:
            currentStageString = "3. Newton";
            // console.log("Current Stage: 3. Newton");
            break;
        case 4:
            currentStageString = "4. Bayes";
            // console.log("Current Stage: 4. Bayes");
            break;
        case 5:
            currentStageString = "5. Euler";
            // console.log("Current Stage: 5. Euler");
            break;
        case 6:
            currentStageString = "6. Gauss";
            // console.log("Current Stage: 6. Gauss");
            break;
        case 7:
            currentStageString = "7. Maxwell";
            // console.log("Current Stage: 7. Maxwell");
            break;
        case 8:
            currentStageString = "8. Lovelace";
            // console.log("Current Stage: 8. Lovelace");
            break;
        case 9:
            currentStageString = "9. Planck";
            // console.log("Current Stage: 9. Planck");
            break;
        case 10:
            currentStageString = "10. Turing";
            // console.log("Current Stage: 10. Turing");
            break;
        default:
            // console.log("?")
            break;
    }

    // console.log(`Current Stance: ${currentStance}`);
    let currentStanceString = "";
    switch (currentStance) {
        case 1:
            currentStanceString = "1. Set";
            // console.log("Current Stance: 1. Set");
            break;
        case 2:
            currentStanceString = "2. Rise";
            // console.log("Current Stance: 2. Rise");
            break;
        case 3:
            currentStanceString = "3. Hold";
            // console.log("Current Stance: 3. Hold");
            break;
        case 4:
            currentStanceString = "4. Break";
            // console.log("Current Stance: 4. Break");
            break;
        default:
            // console.log("?")
            break;
    }

    // console.log(`Current Tide: ${currentTide}`);
    // console.log(`Current Moment: ${currentMoment}`);
    // console.log(`Current Blink: ${currentBlink}`);


    // let rationalDateString = "Cylipse " + currentCylipse + "<br> Course " + currentCourseString +
                             // "<br> Stage " + currentStageString + "<br> Stance " + currentStanceString +
                             // "<br> Tide " + currentTide + "<br> Moment " + currentMoment +
                             // "<br> Blink " + currentBlink;

    return {
        cylipse: currentCylipse,
        course: currentCourse,
        courseString: currentCourseString,
        stage: currentStage,
        stageString: currentStageString,
        stance: currentStance,
        stanceString: currentStanceString,
        tide: currentTide,
        moment: currentMoment,
        blink: currentBlink
    };
}



//////////////////
// Set values
function setDateValues(HEyear = null) {
    let currentDate = new Date();

    dateHours.value = currentDate.getUTCHours();
    dateMinutes.value = currentDate.getMinutes();
    dateSeconds.value = currentDate.getSeconds();
    dateDay.value = currentDate.getDate();
    dateMonth.value = currentDate.getMonthName();
    if (HEyear == null) {
        dateYear.value = currentDate.getFullYear();
    } else {
        dateYear.value = HEyear + currentDate.getFullYear();
    }

    dateEndth(dateEndthEl);
    pluralization();
    conversion()
}



//////////////////
// Set date endth
let dateEndthEl = document.getElementById("day-endth");

function dateEndth(dateEndth) {
    switch(parseInt(dateDay.value)) {
        case 1:
            dateEndth.innerText = "st"
            break;
        case 2:
            dateEndth.innerText = "nd"
            break;
        case 3:
            dateEndth.innerText = "rd"
            break;
        case 21:
            dateEndth.innerText = "st"
            break;
        case 22:
            dateEndth.innerText = "nd"
            break;
        case 23:
            dateEndth.innerText = "rd"
            break;
        default:
            dateEndth.innerText = "th"
    }
}

function detectChangeDateEndth() {
    dateDay.addEventListener("input", function(event) {
        let dateEndthElement = document.getElementById("day-endth");
        dateEndth(dateEndthElement);
    })
}



///////////////////////
// Detect change month
function detectChangeDateMonth() {
    dateMonth.addEventListener("blur", function(event) {
        let inputData = dateMonth.value;

        if (inputData == "1" || inputData == "jan" || inputData == "january") {
            dateMonth.value = "January";
        }

        if (inputData == "2" || inputData == "feb" || inputData == "february") {
            dateMonth.value = "February";
        }

        if (inputData == "3" || inputData == "mar" || inputData == "march") {
            dateMonth.value = "March";
        }

        if (inputData == "4" || inputData == "apr" || inputData == "april") {
            dateMonth.value = "April";
        }

        if (inputData == "5" || inputData == "may") {
            dateMonth.value = "May";
        }

        if (inputData == "6" || inputData == "jun" || inputData == "june") {
            dateMonth.value = "June";
        }

        if (inputData == "7" || inputData == "jul" || inputData == "july") {
            dateMonth.value = "July";
        }

        if (inputData == "8" || inputData == "aug" || inputData == "august") {
            dateMonth.value = "August";
        }

        if (inputData == "9" || inputData == "sep" || inputData == "september") {
            dateMonth.value = "September";
        }

        if (inputData == "10" || inputData == "oct" || inputData == "october") {
            dateMonth.value = "October";
        }

        if (inputData == "11" || inputData == "nov" || inputData == "november") {
            dateMonth.value = "November";
        }

        if (inputData == "12" || inputData == "dec" || inputData == "december") {
            dateMonth.value = "December";
        }
    })
}


function detectChangeHoursMinutesSeconds() {
    dateHours.addEventListener("blur", () => {
        pluralization()
    });

    dateMinutes.addEventListener("blur", () => {
        pluralization()
    });

    dateSeconds.addEventListener("blur", () => {
        pluralization()
    });
}



////////////////////////////////////////////
// Pluralization of Hours, Minutes, Seconds
function pluralization() {
    let dateHoursPlural = document.getElementById("date-hours-plural");

    if (dateHours.value == 1) {
        dateHoursPlural.innerText = ""
    } else {
        dateHoursPlural.innerText = "s"
    }


    let dateMinutesPlural = document.getElementById("date-minutes-plural");

    if (dateMinutes.value == 1) {
        dateMinutesPlural.innerText = ""
    } else {
        dateMinutesPlural.innerText = "s"
    }


    let dateSecondsPlural = document.getElementById("date-seconds-plural");

    if (dateSeconds.value == 1) {
        dateSecondsPlural.innerText = ""
    } else {
        dateSecondsPlural.innerText = "s"
    }
}


function dateReset() {
    let dateReset = document.getElementById("date-reset");
    let dateResetSVG = document.querySelector("#date-reset svg");

    dateReset.addEventListener("click", function() {
        setTimeout( function() {
            dateResetSVG.style.animation = "rotate 1s";
        }, 10);
        dateResetSVG.style.animation = "";
        setDateValues();
        conversion();
    })
}



///////////////////////
// CONVERSION
function conversion() {
    let formedDateString = `${dateMonth.value} ${dateDay.value},
                            ${dateYear.value}
                            ${dateHours.value}:${dateMinutes.value}:${dateSeconds.value}`;
    // console.log(formedDateString);

    getUnixMilliseconds = new Date(formedDateString).getTime();
    // console.log(getUnixMilliseconds);

    let convertedTime = calcRationalTime(getUnixMilliseconds);

    let rationalDateString = `<span class="rational-time-text">Tide</span> ${convertedTime.tide},
                              <span class="rational-time-text">Moment</span> ${convertedTime.moment},
                              <span class="rational-time-text">Blink</span> ${convertedTime.blink},
                              <span class="rational-time-text">Stance</span> ${convertedTime.stanceString},
                              <span class="rational-time-text">Stage</span> ${convertedTime.stageString},
                              <span class="rational-time-text">Course</span> ${convertedTime.courseString},
                              <span class="rational-time-text">Cylipse</span> ${convertedTime.cylipse}
                            `;

    let rationalTimeDiv = document.getElementById("rational-time");

    rationalTimeDiv.innerHTML = rationalDateString;
}



///////////////////////
// Conversion on Change
function conversionOnChange() {
    dateSeconds.addEventListener("input", () => {
        conversion();
    })

    dateMinutes.addEventListener("input", () => {
        conversion();
    })

    dateHours.addEventListener("input", () => {
        conversion();
    })

    dateDay.addEventListener("input", () => {
        conversion()
    })

    dateMonth.addEventListener("input", () => {
        conversion()
    })

    dateYear.addEventListener("input", () => {
        conversion()
    })
}



/////////////////
// Function Calls
function init() {
    setDateValues();
    conversion();
    conversionOnChange()
    detectChangeDateEndth();
    detectChangeDateMonth();
    detectChangeHoursMinutesSeconds();
    dateReset();
    setTabs();
}

init();
