const holes = document.getElementsByClassName("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let i = 0; i < holes.length; i++) {
    holes[i].addEventListener('click', clickHole);
}

function zeroResult () {
    dead.textContent = 0;
    lost.textContent = 0;
}

function clickHole () {
    if (this.classList.contains("hole_has-mole")) {
        dead.textContent++;
    } else {
        lost.textContent++;
    }
    if (dead.textContent >= 10) {
        alert("Вы выиграли");
        zeroResult();
    }
    if (lost.textContent >= 5) {
        alert("Вы проиграли");
        zeroResult();
    }
}