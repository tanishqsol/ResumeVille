var skill = document.getElementById("skills");
var skill2 = document.querySelector("#skills2");
const cap = document.querySelector("#gradCap");
const skillBanner = document.querySelector("#progSkillsBanner")
const skillBannerText = document.querySelector("#progSkillsText")
const animSkillBanner = document.querySelector("#animSkillsBanner")
const animSkillBannerText = document.querySelector("#animSkillsText")
const designSkillBanner = document.querySelector("#graphicsSkillsBanner")
const designSkillBannerText = document.querySelector("#graphicsSkillsText")

function gradCap() {
    var divPos = cap.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.75;
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
    var screenPos = window.innerWidth / 1;
    if (divPos < screenPos) {
        skillBanner.id = 'progSkillBanner_animate';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', skillBanner1);

function animSkillBanner1() {
    var divPos = animSkillBanner.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 1;
    if (divPos < screenPos) {
        animSkillBanner.id = 'animSkillBanner_animate';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', animSkillBanner1);

function skillBanner1Text() {
    var divPos = skillBannerText.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 1;
    if (divPos < screenPos) {
        skillBannerText.className = 'animate__animated animate__fadeInRight';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', skillBanner1Text);

function animSkillBanner1Text() {
    var divPos = animSkillBannerText.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 1;
    if (divPos < screenPos) {
        animSkillBannerText.className = 'animate__animated animate__fadeInDown';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', animSkillBanner1Text);

function designSkillBannerTextAnim() {
    var divPos = designSkillBannerText.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 0.9;
    if (divPos < screenPos) {
        designSkillBannerText.className = 'animate__animated animate__fadeInDown';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', designSkillBannerTextAnim);

function graphicsSkillBanner1() {
    var divPos = designSkillBanner.getBoundingClientRect().right;
    var screenPos = window.innerWidth / 1;
    if (divPos < screenPos) {
        designSkillBanner.id = 'designSkillBanner_animate';
        // skillBanner.className = 'animate__animated animate__swing';
    }
}
window.addEventListener('scroll', graphicsSkillBanner1);
