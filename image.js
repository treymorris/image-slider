const left = document.getElementById('left');
const right = document.getElementById('right');
const img = document.querySelectorAll('img');
const dotBox = document.querySelector('.dot-box');
let currentImg = 0;

left.addEventListener('click', movePicLeft);
right.addEventListener('click', movePicRight);

function movePicRight() {
    currentImg >= img.length - 1 ? currentImg = 0 : currentImg++
    initPics(currentImg)
}
function movePicLeft() {
    currentImg <= 0 ? currentImg = img.length  - 1 : currentImg--
    initPics(currentImg)   
}

function initPics(n) {
    const dots = document.querySelectorAll('.dot');
    img.forEach((img) => {
        img.style.display = 'none'
        dots.forEach((dot) => {
            dot.classList.remove('active')
        })
    })
        img[n].style.display = 'flex';
        dots[n].classList.add('active')
    }

function pageLoad() {
    img.forEach((img) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dotBox.appendChild(dot);
    })
}

function dotNav() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          initPics(index)
        })
      })
    }

document.addEventListener("DOMContentLoaded", pageLoad(currentImg))
initPics(currentImg);
dotNav();

//setInterval(() => {
//    movePicRight()
 // }, 5000);