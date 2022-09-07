"use strict";


//loading screen
window.addEventListener('load', () => {
    // works just need to make a quick loading page that loads first before everything else
})

//variables/constants
const landSky = $('#contactMe');
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
const windows= $("img.LargeTextBox, img.smallTextBox");

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

//page shall have no scroll capabilities, I found that ios safari ignores overflow:hidden or fixed. so javascript is the next best option.
document.body.scrollTop = 0;


//text and js for text
const text = [
    {
        id: 1,
        name: 'Hello World!',
        field: "<div class=\"page page1 \"> <!--home-->\n" +
            "        <p class=\"line1\">I am Manuel Alex Dominguez</p>\n" +
            "        <p class=\"line2\">Enthusiastic Web Developer</p>\n" +
            "        <p class=\"line3\">Full-Stack Dev || Game Dev || Air Traffic Controller</p>\n" +
            "    </div>"
    },
    {
        id: 2,
        name: 'About Me',
        field: " <div class=\"page page2  \"> <!--about-->\n" +
            "        <p class=\"line1\">I am an Air-force veteran, spending 10 years as an Air Traffic Controller, now an aspiring full stack developer\n" +
            "        interested in creating for you, be it new and exciting websites, artistic and unique approaches, to working on\n" +
            "        functionality and fluid\n" +
            "        user interaction.</p>\n" +
            "\n" +
            "        <p class=\"line2\">I began in 2008 going through my first half of high school in Design and Technology Academy, but followed my\n" +
            "        family's footsteps to serve my nation after graduation. Returning in late 2021-2022\n" +
            "        to begin again in Code-up LLC. Immediately following Code-up with IGA to learn Indie gaming and C#</p>\n" +
            "    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur dolorem eveniet, iusto neque nisi quod reiciendis sapiente temporibus unde voluptatem voluptates? Accusantium autem dignissimos eius ipsam quod ullam, velit!</div><div>Aliquid amet beatae culpa dolorem dolorum eius facilis ipsa itaque laborum magnam mollitia odio omnis perspiciatis possimus quae quod recusandae repellat similique, sit temporibus. Adipisci et facere ipsam ipsum quas!</div><div>Autem beatae consequuntur debitis delectus iure omnis! Aliquid amet aperiam autem deserunt dolores eveniet, fugiat iste nemo nihil odit officiis quam quos saepe. Consequatur eos, error quam veritatis voluptate voluptatem.</div><div>Aspernatur beatae corporis cumque distinctio dolore eaque esse fugit, iure, labore nam nemo nisi odio pariatur porro quo rem unde. Aliquid deserunt doloremque, fugit minima porro quaerat quam ratione vero.</div><div>Aliquam, consectetur, cumque cupiditate dicta ipsam ipsum iure provident quibusdam recusandae repudiandae sit unde! Ad cum delectus, ducimus fugit illo impedit incidunt perferendis quam quisquam quod repellat sed voluptas voluptatibus.</div><div>Accusamus corporis cumque dolore eius enim eos eveniet explicabo fuga impedit inventore non nostrum quo recusandae saepe, sed! Ab ea excepturi hic laudantium possimus veniam, voluptates. Blanditiis corporis dolore veniam?</div><div>Accusamus accusantium ad architecto commodi eos fugiat fugit, id incidunt ipsa ipsum iure laboriosam minus, necessitatibus neque odit perferendis praesentium quaerat quam rerum similique suscipit totam velit. Dolore, illum nostrum!</div><div>Alias dolores eius numquam saepe sed sunt! Delectus et ipsum ut. Commodi doloremque eligendi ipsam itaque, laboriosam magni quasi soluta suscipit? Distinctio eius fugiat id impedit minima, molestias optio repellat.</div><div>Aspernatur culpa cum delectus doloremque eligendi facere illo minus natus nemo, perspiciatis praesentium quam quis repellendus sapiente tempore tenetur vel velit voluptatem! At enim error, hic ipsa libero qui unde.</div><div>Aut delectus dolorum earum eum facere harum in maxime, mollitia nostrum omnis, perferendis quam quis quos repellendus tenetur totam voluptas. A ab accusantium commodi, ea enim hic optio possimus ullam?</div>" +
            "    </div>"
    },
    {
        id: 3,
        name: 'My Skills',
        field: "    <div class=\"page page3  \"> <!--skills combine with one of the smaller paragraphs-->\n" +
            "        ...I'm proficient in C# HTML, CSS, Javascript, Bootstrap, JQuery, and Unity so far. but I am continuing to learn\n" +
            "        and am excited to expand my resources!\n" +
            "    </div>"
    },
    {
        id: 4,
        name: 'My Work',
        field: "  <div class=\"page page4 \"> <!--work-->\n" +
            "        My here, I will link to you a window of my work so far growing in code up and then beyond as I improve my skills.\n" +
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
    windows.removeClass("animate"); // remove the animation for reset
    text.forEach((part) => {
        if (page === part.id) {
            inner = "<div id=\"textTitle\" class=\"text-center\">" + part.name + "</div>" + part.field;
        }
    })
    textArea.html(inner);
    windows.addClass("animate"); // reset animate
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


let clouds = $("#clouds");
//cloud generator
setInterval(randomClouds,6000);

function randomClouds(){
    let lR = Math.random() * (2 - 1) + 1; 
    let cloudNum = Math.floor(Math.random() * (5 - 1) + 1);
    let left = lR === 1;
    
    clouds.html(" "); //make sure clear clouds
    
    clouds.html(cloudGenerator(cloudNum, left));
    }


function cloudGenerator(number, left) {
    switch (number) {
        case(1): {
            if (left) {
                return "<img src=\"assets/portrait/cloudday.png\" class=\"cloud cloud1 dayCloud passingLeft\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/cloudnight.png\" class=\"cloud cloud1 nightCloud passingLeft\" alt=\"cloud night\">";
            } else {
                return "<img src=\"assets/portrait/cloudday.png\" class=\"cloud cloud1 dayCloud passingRight\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/cloudnight.png\" class=\"cloud cloud1 nightCloud passingRight\" alt=\"cloud night\">";
            }
        }
        case(2): {
            if (left) {
                return "<img src=\"assets/portrait/cloudday.png\" class=\"cloud cloud1 dayCloud passingLeft\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/cloudnight.png\" class=\"cloud cloud1 nightCloud passingLeft\" alt=\"cloud night\">";
            } else {
                return "<img src=\"assets/portrait/cloudday.png\" class=\"cloud cloud1 dayCloud passingRight\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/cloudnight.png\" class=\"cloud cloud1 nightCloud passingRight\" alt=\"cloud night\">";
            }
        }
        case(3): {
            if (leftRight === "left") {
                return "<img src=\"assets/portrait/cloudday.png\" class=\"cloud cloud1 dayCloud passingLeft\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/cloudnight.png\" class=\"cloud cloud1 nightCloud passingLeft\" alt=\"cloud night\">";
            } else {
                return "<img src=\"assets/portrait/cloudday.png\" class=\"cloud cloud1 dayCloud passingRight\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/cloudnight.png\" class=\"cloud cloud1 nightCloud passingRight\" alt=\"cloud night\">";
            }
        }
        case(4): {
            if (leftRight === "left") {
                return "<img src=\"assets/portrait/cloudday.png\" class=\"cloud cloud1 dayCloud passingLeft\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/cloudnight.png\" class=\"cloud cloud1 nightCloud passingLeft\" alt=\"cloud night\">";
            } else {
                return "<img src=\"assets/portrait/cloudday.png\" class=\"cloud cloud1 dayCloud passingRight\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/cloudnight.png\" class=\"cloud cloud1 nightCloud passingRight\" alt=\"cloud night\">";
            }
        }
        case(5): {
            if (leftRight === "left") {
                return "<img src=\"assets/portrait/cloudday.png\" class=\"cloud cloud1 dayCloud passingLeft\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/cloudnight.png\" class=\"cloud cloud1 nightCloud passingLeft\" alt=\"cloud night\">";
            } else {
                return "<img src=\"assets/portrait/cloudday.png\" class=\"cloud cloud1 dayCloud passingRight\" alt=\"cloud\">\n" +
                    "<img src=\"assets/portrait/cloudnight.png\" class=\"cloud cloud1 nightCloud passingRight\" alt=\"cloud night\">";
            }
        }


    }
}
