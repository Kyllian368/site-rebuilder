## Objectif
Deux chantiers en une fois :
1. Améliorer le formulaire de la page **Discutons**.
2. Afficher les vrais avis Google Business Profile sur la page d'accueil (section témoignages).

---

## Partie 1 — Page Discutons (`src/routes/discutons.tsx`)

1. **Téléphone obligatoire**
   - Passer le champ `telephone` de facultatif à requis (label + astérisque + validation).
2. **Champ "Veuillez préciser" si type de bien = Autre**
   - Suivre la valeur du select `type_bien` via un `useState`.
   - Si la valeur sélectionnée est `Autre`, afficher dynamiquement un champ texte `type_bien_autre` avec le label « Veuillez préciser ».
   - Le rendre obligatoire dans ce cas (erreur de validation si vide).
3. **Lien Calendly**
   - Remplacer la constante vide par :
     `CALENDLY_URL = 'https://calendly.com/lintendantconciergerie/30min'`
   - L'iframe Calendly s'affichera automatiquement.

---

## Partie 2 — Avis Google Business Profile

### Approche recommandée
Google a fermé l'ancienne API publique « Google My Business ». La méthode simple et fiable aujourd'hui est de récupérer les avis via la **Places API (New)** de Google Maps Platform — disponible directement dans Lovable via le connecteur **Google Maps Platform** (pas besoin de gérer une clé API manuellement).

**Limite à connaître** : Places API renvoie au maximum **5 avis** (les plus récents/pertinents sélectionnés par Google) + la note moyenne + le nombre total d'avis. Pour récupérer la totalité des avis, il faudrait l'API « Business Profile » qui demande une validation Google manuelle de plusieurs semaines. Je recommande donc Places API.

### Plan d'implémentation
1. **Connecter le connecteur Google Maps Platform** (via `standard_connectors--connect`). Aucun secret à fournir : Lovable gère la clé.
2. **Récupérer le `place_id`** de votre fiche L'Intendant à Toulouse :
   - Création d'une server function `findPlace` qui appelle `places:searchText` avec le nom de l'établissement et la ville.
   - Une fois trouvé, on enregistre le `place_id` en dur dans le code (il est stable).
3. **Server function `getGoogleReviews`** :
   - Appelle `places/v1/places/{place_id}` via le gateway avec le field mask `reviews,rating,userRatingCount,googleMapsUri`.
   - Cache mémoire serveur de ~6h pour éviter de taper l'API à chaque visite.
   - En cas d'erreur, renvoie un fallback vide (la section affichera alors un message ou les avis statiques actuels).
4. **Intégration dans `TestimonialsSection.tsx`** :
   - Loader de la route `/` qui pré-charge les avis via TanStack Query.
   - Affichage : note globale (étoiles + moyenne + nombre d'avis), puis les 5 avis (auteur, photo, note, texte, date relative).
   - Bouton « Voir tous les avis sur Google » → lien `googleMapsUri`.
   - Skeleton de chargement + fallback élégant si l'API échoue.

### Points à confirmer avant de lancer la Partie 2
- **Nom exact de la fiche Google** à rechercher (ex : « L'Intendant Conciergerie Toulouse ») — pour trouver le bon `place_id` du premier coup.
- OK pour la **limite de 5 avis** affichés ?
- OK pour **connecter le connecteur Google Maps Platform** au projet (géré par Lovable, sans configuration de votre côté) ?

---

## Fichiers concernés
- `src/routes/discutons.tsx` (Partie 1)
- nouveau `src/lib/google-reviews.functions.ts` (server function)
- `src/components/TestimonialsSection.tsx` (affichage)
- `src/routes/index.tsx` (loader)