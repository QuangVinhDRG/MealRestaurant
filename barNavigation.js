const menuButton = document.querySelector('.book-btn i');
const navigation = document.querySelector('.nav');
const overlay = document.querySelector('.overlay-mobile-tablet');

menuButton.onclick = function() {
    navigation.classList.toggle('show')
    overlay.classList.toggle('show')
}