console.log("my name is tanishq");
var backPos = '-15620px'
var backPosFlag;
var scrollCount = 0;
gsap.registerPlugin(ScrollTrigger);
var girl_class = document.getElementById("girlClass");
var lastPageDiv = document.querySelector(".thankYou")
var lastPageSec = document.querySelector(".lastPage")
var lastSectionGirlStopPointer = 0;

window.addEventListener('wheel', checkScrollDirection);

function lastPageFixed() {
    var divPos = lastPageSec.getBoundingClientRect().left;
    var screenPos = window.innerWidth / 3.5;
    if (divPos < screenPos) {
        lastPageDiv.style.opacity = "1"
        document.body.style.overflowY = "hidden"
        lastSectionGirlStopPointer = 1

    }
    else if (divPos > screenPos) {
        lastPageDiv.style.opacity = "0"
        document.body.style.overflowY = "scroll"

    }
}
window.addEventListener('scroll', lastPageFixed);



function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {

        girl_class.className = "viewer_back"
        bettysCar.className = "bettyCarBack"

    }
    else if (checkScrollDirectionIsUp(event) && lastSectionGirlStopPointer == 1) {
        
        lastSectionGirlStopPointer == 0

       

    }
    else {

        girl_class.className = "viewer"
        bettysCar.className = "bettyCar"

    }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}






var bettysButton = document.querySelector(".bettyButton")
var bettysCarButton = document.querySelector(".bettyButtonCar")
var bettyClass = document.querySelector(".viewer");
var bettyClassBack = document.querySelector(".viewer_back");
// var buttonRight = document.querySelector(".buttonRight")

var bettyCarBACK = document.querySelector(".bettyCarBack");
var bettysCar = document.querySelector(".bettyCar");

var carFlag = false;

// var buttonRight = document.querySelector('.buttonRight')

           function buttonRightClick() {
                // document.getElementById('containerResume').scrollLeft += 20;
                window.scrollTo(0,440)
              };

function onBettyButtonClick(e) {
    //0 when car is off
    if (!carFlag) {
        bettysCar.style.opacity = "1"
        girl_class.style.opacity = "0"
        bettysCarButton.style.opacity = "0"

        carFlag = true;

    }
    //1 when car is onn
    else if (carFlag) {
        bettysCar.style.opacity = "0"
        girl_class.style.opacity = "1"
        bettysCarButton.style.opacity = "1"

        carFlag = false;

    }
}
bettysButton.addEventListener("click", onBettyButtonClick)
buttonRight.addEventListener("click", buttonRightClick)

var enterKeyBox = document.querySelector(".pressEnter");
var enterPressed = 0;
window.onkeypress = function (e) {
    var keyCode = (e.keyCode || e.which);
    if (keyCode === 13) {
        enterKeyBox.style.visibility = "hidden"
        if (enterPressed === 0) {
            enterPressed++;
            bettysCar.style.opacity = "1"
            girl_class.style.opacity = "0"
            bettysCarButton.style.opacity = "0"
        } else if (enterPressed === 1) {
            bettysCar.style.opacity = "0"
            girl_class.style.opacity = "1"
            bettysCarButton.style.opacity = "1"
            enterPressed--;
        }
        return;
    }
};



document.body.onkeydown = function (e) {
    var code = e.keyCode;
    // var enterPressed = 0;

    // if (code == 13) {
    //     if (enterPressed == 0) {
    //         enterPressed = 1;
    //         bettysCar.style.opacity = "1"
    //     }
    //     else if (enterPressed == 1) {
    //         bettysCar.style.opacity = "0"

    //     }
    //     enterPressed = 0;

    // }
    if (code === 39 || code == 40) { // key code for right arrow
        girl_class.className = "viewer"
        bettysCar.className = "bettyCar"
        backPosFlag = true;
        setInterval(

            window.scrollBy(0, window.innerHeight * 0.5)
            , 1
        )
    }
    if (code === 37 || code == 38) {
        girl_class.className = "viewer_back"
        bettysCar.className = "bettyCarBack"

        backPosFlag = true;
        setInterval(

            window.scrollBy(0, -window.innerHeight * 0.5)
            , 1
        )
    }
};


var frame_count = 120,
    offset_value = 100

gsap.to(girl_class, {
    backgroundPosition: backPos,
    immediateRender: true,
    ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
    scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "+=" + (frame_count * offset_value * 5),
        scrub: true
    }
});





var frame_road = 12,
    offset_value_road = 100;
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

var frame_grass = 12,
    offset_value_grass = 100;
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
var frame_footPath = 12,
    offset_value_foothPath = 100;
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
window.onload = function () {
    if (screen.width <= 700) {
        document.location = "sample.html"
    }
}
// var road_class = $(".lines");
// var girl_class = $(".viewer");

// function scrolled() {

//     girl_class.removeClass('viewer')
//         .addClass("viewer_animated");
//     $(this).off('scroll')[0].setTimeout(function () {

//         girl_class.removeClass('viewer_animated')
//             .addClass("viewer");
//         $(this).on('scroll', scrolled);
//     }, 700)
// }
// $(window).on('scroll', scrolled);

//



