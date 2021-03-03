"use strict";

console.log("Hello World from main.js! \nChange this message, and make sure it changes in the browser \nto verify that you're working in the right files.");
var hamburgerButton = document.querySelector('.hamburger');
var navList = document.querySelector('.content');

var toggleNav = function toggleNav() {
  navList.classList.toggle('showing');
  hamburgerButton.classList.toggle('focus');
};

hamburgerButton.addEventListener('click', toggleNav);
var waypoint = new Waypoint({
  element: document.getElementById('logo'),
  handler: function handler() {
    var logo = document.getElementById('logo');
    logo.classList.add('active');
  }
});
//# sourceMappingURL=main.js.map
