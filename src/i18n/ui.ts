import type { Lang } from '../data/site';

// Slugs sont identiques dans les 4 langues (URLs stables, hreflang simple).
export const PAGES = ['', 'bio', 'discographie', 'videos', 'collaborations', 'presse', 'chronologie'] as const;
export type PageKey = (typeof PAGES)[number];

type Dict = {
  nav: Record<PageKey, string>;
  meta: Record<PageKey, { title: string; description: string }>;
  hero: { kicker: string; tagline: string; listen: string; press: string; latest: string; latestLabel: string };
  fiche: { title: string; rows: [string, string][] };
  home: {
    manifesto: { title: string; lines: string[] };
    featuredTitle: string; featuredSub: string;
    themesTitle: string; themes: string[];
    langsTitle: string; langsSub: string;
    watchTitle: string; watchSub: string;
    allReleases: string; allVideos: string;
    aiTitle: string; aiBody: string;
  };
  bio: { title: string; sub: string; short: string; paragraphs: string[]; personaTitle; personaBody: string[]; methodTitle: string; methodBody: string[]; quote: string };
  disco: { title: string; sub: string; year: string; types: Record<string, string>; with: string; listenOn: string; sung: string; note: string; count: (n: number) => string };
  videos: { title: string; sub: string; channel: string; subs: string; watch: string; playlistNote: string };
  collabs: { title: string; sub: string; people: { name: string; role: string; body: string }[]; bookingTitle: string; bookingBody: string; offers: { title: string; body: string }[]; cta: string };
  press: { title: string; sub: string; bioShort: string; bioShortText: string; bioMedium: string; bioMediumText: string; bioLong: string; factsTitle: string; facts: [string, string][]; assetsTitle: string; assets: { label: string; file: string; kind: string }[]; logosTitle: string; contactTitle: string; contactBody: string; download: string; copy: string; copied: string };
  chrono: { title: string; sub: string; events: { date: string; title: string; body: string }[]; sourcesTitle: string; sourcesBody: string };
  footer: { contact: string; rights: string; madeWith: string; store: string; storeBody: string; langLabel: string };
  common: { readMore: string; external: string; email: string; back: string; official: string };
};

