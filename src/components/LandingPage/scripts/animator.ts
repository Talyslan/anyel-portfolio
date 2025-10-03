import { gsap } from '@/services';

export function animateInitialTitle() {
    const section = document.querySelector('#initial');
    if (!section) return;

    const h1 = section.querySelector<HTMLHeadingElement>('h1');
    const h2 = section.querySelector<HTMLHeadingElement>('h2');
    const customLink = section.querySelector<HTMLElement>('#custom-link');

    gsap.from(h1, {
        x: -300,
        duration: 2,
        opacity: 0,
        ease: 'power3.out'
    });

    gsap.from(h2, {
        x: -300,
        duration: 2,
        opacity: 0,
        delay: 0.4,
        ease: 'power3.out'
    });

    if (customLink) {
        gsap.fromTo(
            customLink,
            { opacity: 0 },
            { opacity: 1, duration: 2, delay: 1 }
        );
    }
}
