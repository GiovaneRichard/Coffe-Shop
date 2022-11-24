let navbar = document.querySelector('.navbar');
let btn_menu = document.querySelector('#menu-btn');

let cart = document.querySelector('.cart-items-container');
let btn_cart = document.querySelector('#cart-btn');

let search = document.querySelector('.search-form');
let btn_search = document.querySelector('#search-btn');

btn_search.onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
    cart.classList.remove('active');
}

btn_menu.onclick = () => {
    navbar.classList.toggle('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}

btn_cart.onclick = () => {
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    cart.classList.remove('active');
    search.classList.remove('active');
}