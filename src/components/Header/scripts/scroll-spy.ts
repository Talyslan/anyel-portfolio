import { setActive } from './set-active';

interface SetupScrollSpyProps {
    sections: NodeListOf<HTMLElement>;
    navLinks: NodeListOf<HTMLAnchorElement>;
    getIgnore: () => boolean;
}

export function setupScrollSpy({
    sections,
    navLinks,
    getIgnore
}: SetupScrollSpyProps) {
    const observer = new IntersectionObserver(
        entries => {
            if (getIgnore()) return;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive({ navLinks, id: entry.target.id });
                }
            });
        },
        { threshold: 0.5 }
    );

    sections.forEach(section => observer.observe(section));
}
