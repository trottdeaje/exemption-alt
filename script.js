const main = document.getElementById('main');
const originalBtn = document.getElementById('original');
const optimalBtn = document.getElementById('optimal');
const pElement = document.getElementsByTagName('p');
const checkBox = document.getElementById('animation-cb').checked;

originalBtn.addEventListener('click', changeToOriginal);
optimalBtn.addEventListener('click', changeToOptimal);


function changeToOriginal () {
        main.style.maxWidth = "81em";
        main.style.fontSize = "14px";
        main.style.lineHeight = "24px";
        document.querySelectorAll('p').forEach(e => e.style.marginBottom = "10px");
}

function changeToOptimal () {
        main.style.maxWidth = "38em";
        main.style.fontSize = "16px";
        main.style.lineHeight = "25px";
}

function isChecked(){
    if (document.getElementById('animation-cb').checked){
        main.classList.add('animated')
    }
    else {
        main.classList.remove('animated')
    }
}