const NavbarInitiator = {
  init: ({ navbarToggler, navbarMenu }) => {
    if (!navbarToggler || !navbarMenu) return;

    const body = document.querySelector('body') || document.body;

    navbarToggler.addEventListener('click', () => {
      navbarMenu.classList.toggle('is-open');
      navbarToggler.classList.toggle('is-open');
      body.classList.toggle('overflow-hidden');
    });

    NavbarInitiator.initDropdown();
  },

  initDropdown: () => {
    const dropdownToggler = document.querySelectorAll('[navbar-menu-has-dropdown]') || null;

    if (!dropdownToggler) return;

    dropdownToggler.forEach((toggler) => {
      const dropdownTarget = document.getElementById(toggler.getAttribute('data-navbar-dropdown'));
      const targetHeight =
        document.querySelector(`#${toggler.getAttribute('data-navbar-dropdown')} > ul`).scrollHeight + 20;

      if (window.innerWidth <= 990) {
        toggler.addEventListener('click', () => {
          if (dropdownTarget.classList.contains('is-open')) {
            dropdownTarget.style.height = 0;
          } else {
            dropdownTarget.style.height = `${targetHeight}px`;
          }

          dropdownTarget.classList.toggle('is-open');
          toggler.classList.toggle('is-open');
        });

        toggler.addEventListener('keypress', (event) => {
          if (event.key === 'Enter') {
            if (dropdownTarget.classList.contains('is-open')) {
              dropdownTarget.style.height = 0;
            } else {
              dropdownTarget.style.height = `${targetHeight}px`;
            }

            dropdownTarget.classList.toggle('is-open');
            toggler.classList.toggle('is-open');
          }
        });
      }
    });
  }
};

export default NavbarInitiator;
