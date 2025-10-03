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

export function animateParagraphsAndLink() {
    const section = document.querySelector<HTMLElement>(
        '#come-create-together'
    );
    if (!section) return;

    const paragraphs = section.querySelectorAll<HTMLParagraphElement>('p');
    const customLink = section.querySelector<HTMLElement>('#custom-link');

    const tl = gsap.timeline({
        defaults: { duration: 2, delay: 1, ease: 'power3.out' },
        scrollTrigger: {
            trigger: section,
            start: 'top 40%',
            end: 'bottom 100%',
            scrub: true
        }
    });

    paragraphs.forEach((p, i) => {
        tl.from(p, { opacity: 0, y: 30 }, i * 5);
    });

    if (customLink) {
        tl.from(
            customLink,
            { opacity: 0, y: 30, immediateRender: true },
            '>1.2'
        );
    }
}
