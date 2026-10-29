interface ActionOptions {
  href?: string | URL | null;
  external: boolean;
  type: 'button' | 'submit' | 'reset';
}

export function getActionAttrs({ href, external, type }: ActionOptions) {
  if (!href) return { type };

  return external ? { href, target: '_blank', rel: 'noopener' } : { href };
}
