"use strict";

var hamburgerButton = document.querySelector('.hamburger');
var navList = document.querySelector('.content');

var toggleNav = function toggleNav() {
  navList.classList.toggle('showing');
  hamburgerButton.classList.toggle('focus');
};

hamburgerButton.addEventListener('click', toggleNav);

window.onload = function () {
  var logo = document.querySelector('#logo');
  logo.classList.add('active');
};

var waypoint = new Waypoint({
  element: document.getElementById('logo'),
  handler: function handler() {
    var logo = document.getElementById('logo');
    logo.classList.add('active');
    console.log('hello world');
  },
  offset: 'bottom-in-view'
});
//# sourceMappingURL=main.js.map
