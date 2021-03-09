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
var waypoint1 = new Waypoint({
  element: document.getElementById('logo1'),
  handler: function handler() {
    var logo = document.getElementById('logo1');
    logo.classList.add('active');
  },
  offset: 'bottom-in-view'
});
var waypoint2 = new Waypoint({
  element: document.getElementById('normal-bulb'),
  handler: function handler() {
    var logo = document.getElementById('normal-bulb');
    logo.classList.add('active');
    var par = document.querySelector('.sec-two-p');
    par.classList.add('active');
    console.log(par);
  },
  offset: 'bottom-in-view'
});
var waypoint3 = new Waypoint({
  element: document.getElementById('ceiling'),
  handler: function handler() {
    var logo = document.getElementById('ceiling');
    logo.classList.add('active');
    var par = document.querySelector('.sec-three-p');
    par.classList.add('active');
    console.log(par);
  },
  offset: 'bottom-in-view'
});
var waypoint4 = new Waypoint({
  element: document.getElementById('spot-l'),
  handler: function handler() {
    var logo = document.getElementById('spot-l');
    logo.classList.add('active');
  },
  offset: 'bottom-in-view'
});
var waypoint5 = new Waypoint({
  element: document.getElementById('spot-r'),
  handler: function handler() {
    var logo = document.getElementById('spot-r');
    logo.classList.add('active');
    var par = document.querySelector('.sec-four-p');
    par.classList.add('active');
    console.log(par);
  },
  offset: 'bottom-in-view'
});
var waypoint6 = new Waypoint({
  element: document.getElementById('hanging'),
  handler: function handler() {
    var logo = document.getElementById('hanging');
    logo.classList.add('active');
    var par = document.querySelector('.sec-five-p');
    par.classList.add('active');
    console.log(par);
  },
  offset: 'bottom-in-view'
});
//# sourceMappingURL=main.js.map
