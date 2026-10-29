export function isCurrentPage(pathname: string, href: string) {
  const currentPath = pathname.replace(/\/$/, '') || '/';

  return href === '/' ? currentPath === '/' : currentPath.startsWith(href);
}
