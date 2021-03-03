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
		let logo = document.getElementById('#ogo');
		logo.classList.add('active');
		console.log('hello world');
	},
	offset: 'bottom-in-view',
});
