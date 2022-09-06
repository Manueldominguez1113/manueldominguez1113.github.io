"use strict";
let landSky = $('#contactMe');
landSky.click(() => {
    $(".Portrait").toggleClass("sky land");
});
let dayNight = $('#dayNight');
dayNight.click(() => {
    $(".Portrait").toggleClass("day night");
});

$(".options").click(() => {
    $(".options").toggleClass("active");
});
let today = new Date();
let time= today.getHours()+":"+ today.getMinutes();
$("#clock").text(time);
document.body.scrollTop=0;
document.body.scrollWidth=0;
