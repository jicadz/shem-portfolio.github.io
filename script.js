// const a = [...document.querySelectorAll('a')];

// a.forEach(function(link) {
//     link.addEventListener('click', (event) => {
//       event.preventDefault();
//     })
// })

const hamburgerNavIcon = document.querySelector('.hamburger-nav-image');
const hamburgerNav = document.querySelector('.hamburger-nav');

function toggleNav() {

    hamburgerNavIcon.classList.toggle('remove-nav');
    hamburgerNav.classList.toggle('show-nav');

}
