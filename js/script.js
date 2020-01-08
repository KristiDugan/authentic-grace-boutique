// Hamburger Menu toggling

const hamburger = document.getElementById('hamburger');
const navbarToggledItems = document.getElementById('navbarToggledItems');

function toggleNav() {
	navbarToggledItems.classList.toggle('show');
	if (hamburger.classList.contains('fa-bars')) {
		hamburger.classList.replace('fa-bars', 'fa-times');
	} else {
		hamburger.classList.replace('fa-times', 'fa-bars');
	}
}

hamburger.addEventListener('click', toggleNav);
