import { profile } from '../data/content';

// A leading "/" means the PDF lives in public/ and needs the deploy base path;
// anything else is an external URL and is used as-is.
export function resumeHref() {
  if (!profile.resume) return null;
  return profile.resume.startsWith('/')
    ? `${process.env.PUBLIC_URL}${profile.resume}`
    : profile.resume;
}

export const resumeIsLocal = Boolean(profile.resume && profile.resume.startsWith('/'));
