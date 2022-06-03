import 'regenerator-runtime/runtime';
import NavbarInitiator from './navbar-initiator';

window.addEventListener('DOMContentLoaded', () => {
  NavbarInitiator.init({
    navbarToggler: document.querySelector('.navbar__toggler') || null,
    navbarMenu: document.querySelector('.navbar--menu') || null
  });
  NavbarInitiator.initDropdown();
});
