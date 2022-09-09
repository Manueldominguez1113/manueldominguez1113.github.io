"use strict";


//loading screen
window.addEventListener('load', () => {
    $("#loadingScreen").removeClass("active");
    // works just need to make a quick loading page that loads first before everything else
})

//constants
const landSky = $('#contactMe');
const inverse = $("#home, #about, #skills, #work");
const portrait = $(".Portrait");
const buttons = $("#buttons");
const dayNight = $('#dayNight');

const textArea = $("#text");
const textBox = $("#textBox");
const home = $("#home");
const about = $("#about");
const skills = $("#skills");
const work = $("#work");
const contactMe = $("#contactMe");
const options = $(".options");
const windows = $("img.LargeTextBox, img.smallTextBox");
const toggleBackGround = $("#toggleBackground");
const toggleTextBox = $("#toggleTextbox");

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
options.click(() => {
    options.toggleClass("active");
    if (textBox.hasClass("toggle")) {
        textArea.removeClass("toggle");
        textBox.removeClass("toggle");
        $("#OpenTextBox").addClass("toggle");
        windows.toggleClass("on off");
    }
});

//toggles
toggleTextBox.click(() => {
    windows.toggleClass("on off");
    textArea.addClass("toggle");
    setTimeout(() => {
        textBox.addClass("toggle");
        $("#OpenTextBox").removeClass("toggle");
    }, 150);

})
toggleBackGround.click(() => {
    $("body").toggleClass("still animated");
    if ($("body").hasClass("still")) {
        toggleBackGround.html("Animated Stars?");
    } else {
        toggleBackGround.html("Stop Stars?");
    }
})


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

//page shall have no scroll capabilities, I found that ios safari ignores overflow:hidden or fixed. so javascript is the next best option.
document.body.scrollTop = 0;


//text and js for text
const text = [
    {
        id: 1,
        name: 'Hello World!',
        field: "<div class=\"page page1 stopScroll\"> <!--home-->\n" +
            "        <p class=\"line1\">I am... <span class='pt1'>Manuel</span> <span class='pt2'>Alexander</span> <span class='pt3'>Dominguez</span></p>\n" +
            "        <p class=\"line2\">The M.A.D. Developer!</p>\n" +
            "        <p class=\"line3\">Full-Stack Dev || Game Dev || Air Traffic Controller</p>\n" +
            "    </div>" +
            "        <p class=\"line4 mobileText notice\">You're missing out! Come back on a bigger screen!</p>\n"
    },
    {
        id: 2,
        name: 'About Me',
        field: " <div class=\"page page2 goScroll\"> <!--about-->\n" +
            "        <p class=\"line1\">I am an Air-force veteran, spending 10 years as an Air Traffic Controller, now following a dream of full stack developer\n" +
            "        interested in creating for you! Be it new and exciting websites, artistic and unique approaches, to working on\n" +
            "        backend functionality and fluid\n" +
            "        user interaction!</p>\n" +
            "\n" +
            "        <p class=\"line2\">I began in 2008 going through my first half of high school in Design and Technology Academy, back then I knew I had a natural talent for programming, but followed my\n" +
            "        family's footsteps to serve my nation after graduation. In the military I found passion in Air Traffic, teaching me to further embrace my passions and to go at everything I do with my absolute best, Air Traffic for me took nothing less, so why should I give less in anything I do? Returning in late 2021-2022\n" +
            "        to begin programming again in Code-up LLC. Immediately following Code-up with IGA(Indie Gaming Academy) to learn how Indie gaming works and learn more C# while I was at it!</p>\n" +
            "    </div>"
    },
    {
        id: 3,
        name: 'My Skills',
        field: "    <div class=\"page page3 stopScroll\"> <!--skills combine with one of the smaller paragraphs-->\n" +
            "        I'm proficient in C#, JavaScript, Java SE, Java EE (Servlets, JSP), MySQL, Test-Driven\n" +
            "Development, Spring, Bootstrap, jQuery, Thymeleaf, HTML, CSS, and Unity so far. but I am continuing to learn\n" +
            "        and am excited to expand my resources!\n" +
            "    </div>"
    },
    {
        id: 4,
        name: 'My Work',
        field: "  <div class=\"page page4 goScroll\"> <!--work-->\n" +
            "        here, I will link to you a window of my work so far growing in code up and then beyond as I improve my skills.\n" +
            "    </div>"
    },
    {
        id: 5,
        name: 'Contact Me',
        field: " <div class=\"page page5 stopScroll\" id=\"contact\"> <!--contact info-->\n" +
            "        <p id=\"available\" class=\"announcement\">I'm avaliable for hire!</p> <p id=\"hired\" class=\"announcement\">I'm currently employed! if someone sent you here looking for a job it most likely wasn't me!</p><p id=\"freeLance\" class=\"announcement\">I'm Looking to freelance for YOU!</p><p id=\"main\" class=\"announcement\">please contact me via these links if you wish to connect with me! I look forward to hearing from you!</p>    \n" +
            "        <p class=\"line1\"><a href=\"https://github.com/Manueldominguez1113\"><img class=\"contactInfo\" src=\"assets/PNG/GitHub-Mark-Light-32px.png\" alt=\"gitHub\"><span> My Github</span></a></p>\n" +
            "        <!--Github/Manueldominguez1113-->\n" +
            "        <p class=\"line2\"><a href=\"https://www.linkedin.com/in/manueladominguez13/\"><img class=\"contactInfo\" src=\"assets/ico/linkdin_iconwht.png\" alt=\"linkdin\"><span> My Linkedin</span></a></p>\n" +
            "        <!--Linkdin/Manueldominguez1113-->\n" +
            "        <p class='line3'><a href=\"mailto:manueldominguez1113@gmail.com?subject=Hello Manuel! I am interested to get in touch..\">\n" +
            "                <img class=\"contactInfo\" src=\"assets/ico/emailwhtx1.png\" alt=\"Email\"><span> My Email</span></a></p> <!--Manueldominguez1113@gmail.com-->\n" +
            "        <a href=\"#\"></a>" + /*resume spot if I decide to make it live*/
            "    </div>"
    }
];


