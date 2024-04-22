document.addEventListener('DOMContentLoaded', function() {
    const elements = {
    // Ensure that these selectors correctly match elements in your HTML
    skill: document.getElementById("skills"),
    skill2: document.querySelector("#skills2"),
    introBoxAbout: document.querySelector("#aboutMe"),
    cap: document.querySelector("#gradCap"),
    skillBanner: document.querySelector("#progSkillsBanner"),
    animSkillBanner: document.querySelector("#animSkillsBanner"),
    designSkillBanner: document.querySelector("#graphicsSkillsBanner"),
    underConstruction: document.querySelector("#underconstruction"),
    constructionVehicle: document.querySelector("#constructionVehicle"),
    enterKey: document.querySelector(".pressEnter"),
    // Skill bars are selected here
    allSkills: document.querySelector(".mySkillsOne"),
    designBar: document.querySelector("#designSkill .circle"),
    illustrationBar: document.querySelector("#illustrationSkill .circle"),
    codeBar: document.querySelector("#codeSkill .circle"),
    animationBar: document.querySelector("#animationSkill .circle"),
    rsv: document.querySelector(".pr1"),
    re: document.querySelector(".pr2"),
    nfv: document.querySelector(".pr3"),
    vms: document.querySelector(".pr4"),
    test: document.querySelector(".pr5"),
    resume11: document.querySelector("#res1"),
    resume22: document.querySelector("#res2")
    };

    function handleScrollAnimations() {
        const screenPosRight = window.innerWidth / 0.8;
        const screenPosLeft = window.innerWidth / 1.3;
        // const scrolled_val = $(document).scrollTop().valueOf();

        Object.keys(elements).forEach(key => {
            const element = elements[key];
            if (!element) return;

            let divPosRight = element.getBoundingClientRect().right;
            let divPosLeft = element.getBoundingClientRect().left;
            
            switch (key) {
                case 'cap':
                    animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__slideInDown animate__fast', 1);
                    break;
                case 'netc':
                    animateElement(element, divPosLeft, screenPosLeft, '', 1, 'opacity', "1");
                    break;
                case 'skillBanner':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__slideInDown animate__fast', 1);
                break;
                case 'animSkillBanner':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__slideInDown animate__fast', 1);
                break;
                case 'designSkillBanner':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__slideInDown animate__fast', 1);
                break;
                case 'underConstruction':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__slideInTop animate__fast', 1);
                break;
                case 'bar':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__slideInTop animate__fast', 1);
                break;
                case 'constructionVehicle':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__slideInRight animate__slow', 1);
                break;
                // case 'test':
                //     animateElement(element, 'animate__animated animate__slideInRight animate__fast');
                //     break;
                // case 'animationBar':
                //     animateSkillBar(element);
                //     break;
                //     case 'designBar':
                //     animateSkillBar(element);
                //     break;
                //     case 'illustrationBar':
                //     animateSkillBar(element);
                //     break;
                //     case 'codeBar':
                //     animateSkillBar(element);
                //     break;
                case 'vallSkills':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__backInUp animate__slow', 1);break;
                case 'enterKey':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__backInUp animate__slow', 1);break;
                case 'rsv':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__backInUp animate__slow', 1);break;
                case 're':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__backInUp animate__slow', 1);break;
                case 'test':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__backInUp animate__slow', 1);break;
                case 'vms':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__backInUp animate__slow', 1);break;
                case 'nfv':animateElement(element, divPosRight, screenPosRight, 'animate__animated animate__backInUp animate__slow', 1);break;

            }
        });
    }

    function animateElement(element, divPos, screenPos, animationClass, duration = 1.5, styleProp = 'opacity', styleValue = '1') {
        if (divPos < screenPos) {
            element.className = animationClass;
            element.style.setProperty('--animate-duration', `${duration}s`);
            element.style.setProperty(styleProp, styleValue);
        }
    }
    function gradCapAnim() {
        const cap2 = document.querySelector("#gradCap");

        var divPos = cap2.getBoundingClientRect().right;
        var screenPos = window.innerWidth / 0.9;
        if (divPos < screenPos) {
            cap2.className = 'animate__animated animate__slideInDown animate__fast';
            cap2.style.setProperty('--animate-duration', '1s');
            cap2.style.setProperty('opacity', '1');
        }
    }
    // $(document).scroll(gradCapAnim)
    window.addEventListener('scroll', gradCapAnim);
    
    
    function multiSkills() {
        const des = document.querySelector(".des");
    const ill = document.querySelector(".ill");
    const cod = document.querySelector(".cod");
    const ani = document.querySelector(".ani");
        var divPos = des.getBoundingClientRect().right;
        var screenPos = window.innerWidth / 1.2;
        if (divPos < screenPos) {
            des.className = 'progress_animated_des';
            ill.className = 'progress_animated_ill';
            cod.className = 'progress_animated_cod';
            ani.className = 'progress_animated_ani';
    
        }
    }
    window.addEventListener('DOMContentLoaded', multiSkills())

    window.addEventListener('scroll', multiSkills);
    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations();
});




