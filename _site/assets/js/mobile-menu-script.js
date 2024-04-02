function toggleMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

// Close mobile menu when tapping outside the menu
document.addEventListener('click', function(event) {
  if (!event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
    document.getElementById('mobileMenu').classList.remove('active');
  }
});
