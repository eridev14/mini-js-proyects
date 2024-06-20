const toggleMenu = document.querySelector('.navigation__toggle');
const navigation = document.querySelector('.navigation');

toggleMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');
})