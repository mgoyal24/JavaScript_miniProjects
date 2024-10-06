const bulbImg = document.getElementById('bulb');
const btn = document.getElementById('Btn');


let BulbOn = false;

btn.addEventListener('click',() => { 
    if (BulbOn) {
        bulbImg.src = 'lightbulb-OFF.png'
        Btn.textContent = 'Turn ON'
    }
    else{
        bulbImg.src = 'lightbulb-ON.png'
        Btn.textContent='Turn OFF'
    }
    BulbOn = !BulbOn
})












