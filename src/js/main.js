import 'regenerator-runtime/runtime';
import './swiped-events.min';
import NavbarInitiator from './navbar-initiator';
import HeroInitiatior from './hero-initiator';

window.addEventListener('DOMContentLoaded', () => {
  NavbarInitiator.init({
    navbarToggler: document.querySelector('.navbar__toggler') || null,
    navbarMenu: document.querySelector('.navbar--menu') || null
  });

  HeroInitiatior.init();
});
