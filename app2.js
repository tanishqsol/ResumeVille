var skill = document.getElementById("skills");
var skill2 = document.querySelector("#skills2");
const cap = document.querySelector("#gradCap");
const skillBanner = document.querySelector("#progSkillsBanner")
const skillBannerText = document.querySelector("#progSkillsText")

function gradCap() {
    var divPos = cap.getBoundingClientRect().right;
    var screenPos = window.innerWidth/0.9;
    if (divPos < screenPos) {
        cap.className = 'animate__animated animate__backInDown';
    }
}
window.addEventListener('scroll', gradCap);

const des = document.querySelector(".design");
const ill = document.querySelector(".illustration");
const cod = document.querySelector(".code");
const ani = document.querySelector(".animation");
function multiSkills() {
    var divPos = des.getBoundingClientRect().right;
    var screenPos = window.innerWidth/1.2;
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
    var screenPos = window.innerWidth/1;
    if (divPos < screenPos) {
        skillBanner.id = 'progSkillBanner_animate';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', skillBanner1);

function skillBanner1Text() {
    var divPos = skillBannerText.getBoundingClientRect().right;
    var screenPos = window.innerWidth/1;
    if (divPos < screenPos) {
        skillBannerText.className = 'animate__animated animate__fadeInRight';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', skillBanner1Text);