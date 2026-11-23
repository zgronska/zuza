export interface SiteLink {
  label: string;
  href: string;
}

export const SITE_AUTHOR = 'Zuza Gronska';

export const SITE_JOB_TITLE = 'Creative Frontend Developer';

export const NAV_LINKS: SiteLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS = {
  github: { label: 'GitHub', href: 'https://github.com/zgronska' },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zuza-gronska/',
  },
} satisfies Record<string, SiteLink>;

export type SocialLinkKey = keyof typeof SOCIAL_LINKS;

export const CONTACT_EMAIL = 'zgronska@gmail.com';

export const CV_HREF = '/Zuza_Gronska_CV.pdf';

export const THEME_STORAGE_KEY = 'theme';
