export type Tone = 'surface' | 'primary' | 'accent' | 'highlight';

export const toneClasses: Record<Tone, string> = {
  surface: 'bg-surface text-foreground',
  primary: 'bg-primary text-primary-foreground',
  accent: 'bg-accent text-accent-foreground',
  highlight: 'bg-highlight text-highlight-foreground',
};
