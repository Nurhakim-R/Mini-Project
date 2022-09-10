let gunung = document.getElementById('gunung');
let front = document.getElementById('gunung-front');
let sun = document.getElementById('sun');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    sun.style.left = value * 1.5 + 'px';
    sun.style.bottom = value * 1.5 + 'px';
    text.style.Top = value * 0.4 + 'px';
    btn.style.marginTop = value * 0.6 + 'px';
    header.style.top = value * 0.7 + 'px';
    gunung.style.marginLeft = value * 0.3 + 'px';
    front.style.marginRight = value * 0.5 + 'px';
})