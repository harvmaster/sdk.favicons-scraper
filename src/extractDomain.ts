export const extractDomain = (url: string): string => {
  const domainRegex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/im;
  const match = url.match(domainRegex);
  if (!match) {
    throw new Error('Invalid URL');
  }
  return match[1];
};