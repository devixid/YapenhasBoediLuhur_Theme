import 'regenerator-runtime/runtime';
import './swiped-events.min';
import NavbarInitiator from './navbar-initiator';
import HeroInitiatior from './hero-initiator';
import Alumni from './alumni';

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('head').innerHTML += `
    <!--[if IE]>
    <link href="https://assets.yapenhasboediluhur.sch.id/img/logo.png" rel="shortcut icon" />
    <![endif]-->
    <link href="https://assets.yapenhasboediluhur.sch.id/img/logo.png" rel="shortcut icon" />
  `;

  NavbarInitiator.init({
    navbarToggler: document.querySelector('.navbar__toggler') || null,
    navbarMenu: document.querySelector('.navbar--menu') || null
  });

  HeroInitiatior.init();
  Alumni.init();
});
