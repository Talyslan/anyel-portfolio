import { gsap } from '@/services';

export function animateHeader() {
    gsap.from('header', {
        y: -200,
        duration: 2,
        ease: 'power3.out'
    });
}
