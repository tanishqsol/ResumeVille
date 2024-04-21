console.log("my name is tanishq");

// Wait for the DOM to fully load before querying elements and adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    var girl_class = document.getElementById("girlClass");
    var lastPageDiv = document.querySelector(".thankYou");
    var lastPageSec = document.querySelector(".lastPage");
    var bettysButton = document.querySelector(".bettyButton");
    var bettysCarButton = document.querySelector(".bettyButtonCar");
    var bettysCar = document.querySelector(".bettyCar");

    var carFlag = false; // Tracks the car visibility state
    var lastSectionGirlStopPointer = 0; // This variable might need a more descriptive name if it's controlling a specific behavior

    function checkScrollDirectionIsUp(event) {
        if (event.wheelDelta) {
            return event.wheelDelta > 0;
        }
        return event.deltaY < 0;
    }

    function checkScrollDirection(event) {
        if (checkScrollDirectionIsUp(event)) {
            console.log("Scrolling up");
            girl_class.className = "viewer_back";
            bettysCar.className = "bettyCarBack";
        } else {
            console.log("Scrolling down");
            girl_class.className = "viewer";
            bettysCar.className = "bettyCar";
        }

        // The condition inside else if seems redundant because checkScrollDirectionIsUp(event)
        // is already checked in the if statement above
        // Removed for now; needs clarification on its purpose
    }

    window.addEventListener('wheel', checkScrollDirection);

    function lastPageFixed() {
        var divPos = lastPageSec.getBoundingClientRect().left;
        var screenPos = window.innerWidth / 3.5;
        if (divPos < screenPos) {
            lastPageDiv.style.opacity = "1";
            document.body.style.overflowY = "hidden";
            lastSectionGirlStopPointer = 1;
        } else {
            lastPageDiv.style.opacity = "0";
            document.body.style.overflowY = "scroll";
            lastSectionGirlStopPointer = 0; // Use the assignment operator here
        }
    }

    window.addEventListener('scroll', lastPageFixed);

    function onBettyButtonClick(e) {
        // Toggle the car visibility state
        carFlag = !carFlag; // This toggles the flag state
        bettysCar.style.opacity = carFlag ? "1" : "0";
        girl_class.style.opacity = carFlag ? "0" : "1";
        bettysCarButton.style.opacity = carFlag ? "0" : "1";
    }

    // Ensure elements are not null before adding event listeners
    if (bettysButton && girl_class && bettysCar && bettysCarButton) {
        bettysButton.addEventListener("click", onBettyButtonClick);
    } else {
        console.error('One or more elements are missing.');
    }
});

//buttons
document.addEventListener('DOMContentLoaded', function() {
    var bettysButton = document.querySelector(".bettyButton");
    var enterKeyBox = document.querySelector(".pressEnter");
    var bettysCar = document.querySelector(".bettyCar");
    var girl_class = document.getElementById("girlClass");
    var bettysCarButton = document.querySelector(".bettyButtonCar");
    var enterPressed = false;

    bettysButton.addEventListener("click", function() {
        // Toggle Betty's car and girl visibility
        var isVisible = bettysCar.style.opacity === "1";
        bettysCar.style.opacity = isVisible ? "0" : "1";
        girl_class.style.opacity = isVisible ? "1" : "0";
        bettysCarButton.style.opacity = isVisible ? "1" : "0";
    });

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) { // Enter key
            enterKeyBox.style.visibility = "hidden";
            enterPressed = !enterPressed;
            bettysCar.style.opacity = enterPressed ? "1" : "0";
            girl_class.style.opacity = enterPressed ? "0" : "1";
            bettysCarButton.style.opacity = enterPressed ? "0" : "1";
        }

        if (e.keyCode === 39 || e.keyCode === 40) { // Right arrow or Down arrow
            girl_class.className = "viewer";
            bettysCar.className = "bettyCar";
            // Implement a proper scrolling mechanism
        }
        if (e.keyCode === 37 || e.keyCode === 38) { // Left arrow or Up arrow
            girl_class.className = "viewer_back";
            bettysCar.className = "bettyCarBack";
            // Implement a proper scrolling mechanism
        }
    });

    // If buttonRight exists, add the event listener
    var buttonRight = document.querySelector(".buttonRight");
    if (buttonRight) {
        buttonRight.addEventListener("click", function() {
            // Scroll to the position you want
            window.scrollTo(0, 440);
        });
    }
});


//girl and road and grass animations
window.addEventListener('load', function() {
    var girl_class = document.getElementById("girlClass");
    var frame_count = 120,
        offset_value = 100;
    var backPos = '-15620px';
    var frame_road = 12,
    offset_value_road = 100;
    var frame_grass = 12,
    offset_value_grass = 100;
    var frame_footPath = 12,
    offset_value_foothPath = 100;
    var frame_footPath = 12,
    offset_value_foothPath = 100;
   
    
gsap.to(".foothPath", {
    backgroundPosition: "-3990px",
    // x:100,
    autoRound: false,
    scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "+=" + (frame_footPath * offset_value_foothPath * 40),
        scrub: 0.5
    }
});
gsap.to(".railings", {
    backgroundPosition: "-3990px",
    // x:100,
    autoRound: false,
    scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "+=" + (frame_footPath * offset_value_foothPath * 50),
        scrub: 0.5
    }
});
gsap.to(".grass", {
    backgroundPosition: "-3990px",
    autoRound: false,
    scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "+=" + (frame_grass * offset_value_grass * 50),
        scrub: 0.6
    }
});

gsap.to(".lines", {
    backgroundPosition: "-3990px",
    autoRound: false,
    scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "+=" + (frame_road * offset_value_road * 50),
        scrub: 0.3
    }
});
    
        gsap.to(girl_class, {
            backgroundPosition: backPos,
            immediateRender: true,
            ease: "steps(" + frame_count + ")",
            scrollTrigger: {
                trigger: ".main-container",
                start: "top top",
                end: "+=" + (frame_count * offset_value * 5),
                scrub: true
            }
        });
   
});

TweenMax.from(".orangeBoxDiv", 1, { x: -1500, ease: Expo.easeOut, delay: 0.5 });

document.addEventListener("DOMContentLoaded", function (event) {

    function clouds() {

        var tl = new TimelineMax({
            repeat: -1
        });

        tl.to("#clouds", 59, {
            backgroundPosition: "-2247px bottom",
            force3D: true,
            rotation: 0.01,
            z: 0.01,
            ease: Linear.easeNone
        });

        return tl;
    }

    var masterTL = new TimelineMax({
        repeat: -1
    });
    // window load event makes sure image is loaded before running animation
    window.onload = function () {
        masterTL
            .add(clouds(), 0)
            .timeScale(0.7)
            .progress(1).progress(0)
            .play();

    };

});
//making sure it loads on a computer
window.onload = function () {
    if (screen.width <= 700) {
        document.location = "sample.html"
    }
}




