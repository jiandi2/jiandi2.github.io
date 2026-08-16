export type Lang = 'zh' | 'en';

export function normalizePath(pathname: string) {
  if (!pathname) return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function isEnglishPath(pathname: string) {
  const p = normalizePath(pathname);
  return p === '/en' || p.startsWith('/en/');
}

export function toEnglish(pathname: string) {
  const p = normalizePath(pathname);
  if (isEnglishPath(p)) return p;
  const episode = p.match(/^\/interviews\/([^/]+)/);
  if (episode) return `/en/interviews/${episode[1]}`;
  if (p.startsWith('/interviews')) return '/en/interviews';
  if (p.startsWith('/about')) return '/en/about';
  return '/en';
}

export function toChinese(pathname: string) {
  const p = normalizePath(pathname);
  if (!isEnglishPath(p)) return p;
  if (p === '/en') return '/';
  return p.slice(3) || '/';
}
