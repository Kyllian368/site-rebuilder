## Objectif
Recréer ton ancien site **au pixel près** dans ce projet (TanStack Start + React + Tailwind v4), à partir d'un `.zip` que tu vas uploader.

## Étapes

### 1. Réception du zip
- Tu uploades l'archive `.zip` dans ton prochain message.
- Je l'extrais dans un dossier temporaire et vérifie qu'il n'y a pas de `.git` à l'intérieur.
- Je liste la structure complète : HTML, CSS, JS, images, polices, `package.json` éventuel.

### 2. Identification de la stack d'origine
Je te confirme ce que contient le zip :
- **HTML/CSS/JS statique** → transposition directe en composants React.
- **React / Vite / Next.js** → portage des composants vers la structure TanStack Start.
- **Export builder (Webflow, Framer, WordPress…)** → reconstruction du design depuis le HTML/CSS exporté.

Si la stack contient du code serveur (PHP, Node backend), le visuel reste reproductible au pixel ; la logique backend sera réécrite avec Lovable Cloud (à confirmer le moment venu).

### 3. Migration des assets
- Images, vidéos, PDFs → uploadés sur le CDN Lovable Assets (repo léger).
- Polices web → `@fontsource` si dispo sur npm, sinon `<link>` vers le CDN d'origine (Google Fonts, Adobe Fonts…).
- Favicon, meta images, manifest → placés et référencés dans `__root.tsx`.

### 4. Reconstruction des pages
- Une route par page dans `src/routes/` (`index.tsx`, `about.tsx`, etc.), avec son propre `head()` (title, description, og:image) pour préserver le SEO.
- Composants partagés (header, footer, sections récurrentes) extraits dans `src/components/`.

### 5. Reproduction pixel-perfect du design
- CSS d'origine transposé en Tailwind v4 + tokens sémantiques dans `src/styles.css` (couleurs exactes, typo, espacements, radius, ombres).
- Animations, transitions, hover/focus states reproduits à l'identique.
- Responsive testé aux mêmes breakpoints que l'original.
- Si certaines règles CSS sont trop spécifiques pour Tailwind, je les garde en CSS custom plutôt que de les approximer.

### 6. Interactions et logique JS
- Menus, sliders, modales, formulaires, animations scroll → réécrits en React.
- Bibliothèques tierces (GSAP, Swiper, etc.) réinstallées via npm si elles étaient utilisées.

### 7. Vérification finale au pixel près
- Build complet sans erreur.
- Comparaison visuelle page par page entre ton ancien site et le rendu (via screenshots Playwright si tu fournis l'URL d'origine).
- Itérations d'ajustement jusqu'à correspondance pixel-perfect.

## Ce dont j'ai besoin de toi
1. **Le fichier `.zip`** dans ton prochain message (max 20 MB par fichier).
2. **Très utile pour le pixel-perfect** : l'URL de ton ancien site s'il est encore en ligne, ou des screenshots de référence (desktop + mobile).
3. **Si le zip dépasse 20 MB** : découpe-le, ou héberge les gros assets (vidéos, hautes résolutions) ailleurs et donne-moi les liens.
4. **Polices payantes** : doivent être incluses dans le zip — je ne peux pas les télécharger pour toi.

Approuve ce plan et envoie le zip dans le message suivant.