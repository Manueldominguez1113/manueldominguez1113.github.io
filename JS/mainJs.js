"use strict";
let landSky = $('#landSky');
landSky.click(()=>{
  $(".Portrait").toggleClass("sky land");
});
let dayNight = $('#dayNight');
dayNight.click(()=>{
    $(".Portrait").toggleClass("day night");
});
