import { gsap } from '@/services';

export function animateFigmaLayout() {
    const bar = document.querySelector<HTMLElement>('#floating-bar');
    const footer = document.querySelector<HTMLElement>('footer');

    if (!bar || !footer) return;

    animateFigmaLayoutInOutTouchsFooter(bar);

    gsap.from(bar, {
        y: 200,
        delay: 2,
        duration: 2,
        ease: 'power3.out'
    });
}

function animateFigmaLayoutInOutTouchsFooter(bar: Element | null) {
    const footer = document.querySelector('footer');

    if (!footer) return;

    gsap.to(bar, {
        y: 200,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: footer,
            start: 'top 800px',
            end: 'bottom 600px',
            scrub: true
        }
    });
}
