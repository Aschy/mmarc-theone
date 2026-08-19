# mmarc-theone.com — site officiel (v2, 2026)

Site statique multilingue (FR / EN / AR / ES) construit avec [Astro](https://astro.build), déployé sur Netlify.

## Démarrer
```bash
npm install
npm run dev      # http://localhost:4321/fr/
npm run build    # génère dist/
```

## Où modifier quoi
| Quoi | Fichier |
|---|---|
| Textes des 4 langues (nav, bio, presse, chronologie…) | `src/i18n/ui.ts` |
| Discographie (titres, dates, liens, pochettes) | `src/data/releases.ts` |
| Vidéos YouTube mises en avant | `src/data/videos.ts` |
| Liens officiels (Spotify, YouTube, e-mail…) | `src/data/site.ts` |
| Design (couleurs, typos, composants) | `src/styles/global.css` |
| SEO global, JSON-LD, en-tête, pied de page | `src/layouts/Base.astro` |
| Images | `public/img/{covers,photos,logos}/` (webp) |

## Ajouter une sortie
1. Déposer la pochette dans `public/img/covers/<slug>.webp` (carré, ≤ 1200 px).
2. Ajouter une entrée **en tête** du tableau `releases` dans `src/data/releases.ts` (`date` en ISO si connue).
3. `npm run build` → la sortie apparaît sur l'accueil (« Dernière sortie »), la discographie et le JSON-LD.

## SEO déjà en place
- URLs par langue (`/fr/`, `/en/`, `/ar/`, `/es/`), `hreflang` croisé + `x-default`, canonical, sitemap (`/sitemap-index.xml`), robots.txt.
- Open Graph + Twitter Cards par page, image OG par défaut `public/og-default.jpg`.
- JSON-LD `MusicGroup` (avec `sameAs` vers toutes les plateformes), `WebSite`, `ItemList` de `MusicRecording`/`MusicAlbum` sur la discographie, `VideoObject` sur les vidéos, `ProfilePage` sur la bio.
- Redirection racine par langue du navigateur (`public/_redirects`), RTL natif pour l'arabe.

## À compléter (TODO)
- Dates exactes de sortie 2025-2026 dans `releases.ts` (seules 3 sont confirmées).
- Liens Spotify/YouTube par titre (champs `spotify`, `youtube`).
- Vérifier le chiffre d'abonnés YouTube dans `ui.ts` (facts) et `videos.astro`.
- Photos presse : remplacer par des originaux HD si disponibles (les webp actuels font ≤ 1600 px).
