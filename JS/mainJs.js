"use strict";
//buttons to change the scenery
let landSky = $('#contactMe');
landSky.click(() => {
    $(".Portrait").toggleClass("sky land");
});
let dayNight = $('#dayNight');
dayNight.click(() => {
    $(".Portrait").toggleClass("day night");
});

//on touchscreen, will give active class to option the menu, doesn't matter in hover capable devices.
$(".options").click(() => {
    $(".options").toggleClass("active");
});


//trying out a clock in the cockpit, which is the HARDEST THING TO SEE. not UI/UX friendly
let today = new Date();
let time= today.getHours()+":"+ today.getMinutes();
$("#clock").text(time);

//panel for night and day shall switch to the opposite options with a ? to let the user know to try it out.



//page will have no scroll capabilities, i found that ios safari ignores overflow:hidden or fixed. so javascript is the next best option.
document.body.scrollTop=0;
