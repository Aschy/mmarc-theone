// Discographie MMARC-TheONE — source de vérité pour le site.
// `date` en ISO quand elle est connue avec certitude, sinon uniquement `year`.
// Les liens vers les plateformes sont à compléter (voir README).
import type { Lang } from './site';

export type ReleaseType = 'album' | 'single' | 'remix' | 'mashup' | 'edit' | 'live';

export interface Release {
  id: string;
  title: string;
  year: number;
  date?: string;             // YYYY-MM-DD
  type: ReleaseType;
  with?: string[];           // collaborateurs / featurings
  cover?: string;            // /img/covers/*.webp
  youtube?: string;
  apple?: string;
  spotify?: string;
  stat?: string;             // chiffre public marquant (vues, etc.)
  note?: Partial<Record<Lang, string>>;
  featured?: boolean;
  langs?: string[];          // langues chantées (codes ISO)
}

export const releases: Release[] = [
  {
    id: 'sidi-ciel', title: 'Sidi Ciel (Club House)', year: 2026, date: '2026-08-14', type: 'mashup', spotify: 'https://open.spotify.com/album/6xqOg12PzIhzMBcPgB9GLg',
    with: ['Klara-V'], cover: '/img/covers/sidi-ciel.webp', featured: true, langs: ['fr', 'ar'],
    apple: 'https://music.apple.com/fr/album/sidi-ciel-club-house-single/6801770362',
    note: {
      fr: 'Mashup CIEL (GIMS) × Sidi Mansour à 102 BPM : lead vocal humain, darbouka tunisienne, ambiance night-club oriental.',
      en: 'CIEL (GIMS) × Sidi Mansour mashup at 102 BPM: human lead vocal, Tunisian darbuka, oriental night-club energy.',
      ar: 'مزج بين «CIEL» (GIMS) و«سيدي منصور» على 102 نبضة/د: صوت بشري، دربوكة تونسية، أجواء ملهى ليلي شرقي.',
      es: 'Mashup CIEL (GIMS) × Sidi Mansour a 102 BPM: voz principal humana, darbuka tunecina, ambiente de club oriental.',
    },
  },
  {
    id: 'troisieme-m', title: 'Troisième M', year: 2026, date: '2026-08-13', type: 'single', spotify: 'https://open.spotify.com/album/3AuJ7Yvun1rynS9A0NT7Bu', cover: undefined, langs: ['fr'],
    apple: 'https://music.apple.com/fr/album/troisi%C3%A8me-m-single/6801280904',
    note: {
      fr: 'Volet final de la trilogie « M » : minimaliste, sur une boîte à musique vintage, thème du retour à la naissance, codes autobiographiques cachés.',
      en: 'Final chapter of the "M" trilogy: minimalist, built on a vintage music box, themed on returning to birth, with hidden autobiographical codes.',
      ar: 'الجزء الأخير من ثلاثية «M»: أسلوب بسيط على صندوق موسيقى قديم، بثيمة العودة إلى الولادة، مع شفرات سيرة ذاتية مخفية.',
      es: 'Capítulo final de la trilogía «M»: minimalista, sobre una caja de música vintage, con el tema del regreso al nacimiento y códigos autobiográficos ocultos.',
    },
  },
  {
    id: 'sidi-mansour-ya-baba', title: 'Sidi Mansour × Ya Baba (Afro House)', year: 2026, date: '2026-08-10', type: 'remix', spotify: 'https://open.spotify.com/album/3jay4zQqFw0koKsoqiWped',
    cover: '/img/covers/sidi-mansour-ya-baba.webp', langs: ['ar', 'fr', 'en'],
    apple: 'https://music.apple.com/fr/album/sidi-mansour-x-ya-baba-afro-house-single/6800138167',
    note: {
      fr: 'Single de l\u2019été 2026 : refrain original « baba / papa / daddy », montée progressive jusqu\u2019au club, hook « All eyes on me, ya baba ».',
      en: 'Summer 2026 single: original "baba / papa / daddy" chorus, slow build to peak-time club, "All eyes on me, ya baba" hook.',
      ar: 'أغنية صيف 2026: لازمة أصلية «بابا/papa/daddy»، تصاعد تدريجي نحو أجواء الملهى.',
      es: 'Single del verano 2026: estribillo original «baba / papa / daddy», subida progresiva hasta el club.',
    },
  },
  { id: 'jimmys-fat-duck', title: "Jimmy's Fat Duck (Disco Edit)", year: 2026, date: '2026-07-01', type: 'edit', spotify: 'https://open.spotify.com/album/1KZWhl2pFfCvTveElhQwRj', apple: 'https://music.apple.com/fr/album/jimmys-fat-duck-disco-edit-single/6786443143' },
  { id: 'un-peu-dailleurs', title: "Un peu d'ailleurs", year: 2026, type: 'single', langs: ['fr'], spotify: 'https://open.spotify.com/album/3J8ENRSBCrbAsZmDlKHvpG', apple: 'https://music.apple.com/fr/album/un-peu-dailleurs-single/6782426091' },
  { id: 'vingt-deux', title: 'VINGT-DEUX', year: 2026, date: '2026-06-12', type: 'single', spotify: 'https://open.spotify.com/album/7hw8xcwEG4R6ZMRYfQjmhk', cover: '/img/covers/vingt-deux.webp', langs: ['fr'], apple: 'https://music.apple.com/fr/album/vingt-deux-single/6769427831' },
  { id: 'look-at-me-now', title: 'Look At Me Now (Klara-V Live Session) [Radio Edit]', year: 2026, type: 'live', with: ['Klara-V'], cover: '/img/covers/look-at-me-now.webp', langs: ['en'], spotify: 'https://open.spotify.com/album/2AYwnGOzsXHYgEvq4AHME0', apple: 'https://music.apple.com/fr/album/look-at-me-now-klara-v-live-session-radio-edit-single/6780859417' },
  { id: 'rendez-vous-poesie', title: 'Rendez-vous avec la poésie', year: 2026, type: 'single', langs: ['fr'], spotify: 'https://open.spotify.com/album/4WJfRLtHc1tMuocqZaB32t' },
  {
    id: 'deuxieme-m', title: 'DEUXIÈME M « Signal On »', year: 2026, type: 'single', cover: '/img/covers/signal-on.webp', langs: ['fr'],
    note: {
      fr: 'Deuxième volet de la trilogie « M » — electro nightcore, code 13-13-1, concept « happy-sad » : beat euphorique, paroles mélancoliques.',
      en: 'Second chapter of the "M" trilogy — electro nightcore, code 13-13-1, "happy-sad" concept: euphoric beat, melancholic lyrics.',
      ar: 'الجزء الثاني من ثلاثية «M» — إلكترو نايتكور، شفرة 13-13-1، مفهوم «happy-sad»: إيقاع مبتهج وكلمات حزينة.',
      es: 'Segundo capítulo de la trilogía «M» — electro nightcore, código 13-13-1, concepto «happy-sad»: beat eufórico, letra melancólica.',
    },
  },
  { id: 'below-zero', title: 'تحت الصفر (Below Zero)', year: 2026, type: 'single', langs: ['ar'] },
  { id: 'perche-ti-amo', title: 'Sarra × MMARC-TheONE – Perché Ti Amo × Badi Eish (Global Hit Remix)', year: 2026, type: 'mashup', with: ['Sarra'], langs: ['it', 'ar'] },
  { id: 'all-eyez-on-me', title: 'All Eyez on Me (MMARC)', year: 2026, date: '2026-04-07', type: 'edit', cover: '/img/covers/all-eyez-on-me.webp', spotify: 'https://open.spotify.com/album/1P37kz4up0nhRp6IUc3BKM' },
  { id: 'gangstas-paradise', title: "Gangsta's Paradise (Clint Eastwood Edit) [Future Collapse]", year: 2026, type: 'edit' },
  { id: 'lady-hear-me-tonight', title: 'Lady (Hear Me Tonight) [Midnight French Touch Edit]', year: 2026, type: 'edit' },
  {
    id: 'sidi-mansour-papa-ou-tes', title: "Sidi Mansour × Papa Où T'es (Afro House Remix)", year: 2026, date: '2026-04-01', type: 'remix', spotify: 'https://open.spotify.com/album/4OJzuBNY6Q9IXgNo9p9YeN',
    cover: '/img/covers/sidi-mansour-papa-ou-tes.webp', stat: '96K+ YouTube', featured: true, langs: ['ar', 'fr'],
    note: {
      fr: 'Le remix Afro House qui a dépassé les 96 000 vues sur YouTube et lancé la série « Sidi Mansour ».',
      en: 'The Afro House remix that passed 96,000 YouTube views and launched the "Sidi Mansour" series.',
      ar: 'الريمكس الأفرو هاوس الذي تجاوز 96 ألف مشاهدة على يوتيوب وأطلق سلسلة «سيدي منصور».',
      es: 'El remix Afro House que superó las 96 000 reproducciones en YouTube y lanzó la serie «Sidi Mansour».',
    },
  },
  { id: 'how-you-like-that', title: 'How You Like That — Brazilian Baião × Tunisian Darbuka', year: 2026, type: 'remix', with: ['Klara-V'], cover: '/img/covers/how-you-like-that.webp' },
  { id: 'orbit-mode', title: 'ORBIT Mode', year: 2026, type: 'single', cover: '/img/covers/orbit-mode.webp' },
  { id: 'drift-mode', title: 'Drift Mode', year: 2026, type: 'single', cover: '/img/covers/drift-mode.webp' },
  { id: 'mortal-kombat-bla-bla-bla', title: 'Mortal Kombat 1999 × Bla Bla Bla (Gigi D\u2019Agostino) — 2026 Mashup', year: 2026, date: '2026-03-11', type: 'mashup', cover: '/img/covers/mortal-kombat-bla-bla-bla.webp', spotify: 'https://open.spotify.com/album/1QmrO0OEeHsEr65w8cEQNa' },
  { id: 'akrout-bouras', title: 'Akrout Bouras – عكروت بوراس', year: 2026, date: '2026-03-30', type: 'single', with: ['Akrout Bouras'], langs: ['ar'], spotify: 'https://open.spotify.com/album/0vxqcYSRVNBHNr2bt9Qv5n' },

  { id: 'no-pass-on-backs', title: 'No Pass On Backs', year: 2026, date: '2026-01-31', type: 'single', with: ['Akrout Bouras'], cover: '/img/covers/no-pass-on-backs.webp', spotify: 'https://open.spotify.com/album/1Y5mPkvyCB8StqbU2F2ecK' },
  { id: 'interstellar-hotbox', title: 'Interstellar Hotbox Indica (90s West Co Chill Trip)', year: 2026, date: '2026-01-23', type: 'single', cover: '/img/covers/interstellar-hotbox.webp', spotify: 'https://open.spotify.com/album/1nKZNGjZfpYrd2tBP2ANQq' },

  // 2025
  { id: 'carnaval-hallucine', title: 'CARNAVAL HALLUCINÉ (Fragments 2025)', year: 2025, date: '2025-10-17', type: 'album', spotify: 'https://open.spotify.com/album/4uHJxKLgJUES8SxEZJbXno', cover: '/img/covers/carnaval-hallucine.webp', featured: true,
    apple: 'https://music.apple.com/fr/album/carnaval-hallucine/1847705740',
    note: {
      fr: 'Deuxième album, 18 titres. Danser · Survivre · Penser.',
      en: 'Second album. Dance · Survive · Think.',
      ar: 'الألبوم الثاني. ارقص · انجُ · فكّر.',
      es: 'Segundo álbum. Bailar · Sobrevivir · Pensar.',
    } },
  { id: 'labubu-lafufu', title: 'LABUBU LAFUFU SONG OH MY GOT (Funny Meme Music)', year: 2025, date: '2025-10-02', type: 'single', apple: 'https://music.apple.com/fr/album/labubu-lafufu-song-oh-my-got-funny-meme-music-single/1844050596' },
  { id: 'carte-vitale', title: 'Carte Vitale (Téma la Sécu)', year: 2025, type: 'single', langs: ['fr'] },
  { id: 'mallasine', title: 'Akrout Bouras — Mallasine', year: 2025, type: 'single', with: ['Akrout Bouras'], langs: ['ar'] },
  { id: 'lean-back', title: 'Akrout Bouras – Lean Back', year: 2025, type: 'single', with: ['Akrout Bouras'], cover: '/img/covers/akrout-bouras-lean-back.webp' },
  { id: 'xqueens', title: 'XQueens (I Wanna Snap & Clap)', year: 2025, type: 'single', langs: ['en'] },
  { id: 'mode-avion', title: 'Mode Avion – Tout va bien, continuez de scroller', year: 2025, type: 'single', with: ['Klara-V'], cover: '/img/covers/mode-avion.webp', stat: '240K+ YouTube', featured: true, langs: ['fr'],
    youtube: 'https://youtu.be/lkQSwhEu29Y',
    note: {
      fr: 'Le premier gros succès du duo MMARC × Klara-V : plus de 240 000 vues sur YouTube.',
      en: 'The MMARC × Klara-V duo\u2019s first major hit: over 240,000 YouTube views.',
      ar: 'أول نجاح كبير للثنائي MMARC × Klara-V: أكثر من 240 ألف مشاهدة على يوتيوب.',
      es: 'El primer gran éxito del dúo MMARC × Klara-V: más de 240 000 reproducciones en YouTube.',
    } },
  { id: 'let-it-run', title: 'LET IT RUN', year: 2025, type: 'single', langs: ['en'] },
  { id: 'dbout-monde', title: "D'bout Monde", year: 2025, type: 'single', with: ['Klara-V'], langs: ['fr'] },
  { id: 'go-higher', title: 'Go Higher', year: 2025, type: 'single', with: ['Klara-V', 'Shan Pol'], cover: '/img/covers/go-higher.webp' },
  { id: 'schlacka', title: 'Schlacka! (نلاكا)', year: 2025, type: 'single', cover: '/img/covers/schlacka.webp', langs: ['ar', 'fr'] },
  { id: 'apatche', title: 'Apatché (Rentrée floue)', year: 2025, type: 'single', with: ['Lea'], cover: '/img/covers/apatche.webp', langs: ['fr'] },
  { id: 'treize-tours-de-cle', title: 'Treize Tours de Clé', year: 2025, type: 'single', cover: '/img/covers/treize-tours-de-cle.webp', langs: ['fr'] },
  { id: 'la-boite', title: 'La Boîte', year: 2025, type: 'single', cover: '/img/covers/la-boite.webp', langs: ['fr'] },
  { id: 'no-more-silence', title: 'No More Silence', year: 2025, type: 'single', youtube: 'https://youtu.be/q_UILdZ40M4', langs: ['en'] },
  { id: 'fragments-depoques', title: "Fragments d'Époques", year: 2025, type: 'single', langs: ['fr'] },

  // 2024
  { id: 'symphonie-ia', title: 'Symphonie IA : La Révolution Mélodique du Futur', year: 2024, date: '2024-09-19', type: 'album', featured: true, langs: ['fr'], spotify: 'https://open.spotify.com/album/2oSbmRCwhZglaY4dG7cKVb',
    apple: 'https://music.apple.com/fr/album/symphonie-ia-la-r%C3%A9volution-m%C3%A9lodique-du-futur/1769827950',
    youtube: 'https://www.youtube.com/watch?v=7oJyc-PdODA',
    note: {
      fr: 'Premier album, 13 titres, publié le 19 septembre 2024 : le manifeste fondateur du projet, où l\u2019IA est assumée comme instrument.',
      en: 'Debut album, 13 tracks, released 19 September 2024: the project\u2019s founding manifesto, where AI is openly used as an instrument.',
      ar: 'الألبوم الأول (2024): البيان التأسيسي للمشروع، حيث يُستخدم الذكاء الاصطناعي علنًا كأداة.',
      es: 'Primer álbum, publicado en 2024: el manifiesto fundacional del proyecto, con la IA asumida como instrumento.',
    } },
  { id: 'rap-rat-des-champs', title: 'Rap Rat des Champs – JO PARIS 2024', year: 2024, type: 'single', youtube: 'https://www.youtube.com/watch?v=4rUSyJ-fx4c', langs: ['fr'] },
  { id: 'habibi-come-to-rafah', title: 'Habibi Come to Rafah (This Is Not Dubai)', year: 2024, type: 'single', youtube: 'https://youtu.be/9isIkrsHYrk', langs: ['ar', 'en'] },
  { id: 'raccroche-pas', title: 'Raccroche Pas (Nostalgie 2000s)', year: 2024, type: 'single', with: ['Klara-V'], cover: '/img/covers/raccroche-pas.webp', youtube: 'https://www.youtube.com/watch?v=nAS9QsfrA94', langs: ['fr'] },
];

export const releasesByYear = () => {
  const map = new Map<number, Release[]>();
  for (const r of releases) {
    if (!map.has(r.year)) map.set(r.year, []);
    map.get(r.year)!.push(r);
  }
  return [...map.entries()].sort((a, b) => b[0] - a[0]);
};

export const featured = releases.filter((r) => r.featured);
export const latest = releases[0];
