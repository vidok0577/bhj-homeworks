const rotator = document.querySelectorAll(".rotator__case");
let active = 0;
let time = 1000;
let prevTime = Date.now();

setTimeout(function(){
    rotator[active].classList.remove("rotator__case_active");
    active = Math.floor(Math.random() * (rotator.length - 0.1));
    rotator[active].classList.add("rotator__case_active");
    rotator[active].style.color = rotator[active].dataset.color;
    time = rotator[active].dataset.speed;
    setTimeout(arguments.callee, time);
  }, time);
