export function isCurrentPage(pathname: string, href: string) {
  const currentPath = pathname.replace(/\/$/, '') || '/';

  if (href === '/') return currentPath === '/';

  return currentPath === href || currentPath.startsWith(`${href}/`);
}
