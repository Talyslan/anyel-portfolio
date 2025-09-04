import { fontProviders } from 'astro/config';

const montserrat = {
    provider: fontProviders.google(),
    name: 'Montserrat',
    cssVariable: '--font-montserrat'
};

export const fonts = [montserrat];
