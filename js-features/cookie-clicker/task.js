let toggle = true;
let lastTime = Date.now();

const cockie = document.getElementById('cookie');
const speeder = document.getElementById('clicker__speed');

cockie.onclick = () => {
    cockie.width += toggle ? 20 : -20;
    cockie.height += toggle ? 20 : -20;
    
    toggle = !toggle;
    
    document.getElementById('clicker__counter').textContent++;
    
    speeder.textContent = (1 / (Date.now() - lastTime) * 1000).toFixed(2);
    lastTime = Date.now();
}