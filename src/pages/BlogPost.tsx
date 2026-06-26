import React, { useLayoutEffect } from 'react';
import { Link, useParams } from '@tanstack/react-router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { id } = useParams({ from: '/blog/$id' });

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleBackToBlog = () => {
    window.location.href = '/blog';
  };

  // Fonction pour générer le schema FAQ JSON-LD
  const generateFAQSchema = (faq: Array<{question: string, answer: string}>) => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  };

  // Article data
  const getArticle = (articleId: string) => {
    const articles = {
      'guide-airbnb-toulouse-2024': {
        title: 'Guide Complet Airbnb Toulouse 2024 : Maximisez Vos Revenus',
        metaDescription: 'Guide expert pour investir dans Airbnb à Toulouse en 2024. Quartiers rentables, réglementation, tarifs, conseils pour maximiser vos revenus locatifs.',
        date: '1 décembre 2024',
        readTime: '8 min',
        category: 'Guide Investissement',
        image: '/__l5e/assets-v1/63f66d92-1636-47fc-9a86-7b63366fe16e/capitole-toulouse-bw.jpeg',
        faq: [
          {
            question: "Quel est le rendement moyen d'un Airbnb à Toulouse en 2024 ?",
            answer: "Selon les données Airbtics 2024, le revenu moyen à Toulouse est estimé à 15 000€/an par listing, avec un taux d'occupation de 71% et un tarif journalier moyen de 60€. Les meilleurs quartiers comme Capitole peuvent atteindre 80-120€/nuit. (Source : Airbtics.com - données non-officielles)"
          },
          {
            question: "Quels sont les quartiers les plus rentables pour Airbnb à Toulouse ?",
            answer: "Les top 5 selon les estimations marché 2024 : 1) Place du Capitole, 2) Les Chalets-Saint Aubin, 3) Amidonniers-Caffarelli, 4) Saint Cyprien, 5) Bonnefoy-Roseraie. Prix indicatifs basés sur analyses de marché immobilier local."
          },
          {
            question: "Faut-il une autorisation pour faire du Airbnb à Toulouse ?",
            answer: "Oui, déclaration obligatoire en mairie pour obtenir un numéro d'enregistrement à afficher sur l'annonce. Limite de 120 jours/an pour résidence principale. Changement d'usage nécessaire pour résidence secondaire. (Source : Réglementation officielle Toulouse Métropole)"
          },
          {
            question: "Combien coûte la création d'un Airbnb à Toulouse ?",
            answer: "Coût d'aménagement estimé : 2 950€ pour un T1, 4 151€ pour un T2, 5 239€ pour un T3. Comprend mobilier, électroménager, linge, serrure connectée et caméra de sécurité selon les standards marché français. (Estimation basée sur prix moyens marché 2024)"
          }
        ],
        content: `
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-elegant-black/5 to-burgundy/5 p-6 rounded-lg">
              <h2 class="text-2xl font-bold text-elegant-black mb-4">Toulouse : Un Marché Airbnb en Pleine Croissance</h2>
              <p class="text-gray-700 leading-relaxed">
                Avec <strong>504 078 habitants</strong> (INSEE 2021) et plus de <strong>1 million dans l'agglomération</strong>, 
                Toulouse s'impose comme la 4ème métropole française. Première destination 2025 selon Lonely Planet, 
                la ville rose attire <strong>26,4 millions de nuitées</strong> touristiques annuelles selon les données officielles 2024.
              </p>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">Données Marché Airbnb Toulouse 2024</h2>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white border-l-4 border-burgundy p-4 rounded shadow">
                <h3 class="font-bold text-burgundy">Revenu Moyen</h3>
                <p class="text-2xl font-bold">15 000€/an*</p>
                <p class="text-sm text-gray-600">*Estimation marché local</p>
              </div>
              <div class="bg-white border-l-4 border-burgundy p-4 rounded shadow">
                <h3 class="font-bold text-burgundy">Taux d'Occupation</h3>
                <p class="text-2xl font-bold">71%*</p>
                <p class="text-sm text-gray-600">*259 nuits/an en moyenne</p>
              </div>
              <div class="bg-white border-l-4 border-burgundy p-4 rounded shadow">
                <h3 class="font-bold text-burgundy">Tarif Moyen</h3>
                <p class="text-2xl font-bold">60€/nuit*</p>
                <p class="text-sm text-gray-600">*Hors charges et ménage</p>
              </div>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
              <p class="text-sm text-blue-800">
                <strong>Note :</strong> Pour référence, la moyenne mondiale Airbnb est de 12 700€/an par hôte selon 
                <a href="https://www.searchlogistics.com/learn/statistics/airbnb-statistics/" class="underline" target="_blank">
                  les statistiques officielles 2025
                </a>. 
                Les données Toulouse représentent des estimations basées sur le marché local premium.
              </p>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">Top 5 Quartiers Rentables (Estimations Prix 2025)</h2>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span><strong>1. Les Chalets-Saint Aubin</strong></span>
                <span class="text-burgundy font-bold">~4 700€/m²*</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span><strong>2. Capitole Centre</strong></span>
                <span class="text-burgundy font-bold">~4 650€/m²*</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span><strong>3. Amidonniers-Caffarelli</strong></span>
                <span class="text-burgundy font-bold">~4 600€/m²*</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span><strong>4. Saint Cyprien</strong></span>
                <span class="text-burgundy font-bold">~4 500€/m²*</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span><strong>5. Bonnefoy-Roseraie</strong></span>
                <span class="text-burgundy font-bold">~4 400€/m²*</span>
              </div>
            </div>
            <p class="text-sm text-gray-600 mt-2">*Prix indicatifs basés sur analyses de marché immobilier local</p>

            <h2 class="text-2xl font-bold text-elegant-black">Calcul de Rentabilité Réelle (Exemple)</h2>
            <div class="bg-blue-50 p-6 rounded-lg">
              <h3 class="font-bold mb-3">Simulation : T2 Capitole 50m²</h3>
              <ul class="space-y-2">
                <li>• <strong>Prix achat estimé :</strong> ~230 000€ (4 600€/m²)</li>
                <li>• <strong>Aménagement :</strong> ~4 150€</li>
                <li>• <strong>Tarif moyen estimé :</strong> 70€/nuit (quartier premium)</li>
                <li>• <strong>Taux occupation estimé :</strong> 70% = 255 nuits/an</li>
                <li>• <strong>Revenus bruts :</strong> ~17 850€/an</li>
                <li>• <strong>Charges (30%) :</strong> -5 355€</li>
                <li>• <strong>Revenus nets :</strong> ~12 495€/an</li>
                <li>• <strong>Rendement net :</strong> ~5,3%</li>
              </ul>
              <p class="text-sm text-blue-700 mt-3">
                <em>Simulation basée sur estimations marché. Résultats réels variables selon emplacement exact, qualité du bien, et gestion.</em>
              </p>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">Réglementation Toulouse 2024</h2>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <ul class="space-y-2">
                <li>✅ <strong>Déclaration obligatoire</strong> en mairie</li>
                <li>✅ <strong>Numéro d'enregistrement</strong> à afficher</li>
                <li>✅ <strong>120 jours/an maximum</strong> (résidence principale)</li>
                <li>✅ <strong>Changement d'usage</strong> (résidence secondaire)</li>
                <li>⚠️ <strong>Taxe de séjour :</strong> 1,50€/nuit/personne</li>
              </ul>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">Population Étudiante : Un Atout Majeur</h2>
            <p class="text-gray-700 leading-relaxed">
              Toulouse compte <strong>130 000 étudiants</strong> répartis sur 3 universités principales :
              Toulouse I Capitole, Toulouse II Jean Jaurès, et Toulouse III Paul Sabatier. 
              Cette population génère une demande constante pour les séjours courts (stages, examens, parents en visite).
            </p>

            <h2 class="text-2xl font-bold text-elegant-black">Attractivité Touristique</h2>
            <ul class="space-y-2 text-gray-700">
              <li>• <strong>Aéroport Blagnac :</strong> 3ème aéroport français hors Paris</li>
              <li>• <strong>Airbus & Aerospace Valley :</strong> Tourisme d'affaires</li>
              <li>• <strong>Canal du Midi :</strong> Patrimoine UNESCO</li>
              <li>• <strong>Cité de l'Espace :</strong> 400 000 visiteurs/an</li>
              <li>• <strong>Stade de rugby :</strong> Événements sportifs majeurs</li>
            </ul>
          </div>
        `
      },
      'optimiser-revenus-location-courte-duree': {
        title: '10 Astuces Éprouvées Pour Maximiser Vos Revenus Locatifs',
        metaDescription: 'Découvrez 10 stratégies expertes pour augmenter vos revenus locatifs de 30%. Tarification dynamique, optimisation annonces, conseils pro.',
        date: '28 novembre 2024',
        readTime: '6 min',
        category: 'Optimisation',
        image: '/__l5e/assets-v1/969ea519-f260-41d6-ad94-c0cd2b574076/oh-toulouse.jpeg',
        faq: [
          {
            question: "Comment augmenter ses revenus Airbnb de 30% ?",
            answer: "Stratégies recommandées : 1) Photos professionnelles (impact significatif sur réservations), 2) Tarification dynamique selon événements, 3) Réponse rapide aux demandes, 4) Équipements premium. Gains variables selon situation initiale et marché local."
          },
          {
            question: "Quels équipements augmentent le plus les tarifs ?",
            answer: "Équipements valorisés sur le marché français : Parking privé (fort impact en centre-ville), Lave-vaisselle, Climatisation, Lave-linge, Wifi haut débit. L'impact exact varie selon localisation et concurrence locale."
          },
          {
            question: "Comment optimiser la tarification selon les événements ?",
            answer: "Toulouse - Événements majeurs identifiés : Stade Toulousain (rugby), Salon aéronautique, Festival Rio Loco, Nuit Blanche. Recommandation : surveiller calendrier événementiel 6 mois à l'avance pour ajuster tarifs selon demande."
          },
          {
            question: "Quel est l'impact du temps de réponse sur les réservations ?",
            answer: "Principe général confirmé : réponse rapide améliore considérablement les taux de conversion. Selon les statistiques officielles Airbnb 2025, il faut en moyenne 11min 31sec pour réserver sur l'app, confirmant l'importance de la réactivité."
          }
        ],
        content: `
          <div class="space-y-6">
            <div class="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
              <h2 class="text-2xl font-bold text-elegant-black mb-4">Les 10 Stratégies Qui Fonctionnent en 2024</h2>
              <p class="text-gray-700 leading-relaxed">
                Basé sur l'analyse du marché Airbnb toulousain et les meilleures pratiques du secteur, 
                voici les techniques qui permettent d'optimiser significativement ses revenus selon le profil du bien.
              </p>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">1. Photos Professionnelles : Impact Majeur sur les Réservations</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-bold text-burgundy mb-2">Impact Observé :</h3>
                <ul class="space-y-1 text-gray-700">
                  <li>• Augmentation significative des clics sur l'annonce</li>
                  <li>• Plus de demandes de réservation</li>
                  <li>• Réduction du temps de location</li>
                  <li>• Justification de tarifs premium</li>
                </ul>
              </div>
              <div>
                <h3 class="font-bold text-burgundy mb-2">Checklist Photo :</h3>
                <ul class="space-y-1 text-gray-700">
                  <li>✅ 20-25 photos minimum</li>
                  <li>✅ Lumière naturelle optimale</li>
                  <li>✅ Angles larges (objectif 16-35mm)</li>
                  <li>✅ Mise en scène lifestyle</li>
                </ul>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">2. Temps de Réponse : Variable Clé de Conversion</h2>
            <div class="bg-red-50 p-4 rounded-lg">
              <h3 class="font-bold mb-3">Importance de la Réactivité :</h3>
              <div class="space-y-2">
                <p class="text-gray-700">
                  Selon les <a href="https://www.searchlogistics.com/learn/statistics/airbnb-statistics/" class="text-blue-600 underline" target="_blank">
                  statistiques officielles Airbnb 2025</a>, le temps moyen de réservation est de <strong>11min 31sec</strong>, 
                  confirmant que les utilisateurs prennent des décisions rapides.
                </p>
                <div class="bg-yellow-50 p-3 rounded mt-3">
                  <p class="text-sm text-yellow-800">
                    <strong>Règle d'or :</strong> Plus la réponse est rapide, meilleur est le taux de conversion. 
                    Visez une réponse en moins d'une heure pour maximiser vos chances.
                  </p>
                </div>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">3. Tarification Dynamique par Événement</h2>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-blue-50 p-4 rounded">
                <h3 class="font-bold text-blue-800 mb-2">Toulouse - Événements Majeurs :</h3>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Stade Toulousain</strong> : Matches de rugby</li>
                  <li>• <strong>Salon Aéronautique</strong> : Événement bisannuel</li>
                  <li>• <strong>Festival Rio Loco</strong> : Festival musique</li>
                  <li>• <strong>Nuit Blanche</strong> : Événement culturel</li>
                  <li>• <strong>Remises de diplômes</strong> : Période universitaire</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded">
                <h3 class="font-bold text-green-800 mb-2">Saisonnalité Toulouse :</h3>
                <ul class="space-y-1 text-sm">
                  <li>• <strong>Printemps</strong> : Demande stable</li>
                  <li>• <strong>Été</strong> : Pic touristique</li>
                  <li>• <strong>Automne</strong> : Tourisme d'affaires</li>
                  <li>• <strong>Hiver</strong> : Période plus calme</li>
                </ul>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">4. Équipements Qui Valorisent</h2>
            <div class="overflow-x-auto">
              <table class="w-full bg-white border border-gray-200 rounded-lg">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="p-3 text-left font-bold">Équipement</th>
                    <th class="p-3 text-left font-bold">Coût Approximatif</th>
                    <th class="p-3 text-left font-bold">Impact</th>
                    <th class="p-3 text-left font-bold">Priorité</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="p-3">Parking privé</td>
                    <td class="p-3">Variable</td>
                    <td class="p-3 text-green-600">Très élevé</td>
                    <td class="p-3">🔥🔥🔥</td>
                  </tr>
                  <tr>
                    <td class="p-3">Lave-vaisselle</td>
                    <td class="p-3">~400€</td>
                    <td class="p-3 text-green-600">Élevé</td>
                    <td class="p-3">🔥🔥</td>
                  </tr>
                  <tr>
                    <td class="p-3">Climatisation</td>
                    <td class="p-3">~800€</td>
                    <td class="p-3 text-green-600">Élevé (été)</td>
                    <td class="p-3">🔥🔥</td>
                  </tr>
                  <tr>
                    <td class="p-3">Lave-linge</td>
                    <td class="p-3">~350€</td>
                    <td class="p-3 text-green-600">Moyen</td>
                    <td class="p-3">🔥</td>
                  </tr>
                  <tr>
                    <td class="p-3">Wifi premium</td>
                    <td class="p-3">~15€/mois</td>
                    <td class="p-3 text-green-600">Indispensable</td>
                    <td class="p-3">🔥🔥🔥</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">5. Stratégie Avis 5 Étoiles</h2>
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 class="font-bold mb-2">Impact Note Moyenne :</h3>
              <ul class="space-y-1">
                <li>• <strong>4.9-5.0 étoiles</strong> : Taux de réservation +35%</li>
                <li>• <strong>4.7-4.8 étoiles</strong> : Référence marché</li>
                <li>• <strong>4.5-4.6 étoiles</strong> : -15% de demandes</li>
                <li>• <strong>< 4.5 étoiles</strong> : Visibilité fortement réduite</li>
              </ul>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">6. Automatisation & Outils</h2>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-purple-50 p-4 rounded">
                <h3 class="font-bold text-purple-800">Pricing</h3>
                <ul class="text-sm mt-2 space-y-1">
                  <li>• PriceLabs</li>
                  <li>• Beyond Pricing</li>
                  <li>• Wheelhouse</li>
                </ul>
              </div>
              <div class="bg-blue-50 p-4 rounded">
                <h3 class="font-bold text-blue-800">Messages</h3>
                <ul class="text-sm mt-2 space-y-1">
                  <li>• Hostfully</li>
                  <li>• TouchStay</li>
                  <li>• iGMS</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded">
                <h3 class="font-bold text-green-800">Checkin</h3>
                <ul class="text-sm mt-2 space-y-1">
                  <li>• Serrures Nuki</li>
                  <li>• RemoteLock</li>
                  <li>• August Smart</li>
                </ul>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">7-10. Optimisations Avancées</h2>
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded">
                <h3 class="font-bold">7. Durée de Séjour Optimale</h3>
                <p class="text-sm mt-1">Minimum 2-3 nuits évite rotation excessive. Sweet spot : 4-7 nuits à Toulouse.</p>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h3 class="font-bold">8. Cross-selling Services</h3>
                <p class="text-sm mt-1">Ménage (+20€), transfer aéroport (+30€), petit-déjeuner (+8€/personne).</p>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h3 class="font-bold">9. Optimisation SEO Annonce</h3>
                <p class="text-sm mt-1">Mots-clés : "Capitole", "métro", "parking", "wifi", "centre historique".</p>
              </div>
              <div class="bg-gray-50 p-4 rounded">
                <h3 class="font-bold">10. Multi-plateforme</h3>
                <p class="text-sm mt-1">Airbnb (70%) + Booking (20%) + direct (10%) = +15% revenus.</p>
              </div>
            </div>
          </div>
        `
      },
      'reglementation-location-saisonniere-toulouse': {
        title: 'Réglementation Location Saisonnière Toulouse : Guide Légal 2024',
        metaDescription: 'Guide complet de la réglementation location saisonnière à Toulouse 2024. Déclarations, autorisations, obligations légales, sanctions. Restez en conformité.',
        date: '25 novembre 2024',
        readTime: '7 min',
        category: 'Réglementation',
        image: '/__l5e/assets-v1/1c4df8f1-fb8e-4f0b-a063-13ec7a281591/manege.png',
        faq: [
          {
            question: "Quelles sont les obligations légales pour faire du Airbnb à Toulouse ?",
            answer: "Obligations principales : 1) Déclaration en mairie obligatoire, 2) Numéro d'enregistrement à afficher sur toutes annonces, 3) Limite 120 jours/an pour résidence principale, 4) Autorisation de changement d'usage pour résidence secondaire, 5) Taxe de séjour 1,50€/nuit/personne."
          },
          {
            question: "Quelles sanctions en cas de non-respect de la réglementation ?",
            answer: "Sanctions 2024 : Défaut déclaration = 5 000€ d'amende. Dépassement 120 jours = 5 000€ (10 000€ récidive). Pas de changement d'usage = 80 000€ + remise en état. Défaut taxe séjour = 750€ par déclaration manquante."
          },
          {
            question: "Comment déclarer ma location saisonnière à Toulouse ?",
            answer: "Démarche simplifiée 2024 : 1) Télédéclaration sur portail mairie toulouse.fr, 2) Fournir justificatifs propriété, 3) Réception numéro sous 15 jours, 4) Affichage obligatoire sur annonces. Processus entièrement dématérialisé."
          },
          {
            question: "Toulouse applique-t-elle l'encadrement des loyers ?",
            answer: "Non, Toulouse n'applique pas l'encadrement des loyers au m². Mais reste soumise au plafonnement à la relocation (zone tendue) : loyer nouveau locataire = loyer précédent, sauf vacance 18 mois ou travaux 50% d'une année de loyer."
          }
        ],
        content: `
          <div class="space-y-6">
            <div class="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
              <h2 class="text-2xl font-bold text-elegant-black mb-4">Cadre Légal 2024 : Ce Qui a Changé</h2>
              <p class="text-gray-700 leading-relaxed">
                Depuis 2023, Toulouse a renforcé ses contrôles sur les locations saisonnières. 
                <span class="text-red-600 font-semibold">Les sanctions peuvent atteindre 80 000€</span> pour les infractions graves 
                (source : Code de l'urbanisme, article L631-7).
              </p>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">Obligations Légales par Type</h2>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h3 class="font-bold text-green-800 mb-3">Résidence Principale</h3>
                <ul class="space-y-2 text-sm">
                  <li>✅ <strong>Déclaration en mairie</strong> obligatoire</li>
                  <li>✅ <strong>120 jours/an maximum</strong> de location</li>
                  <li>✅ <strong>Numéro d'enregistrement</strong> à afficher</li>
                  <li>✅ <strong>Taxe de séjour</strong> : 1,50€/nuit/personne</li>
                  <li>❌ Pas de changement d'usage</li>
                </ul>
              </div>
              
              <div class="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                <h3 class="font-bold text-orange-800 mb-3">Résidence Secondaire</h3>
                <ul class="space-y-2 text-sm">
                  <li>✅ <strong>Autorisation changement d'usage</strong></li>
                  <li>✅ <strong>Déclaration en mairie</strong></li>
                  <li>✅ <strong>Compensation</strong> (création logement social)</li>
                  <li>✅ <strong>Numéro d'enregistrement</strong></li>
                  <li>⚠️ <strong>Aucune limite</strong> de jours</li>
                </ul>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">Procédure de Déclaration</h2>
            <div class="bg-blue-50 p-6 rounded-lg">
              <h3 class="font-bold text-blue-800 mb-4">Étapes de Déclaration 2024 :</h3>
              <ol class="space-y-3">
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                  <div>
                    <strong>Télédéclaration :</strong> Portail officiel toulouse.fr > Services en ligne > Location saisonnière
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                  <div>
                    <strong>Documents :</strong> Titre propriété, plan logement, attestation assurance
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                  <div>
                    <strong>Délai :</strong> Numéro d'enregistrement reçu sous 15 jours ouvrés
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                  <div>
                    <strong>Affichage :</strong> Numéro obligatoire sur toutes plateformes (Airbnb, Booking...)
                  </div>
                </li>
              </ol>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">Sanctions Encourues</h2>
            <div class="overflow-x-auto">
              <table class="w-full bg-white border border-gray-200 rounded-lg">
                <thead class="bg-red-50">
                  <tr>
                    <th class="p-3 text-left font-bold">Infraction</th>
                    <th class="p-3 text-left font-bold">1ère fois</th>
                    <th class="p-3 text-left font-bold">Récidive</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr>
                    <td class="p-3">Défaut de déclaration</td>
                    <td class="p-3 text-red-600 font-bold">5 000€</td>
                    <td class="p-3 text-red-700 font-bold">10 000€</td>
                  </tr>
                  <tr>
                    <td class="p-3">Dépassement 120 jours</td>
                    <td class="p-3 text-red-600 font-bold">5 000€</td>
                    <td class="p-3 text-red-700 font-bold">10 000€</td>
                  </tr>
                  <tr>
                    <td class="p-3">Changement d'usage illégal</td>
                    <td class="p-3 text-red-600 font-bold">80 000€*</td>
                    <td class="p-3 text-red-700 font-bold">80 000€ + remise en état*</td>
                  </tr>
                  <tr>
                    <td class="p-3">Défaut taxe de séjour</td>
                    <td class="p-3 text-orange-600 font-bold">750€**</td>
                    <td class="p-3 text-red-600 font-bold">1 500€**</td>
                  </tr>
                </tbody>
              </table>
              <p class="text-xs text-gray-600 mt-2">
                *Source : Code de l'urbanisme, article L631-7<br>
                **Montants indicatifs selon Code général des collectivités territoriales
              </p>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">Taxe de Séjour 2024</h2>
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 class="font-bold mb-2">Montants Toulouse (officiels) :</h3>
                  <ul class="space-y-1 text-sm">
                    <li>• <strong>Meublé tourisme :</strong> 1,50€/nuit/personne</li>
                    <li>• <strong>Hôtel 4-5* :</strong> 4,50€/nuit/personne</li>
                    <li>• <strong>Camping :</strong> 0,70€/nuit/personne</li>
                    <li>• <strong>Gratuit :</strong> < 18 ans</li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold mb-2">Déclaration :</h3>
                  <ul class="space-y-1 text-sm">
                    <li>• <strong>Périodicité :</strong> Trimestrielle</li>
                    <li>• <strong>Échéance :</strong> 15 du mois suivant</li>
                    <li>• <strong>Plateforme :</strong> Portail mairie</li>
                    <li>• <strong>Paiement :</strong> Virement bancaire</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">Zones d'Application</h2>
            <div class="space-y-4">
              <div class="bg-gray-50 p-4 rounded">
                <h3 class="font-bold text-gray-800">Zones Autorisées (sous conditions) :</h3>
                <p class="text-sm mt-1">Tout Toulouse métropole. Pas de zones d'interdiction spécifiques contrairement à Paris.</p>
              </div>
              <div class="bg-red-50 p-4 rounded">
                <h3 class="font-bold text-red-800">Restrictions Particulières :</h3>
                <ul class="text-sm mt-1 space-y-1">
                  <li>• <strong>Centre historique :</strong> Autorisations plus strictes pour changement d'usage</li>
                  <li>• <strong>Logements sociaux :</strong> Interdiction totale</li>
                  <li>• <strong>Copropriétés :</strong> Vérifier règlement intérieur</li>
                </ul>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">Contrôles & Statistiques</h2>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-blue-50 p-4 rounded text-center">
                <h3 class="font-bold text-blue-800">Contrôles 2023</h3>
                <p class="text-2xl font-bold text-blue-600 mt-2">847*</p>
                <p class="text-sm text-gray-600">*Estimation inspections</p>
              </div>
              <div class="bg-red-50 p-4 rounded text-center">
                <h3 class="font-bold text-red-800">Infractions</h3>
                <p class="text-2xl font-bold text-red-600 mt-2">23%*</p>
                <p class="text-sm text-gray-600">*Estimation taux d'infraction</p>
              </div>
              <div class="bg-green-50 p-4 rounded text-center">
                <h3 class="font-bold text-green-800">Conformes</h3>
                <p class="text-2xl font-bold text-green-600 mt-2">2 847*</p>
                <p class="text-sm text-gray-600">*Estimation logements déclarés</p>
              </div>
            </div>

            <h2 class="text-2xl font-bold text-elegant-black">Conseils Pratiques</h2>
            <div class="bg-green-50 border-l-4 border-green-500 p-4">
              <ul class="space-y-2">
                <li>✅ <strong>Déclarez AVANT</strong> la première mise en location</li>
                <li>✅ <strong>Tenez un registre</strong> des nuitées (contrôle 120 jours)</li>
                <li>✅ <strong>Assurez-vous</strong> en responsabilité civile professionnelle</li>
                <li>✅ <strong>Informez la copropriété</strong> si applicable</li>
                <li>✅ <strong>Conservez</strong> tous justificatifs 3 ans minimum</li>
              </ul>
            </div>
          </div>
        `
      }
    };
    
    return articles[articleId] || null;
  };

  const article = getArticle(id || '');

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Article non trouvé</h1>
          <button onClick={handleBackToBlog} className="text-elegant-black hover:underline">
            ← Retour au blog
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* SEO Meta tags */}
      <title>{article.title} | L'Intendant Toulouse</title>
      <meta name="description" content={article.metaDescription} />
      
      {/* Schema FAQ JSON-LD */}
      {article.faq && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(article.faq))
          }}
        />
      )}
      
      <Header />
      
      <article className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-600">
            <Link to="/" className="hover:text-elegant-black">Accueil</Link>
            <span className="mx-2">›</span>
            <Link to="/blog" className="hover:text-elegant-black">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-elegant-black">{article.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="bg-elegant-black text-white px-3 py-1 rounded text-sm font-medium">
                {article.category}
              </span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <span>{article.date}</span>
              <span>•</span>
              <span>de lecture</span>
              <span>•</span>
              <span>Par L'Intendant</span>
            </div>

            <img 
              src={article.image}
              alt={article.title}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              loading="eager"
              decoding="async"
            />
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* FAQ Section */}
          {article.faq && (
            <div className="mt-16 mb-16">
              <h2 className="font-playfair text-3xl font-bold text-elegant-black mb-8">
                Questions Fréquentes
              </h2>
              <div className="space-y-6">
                {article.faq.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="font-semibold text-lg text-elegant-black mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="font-playfair text-2xl font-bold text-elegant-black mb-4">
              Prêt à optimiser votre investissement Airbnb ?
            </h2>
            <p className="text-gray-700 mb-6">
              Contactez L'Intendant pour une étude personnalisée de votre projet et découvrez comment augmenter vos revenus de 25% en moyenne.
            </p>
            <Link 
              to="/"
              onClick={() => {
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-elegant-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              Demander un devis gratuit
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <button 
              onClick={handleBackToBlog}
              className="inline-flex items-center text-elegant-black hover:text-gray-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au blog
            </button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost; 