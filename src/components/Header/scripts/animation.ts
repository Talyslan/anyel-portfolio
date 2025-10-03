import { gsap } from '@/services';

export function animateHeader() {
    gsap.from('header', {
        y: -200,
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
    });
}
