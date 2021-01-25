const menu = document.querySelectorAll('.nav__item-list');

//active link of menu
const clearLink = function () {
    menu.forEach(item => item.classList.remove('nav__item-list_active-top'));
}
menu.forEach(item => {
    item.addEventListener('click', function() {
        clearLink();
        item.classList.add('nav__item-list_active-top')
    })
})


const toggleBtn = document.querySelector('.nav-toggle');
const menuActive = document.querySelector('.header__wrap');
const socialsActive = document.querySelector('.header__socials');
const container = document.querySelector('.container');

toggleBtn.addEventListener('touchstart', function(e) {
    e.preventDefault();
    this.classList.toggle('nav-toggle_active');
    menuActive.classList.toggle('menu-active');
    socialsActive.classList.toggle('header__socials-active');
    container.classList.toggle('none-padding');
})
