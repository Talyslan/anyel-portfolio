import { gsap } from '@/services';

export function animateFigmaLayout() {
    const bar = document.querySelector('#floating-bar');

    if (!bar) return;

    gsap.from(bar, {
        y: 200,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        onComplete: () => animateFigmaLayoutInOutTouchsFooter(bar)
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