function renderText(page) {
    let inner = "";

    text.forEach((part) => {
        if (!(page === 4) && page === part.id) {
            inner = "<div id=\"textTitle\" class=\"text-center\">" + part.name + "</div>" + part.field;
            return textArea.html(inner);
        }
        if (page === 4 && page === part.id) {
            let cards="";
            inner = "<div id=\"textTitle\" class=\"text-center\">" + part.name + "</div>"

            $.ajax('./assets/JSON/info.json').done((data) => {
                data.forEach((project) => {
                    cards += "<div id=\""+project.id+"\" class='ProjectCard normalSize' onclick='fullScren(this);' ><div class='projectTitle text-center'><a href=\""+project.link+"\">" + project.title + "</a></div>"+
                        "<a href='#top'><img class='projectImage' src=\"./assets/PNG/"+project.image+"\" alt=\""+project.image+"\">"+
                        "<div class='projectdescription'>"+ project.description+ "</div></a></div>";
                })
                
                    inner+= "    <div class=\"page page4 d-flex flex-row flex-wrap justify-content-between goScroll \"> <a id=\"top\"></a><!--work-->\n" +
                        cards +
                        "    </div>"
                    return textArea.html(inner);
                

            })
        }
    })
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

function fullScren(element){
    $(element).toggleClass("fullSize normalSize");
    $(".page4").toggleClass("stopScroll goScroll");
    
}

let clouds = $("#clouds");
//cloud generator
setInterval(randomClouds, 3500);

function randomClouds() {
    let lR = Math.floor(Math.random()*(3-1)+1);
    let cloudNum = Math.floor(Math.random() * (5 - 1) + 1);
    let left =  lR === 1;
    clouds.html(" "); //make sure clear clouds

    clouds.html(cloudGenerator(cloudNum, left));
}


function cloudGenerator(number, left) {
    switch (number) {
        case(1): {
            if (left) {
                return "<img src=\"assets/portrait/clouds/cloudday3.png\" class=\"cloud cloud1 dayCloud passingLeft\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/clouds/cloudnight3.png\" class=\"cloud cloud1 nightCloud passingLeft\" alt=\"cloud night\">";
            } else {
                return "<img src=\"assets/portrait/clouds/cloudday3.png\" class=\"cloud cloud1 dayCloud passingRight\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/clouds/cloudnight3.png\" class=\"cloud cloud1 nightCloud passingRight\" alt=\"cloud night\">";
            }
        }
        case(2): {
            if (left) {
                return "<img src=\"assets/portrait/clouds/cloudday2.png\" class=\"cloud cloud1 dayCloud passingLeft\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/clouds/cloudnight2.png\" class=\"cloud cloud1 nightCloud passingLeft\" alt=\"cloud night\">";
            } else {
                return "<img src=\"assets/portrait/clouds/cloudday2.png\" class=\"cloud cloud1 dayCloud passingRight\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/clouds/cloudnight2.png\" class=\"cloud cloud1 nightCloud passingRight\" alt=\"cloud night\">";
            }
        }
        case(3): {
            if (left) {
                return "<img src=\"assets/portrait/clouds/cloudday.png\" class=\"cloud cloud1 dayCloud passingLeft\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/clouds/cloudnight.png\" class=\"cloud cloud1 nightCloud passingLeft\" alt=\"cloud night\">";
            } else {
                return "<img src=\"assets/portrait/clouds/cloudday.png\" class=\"cloud cloud1 dayCloud passingRight\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/clouds/cloudnight.png\" class=\"cloud cloud1 nightCloud passingRight\" alt=\"cloud night\">";
            }
        }
        case(4): {
            if (left) {
                return "<img src=\"assets/portrait/clouds/cloudday5.png\" class=\"cloud cloud1 dayCloud passingLeft\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/clouds/cloudnight5.png\" class=\"cloud cloud1 nightCloud passingLeft\" alt=\"cloud night\">";
            } else {
                return "<img src=\"assets/portrait/clouds/cloudday5.png\" class=\"cloud cloud1 dayCloud passingRight\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/clouds/cloudnight5.png\" class=\"cloud cloud1 nightCloud passingRight\" alt=\"cloud night\">";
            }
        }
       /* case(5): { hate the fifth cloud...
            if (left) {
                return "<img src=\"assets/portrait/clouds/cloudday4.png\" class=\"cloud cloud1 dayCloud passingLeft\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/clouds/cloudnight4.png\" class=\"cloud cloud1 nightCloud passingLeft\" alt=\"cloud night\">";
            } else {
                return "<img src=\"assets/portrait/clouds/cloudday4.png\" class=\"cloud cloud1 dayCloud passingRight\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/clouds/cloudnight4.png\" class=\"cloud cloud1 nightCloud passingRight\" alt=\"cloud night\">";
            }
        }*/


    }
}
