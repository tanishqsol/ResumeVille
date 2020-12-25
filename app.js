console.log("my name is tanishq");

$(window).scroll(function () {
    var scrolled_val = $(document).scrollTop().valueOf();
    console.log(scrolled_val + ' = scroll value');
});
var backPos = "-15620px";
var scrollCount = 0;

var girl_class = document.getElementById("girlClass");
window.addEventListener('wheel', checkScrollDirection);

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        girl_class.className = "viewer_back"
        backPos = "15593px"
    } else {
        girl_class.className = "viewer"
        backPos = "-15620px"
    }


}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

function backPosGirl() {
    if (girl_class.className = "viewer") {
        backPos = "-15620px"
    }
    if (girl_class.className = "viewer_back") {
        backPos = "15593px"
    }
    return backPos;
}


var frame_count = 120,
    offset_value = 100;
gsap.to(girl_class, {
    backgroundPosition: "+=" + backPos,
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





