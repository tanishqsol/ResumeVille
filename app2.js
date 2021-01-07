var skill = document.getElementById("skills");
var skill2 = document.querySelector("#skills2");
var introBoxAbout = document.querySelector("#aboutMe");
const cap = document.querySelector("#gradCap");
const skillBanner = document.querySelector("#progSkillsBanner")
const animSkillBanner = document.querySelector("#animSkillsBanner")
const designSkillBanner = document.querySelector("#graphicsSkillsBanner")
const underConstruction = document.querySelector("#underconstruction")
const constructionVehicle = document.querySelector("#constructionVehicle")
const rsv = document.querySelector(".pr1")
const re = document.querySelector(".pr2")
const nfv = document.querySelector(".pr3")
const vms = document.querySelector(".pr4")
const test = document.querySelector(".pr5")
const netc = document.querySelector(".bannerNetc")

function gradCapAnim() {
    var divPos = cap.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.9;
    if (divPos < screenPos) {
        cap.className = 'animate__animated animate__slideInDown animate__fast';
        cap.style.setProperty('--animate-duration', '1s');
        cap.style.setProperty('opacity', '1');
    }
}
// $(document).scroll(gradCapAnim)
window.addEventListener('scroll', gradCapAnim);

function showEnterDiv() {
    var divPos = netc.getBoundingClientRect().left;
    var screenPos = window.innerWidth / 1.3;
    if (divPos < screenPos) {
        enterKeyBox.style.opacity = "1"

    }
}
window.addEventListener('scroll', showEnterDiv);

const des = document.querySelector(".design");
const ill = document.querySelector(".illustration");
const cod = document.querySelector(".code");
const ani = document.querySelector(".animation");
function multiSkills() {
    var divPos = des.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 1.2;
    if (divPos < screenPos) {
        des.className = 'progress_animated_des';
        ill.className = 'progress_animated_ill';
        cod.className = 'progress_animated_cod';
        ani.className = 'progress_animated_ani';

    }
}
window.addEventListener('scroll', multiSkills);

function skillBanner1() {
    var divPos = skillBanner.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.8;
    if (divPos < screenPos) {
        // if (scrolled_val >= 17573) {
        // skillBanner.id = 'progSkillBanner_animate';
        skillBanner.className = 'animate__animated animate__slideInDown animate__fast';
        skillBanner.style.setProperty('--animate-duration', '1s');
        skillBanner.style.setProperty('opacity', '1');

        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', skillBanner1);

function animSkillBanner1() {
    var scrolled_val = $(document).scrollTop().valueOf();
    var divPos = animSkillBanner.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.8;
    if (divPos < screenPos) {
        // if (scrolled_val >= 17573) {
        // animSkillBanner.id = 'animSkillBanner_animate';
        animSkillBanner.className = 'animate__animated animate__slideInDown animate__fast';
        animSkillBanner.style.setProperty('--animate-duration', '1s');
        animSkillBanner.style.setProperty('opacity', '1');
        // animSkillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', animSkillBanner1);

// function skillBanner1Text() {
//     var divPos = skillBannerText.getBoundingClientRect().right;
//     var screenPos = window.innerWidth / 1;
//     if (divPos < screenPos) {
//         skillBannerText.className = 'animate__animated animate__fadeInRight';
//         // skillBanner.className = 'animate__animated animate__swing';
//     }
// }
// window.addEventListener('scroll', skillBanner1Text);

// function animSkillBanner1Text() {
//     var divPos = animSkillBannerText.getBoundingClientRect().right;
//     var screenPos = window.innerWidth / 1;
//     if (divPos < screenPos) {
//         animSkillBannerText.className = 'animate__animated animate__fadeInDown';
//         // skillBanner.className = 'animate__animated animate__swing';
//     }
// }
// window.addEventListener('scroll', animSkillBanner1Text);

// function designSkillBannerTextAnim() {
//     var divPos = designSkillBannerText.getBoundingClientRect().right;
//     var screenPos = window.innerWidth / 0.9;
//     if (divPos < screenPos) {
//         designSkillBannerText.className = 'animate__animated animate__fadeInDown';
//         // skillBanner.className = 'animate__animated animate__swing';
//     }
// }
// window.addEventListener('scroll', designSkillBannerTextAnim);

function graphicsSkillBanner1() {
    var divPos = designSkillBanner.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.8;
    if (divPos < screenPos) {
        designSkillBanner.className = 'animate__animated animate__slideInDown animate__fast';
        designSkillBanner.style.setProperty('--animate-duration', '1s');
        designSkillBanner.style.setProperty('opacity', '1');

        // designSkillBanner.id = 'designSkillBanner_animate';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', graphicsSkillBanner1);

function pr11() {
    var divPos = rsv.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.8;
    if (divPos < screenPos) {
        rsv.className = 'animate__animated animate__backInUp';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', pr11);
function pr12() {
    var divPos = re.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.7;
    if (divPos < screenPos) {
        re.className = 'animate__animated animate__backInUp';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', pr12);
function pr13() {
    var divPos = nfv.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.7;
    if (divPos < screenPos) {
        nfv.className = 'animate__animated animate__backInUp';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', pr13);
function pr14() {
    var divPos = vms.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.7;
    if (divPos < screenPos) {
        vms.className = 'animate__animated animate__backInUp';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', pr14);
function pr15() {
    var divPos = test.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.7;
    if (divPos < screenPos) {
        test.className = 'animate__animated animate__backInUp';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', pr15);

function constrVehicle() {
    var scrolled_val = $(document).scrollTop().valueOf();
    var divPos = constructionVehicle.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.8;
    if (divPos < screenPos) {

        constructionVehicle.className = 'animate__animated animate__slideInRight animate__fast';
        constructionVehicle.style.setProperty('--animate-duration', '1.5s');
        constructionVehicle.style.setProperty('opacity', '1');
    }
}
window.addEventListener('scroll', constrVehicle);

function underConstr() {
    var scrolled_val = $(document).scrollTop().valueOf();
    var divPos = underConstruction.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.8;
    if (divPos < screenPos) {

        underConstruction.className = 'animate__animated animate__backInUp animate__fast';
        underConstruction.style.setProperty('--animate-duration', '1s');
        underConstruction.style.setProperty('opacity', '1');
    }
}
window.addEventListener('scroll', underConstr);