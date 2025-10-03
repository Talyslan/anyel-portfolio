interface SetActiveProps {
    navLinks: NodeListOf<HTMLAnchorElement>;
    id: string;
}
export function setActive({ navLinks, id }: SetActiveProps) {
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('bg-accent');
        } else {
            link.classList.remove('bg-accent');
        }
    });
}
