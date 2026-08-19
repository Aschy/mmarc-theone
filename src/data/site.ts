export const SITE = {
  url: 'https://mmarc-theone.com',
  name: 'MMARC-TheONE',
  alias: 'MM:ONE',
  email: 'mmarc@greensauce.io',
  links: {
    youtube: 'https://www.youtube.com/@MMARC-TheOne',
    spotify: 'https://open.spotify.com/artist/5U1qztLeiDGVjCvP6AUCQA',
    appleMusic: 'https://music.apple.com/fr/artist/mmarc/1769405592',
    deezer: 'https://www.deezer.com/artist/180995077',
    instagram: 'https://www.instagram.com/mmarctheone/',
    tiktok: 'https://www.tiktok.com/@mmarctheone',
    linktree: 'https://linktr.ee/mmarctheone',
    ceriseStore: 'https://cerise-store.com/',
  },
};

export type Lang = 'fr' | 'en' | 'ar' | 'es';
export const LANGS: Lang[] = ['fr', 'en', 'ar', 'es'];
export const LANG_LABEL: Record<Lang, string> = { fr: 'Français', en: 'English', ar: 'العربية', es: 'Español' };
export const isRTL = (l: Lang) => l === 'ar';
