import { getPagePath } from './getPagePath';

export function isCurrentPage(pathname: string, href: string) {
  const currentPath = getPagePath(pathname);

  if (href === '/') return currentPath === '/';

  return currentPath === href || currentPath.startsWith(`${href}/`);
}
