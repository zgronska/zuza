export interface SiteLink {
  label: string;
  href: string;
}

export const SITE_AUTHOR = 'Zuza Gronska';

export const NAV_LINKS: SiteLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

export const SOCIAL_LINKS: SiteLink[] = [
  { label: 'GitHub', href: 'https://github.com/zgronska' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zuza-gronska/' },
];

export const CONTACT_EMAIL = 'zgronska@gmail.com';

export const CV_HREF = '/cv.pdf';
