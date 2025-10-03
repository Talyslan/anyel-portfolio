import { setupSmoothScroll } from './smooth-scroll';
import { setupScrollSpy } from './scroll-spy';
import { animateHeader } from './animation';

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    const getIgnore = setupSmoothScroll(navLinks);
    setupScrollSpy({ sections, navLinks, getIgnore });

    animateHeader();
});
