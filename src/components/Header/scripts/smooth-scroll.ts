import { setActive } from './set-active';

export function setupSmoothScroll(navLinks: NodeListOf<HTMLAnchorElement>) {
    let ignoreObserver = false;

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (!href) return;
            const id = href.substring(1);
            const section = id ? document.getElementById(id) : null;

            if (section) {
                ignoreObserver = true;
                section.scrollIntoView({ behavior: 'smooth' });
                setActive({ navLinks, id });

                setTimeout(() => (ignoreObserver = false), 500);
            }
        });
    });

    return () => ignoreObserver;
}
