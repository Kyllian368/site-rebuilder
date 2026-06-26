# Correction image manquante

## Problème
Dans `src/components/AboutSection.tsx` (ligne 29), l'image du Capitole utilise le chemin original `/Capitile Opéra Toulouse noir et blanc.jpeg`, qui n'existe pas dans `public/` (l'asset a été migré sur le CDN Lovable). Résultat : image cassée sur la page d'accueil.

Les autres images (logo, manège, deux uploads) chargent correctement car elles utilisent déjà `ASSETS.*` depuis `src/lib/intendant-assets.ts`.

## Correctif
Dans `src/components/AboutSection.tsx` :
1. Ajouter `import { ASSETS } from "@/lib/intendant-assets";` si absent.
2. Remplacer `src="/Capitile Opéra Toulouse noir et blanc.jpeg"` par `src={ASSETS.capitoleBW}`.

## Vérification
Recharger la home et confirmer via `document.images` que toutes les images ont `complete && naturalWidth > 0`.
