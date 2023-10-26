function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector('.mobile-nav-btn');
  const nav = document.querySelector('.header__nav');
  const menuIcon = document.querySelector('.nav-icon');
  const header = document.querySelector('.header');
  navBtn.onclick = function () {
    nav.classList.toggle('header__nav-active');
    menuIcon.classList.toggle('nav-icon--active');
    header.classList.toggle('header-fill');
    document.body.classList.toggle('no-scroll');
  };
}

export default mobileNav;
