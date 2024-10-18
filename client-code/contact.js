function toggleMobileMenu(menu) {
  const mobileMenu = document.querySelector('.mobile-menu');
  const contactPage = document.querySelector('.contactUs');

  mobileMenu.classList.toggle('show');
  menu.classList.toggle('open');

  if (mobileMenu.classList.contains('show')) {
    contactPage.style.display = 'none';
  } else {
    contactPage.style.display = 'block';
  }

}