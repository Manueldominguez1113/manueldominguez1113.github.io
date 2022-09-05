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
