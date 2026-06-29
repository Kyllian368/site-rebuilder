## Diagnostic

La page d'accueil n'est PAS cassée dans le code : tous les composants (Hero, About, Services, Pricing, Testimonials, Stats, Expertise, Footer) sont bien rendus côté serveur — je l'ai vérifié en lisant le DOM live de ton preview, et le HTML contient bien le contenu.

Ce qui s'est passé : juste après la suppression du fichier `src/routes/comment-ca-marche.tsx`, Vite a eu une erreur transitoire de pre-transform parce que `routeTree.gen.ts` référençait encore le fichier supprimé (le plugin TanStack Router regénère ce fichier automatiquement, mais avec un léger délai). Pendant ces quelques secondes, ton onglet a chargé une version cassée et l'a probablement gardée en cache (chunk JS bloqué).

Le fichier `routeTree.gen.ts` est maintenant propre (plus aucune référence à `comment-ca-marche`), et le serveur rend bien la home.

## Plan

1. **Redémarrer le dev server** pour purger les chunks Vite en mémoire et forcer une régénération propre du route tree.
2. **Recharger l'onglet preview en hard reload** (Ctrl/Cmd+Shift+R) pour vider le cache client.
3. **Vérifier visuellement** que la home affiche bien Hero → About → Services (4 cartes) → Pricing → Testimonials → Stats → Expertise → Footer.

## Ce qui ne change pas

Aucune modification de code n'est nécessaire. Les changements du tour précédent restent en place :
- `ContactSection` retirée de la home (volontaire)
- Section Services réduite à 4 cartes (volontaire)
- Route `/comment-ca-marche` supprimée (volontaire)

## Si après hard reload la page est toujours blanche

On bascule en mode debug : je regarde les erreurs runtime navigateur, les requêtes réseau qui échouent, et un screenshot Playwright headless pour voir ce que ton navigateur reçoit réellement.