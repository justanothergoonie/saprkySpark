console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);
let hamburgerButton = document.querySelector('.hamburger');

let navList = document.querySelector('.content');

let toggleNav = function () {
	navList.classList.toggle('showing');
	hamburgerButton.classList.toggle('focus');
};
hamburgerButton.addEventListener('click', toggleNav);