export const ui: Record<Lang, Dict> = {
  /* ───────────────────────────── FRANÇAIS ───────────────────────────── */
  fr: {
    nav: { '': 'Accueil', bio: 'Biographie', discographie: 'Discographie', videos: 'Vidéos', collaborations: 'Collaborations', presse: 'Presse & médias', chronologie: 'Chronologie' },
    meta: {
      '': { title: 'MMARC-TheONE (MM:ONE) — Artiste électronique, Afro House & fusion culturelle | Site officiel', description: 'Site officiel de MMARC-TheONE (MM:ONE), producteur et artiste électronique basé à Paris : Afro House, remixes, mashups, trilogie « M ». Discographie, biographie, vidéos, dossier de presse.' },
      bio: { title: 'Biographie — MMARC-TheONE (MM:ONE)', description: 'Qui est MMARC-TheONE ? Le persona du clown, la fusion électronique / street art, la méthode hybride IA + voix humaines, l\u2019ancrage parisien.' },
      discographie: { title: 'Discographie complète — MMARC-TheONE', description: 'Tous les albums, singles, remixes et mashups de MMARC-TheONE depuis 2024 : Symphonie IA, Carnaval Halluciné, Sidi Mansour, Mode Avion, trilogie « M », Sidi Ciel…' },
      videos: { title: 'Vidéos & chaîne YouTube — MMARC-TheONE', description: 'Clips, sessions live et remixes de MMARC-TheONE sur YouTube : Mode Avion (240K vues), Sidi Mansour × Papa Où T\u2019es (96K vues), Klara-V Live Session.' },
      collaborations: { title: 'Collaborations, booking & sync — MMARC-TheONE', description: 'Klara-V, Akrout Bouras, Sarra, Shan Pol, Lea : les collaborations de MMARC-TheONE. Remixes, featurings, licences sync et booking.' },
      presse: { title: 'Dossier de presse (EPK) — MMARC-TheONE', description: 'Kit presse officiel de MMARC-TheONE : biographies courte, moyenne et longue, faits & chiffres vérifiables, photos HD, logos, contact presse.' },
      chronologie: { title: 'Chronologie du projet — MMARC-TheONE', description: 'Repères datés du projet MMARC-TheONE de 2024 à aujourd\u2019hui : albums, singles marquants, collaborations, jalons de la chaîne YouTube.' },
    },
    hero: { kicker: 'Site officiel · Paris', tagline: 'Électronique underground × street art × fusion culturelle. Un clown qui dit des vérités en musique, en cinq langues.', listen: 'Écouter', press: 'Dossier de presse', latest: 'Dernière sortie', latestLabel: 'Sortie du' },
    fiche: {
      title: 'Fiche d\u2019identité',
      rows: [
        ['Nom de scène', 'MMARC-TheONE'],
        ['Alias', 'MM:ONE · MMARC'],
        ['Actif depuis', '2024'],
        ['Base', 'Paris, France'],
        ['Genres', 'Afro House · Afro Tech · électro nightcore · French touch · rap'],
        ['Langues', 'Français · anglais · arabe · espagnol · ukrainien'],
        ['Albums', 'Symphonie IA (2024) · Carnaval Halluciné (2025)'],
        ['Distribution', 'DistroKid → Spotify, Apple Music, Deezer, YouTube'],
      ],
    },
    home: {
      manifesto: { title: 'Manifeste', lines: ['On brise les frontières.', 'On fusionne les mondes.', 'On transmet des messages par l\u2019art.'] },
      featuredTitle: 'Sorties marquantes', featuredSub: 'Les titres qui racontent le projet.',
      themesTitle: 'Thèmes récurrents', themes: ['Fracture sociale', 'Urgence climatique', 'Fusion humain / machine', 'Humour noir', 'Ponts culturels', 'Résistance underground'],
      langsTitle: 'Cinq langues, un seul projet', langsSub: 'Français pour la poésie électronique, anglais pour la portée internationale, espagnol pour l\u2019underground latin, arabe pour le dialogue des cultures, ukrainien pour la solidarité.',
      watchTitle: 'À voir', watchSub: 'Les vidéos qui ont fait décoller la chaîne.',
      allReleases: 'Voir toute la discographie', allVideos: 'Toutes les vidéos',
      aiTitle: 'Une méthode assumée : IA + humain', aiBody: 'Le projet revendique l\u2019intelligence artificielle comme instrument, au même titre qu\u2019une boîte à rythmes ou un sampler : génération et séparation de stems, prompts de style, puis reprise en main humaine — voix réelles, percussions, édition, mixage. Ce qui est généré est dit ; ce qui est joué est joué.',
    },
    bio: {
      title: 'Biographie', sub: 'Derrière le maquillage, un projet.',
      short: 'MMARC-TheONE (MM:ONE) est un artiste et producteur électronique basé à Paris, actif depuis 2024, connu pour ses remixes Afro House de standards populaires et un persona de clown à la chevelure rouge.',
      paragraphs: [
        'MMARC-TheONE, alias MM:ONE, est un artiste multidisciplinaire qui circule entre la musique, l\u2019image et l\u2019expérimentation numérique. Le projet naît en 2024 avec l\u2019album « Symphonie IA : La Révolution Mélodique du Futur », un premier geste qui pose la ligne : utiliser tous les outils disponibles — caméras argentiques, studios, intelligence artificielle, esthétique du street art — pour dire quelque chose du monde.',
        'Depuis, la discographie s\u2019est étoffée à un rythme soutenu : plus de quarante titres, un second album, « Carnaval Halluciné (Fragments 2025) », et une série de remixes Afro House qui revisitent des standards populaires de plusieurs cultures, à commencer par « Sidi Mansour ». Le remix « Sidi Mansour × Papa Où T\u2019es » a dépassé les 96 000 vues sur YouTube ; « Mode Avion », en duo avec Klara-V, a franchi les 240 000.',
        'Le projet refuse toute case : rap, Afro House, collaborations avec des voix comme Akrout Bouras ou Sarra, et un jeu permanent avec les frontières linguistiques : les titres passent du français à l\u2019anglais, à l\u2019arabe, à l\u2019espagnol et à l\u2019ukrainien, souvent dans le même morceau.',
        'En 2026, la trilogie « M » (Premier M, Deuxième M « Signal On », Troisième M) marque un tournant plus intime : electro nightcore au concept « happy-sad », codes numériques cachés (13-13-1) et souvenirs d\u2019enfance. La même année, « Sidi Ciel (Club House) », mashup de « CIEL » (GIMS) et de « Sidi Mansour » porté par une voix humaine et des percussions jouées, condense la méthode : machine et main.',
      ],
      personaTitle: 'Le persona', personaBody: [
        'Le clown à l\u2019afro rouge n\u2019est pas un masque pour se cacher : c\u2019est un symbole de liberté. Il rappelle les bouffons, les tricksters et toutes les figures qui osent dire des vérités par le rire, le chaos et l\u2019illusion. Il amuse, dérange, et cache une mélancolie de fond — d\u2019où le concept « happy-sad » qui traverse la trilogie « M ».',
        'Ce visage se décline en logos (Radio Ready, Boost, Brut), en pochettes, en clips et en tirages d\u2019art. L\u2019image compte autant que le son.',
      ],
      methodTitle: 'La méthode', methodBody: [
        'MMARC-TheONE assume l\u2019IA comme instrument. Des outils de génération et de séparation servent à créer, isoler et éditer des stems (batterie, basse, piano, synthés) ; l\u2019écriture des prompts de style est un travail à part entière. Puis l\u2019humain reprend la main : voix réelles, percussions, arrangements, mixage.',
        'La règle est simple et publique : ce qui est généré est dit ; ce qui est joué est joué. Cette transparence est une position artistique autant qu\u2019éthique.',
      ],
      quote: '« Que ce soit par des beats bruts, des collages visuels ou des collaborations expérimentales, la mission est claire : démasquer des vérités par le son et l\u2019image, et rappeler que l\u2019art peut être à la fois un miroir et une arme. »',
    },
    disco: {
      title: 'Discographie', sub: 'Albums, singles, remixes et mashups depuis 2024. Les dates précises sont indiquées quand elles sont établies.',
      year: 'Année', types: { album: 'Album', single: 'Single', remix: 'Remix', mashup: 'Mashup', edit: 'Edit', live: 'Live session' },
      with: 'avec', listenOn: 'Écouter sur', sung: 'Chanté en', note: 'Note', count: (n) => `${n} sorties référencées`,
    },
    videos: { title: 'Vidéos', sub: 'Clips, sessions live et remixes sur la chaîne officielle.', channel: 'Chaîne YouTube officielle', subs: 'abonnés', watch: 'Regarder', playlistNote: 'La chaîne publie régulièrement des vidéos en français, arabe, anglais et espagnol.' },
    collabs: {
      title: 'Collaborations', sub: 'Des voix, des scènes, des langues.',
      people: [
        { name: 'Klara-V', role: 'Chanteuse · duo récurrent', body: 'La complice de « Mode Avion » (240K vues), « Raccroche Pas », « Go Higher », « D\u2019bout Monde », « How You Like That » et des Live Sessions. Le binôme MMARC × Klara-V est devenu une signature du projet.' },
        { name: 'Akrout Bouras', role: 'Rappeur', body: '« Lean Back », « No Pass On Backs », « Mallasine », « عكروت بوراس » : une connexion directe avec la scène rap.' },
        { name: 'Sarra', role: 'Chanteuse', body: '« Perché Ti Amo × Badi Eish (Global Hit Remix) » — un pont italo-arabe.' },
        { name: 'Shan Pol', role: 'Artiste', body: 'Featuring sur « Go Higher » aux côtés de Klara-V.' },
        { name: 'Lea', role: 'Chanteuse', body: '« Apatché (Rentrée floue) », produit par MMARC-TheONE.' },
      ],
      bookingTitle: 'Travailler ensemble', bookingBody: 'Le projet est ouvert aux remixes, aux featurings, aux commandes de production, aux licences sync (film, publicité, jeu vidéo, contenu) et aux DJ sets. Écrivez directement : la réponse vient de l\u2019artiste.',
      offers: [
        { title: 'Remix & production', body: 'Afro House, Afro Tech, électro, French touch, rap. Réécriture d\u2019un standard ou création originale.' },
        { title: 'Sync & licences', body: 'Catalogue de plus de quarante titres, stems disponibles, éditions courtes sur demande.' },
        { title: 'Featurings', body: 'Voix en français, arabe, anglais, espagnol. Ouverts à toutes les scènes.' },
        { title: 'DJ sets & live', body: 'Sets Afro House / club, avec ou sans persona.' },
      ],
      cta: 'Écrire à MMARC-TheONE',
    },
    press: {
      title: 'Presse & médias', sub: 'Dossier de presse officiel. Tout ce qui est ici peut être cité et réutilisé avec la mention « © MMARC-TheONE ».',
      bioShort: 'Bio courte (≈ 40 mots)', bioShortText: 'MMARC-TheONE (MM:ONE) est un artiste et producteur électronique basé à Paris. Actif depuis 2024, il mêle Afro House, électro et rap dans cinq langues, sous un persona de clown à l\u2019afro rouge, en assumant l\u2019IA comme instrument.',
      bioMedium: 'Bio moyenne (≈ 100 mots)', bioMediumText: 'MMARC-TheONE, alias MM:ONE, est un artiste multidisciplinaire basé à Paris. Lancé en 2024 avec l\u2019album « Symphonie IA », le projet compte deux albums et plus de quarante titres, dont les remixes Afro House « Sidi Mansour × Papa Où T\u2019es » (96K vues YouTube) et « Mode Avion » avec Klara-V (240K vues). Il chante en français, anglais, arabe, espagnol et ukrainien, collabore avec d\u2019autres voix (Akrout Bouras, Sarra) et revendique une méthode hybride où l\u2019IA génère et l\u2019humain reprend la main. Son persona de clown à la chevelure rouge — drôle, inquiétant, mélancolique — est le fil rouge de son univers visuel.',
      bioLong: 'Bio longue',
      factsTitle: 'Faits & chiffres',
      facts: [
        ['Nom de scène', 'MMARC-TheONE (alias MM:ONE, MMARC)'],
        ['Base', 'Paris, France'],
        ['Début du projet', '19 septembre 2024 (album « Symphonie IA : La Révolution Mélodique du Futur »)'],
        ['Albums', '2 — Symphonie IA (19/09/2024), Carnaval Halluciné (17/10/2025)'],
        ['Titres publiés', '40+ (singles, remixes, mashups, edits) au 19 août 2026'],
        ['Vidéo la plus vue', '« Mode Avion » feat. Klara-V — 240 000+ vues YouTube'],
        ['Remix phare', '« Sidi Mansour × Papa Où T\u2019es (Afro House Remix) » — 96 000+ vues YouTube'],
        ['Chaîne YouTube', '≈ 136 000 abonnés'],
        ['Dernière sortie', '« Sidi Ciel (Club House) » — 14 août 2026'],
        ['Langues chantées', 'Français, anglais, arabe, espagnol, ukrainien'],
        ['Distribution', 'DistroKid (Spotify, Apple Music, Deezer, YouTube Music)'],
        ['Contact presse', 'mmarc@greensauce.io'],
      ],
      assetsTitle: 'Photos HD',
      assets: [
        { label: 'Portrait — écharpe (2025)', file: '/img/photos/portrait-scarf.webp', kind: 'Portrait' },
        { label: 'Portrait — studio (2025)', file: '/img/photos/portrait-studio.webp', kind: 'Portrait' },
        { label: 'DJ set — plage (2026)', file: '/img/photos/dj-beach.webp', kind: 'Live' },
        { label: 'DJ set — festival (2026)', file: '/img/photos/dj-festival.webp', kind: 'Live' },
        { label: 'Portrait — costume rouge (2025)', file: '/img/photos/portrait-red-suit.webp', kind: 'Portrait' },
        { label: 'Portrait — 2024', file: '/img/photos/portrait-clown-2024.webp', kind: 'Portrait' },
      ],
      logosTitle: 'Logos & marques',
      contactTitle: 'Contact presse & booking', contactBody: 'Interviews, chroniques, demandes de visuels ou d\u2019extraits : une adresse, une réponse directe.',
      download: 'Télécharger', copy: 'Copier le texte', copied: 'Copié',
    },
    chrono: {
      title: 'Chronologie', sub: 'Repères datés, vérifiables sur les plateformes de streaming et la chaîne YouTube.',
      events: [
        { date: '19 sept. 2024', title: 'Naissance du projet', body: 'Sortie de « Symphonie IA : La Révolution Mélodique du Futur », premier album, et des singles « Rap Rat des Champs – JO Paris 2024 », « Habibi Come to Rafah » et « Raccroche Pas » (premier titre avec Klara-V).' },
        { date: '17 oct. 2025', title: 'Mode Avion & Carnaval Halluciné', body: '« Mode Avion » avec Klara-V dépasse les 240 000 vues. Sortie du second album « Carnaval Halluciné (Fragments 2025) », des singles avec Akrout Bouras (« Lean Back », « No Pass On Backs », « Mallasine ») et de « Go Higher » (Klara-V × Shan Pol).' },
        { date: '2 octobre 2025', title: 'LABUBU LAFUFU SONG', body: 'Single « meme music » distribué sur toutes les plateformes.' },
        { date: 'Avril 2026', title: 'Sidi Mansour × Papa Où T\u2019es', body: 'Le remix Afro House dépasse les 96 000 vues et ouvre la série « Sidi Mansour ».' },
        { date: '2026', title: 'Trilogie « M »', body: 'Premier M, Deuxième M « Signal On », Troisième M : electro nightcore, concept « happy-sad », code 13-13-1, souvenirs d\u2019enfance.' },
        { date: '14 août 2026', title: 'Sidi Ciel (Club House)', body: 'Mashup « CIEL » (GIMS) × « Sidi Mansour » à 102 BPM, lead vocal humain, percussions jouées. Dernière sortie en date.' },
      ],
      sourcesTitle: 'Sources', sourcesBody: 'Les dates de sortie et les titres sont ceux publiés sur Apple Music, Spotify et Deezer (artiste « MMARC », id Apple 1769405592). Les chiffres d\u2019audience sont ceux affichés publiquement sur YouTube à la date indiquée dans le dossier de presse.',
    },
    footer: { contact: 'Contact', rights: 'Tous droits réservés.', madeWith: 'Site officiel — mmarc-theone.com', store: 'Cerise-Store', storeBody: 'Tirages d\u2019art encadrés en édition limitée, univers pop / street art.', langLabel: 'Langue' },
    common: { readMore: 'Lire la suite', external: 'Ouvre un site externe', email: 'E-mail', back: 'Retour', official: 'Officiel' },
  },

  /* ───────────────────────────── ENGLISH ───────────────────────────── */
  en: {
    nav: { '': 'Home', bio: 'Biography', discographie: 'Discography', videos: 'Videos', collaborations: 'Collaborations', presse: 'Press & media', chronologie: 'Timeline' },
    meta: {
      '': { title: 'MMARC-TheONE (MM:ONE) — Electronic artist, Afro House & cultural fusion | Official site', description: 'Official website of MMARC-TheONE (MM:ONE), Paris-based electronic producer and artist: Afro House, remixes, mashups, the "M" trilogy. Discography, biography, videos, press kit.' },
      bio: { title: 'Biography — MMARC-TheONE (MM:ONE)', description: 'Who is MMARC-TheONE? The clown persona, electronic / street-art fusion, the hybrid AI + human-voice method, a Paris base.' },
      discographie: { title: 'Full discography — MMARC-TheONE', description: 'Every album, single, remix and mashup by MMARC-TheONE since 2024: Symphonie IA, Carnaval Halluciné, Sidi Mansour, Mode Avion, the "M" trilogy, Sidi Ciel…' },
      videos: { title: 'Videos & YouTube channel — MMARC-TheONE', description: 'Music videos, live sessions and remixes by MMARC-TheONE on YouTube: Mode Avion (240K views), Sidi Mansour × Papa Où T\u2019es (96K views), Klara-V Live Session.' },
      collaborations: { title: 'Collaborations, booking & sync — MMARC-TheONE', description: 'Klara-V, Akrout Bouras, Sarra, Shan Pol, Lea: MMARC-TheONE\u2019s collaborators. Remixes, features, sync licensing and booking.' },
      presse: { title: 'Press kit (EPK) — MMARC-TheONE', description: 'Official press kit for MMARC-TheONE: short, medium and long bios, verifiable facts & figures, HD photos, logos, press contact.' },
      chronologie: { title: 'Project timeline — MMARC-TheONE', description: 'Dated milestones of the MMARC-TheONE project from 2024 to today: albums, key singles, collaborations, YouTube channel milestones.' },
    },
    hero: { kicker: 'Official site · Paris', tagline: 'Underground electronic × street art × cultural fusion. A clown telling truths through music, in five languages.', listen: 'Listen', press: 'Press kit', latest: 'Latest release', latestLabel: 'Released' },
    fiche: {
      title: 'Identity card',
      rows: [
        ['Stage name', 'MMARC-TheONE'],
        ['Aliases', 'MM:ONE · MMARC'],
        ['Active since', '2024'],
        ['Based in', 'Paris, France'],
        ['Genres', 'Afro House · Afro Tech · electro nightcore · French touch · rap'],
        ['Languages', 'French · English · Arabic · Spanish · Ukrainian'],
        ['Albums', 'Symphonie IA (2024) · Carnaval Halluciné (2025)'],
        ['Distribution', 'DistroKid → Spotify, Apple Music, Deezer, YouTube'],
      ],
    },
    home: {
      manifesto: { title: 'Manifesto', lines: ['We break borders.', 'We fuse worlds.', 'We transmit messages through art.'] },
      featuredTitle: 'Key releases', featuredSub: 'The tracks that tell the story.',
      themesTitle: 'Recurring themes', themes: ['Social fracture', 'Climate urgency', 'Human / machine fusion', 'Dark humour', 'Cultural bridges', 'Underground resistance'],
      langsTitle: 'Five languages, one project', langsSub: 'French for electronic poetry, English for international reach, Spanish for the Latin underground, Arabic for cross-cultural dialogue, Ukrainian for solidarity.',
      watchTitle: 'Watch', watchSub: 'The videos that made the channel take off.',
      allReleases: 'See the full discography', allVideos: 'All videos',
      aiTitle: 'An open method: AI + human', aiBody: 'The project treats artificial intelligence as an instrument, like a drum machine or a sampler: stem generation and separation, style prompts, then human hands take over — real voices, percussion, editing, mixing. What is generated is stated; what is played is played.',
    },
    bio: {
      title: 'Biography', sub: 'Behind the make-up, a project.',
      short: 'MMARC-TheONE (MM:ONE) is a electronic artist and producer based in Paris, active since 2024, known for Afro House remixes of popular standards and a red-haired clown persona.',
      paragraphs: [
        'MMARC-TheONE, aka MM:ONE, is a multidisciplinary artist moving between music, image and digital experimentation. The project began in 2024 with the album "Symphonie IA: La Révolution Mélodique du Futur", a first statement that set the line: use every available tool — film cameras, studios, artificial intelligence, street-art aesthetics — to say something about the world.',
        'Since then the catalogue has grown quickly: over forty tracks, a second album, "Carnaval Halluciné (Fragments 2025)", and a series of Afro House remixes revisiting popular standards from several cultures, starting with "Sidi Mansour". The "Sidi Mansour × Papa Où T\u2019es" remix passed 96,000 YouTube views; "Mode Avion", a duet with Klara-V, passed 240,000.',
        'The project refuses every box: rap, Afro House, collaborations with voices such as Akrout Bouras or Sarra, and a constant play with linguistic borders: tracks switch between French, English, Arabic, Spanish and Ukrainian, often within the same song.',
        'In 2026 the "M" trilogy (Premier M, Deuxième M "Signal On", Troisième M) marks a more intimate turn: electro nightcore with a "happy-sad" concept, hidden numeric codes (13-13-1) and childhood memories. The same year, "Sidi Ciel (Club House)", a mashup of "CIEL" (GIMS) and "Sidi Mansour" carried by a human voice and played percussion, condenses the method: machine and hand.',
      ],
      personaTitle: 'The persona', personaBody: [
        'The red-afro clown is not a mask to hide behind: it is a symbol of freedom. It echoes jesters, tricksters and every figure who dares to tell truths through laughter, chaos and illusion. It entertains, unsettles, and hides an underlying melancholy — hence the "happy-sad" concept running through the "M" trilogy.',
        'The face is declined into logos (Radio Ready, Boost, Brut), covers, videos and art prints. The image matters as much as the sound.',
      ],
      methodTitle: 'The method', methodBody: [
        'MMARC-TheONE openly uses AI as an instrument. Generation and separation tools create, isolate and edit stems (drums, bass, piano, synths); writing style prompts is a craft in itself. Then the human takes over: real voices, percussion, arrangement, mixing.',
        'The rule is simple and public: what is generated is stated; what is played is played. That transparency is as much an artistic stance as an ethical one.',
      ],
      quote: '"Whether through raw beats, visual collages or experimental collaborations, the mission is clear: to unmask truths through sound and visuals, and to remind us that art can be both a mirror and a weapon."',
    },
    disco: {
      title: 'Discography', sub: 'Albums, singles, remixes and mashups since 2024. Exact dates are shown when established.',
      year: 'Year', types: { album: 'Album', single: 'Single', remix: 'Remix', mashup: 'Mashup', edit: 'Edit', live: 'Live session' },
      with: 'with', listenOn: 'Listen on', sung: 'Sung in', note: 'Note', count: (n) => `${n} releases listed`,
    },
    videos: { title: 'Videos', sub: 'Music videos, live sessions and remixes on the official channel.', channel: 'Official YouTube channel', subs: 'subscribers', watch: 'Watch', playlistNote: 'The channel regularly publishes videos in French, Arabic, English and Spanish.' },
    collabs: {
      title: 'Collaborations', sub: 'Voices, scenes, languages.',
      people: [
        { name: 'Klara-V', role: 'Singer · recurring duo', body: 'Partner on "Mode Avion" (240K views), "Raccroche Pas", "Go Higher", "D\u2019bout Monde", "How You Like That" and the Live Sessions. MMARC × Klara-V has become a signature of the project.' },
        { name: 'Akrout Bouras', role: 'Rapper', body: '"Lean Back", "No Pass On Backs", "Mallasine", "عكروت بوراس": a direct line to the rap scene.' },
        { name: 'Sarra', role: 'Singer', body: '"Perché Ti Amo × Badi Eish (Global Hit Remix)" — an Italian-Arabic bridge.' },
        { name: 'Shan Pol', role: 'Artist', body: 'Featured on "Go Higher" alongside Klara-V.' },
        { name: 'Lea', role: 'Singer', body: '"Apatché (Rentrée floue)", produced by MMARC-TheONE.' },
      ],
      bookingTitle: 'Work together', bookingBody: 'The project is open to remixes, features, production commissions, sync licensing (film, advertising, games, content) and DJ sets. Write directly: the answer comes from the artist.',
      offers: [
        { title: 'Remix & production', body: 'Afro House, Afro Tech, electro, French touch, rap. Reworking a standard or original creation.' },
        { title: 'Sync & licensing', body: 'Catalogue of 40+ tracks, stems available, short edits on request.' },
        { title: 'Features', body: 'Vocals in French, Arabic, English, Spanish. Open to every scene.' },
        { title: 'DJ sets & live', body: 'Afro House / club sets, with or without the persona.' },
      ],
      cta: 'Write to MMARC-TheONE',
    },
    press: {
      title: 'Press & media', sub: 'Official press kit. Everything here may be quoted and reused with the credit "© MMARC-TheONE".',
      bioShort: 'Short bio (≈ 40 words)', bioShortText: 'MMARC-TheONE (MM:ONE) is a electronic artist and producer based in Paris. Active since 2024, he blends Afro House, electro and rap in five languages under a red-afro clown persona, openly using AI as an instrument.',
      bioMedium: 'Medium bio (≈ 100 words)', bioMediumText: 'MMARC-TheONE, aka MM:ONE, is a multidisciplinary artist based in Paris. Launched in 2024 with the album "Symphonie IA", the project counts two albums and over forty tracks, including the Afro House remixes "Sidi Mansour × Papa Où T\u2019es" (96K YouTube views) and "Mode Avion" with Klara-V (240K views). He sings in French, English, Arabic, Spanish and Ukrainian, collaborates with other voices (Akrout Bouras, Sarra) and claims a hybrid method where AI generates and the human takes over. His red-haired clown persona — funny, unsettling, melancholic — is the thread of his visual world.',
      bioLong: 'Long bio',
      factsTitle: 'Facts & figures',
      facts: [
        ['Stage name', 'MMARC-TheONE (aka MM:ONE, MMARC)'],
        ['Base', 'Paris, France'],
        ['Project start', '19 September 2024 (album "Symphonie IA: La Révolution Mélodique du Futur")'],
        ['Albums', '2 — Symphonie IA (19/09/2024), Carnaval Halluciné (17/10/2025)'],
        ['Released tracks', '40+ (singles, remixes, mashups, edits) as of 19 August 2026'],
        ['Most-viewed video', '"Mode Avion" feat. Klara-V — 240,000+ YouTube views'],
        ['Flagship remix', '"Sidi Mansour × Papa Où T\u2019es (Afro House Remix)" — 96,000+ YouTube views'],
        ['YouTube channel', '≈ 136,000 subscribers'],
        ['Latest release', '"Sidi Ciel (Club House)" — 14 August 2026'],
        ['Languages sung', 'French, English, Arabic, Spanish, Ukrainian'],
        ['Distribution', 'DistroKid (Spotify, Apple Music, Deezer, YouTube Music)'],
        ['Press contact', 'mmarc@greensauce.io'],
      ],
      assetsTitle: 'HD photos',
      assets: [
        { label: 'Portrait — scarf (2025)', file: '/img/photos/portrait-scarf.webp', kind: 'Portrait' },
        { label: 'Portrait — studio (2025)', file: '/img/photos/portrait-studio.webp', kind: 'Portrait' },
        { label: 'DJ set — beach (2026)', file: '/img/photos/dj-beach.webp', kind: 'Live' },
        { label: 'DJ set — festival (2026)', file: '/img/photos/dj-festival.webp', kind: 'Live' },
        { label: 'Portrait — red suit (2025)', file: '/img/photos/portrait-red-suit.webp', kind: 'Portrait' },
        { label: 'Portrait — 2024', file: '/img/photos/portrait-clown-2024.webp', kind: 'Portrait' },
      ],
      logosTitle: 'Logos & marks',
      contactTitle: 'Press & booking contact', contactBody: 'Interviews, reviews, requests for visuals or excerpts: one address, a direct answer.',
      download: 'Download', copy: 'Copy text', copied: 'Copied',
    },
    chrono: {
      title: 'Timeline', sub: 'Dated milestones, verifiable on streaming platforms and the YouTube channel.',
      events: [
        { date: '19 Sept 2024', title: 'Birth of the project', body: 'Release of the debut album "Symphonie IA: La Révolution Mélodique du Futur" and the singles "Rap Rat des Champs – JO Paris 2024", "Habibi Come to Rafah" and "Raccroche Pas" (first track with Klara-V).' },
        { date: '17 oct. 2025', title: 'Mode Avion & Carnaval Halluciné', body: '"Mode Avion" with Klara-V passes 240,000 views. Release of the second album "Carnaval Halluciné (Fragments 2025)", singles with Akrout Bouras ("Lean Back", "No Pass On Backs", "Mallasine") and "Go Higher" (Klara-V × Shan Pol).' },
        { date: '2 October 2025', title: 'LABUBU LAFUFU SONG', body: '"Meme music" single distributed on all platforms.' },
        { date: 'April 2026', title: 'Sidi Mansour × Papa Où T\u2019es', body: 'The Afro House remix passes 96,000 views and opens the "Sidi Mansour" series.' },
        { date: '2026', title: 'The "M" trilogy', body: 'Premier M, Deuxième M "Signal On", Troisième M: electro nightcore, "happy-sad" concept, code 13-13-1, childhood memories.' },
        { date: '14 August 2026', title: 'Sidi Ciel (Club House)', body: '"CIEL" (GIMS) × "Sidi Mansour" mashup at 102 BPM, human lead vocal, played percussion. Latest release to date.' },
      ],
      sourcesTitle: 'Sources', sourcesBody: 'Release dates and titles are those published on Apple Music, Spotify and Deezer (artist "MMARC", Apple id 1769405592). Audience figures are those publicly displayed on YouTube on the date stated in the press kit.',
    },
    footer: { contact: 'Contact', rights: 'All rights reserved.', madeWith: 'Official site — mmarc-theone.com', store: 'Cerise-Store', storeBody: 'Limited-edition framed art prints, pop / street-art universe.', langLabel: 'Language' },
    common: { readMore: 'Read more', external: 'Opens an external site', email: 'Email', back: 'Back', official: 'Official' },
  },

  /* ───────────────────────────── العربية ───────────────────────────── */
  ar: {
    nav: { '': 'الرئيسية', bio: 'السيرة', discographie: 'الأعمال', videos: 'الفيديوهات', collaborations: 'التعاونات', presse: 'الصحافة والإعلام', chronologie: 'الخط الزمني' },
    meta: {
      '': { title: 'MMARC-TheONE (MM:ONE) — فنان إلكتروني، أفرو هاوس ومزج ثقافي | الموقع الرسمي', description: 'الموقع الرسمي لـ MMARC-TheONE (MM:ONE)، منتج وفنان إلكتروني مقيم في باريس: أفرو هاوس، ريمكسات، مزج، ثلاثية «M». الأعمال، السيرة، الفيديوهات، الملف الصحفي.' },
      bio: { title: 'السيرة — MMARC-TheONE (MM:ONE)', description: 'من هو MMARC-TheONE؟ شخصية المهرّج، مزج الإلكترونيك بفن الشارع، منهج هجين يجمع الذكاء الاصطناعي بالصوت البشري، مقر في باريس.' },
      discographie: { title: 'الأعمال الكاملة — MMARC-TheONE', description: 'كل الألبومات والأغاني والريمكسات والمزج لـ MMARC-TheONE منذ 2024: Symphonie IA، Carnaval Halluciné، سيدي منصور، Mode Avion، ثلاثية «M»، Sidi Ciel…' },
      videos: { title: 'الفيديوهات وقناة يوتيوب — MMARC-TheONE', description: 'كليبات وجلسات حية وريمكسات MMARC-TheONE على يوتيوب: Mode Avion (240 ألف مشاهدة)، سيدي منصور × Papa Où T\u2019es (96 ألف مشاهدة)، جلسة Klara-V الحية.' },
      collaborations: { title: 'التعاونات والحجز والترخيص — MMARC-TheONE', description: 'Klara-V، عكروت بوراس، سارة، Shan Pol، Lea: تعاونات MMARC-TheONE. ريمكسات، مشاركات، تراخيص، حجز.' },
      presse: { title: 'الملف الصحفي (EPK) — MMARC-TheONE', description: 'الملف الصحفي الرسمي لـ MMARC-TheONE: سيرة قصيرة ومتوسطة وطويلة، حقائق وأرقام قابلة للتحقق، صور عالية الدقة، شعارات، جهة اتصال صحفية.' },
      chronologie: { title: 'الخط الزمني للمشروع — MMARC-TheONE', description: 'محطات مؤرّخة لمشروع MMARC-TheONE من 2024 حتى اليوم: ألبومات، أغانٍ بارزة، تعاونات، محطات قناة يوتيوب.' },
    },
    hero: { kicker: 'الموقع الرسمي · باريس', tagline: 'إلكترونيك أندرغراوند × فن الشارع × مزج ثقافي. مهرّج يقول الحقائق بالموسيقى، بخمس لغات.', listen: 'استمع', press: 'الملف الصحفي', latest: 'أحدث إصدار', latestLabel: 'صدر في' },
    fiche: {
      title: 'بطاقة تعريف',
      rows: [
        ['الاسم الفني', 'MMARC-TheONE'],
        ['الأسماء الأخرى', 'MM:ONE · MMARC'],
        ['نشط منذ', '2024'],
        ['المقر', 'باريس، فرنسا'],
        ['الأنواع', 'أفرو هاوس · أفرو تِك · إلكترو نايتكور · فرنش تاتش · راب'],
        ['اللغات', 'الفرنسية · الإنجليزية · العربية · الإسبانية · الأوكرانية'],
        ['الألبومات', 'Symphonie IA (2024) · Carnaval Halluciné (2025)'],
        ['التوزيع', 'DistroKid → Spotify، Apple Music، Deezer، YouTube'],
      ],
    },
    home: {
      manifesto: { title: 'البيان', lines: ['نكسر الحدود.', 'نمزج العوالم.', 'ننقل الرسائل عبر الفن.'] },
      featuredTitle: 'إصدارات بارزة', featuredSub: 'الأعمال التي تروي المشروع.',
      themesTitle: 'مواضيع متكررة', themes: ['الانقسام الاجتماعي', 'الطوارئ المناخية', 'اندماج الإنسان والآلة', 'الفكاهة السوداء', 'الجسور الثقافية', 'المقاومة الأندرغراوند'],
      langsTitle: 'خمس لغات، مشروع واحد', langsSub: 'الفرنسية للشعر الإلكتروني، الإنجليزية للامتداد العالمي، الإسبانية للأندرغراوند اللاتيني، العربية لحوار الثقافات، الأوكرانية للتضامن.',
      watchTitle: 'شاهد', watchSub: 'الفيديوهات التي أطلقت القناة.',
      allReleases: 'كل الأعمال', allVideos: 'كل الفيديوهات',
      aiTitle: 'منهج معلَن: ذكاء اصطناعي + إنسان', aiBody: 'يتعامل المشروع مع الذكاء الاصطناعي كأداة، تمامًا مثل آلة الإيقاع أو السامبلر: توليد وفصل المسارات، كتابة الأوامر الأسلوبية، ثم تتولى اليد البشرية: أصوات حقيقية، إيقاعات، مونتاج، مكساج. ما يُولَّد يُصرَّح به؛ وما يُعزَف يُعزَف.',
    },
    bio: {
      title: 'السيرة', sub: 'خلف المكياج، مشروع.',
      short: 'MMARC-TheONE (MM:ONE) فنان ومنتج إلكتروني مقيم في باريس، نشط منذ 2024، معروف بريمكسات الأفرو هاوس للأغاني الشعبية الكلاسيكية وبشخصية مهرّج ذي شعر أحمر.',
      paragraphs: [
        'MMARC-TheONE، المعروف أيضًا بـ MM:ONE، فنان متعدد التخصصات يتنقل بين الموسيقى والصورة والتجريب الرقمي. وُلد المشروع سنة 2024 مع ألبوم «Symphonie IA : La Révolution Mélodique du Futur»، وهو بيان أول رسم الخط: استخدام كل الأدوات المتاحة — كاميرات فيلمية، استوديوهات، ذكاء اصطناعي، جماليات فن الشارع — لقول شيء عن العالم.',
        'منذ ذلك الحين توسّعت الأعمال بوتيرة سريعة: أكثر من أربعين عملًا، ألبوم ثانٍ «Carnaval Halluciné (Fragments 2025)»، وسلسلة ريمكسات أفرو هاوس تعيد قراءة أغانٍ شعبية من ثقافات عدة، بدءًا بـ «سيدي منصور». تجاوز ريمكس «سيدي منصور × Papa Où T\u2019es» 96 ألف مشاهدة على يوتيوب؛ و«Mode Avion» بالاشتراك مع Klara-V تجاوز 240 ألفًا.',
        'المشروع يرفض أي تصنيف: راب، أفرو هاوس، تعاونات مع أصوات مثل عكروت بوراس أو سارة، ولعب دائم على الحدود اللغوية: تتنقل الأغاني بين الفرنسية والإنجليزية والعربية والإسبانية والأوكرانية، غالبًا داخل الأغنية نفسها.',
        'في 2026 تمثّل ثلاثية «M» (Premier M، Deuxième M «Signal On»، Troisième M) منعطفًا أكثر حميمية: إلكترو نايتكور بمفهوم «happy-sad»، شفرات رقمية مخفية (13-13-1) وذكريات طفولة. وفي السنة نفسها، «Sidi Ciel (Club House)»، مزج بين «CIEL» (GIMS) و«سيدي منصور» يحمله صوت بشري وإيقاعات معزوفة، يلخّص المنهج: الآلة واليد.',
      ],
      personaTitle: 'الشخصية', personaBody: [
        'المهرّج ذو الشعر الأحمر ليس قناعًا للاختباء: إنه رمز للحرية. يذكّر بالمهرّجين والمخادعين وكل الشخصيات التي تجرؤ على قول الحقائق عبر الضحك والفوضى والوهم. يُسلّي ويُقلق ويخفي حزنًا دفينًا — ومن هنا مفهوم «happy-sad» الذي يعبر ثلاثية «M».',
        'يتفرّع هذا الوجه إلى شعارات (Radio Ready، Boost، Brut) وأغلفة وكليبات ومطبوعات فنية. الصورة تهمّ بقدر الصوت.',
      ],
      methodTitle: 'المنهج', methodBody: [
        'يستخدم MMARC-TheONE الذكاء الاصطناعي علنًا كأداة. أدوات التوليد والفصل تُنشئ وتعزل وتحرّر المسارات (إيقاع، باس، بيانو، سينث)؛ وكتابة الأوامر الأسلوبية عمل كتابي بحد ذاته. ثم يتولى الإنسان: أصوات حقيقية، إيقاعات، توزيع، مكساج.',
        'القاعدة بسيطة وعلنية: ما يُولَّد يُصرَّح به؛ وما يُعزَف يُعزَف. هذه الشفافية موقف فني بقدر ما هي أخلاقي.',
      ],
      quote: '«سواء عبر إيقاعات خام، أو كولاجات بصرية، أو تعاونات تجريبية، المهمة واضحة: كشف الحقائق بالصوت والصورة، والتذكير بأن الفن يمكن أن يكون مرآة وسلاحًا في آن.»',
    },
    disco: {
      title: 'الأعمال', sub: 'ألبومات وأغانٍ وريمكسات ومزج منذ 2024. تُذكر التواريخ الدقيقة عند ثبوتها.',
      year: 'السنة', types: { album: 'ألبوم', single: 'أغنية', remix: 'ريمكس', mashup: 'مزج', edit: 'إديت', live: 'جلسة حية' },
      with: 'مع', listenOn: 'استمع على', sung: 'باللغة', note: 'ملاحظة', count: (n) => `${n} إصدارًا مُدرجًا`,
    },
    videos: { title: 'الفيديوهات', sub: 'كليبات وجلسات حية وريمكسات على القناة الرسمية.', channel: 'قناة يوتيوب الرسمية', subs: 'مشترك', watch: 'شاهد', playlistNote: 'تنشر القناة بانتظام فيديوهات بالفرنسية والعربية والإنجليزية والإسبانية.' },
    collabs: {
      title: 'التعاونات', sub: 'أصوات، مشاهد، لغات.',
      people: [
        { name: 'Klara-V', role: 'مغنية · ثنائي متكرر', body: 'شريكة «Mode Avion» (240 ألف مشاهدة)، «Raccroche Pas»، «Go Higher»، «D\u2019bout Monde»، «How You Like That» والجلسات الحية. أصبح ثنائي MMARC × Klara-V توقيعًا للمشروع.' },
        { name: 'عكروت بوراس', role: 'رابر', body: '«Lean Back»، «No Pass On Backs»، «Mallasine»، «عكروت بوراس»: خط مباشر مع مشهد الراب.' },
        { name: 'سارة', role: 'مغنية', body: '«Perché Ti Amo × Badi Eish (Global Hit Remix)» — جسر إيطالي-عربي.' },
        { name: 'Shan Pol', role: 'فنان', body: 'مشاركة في «Go Higher» إلى جانب Klara-V.' },
        { name: 'Lea', role: 'مغنية', body: '«Apatché (Rentrée floue)»، من إنتاج MMARC-TheONE.' },
      ],
      bookingTitle: 'لنعمل معًا', bookingBody: 'المشروع مفتوح للريمكسات والمشاركات وطلبات الإنتاج وتراخيص المزامنة (سينما، إعلان، ألعاب، محتوى) وعروض الدي جي. اكتب مباشرة: الرد يأتي من الفنان.',
      offers: [
        { title: 'ريمكس وإنتاج', body: 'أفرو هاوس، أفرو تِك، إلكترو، فرنش تاتش، راب. إعادة قراءة كلاسيكي أو إبداع أصلي.' },
        { title: 'مزامنة وتراخيص', body: 'كتالوج يضم أكثر من 40 عملًا، مسارات متاحة، نسخ قصيرة عند الطلب.' },
        { title: 'مشاركات', body: 'أصوات بالفرنسية والعربية والإنجليزية والإسبانية. منفتحون على كل المشاهد.' },
        { title: 'دي جي وعروض حية', body: 'عروض أفرو هاوس / كلوب، مع الشخصية أو بدونها.' },
      ],
      cta: 'راسل MMARC-TheONE',
    },
    press: {
      title: 'الصحافة والإعلام', sub: 'الملف الصحفي الرسمي. كل ما هنا يمكن اقتباسه وإعادة استخدامه مع الإشارة «© MMARC-TheONE».',
      bioShort: 'سيرة قصيرة (≈ 40 كلمة)', bioShortText: 'MMARC-TheONE (MM:ONE) فنان ومنتج إلكتروني مقيم في باريس. نشط منذ 2024، يمزج الأفرو هاوس والإلكترو والراب بخمس لغات، بشخصية مهرّج ذي شعر أحمر، مستخدمًا الذكاء الاصطناعي علنًا كأداة.',
      bioMedium: 'سيرة متوسطة (≈ 100 كلمة)', bioMediumText: 'MMARC-TheONE، المعروف بـ MM:ONE، فنان متعدد التخصصات مقيم في باريس. انطلق المشروع في 2024 بألبوم «Symphonie IA»، ويضم ألبومين وأكثر من أربعين عملًا، منها ريمكسا الأفرو هاوس «سيدي منصور × Papa Où T\u2019es» (96 ألف مشاهدة على يوتيوب) و«Mode Avion» مع Klara-V (240 ألف مشاهدة). يغني بالفرنسية والإنجليزية والعربية والإسبانية والأوكرانية، ويتعاون مع أصوات أخرى (عكروت بوراس، سارة)، ويتبنى منهجًا هجينًا يولّد فيه الذكاء الاصطناعي ويتولى الإنسان. شخصية المهرّج ذي الشعر الأحمر — مضحكة، مقلقة، حزينة — هي خيط عالمه البصري.',
      bioLong: 'سيرة طويلة',
      factsTitle: 'حقائق وأرقام',
      facts: [
        ['الاسم الفني', 'MMARC-TheONE (أيضًا MM:ONE، MMARC)'],
        ['المقر', 'باريس، فرنسا'],
        ['بداية المشروع', '19 سبتمبر 2024 (ألبوم «Symphonie IA : La Révolution Mélodique du Futur»)'],
        ['الألبومات', '2 — Symphonie IA (2024)، Carnaval Halluciné (2025)'],
        ['الأعمال المنشورة', '+40 (أغانٍ، ريمكسات، مزج، إديت) حتى 19 أغسطس 2026'],
        ['الفيديو الأكثر مشاهدة', '«Mode Avion» مع Klara-V — أكثر من 240 ألف مشاهدة على يوتيوب'],
        ['الريمكس الأبرز', '«سيدي منصور × Papa Où T\u2019es (Afro House Remix)» — أكثر من 96 ألف مشاهدة'],
        ['قناة يوتيوب', '≈ 136 ألف مشترك'],
        ['أحدث إصدار', '«Sidi Ciel (Club House)» — 14 أغسطس 2026'],
        ['لغات الغناء', 'الفرنسية، الإنجليزية، العربية، الإسبانية، الأوكرانية'],
        ['التوزيع', 'DistroKid (Spotify، Apple Music، Deezer، YouTube Music)'],
        ['جهة الاتصال الصحفية', 'mmarc@greensauce.io'],
      ],
      assetsTitle: 'صور عالية الدقة',
      assets: [
        { label: 'بورتريه — الوشاح (2025)', file: '/img/photos/portrait-scarf.webp', kind: 'بورتريه' },
        { label: 'بورتريه — الاستوديو (2025)', file: '/img/photos/portrait-studio.webp', kind: 'بورتريه' },
        { label: 'دي جي — الشاطئ (2026)', file: '/img/photos/dj-beach.webp', kind: 'حي' },
        { label: 'دي جي — مهرجان (2026)', file: '/img/photos/dj-festival.webp', kind: 'حي' },
        { label: 'بورتريه — البدلة الحمراء (2025)', file: '/img/photos/portrait-red-suit.webp', kind: 'بورتريه' },
        { label: 'بورتريه — 2024', file: '/img/photos/portrait-clown-2024.webp', kind: 'بورتريه' },
      ],
      logosTitle: 'الشعارات والعلامات',
      contactTitle: 'الاتصال الصحفي والحجز', contactBody: 'مقابلات، مراجعات، طلبات صور أو مقتطفات: عنوان واحد، رد مباشر.',
      download: 'تنزيل', copy: 'نسخ النص', copied: 'تم النسخ',
    },
    chrono: {
      title: 'الخط الزمني', sub: 'محطات مؤرّخة يمكن التحقق منها على منصات البث وقناة يوتيوب.',
      events: [
        { date: '19 سبتمبر 2024', title: 'ولادة المشروع', body: 'صدور الألبوم الأول «Symphonie IA : La Révolution Mélodique du Futur» والأغاني «Rap Rat des Champs – JO Paris 2024»، «Habibi Come to Rafah» و«Raccroche Pas» (أول عمل مع Klara-V).' },
        { date: '17 أكتوبر 2025', title: 'Mode Avion وCarnaval Halluciné', body: '«Mode Avion» مع Klara-V يتجاوز 240 ألف مشاهدة. صدور الألبوم الثاني «Carnaval Halluciné (Fragments 2025)»، أغانٍ مع عكروت بوراس («Lean Back»، «No Pass On Backs»، «Mallasine») و«Go Higher» (Klara-V × Shan Pol).' },
        { date: '2 أكتوبر 2025', title: 'LABUBU LAFUFU SONG', body: 'أغنية «ميم» موزّعة على كل المنصات.' },
        { date: 'أبريل 2026', title: 'سيدي منصور × Papa Où T\u2019es', body: 'ريمكس الأفرو هاوس يتجاوز 96 ألف مشاهدة ويفتتح سلسلة «سيدي منصور».' },
        { date: '2026', title: 'ثلاثية «M»', body: 'Premier M، Deuxième M «Signal On»، Troisième M: إلكترو نايتكور، مفهوم «happy-sad»، شفرة 13-13-1، ذكريات طفولة.' },
        { date: '14 أغسطس 2026', title: 'Sidi Ciel (Club House)', body: 'مزج «CIEL» (GIMS) × «سيدي منصور» على 102 نبضة/د، صوت بشري، إيقاعات معزوفة. أحدث إصدار حتى الآن.' },
      ],
      sourcesTitle: 'المصادر', sourcesBody: 'تواريخ الإصدار والعناوين هي المنشورة على Apple Music وSpotify وDeezer (الفنان «MMARC»، معرّف Apple 1769405592). أرقام المشاهدة هي المعروضة علنًا على يوتيوب في التاريخ المذكور في الملف الصحفي.',
    },
    footer: { contact: 'اتصال', rights: 'جميع الحقوق محفوظة.', madeWith: 'الموقع الرسمي — mmarc-theone.com', store: 'Cerise-Store', storeBody: 'مطبوعات فنية مؤطّرة بإصدار محدود، عالم بوب / فن الشارع.', langLabel: 'اللغة' },
    common: { readMore: 'اقرأ المزيد', external: 'يفتح موقعًا خارجيًا', email: 'البريد الإلكتروني', back: 'رجوع', official: 'رسمي' },
  },

  /* ───────────────────────────── ESPAÑOL ───────────────────────────── */
  es: {
    nav: { '': 'Inicio', bio: 'Biografía', discographie: 'Discografía', videos: 'Vídeos', collaborations: 'Colaboraciones', presse: 'Prensa y medios', chronologie: 'Cronología' },
    meta: {
      '': { title: 'MMARC-TheONE (MM:ONE) — Artista electrónico, Afro House y fusión cultural | Sitio oficial', description: 'Sitio oficial de MMARC-TheONE (MM:ONE), productor y artista electrónico afincado en París: Afro House, remixes, mashups, trilogía «M». Discografía, biografía, vídeos, dossier de prensa.' },
      bio: { title: 'Biografía — MMARC-TheONE (MM:ONE)', description: '¿Quién es MMARC-TheONE? El personaje del payaso, la fusión electrónica / arte urbano, el método híbrido IA + voces humanas, base en París.' },
      discographie: { title: 'Discografía completa — MMARC-TheONE', description: 'Todos los álbumes, singles, remixes y mashups de MMARC-TheONE desde 2024: Symphonie IA, Carnaval Halluciné, Sidi Mansour, Mode Avion, trilogía «M», Sidi Ciel…' },
      videos: { title: 'Vídeos y canal de YouTube — MMARC-TheONE', description: 'Videoclips, sesiones en directo y remixes de MMARC-TheONE en YouTube: Mode Avion (240K visitas), Sidi Mansour × Papa Où T\u2019es (96K visitas), Klara-V Live Session.' },
      collaborations: { title: 'Colaboraciones, booking y sync — MMARC-TheONE', description: 'Klara-V, Akrout Bouras, Sarra, Shan Pol, Lea: las colaboraciones de MMARC-TheONE. Remixes, featurings, licencias sync y booking.' },
      presse: { title: 'Dossier de prensa (EPK) — MMARC-TheONE', description: 'Kit de prensa oficial de MMARC-TheONE: biografías corta, media y larga, hechos y cifras verificables, fotos HD, logos, contacto de prensa.' },
      chronologie: { title: 'Cronología del proyecto — MMARC-TheONE', description: 'Hitos fechados del proyecto MMARC-TheONE de 2024 a hoy: álbumes, singles clave, colaboraciones, hitos del canal de YouTube.' },
    },
    hero: { kicker: 'Sitio oficial · París', tagline: 'Electrónica underground × arte urbano × fusión cultural. Un payaso que dice verdades con música, en cinco idiomas.', listen: 'Escuchar', press: 'Dossier de prensa', latest: 'Último lanzamiento', latestLabel: 'Publicado el' },
    fiche: {
      title: 'Ficha de identidad',
      rows: [
        ['Nombre artístico', 'MMARC-TheONE'],
        ['Alias', 'MM:ONE · MMARC'],
        ['Activo desde', '2024'],
        ['Base', 'París, Francia'],
        ['Géneros', 'Afro House · Afro Tech · electro nightcore · French touch · rap'],
        ['Idiomas', 'Francés · inglés · árabe · español · ucraniano'],
        ['Álbumes', 'Symphonie IA (2024) · Carnaval Halluciné (2025)'],
        ['Distribución', 'DistroKid → Spotify, Apple Music, Deezer, YouTube'],
      ],
    },
    home: {
      manifesto: { title: 'Manifiesto', lines: ['Rompemos fronteras.', 'Fusionamos mundos.', 'Transmitimos mensajes a través del arte.'] },
      featuredTitle: 'Lanzamientos clave', featuredSub: 'Los temas que cuentan el proyecto.',
      themesTitle: 'Temas recurrentes', themes: ['Fractura social', 'Urgencia climática', 'Fusión humano / máquina', 'Humor negro', 'Puentes culturales', 'Resistencia underground'],
      langsTitle: 'Cinco idiomas, un solo proyecto', langsSub: 'Francés para la poesía electrónica, inglés para el alcance internacional, español para el underground latino, árabe para el diálogo entre culturas, ucraniano para la solidaridad.',
      watchTitle: 'Para ver', watchSub: 'Los vídeos que hicieron despegar el canal.',
      allReleases: 'Ver toda la discografía', allVideos: 'Todos los vídeos',
      aiTitle: 'Un método asumido: IA + humano', aiBody: 'El proyecto reivindica la inteligencia artificial como instrumento, igual que una caja de ritmos o un sampler: generación y separación de stems, prompts de estilo, y luego la mano humana retoma el control — voces reales, percusiones, edición, mezcla. Lo generado se declara; lo tocado se toca.',
    },
    bio: {
      title: 'Biografía', sub: 'Detrás del maquillaje, un proyecto.',
      short: 'MMARC-TheONE (MM:ONE) es un artista y productor electrónico afincado en París, activo desde 2024, conocido por sus remixes Afro House de clásicos populares y por su personaje de payaso pelirrojo.',
      paragraphs: [
        'MMARC-TheONE, alias MM:ONE, es un artista multidisciplinar que se mueve entre la música, la imagen y la experimentación digital. El proyecto nace en 2024 con el álbum «Symphonie IA : La Révolution Mélodique du Futur», un primer gesto que marca la línea: usar todas las herramientas disponibles — cámaras analógicas, estudios, inteligencia artificial, estética del arte urbano — para decir algo del mundo.',
        'Desde entonces el catálogo ha crecido a buen ritmo: más de cuarenta temas, un segundo álbum, «Carnaval Halluciné (Fragments 2025)», y una serie de remixes Afro House que revisitan clásicos populares de varias culturas, empezando por «Sidi Mansour». El remix «Sidi Mansour × Papa Où T\u2019es» superó las 96 000 reproducciones en YouTube; «Mode Avion», a dúo con Klara-V, superó las 240 000.',
        'El proyecto rechaza cualquier etiqueta: rap, Afro House, colaboraciones con voces como Akrout Bouras o Sarra, y un juego constante con las fronteras lingüísticas: los temas pasan del francés al inglés, al árabe, al español y al ucraniano, a menudo dentro de la misma canción.',
        'En 2026 la trilogía «M» (Premier M, Deuxième M «Signal On», Troisième M) marca un giro más íntimo: electro nightcore con concepto «happy-sad», códigos numéricos ocultos (13-13-1) y recuerdos de infancia. Ese mismo año, «Sidi Ciel (Club House)», mashup de «CIEL» (GIMS) y «Sidi Mansour» sostenido por una voz humana y percusiones tocadas, condensa el método: máquina y mano.',
      ],
      personaTitle: 'El personaje', personaBody: [
        'El payaso de afro rojo no es una máscara para esconderse: es un símbolo de libertad. Recuerda a los bufones, los tricksters y todas las figuras que se atreven a decir verdades a través de la risa, el caos y la ilusión. Divierte, inquieta y esconde una melancolía de fondo — de ahí el concepto «happy-sad» que atraviesa la trilogía «M».',
        'Ese rostro se declina en logos (Radio Ready, Boost, Brut), portadas, vídeos y láminas de arte. La imagen cuenta tanto como el sonido.',
      ],
      methodTitle: 'El método', methodBody: [
        'MMARC-TheONE asume la IA como instrumento. Herramientas de generación y separación sirven para crear, aislar y editar stems (batería, bajo, piano, sintes); escribir los prompts de estilo es un oficio en sí mismo. Después el humano retoma el control: voces reales, percusiones, arreglos, mezcla.',
        'La regla es simple y pública: lo generado se declara; lo tocado se toca. Esa transparencia es una postura tan artística como ética.',
      ],
      quote: '«Ya sea con beats crudos, collages visuales o colaboraciones experimentales, la misión es clara: desenmascarar verdades a través del sonido y la imagen, y recordar que el arte puede ser a la vez un espejo y un arma.»',
    },
    disco: {
      title: 'Discografía', sub: 'Álbumes, singles, remixes y mashups desde 2024. Las fechas exactas se indican cuando están establecidas.',
      year: 'Año', types: { album: 'Álbum', single: 'Single', remix: 'Remix', mashup: 'Mashup', edit: 'Edit', live: 'Sesión en directo' },
      with: 'con', listenOn: 'Escuchar en', sung: 'Cantado en', note: 'Nota', count: (n) => `${n} lanzamientos listados`,
    },
    videos: { title: 'Vídeos', sub: 'Videoclips, sesiones en directo y remixes en el canal oficial.', channel: 'Canal oficial de YouTube', subs: 'suscriptores', watch: 'Ver', playlistNote: 'El canal publica regularmente vídeos en francés, árabe, inglés y español.' },
    collabs: {
      title: 'Colaboraciones', sub: 'Voces, escenas, idiomas.',
      people: [
        { name: 'Klara-V', role: 'Cantante · dúo recurrente', body: 'Cómplice de «Mode Avion» (240K visitas), «Raccroche Pas», «Go Higher», «D\u2019bout Monde», «How You Like That» y las Live Sessions. El binomio MMARC × Klara-V se ha convertido en una firma del proyecto.' },
        { name: 'Akrout Bouras', role: 'Rapero', body: '«Lean Back», «No Pass On Backs», «Mallasine», «عكروت بوراس»: una conexión directa con la escena rap.' },
        { name: 'Sarra', role: 'Cantante', body: '«Perché Ti Amo × Badi Eish (Global Hit Remix)» — un puente italo-árabe.' },
        { name: 'Shan Pol', role: 'Artista', body: 'Featuring en «Go Higher» junto a Klara-V.' },
        { name: 'Lea', role: 'Cantante', body: '«Apatché (Rentrée floue)», producido por MMARC-TheONE.' },
      ],
      bookingTitle: 'Trabajar juntos', bookingBody: 'El proyecto está abierto a remixes, featurings, encargos de producción, licencias sync (cine, publicidad, videojuegos, contenido) y DJ sets. Escribe directamente: la respuesta viene del artista.',
      offers: [
        { title: 'Remix y producción', body: 'Afro House, Afro Tech, electro, French touch, rap. Reescritura de un clásico o creación original.' },
        { title: 'Sync y licencias', body: 'Catálogo de más de 40 temas, stems disponibles, ediciones cortas bajo pedido.' },
        { title: 'Featurings', body: 'Voces en francés, árabe, inglés, español. Abiertos a todas las escenas.' },
        { title: 'DJ sets y directo', body: 'Sets Afro House / club, con o sin personaje.' },
      ],
      cta: 'Escribir a MMARC-TheONE',
    },
    press: {
      title: 'Prensa y medios', sub: 'Dossier de prensa oficial. Todo lo que aparece aquí puede citarse y reutilizarse con la mención «© MMARC-TheONE».',
      bioShort: 'Bio corta (≈ 40 palabras)', bioShortText: 'MMARC-TheONE (MM:ONE) es un artista y productor electrónico afincado en París. Activo desde 2024, mezcla Afro House, electro y rap en cinco idiomas bajo un personaje de payaso de afro rojo, asumiendo la IA como instrumento.',
      bioMedium: 'Bio media (≈ 100 palabras)', bioMediumText: 'MMARC-TheONE, alias MM:ONE, es un artista multidisciplinar afincado en París. Lanzado en 2024 con el álbum «Symphonie IA», el proyecto cuenta con dos álbumes y más de cuarenta temas, entre ellos los remixes Afro House «Sidi Mansour × Papa Où T\u2019es» (96K visitas en YouTube) y «Mode Avion» con Klara-V (240K visitas). Canta en francés, inglés, árabe, español y ucraniano, colabora con otras voces (Akrout Bouras, Sarra) y reivindica un método híbrido en el que la IA genera y el humano retoma el control. Su personaje de payaso pelirrojo — divertido, inquietante, melancólico — es el hilo conductor de su universo visual.',
      bioLong: 'Bio larga',
      factsTitle: 'Hechos y cifras',
      facts: [
        ['Nombre artístico', 'MMARC-TheONE (alias MM:ONE, MMARC)'],
        ['Base', 'París, Francia'],
        ['Inicio del proyecto', '19 de septiembre de 2024 (álbum «Symphonie IA : La Révolution Mélodique du Futur»)'],
        ['Álbumes', '2 — Symphonie IA (19/09/2024), Carnaval Halluciné (17/10/2025)'],
        ['Temas publicados', '40+ (singles, remixes, mashups, edits) a 19 de agosto de 2026'],
        ['Vídeo más visto', '«Mode Avion» feat. Klara-V — más de 240 000 visitas en YouTube'],
        ['Remix insignia', '«Sidi Mansour × Papa Où T\u2019es (Afro House Remix)» — más de 96 000 visitas'],
        ['Canal de YouTube', '≈ 136 000 suscriptores'],
        ['Último lanzamiento', '«Sidi Ciel (Club House)» — 14 de agosto de 2026'],
        ['Idiomas cantados', 'Francés, inglés, árabe, español, ucraniano'],
        ['Distribución', 'DistroKid (Spotify, Apple Music, Deezer, YouTube Music)'],
        ['Contacto de prensa', 'mmarc@greensauce.io'],
      ],
      assetsTitle: 'Fotos HD',
      assets: [
        { label: 'Retrato — bufanda (2025)', file: '/img/photos/portrait-scarf.webp', kind: 'Retrato' },
        { label: 'Retrato — estudio (2025)', file: '/img/photos/portrait-studio.webp', kind: 'Retrato' },
        { label: 'DJ set — playa (2026)', file: '/img/photos/dj-beach.webp', kind: 'Directo' },
        { label: 'DJ set — festival (2026)', file: '/img/photos/dj-festival.webp', kind: 'Directo' },
        { label: 'Retrato — traje rojo (2025)', file: '/img/photos/portrait-red-suit.webp', kind: 'Retrato' },
        { label: 'Retrato — 2024', file: '/img/photos/portrait-clown-2024.webp', kind: 'Retrato' },
      ],
      logosTitle: 'Logos y marcas',
      contactTitle: 'Contacto de prensa y booking', contactBody: 'Entrevistas, reseñas, solicitudes de imágenes o extractos: una dirección, una respuesta directa.',
      download: 'Descargar', copy: 'Copiar texto', copied: 'Copiado',
    },
    chrono: {
      title: 'Cronología', sub: 'Hitos fechados, verificables en las plataformas de streaming y en el canal de YouTube.',
      events: [
        { date: '19 sept. 2024', title: 'Nacimiento del proyecto', body: 'Salida del primer álbum «Symphonie IA : La Révolution Mélodique du Futur» y de los singles «Rap Rat des Champs – JO Paris 2024», «Habibi Come to Rafah» y «Raccroche Pas» (primer tema con Klara-V).' },
        { date: '17 oct. 2025', title: 'Mode Avion y Carnaval Halluciné', body: '«Mode Avion» con Klara-V supera las 240 000 visitas. Salida del segundo álbum «Carnaval Halluciné (Fragments 2025)», singles con Akrout Bouras («Lean Back», «No Pass On Backs», «Mallasine») y «Go Higher» (Klara-V × Shan Pol).' },
        { date: '2 de octubre de 2025', title: 'LABUBU LAFUFU SONG', body: 'Single «meme music» distribuido en todas las plataformas.' },
        { date: 'Abril de 2026', title: 'Sidi Mansour × Papa Où T\u2019es', body: 'El remix Afro House supera las 96 000 visitas e inaugura la serie «Sidi Mansour».' },
        { date: '2026', title: 'Trilogía «M»', body: 'Premier M, Deuxième M «Signal On», Troisième M: electro nightcore, concepto «happy-sad», código 13-13-1, recuerdos de infancia.' },
        { date: '14 de agosto de 2026', title: 'Sidi Ciel (Club House)', body: 'Mashup «CIEL» (GIMS) × «Sidi Mansour» a 102 BPM, voz principal humana, percusiones tocadas. Último lanzamiento hasta la fecha.' },
      ],
      sourcesTitle: 'Fuentes', sourcesBody: 'Las fechas de lanzamiento y los títulos son los publicados en Apple Music, Spotify y Deezer (artista «MMARC», id Apple 1769405592). Las cifras de audiencia son las mostradas públicamente en YouTube en la fecha indicada en el dossier de prensa.',
    },
    footer: { contact: 'Contacto', rights: 'Todos los derechos reservados.', madeWith: 'Sitio oficial — mmarc-theone.com', store: 'Cerise-Store', storeBody: 'Láminas de arte enmarcadas en edición limitada, universo pop / arte urbano.', langLabel: 'Idioma' },
    common: { readMore: 'Leer más', external: 'Abre un sitio externo', email: 'Correo', back: 'Volver', official: 'Oficial' },
  },
};

export const t = (lang: Lang) => ui[lang];
export const langNames: Record<string, Record<Lang, string>> = {
  fr: { fr: 'français', en: 'French', ar: 'الفرنسية', es: 'francés' },
  en: { fr: 'anglais', en: 'English', ar: 'الإنجليزية', es: 'inglés' },
  ar: { fr: 'arabe', en: 'Arabic', ar: 'العربية', es: 'árabe' },
  es: { fr: 'espagnol', en: 'Spanish', ar: 'الإسبانية', es: 'español' },
  it: { fr: 'italien', en: 'Italian', ar: 'الإيطالية', es: 'italiano' },
  uk: { fr: 'ukrainien', en: 'Ukrainian', ar: 'الأوكرانية', es: 'ucraniano' },
};
