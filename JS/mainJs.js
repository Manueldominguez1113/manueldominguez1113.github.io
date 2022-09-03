"use strict";
let landSky = $('#landSky');
landSky.click(()=>{
  $(".Portrait").toggleClass("sky land");
});
let dayNight = $('#dayNight');
dayNight.click(()=>{
    $(".Portrait").toggleClass("day night");
});

function onLoad(callBack){
    let intervalId= window.setInterval(()=>{
        if(document.getElementById('body')[0]!==undefined){
            window.clearInterval(intervalId);
            callBack.call(this);
        }
    },1000);
}
function setVisibility(target, visible){
document.querySelector(target).style.display = visible ? 'block' : 'none';
}

onLoad(()=>{
    setVisibility('Portrait',true);
    // setVisibility('.loading',false);
    }
)