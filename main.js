document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const naw__list = document.querySelector('.naw__list');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        naw__list.classList.toggle('open');
    });
});