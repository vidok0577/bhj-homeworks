const timer = document.getElementById('timer');
let time = Number(timer.textContent);
const interval = setInterval(() => {
    timer.textContent = `00:${(time >= 10) ? time : '0' + time}`;
    if (time === 0) {
        alert("Вы победили в конкурсе");
        clearInterval(interval);
    }
    time--;
}, 1000);