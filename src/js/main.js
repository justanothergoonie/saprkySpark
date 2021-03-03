let hamburgerButton = document.querySelector('.hamburger');

let navList = document.querySelector('.content');

let toggleNav = function () {
	navList.classList.toggle('showing');
	hamburgerButton.classList.toggle('focus');
};
hamburgerButton.addEventListener('click', toggleNav);

window.onload = function () {
	let logo = document.querySelector('#logo');
	logo.classList.add('active');
};
var waypoint = new Waypoint({
	element: document.getElementById('logo'),
	handler: function () {
		let logo = document.getElementById('logo');
		logo.classList.add('active');
		console.log('hello world');
	},
	offset: 'bottom-in-view',
});
var waypoint1 = new Waypoint({
	element: document.getElementById('logo1'),
	handler: function () {
		let logo = document.getElementById('logo1');
		logo.classList.add('active');
		console.log('hello world');
	},
	offset: 'bottom-in-view',
});
var waypoint2 = new Waypoint({
	element: document.getElementById('normal-bulb'),
	handler: function () {
		let logo = document.getElementById('normal-bulb');
		logo.classList.add('active');
		console.log('hello world');
	},
	offset: 'bottom-in-view',
});
var waypoint3 = new Waypoint({
	element: document.getElementById('ceiling'),
	handler: function () {
		let logo = document.getElementById('ceiling');
		logo.classList.add('active');
		console.log('hello world');
	},
	offset: 'bottom-in-view',
});
var waypoint4 = new Waypoint({
	element: document.getElementById('spot-l'),
	handler: function () {
		let logo = document.getElementById('spot-l');
		logo.classList.add('active');
		console.log('hello world');
	},
	offset: 'bottom-in-view',
});
var waypoint5 = new Waypoint({
	element: document.getElementById('spot-r'),
	handler: function () {
		let logo = document.getElementById('spot-r');
		logo.classList.add('active');
		console.log('hello world');
	},
	offset: 'bottom-in-view',
});
var waypoint6 = new Waypoint({
	element: document.getElementById('hanging'),
	handler: function () {
		let logo = document.getElementById('hanging');
		logo.classList.add('active');
		console.log('hello world');
	},
	offset: 'bottom-in-view',
});
