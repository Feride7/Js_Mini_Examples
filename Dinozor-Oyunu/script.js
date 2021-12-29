const dinozor = document.querySelector('.dinozor');
const kaktus = document.querySelector('.kaktus');
const oyunAlanı = document.querySelector('.oyun-alani');
var interval = 1000;

oyunAlanı.addEventListener('click', function() {
    kaktus.classList.add('kaktusAnimasyon');
    dinozor.classList.add('dinoAnimasyon');
    setTimeout(function() {
        dinozor.classList.remove('dinoAnimasyon')
    }, interval);
});

var carpisma = setInterval(function() {
    var dinoControl = parseInt(window.getComputedStyle(dinozor).getPropertyValue('bottom'));


    var kaktusControl = parseInt(window.getComputedStyle(kaktus).getPropertyValue('left'));
    if (kaktusControl > 0 && kaktusControl < 180 && dinoControl < 180) {
        alert('Üzgünüz, Kaybettiniz...');
    }


}, 50);