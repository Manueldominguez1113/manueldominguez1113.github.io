"use strict";


//loading screen
window.addEventListener('load', () => {
    // works just need to make a quick loading page that loads first before everything else
})

//variables/constants
const landSky = $('#contactMe, #returnToSky');
const inverse = $("#home, #about, #skills, #work");
const portrait = $(".Portrait");
const buttons = $("#buttons");
const dayNight = $('#dayNight');

const textArea = $("#text")
const home = $("#home");
const about = $("#about");
const skills = $("#skills");
const work = $("#work");
const contactMe = $("#contactMe");


landSky.click(() => {
    if (portrait.hasClass("sky")) {
        portrait.toggleClass("sky land");
        buttons.toggleClass("grounded");
    }
});
inverse.click(() => {
    if (portrait.hasClass("land")) {
        portrait.toggleClass("sky land");
        buttons.toggleClass("grounded");
    }
}); // if on the ground, inverse lets the other buttons bring us back airborne
dayNight.click(() => {
    $(".Portrait").toggleClass("day night");
});


//on touchscreen, will give active class to option the menu, doesn't matter in hover capable devices.
$(".options").click(() => {
    $(".options").toggleClass("active");
});


//trying out a clock in the cockpit, which is not UI/UX friendly
let today = new Date();
let time = addZero(today.getHours()) + ":" + addZero(today.getMinutes());
$("#clock").text(time);

function addZero(time) {
    if (time < 10) {
        return "0" + time;
    }
    return time;
}

//page shall have no scroll capabilities, i found that ios safari ignores overflow:hidden or fixed. so javascript is the next best option.
document.body.scrollTop = 0;


//text and js for text
const text = [
    {
        id: 1,
        name: 'Hello World!',
        field: "<div class=\"page page1 \"> <!--home-->\n" +
            "        <p class='line1'>I am Manuel Alex Dominguez</p>\n" +
            "        <p class='line2'>Enthusiastic Web Developer</p>\n" +
            "        <p class='line3'>Full-Stack Dev || Game Dev || Air Traffic Controller</p>\n" +
            "    </div>"
    },
    {
        id: 2,
        name: 'About Me',
        field: " <div class=\"page page2  \"> <!--about-->\n" +
            "        I am an Air-force veteran, spending 10 years as an Air Traffic Controller, now an aspiring full stack developer\n" +
            "        interested in creating for you, be it new and exciting websites, artistic and unique approaches, to working on\n" +
            "        functionality and fluid\n" +
            "        user interaction.\n" +
            "\n" +
            "        I began in 2008 going through my first half of high school in Design and Technology Academy, but followed my\n" +
            "        family's footsteps to serve my nation for 8 years after graduation. Returning in late 2021-2022\n" +
            "        to begin again in Code-up LLC. Immediately following Code-up with IGA to learn Indie gaming and C#\n" +
            "    </div>"
    },
    {
        id: 3,
        name: 'My Skills',
        field: "    <div class=\"page page3  \"> <!--skills combine with one of the smaller paragraphs-->\n" +
            "        My Skills\n" +
            "        ...I'm proficient in C# HTML, CSS, Javascript, Bootstrap, JQuery, and Unity so far. but I am continuing to learn\n" +
            "        and\n" +
            "        am excited to\n" +
            "        expand my resources!\n" +
            "    </div>"
    },
    {
        id: 4,
        name: 'My Work',
        field: "  <div class=\"page page4 \"> <!--work-->\n" +
            "        My Work\n" +
            "        here, I will link to you a window of my work so far growing in code up and then beyond as I improve my skills.\n" +
            "    </div>"
    },
    {
        id: 5,
        name: 'Contact Me',
        field: " <div class=\"page page5\" id=\"contact text-center\"> <!--contact info-->\n" +
            "\n" +
            "        <a href=\"#\"><img class=\"contactInfo\" src=\"assets/PNG/GitHub-Mark-Light-32px.png\" alt=\"gitHub\"></a>\n" +
            "        <!--Github/Manueldominguez1113-->\n" +
            "        <a href=\"#\"><img class=\"contactInfo\" src=\"assets/ico/linkdin_iconwht.png\" alt=\"linkdin\"></a>\n" +
            "        <!--Linkdin/Manueldominguez1113-->\n" +
            "        <a href=\"mailto:manueldominguez1113@gmail.com?subject=Hello Manuel! I am interested to get in touch..\">\n" +
            "                <img class=\"contactInfo\" src=\"assets/ico/emailwhtx1.png\" alt=\"Email\"></a> <!--Manueldominguez1113@gmail.com-->\n" +
            "        <a href=\"#\">Resume</a>" +
            "    </div>"
    }
];



function renderText(page) {
    let inner = "";
    text.forEach((part) => {
        if (page === part.id) {
            inner = "<div id=\"textTitle\" class=\"text-center\">" + part.name + "</div>" + part.field;
        }
    })
    textArea.html(inner);
}
    //render page 1 so it always starts on load
renderText(1);

home.click(() => {
    renderText(1);
})
about.click(() => {
    renderText(2);
})
skills.click(() => {
    renderText(3);
})
work.click(() => {
    renderText(4);
})
contactMe.click(() => {
    renderText(5);
})

