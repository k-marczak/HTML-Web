const hamburger = document.querySelector('.open');
const cross = document.querySelector('.close');
const nav_list = document.querySelector('.nav-list')

hamburger.addEventListener('click', ()=>{
    nav_list.classList.add('active');
});

cross.addEventListener('click', ()=>{
    nav_list.classList.remove('active');
});