const menu = document.querySelectorAll('.nav__item-list');

/////////////active link of menu////////////
const clearLink = function (link) {
    menu.forEach(item => {
        if (item.innerText !== link) {
            item.classList.remove('nav__item-list_active-top')
        }
    });
}
menu.forEach(item => {
    item.addEventListener('click', function() {
        clearLink(item.innerText);
        console.log('item: ', item.innerText);
        item.classList.add('nav__item-list_active-top')
    })
})
/////////////active link of menu////////////

////////////burger////////////////////
const toggleBtn = document.querySelector('.nav-toggle');
const menuActive = document.querySelector('.header__wrap');
const socialsActive = document.querySelector('.header__socials');
const container = document.querySelector('.container');

toggleBtn.addEventListener('click', function(e) {
    //e.preventDefault();
    toggleBtn.classList.toggle('nav-toggle_active');
    menuActive.classList.toggle('menu-active');
    socialsActive.classList.toggle('header__socials-active');
    container.classList.toggle('none-padding');
    document.body.classList.toggle('hidden');
});
////////////burger////////////////////

/////custom select with img/////////
const selectCountry = function () {
    const selectHeader = document.querySelector('.select-country__header');
    const selectItem = document.querySelectorAll('.select-country__item');

    const toggleSelect = function () {
        this.parentElement.classList.toggle('is-active');
    }
    const chooseSelect = function () {
        const country = this.innerHTML;
        const select = this.closest('.select-country');
        let currentCountry = select.querySelector('.select-country__current');

        currentCountry.innerHTML = country;

       select.classList.remove('is-active');
    }

    selectHeader.addEventListener('click', toggleSelect);

    selectItem.forEach(item => {
        item.addEventListener('click', chooseSelect)
    })    
}

selectCountry();
/////custom select with img/////////

///////////////accordion/////////////////
const item = document.querySelectorAll('.question-answer__item');

item.forEach(item => {
    item.addEventListener('click', function () {
       this.classList.toggle("question-answer__item--active");
    })
})
///////////////accordion/////////////////