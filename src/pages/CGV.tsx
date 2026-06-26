import React, { useLayoutEffect, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CGV = () => {
  const phoneRef = useRef<HTMLSpanElement>(null);

  // Force le scroll immédiatement avec plusieurs tentatives
  useLayoutEffect(() => {
    // Méthode 1: window.scrollTo
    window.scrollTo(0, 0);
    // Méthode 2: document.documentElement
    document.documentElement.scrollTop = 0;
    // Méthode 3: document.body
    document.body.scrollTop = 0;
  }, []);

  // Deuxième tentative après le rendu
  useEffect(() => {
    const forceScrollTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Plusieurs tentatives espacées
    forceScrollTop();
    setTimeout(forceScrollTop, 10);
    setTimeout(forceScrollTop, 50);
    setTimeout(forceScrollTop, 100);
  }, []);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Fonction de désobfuscation du numéro de téléphone
    const deobfuscatePhone = () => {
      // Données obfusquées du numéro (encodage simple + inversion)
      const obfuscatedParts = [
        '13',  // 13
        '44',  // 44  
        '93',  // 93
        '21',  // 21
        '06'   // 06
      ];
      
      // Reconstruction du numéro
      const phoneNumber = obfuscatedParts.reverse().join(' ');
      
      // Application sécurisée avec délai
      setTimeout(() => {
        if (phoneRef.current) {
          phoneRef.current.textContent = phoneNumber;
        }
      }, Math.floor(Math.random() * 200) + 100); // Délai aléatoire entre 100-300ms
    };

    deobfuscatePhone();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero section avec image */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-on-scroll">
              <img 
                src="/__l5e/assets-v1/969ea519-f260-41d6-ad94-c0cd2b574076/oh-toulouse.jpeg"
                alt="Toulouse - Architecture et patrimoine"
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>

            {/* Titre et introduction */}
            <div className="animate-on-scroll">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
                Conditions Générales de Vente
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Les présentes Conditions Générales de Vente (CGV) régissent, sans restriction
                ni réserve, l'ensemble des prestations de services de conciergerie et d'assistance locative 
                proposées par Kyllian Vacquier, Entrepreneur Individuel.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dernière mise à jour : 8 juin 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu des CGV */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm">
            
            {/* Article 1 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                1. Objet et champ d'application
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Les présentes Conditions Générales de Vente (ci-après les « CGV ») régissent, sans restriction
                  ni réserve, l'ensemble des prestations de services de conciergerie et d'assistance locative
                  (ci-après les « Prestations ») proposées par Kyllian Vacquier, Entrepreneur Individuel
                  (micro-entreprise), immatriculé au Registre du Commerce et des Sociétés de Toulouse sous
                  le n° SIRET 93090463600014, dont le siège est sis 1 avenue de Bouconne, 31490 Léguevin,
                  France (ci-après le « Prestataire »).
                </p>
                <p>
                  Toute commande de Prestations implique l'adhésion pleine et entière du client (ci-après le
                  « Client ») aux présentes CGV, à l'exclusion de tout autre document contractualisant.
                </p>
              </div>
            </div>

            {/* Article 2 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                2. Identification du Prestataire
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p><strong>Nom :</strong> Kyllian Vacquier – Entrepreneur Individuel (micro-entreprise)</p>
                <p><strong>Siège social :</strong> 1 avenue de Bouconne, 31490 Léguevin, France</p>
                <p><strong>SIRET :</strong> 93090463600014</p>
                <p><strong>TVA intracom :</strong> Non applicable – franchise en base (art. 293 B CGI)</p>
                <p><strong>Téléphone :</strong> <span ref={phoneRef} style={{ minHeight: '1.25rem', display: 'inline-block' }}>Chargement...</span></p>
                <p><strong>Courriel :</strong> contact@lintendantconciergerie-toulouse.fr</p>
                <p><strong>Directeur de la publication :</strong> Kyllian Vacquier</p>
                <p><strong>Hébergeur du site :</strong> OVH SAS – 2 rue Kellermann, 59100 Roubaix – +33 9 72 10 10 07</p>
                <p className="mt-4">
                  Le Prestataire exerce une activité de conciergerie de locations meublées de courte durée. Il
                  n'est pas soumis à la loi n° 70-9 du 2 janvier 1970 (« loi Hoguet »).
                </p>
              </div>
            </div>

            {/* Article 3 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                3. Définitions
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Terme</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Définition</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Client / Hôte</td>
                        <td className="border border-gray-300 px-4 py-2">Propriétaire ou représentant légal d'un logement meublé mis en location saisonnière et ayant recours aux Prestations.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Voyageur</td>
                        <td className="border border-gray-300 px-4 py-2">Locataire du logement dans le cadre d'une location de courte durée.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Plateforme</td>
                        <td className="border border-gray-300 px-4 py-2">Site ou application tiers (Airbnb, Booking.com, Abritel, etc.) permettant la mise en relation entre Hôtes et Voyageurs.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Partenaire</td>
                        <td className="border border-gray-300 px-4 py-2">Prestataire tiers sélectionné par le Prestataire pour exécuter tout ou partie des Prestations.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Logement / Hébergement</td>
                        <td className="border border-gray-300 px-4 py-2">Bien immobilier meublé confié au Prestataire pour les besoins des Prestations.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Article 4 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                4. Acceptation et opposabilité des CGV
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Le Client déclare avoir pris connaissance des CGV et les avoir acceptées avant toute
                  commande ; la validation de la commande vaut signature électronique et acceptation sans
                  réserve des CGV. Les CGV sont adressées avec chaque devis et restent disponibles sur simple
                  demande.
                </p>
              </div>
            </div>

            {/* Article 5 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                5. Description détaillée des Prestations
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">5.1 Mise en valeur et diffusion de l'annonce</h3>
                  <p>
                    Le Prestataire réalise des photographies professionnelles du Logement, rédige un descriptif
                    optimisé et diffuse l'annonce sur les Plateformes pertinentes. L'annonce peut être publiée
                    depuis le compte du Prestataire ; le Client est ajouté comme co-hôte et reste propriétaire du
                    contenu.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">5.2 Gestion de la relation Voyageurs</h3>
                  <p>
                    Le Prestataire assure la communication 7 j/7 avec les prospects et Voyageurs : réponses aux
                    questions, vérification d'identité, envoi des informations pratiques, gestion des avis après
                    séjour.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">5.3 Gestion opérationnelle du séjour</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Check-in / Check-out :</strong> organisation de l'arrivée et du départ, remise/reprise des clés, vérification visuelle du Logement ;</li>
                    <li><strong>Ménage et blanchisserie :</strong> nettoyage complet du Logement, lavage et repassage du linge de maison dans les 48 h suivant chaque départ ;</li>
                    <li><strong>Maintenance courante :</strong> détection d'anomalies (pannes, casses), information immédiate du Client et, après accord, coordination des réparations avec des professionnels qualifiés.</li>
                </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">5.4 Services additionnels sur devis</h3>
                  <p>
                    Kits d'accueil, paniers gourmands, conciergerie d'expériences (transfert aéroport, réservations
                    d'activités, chef à domicile), gestion de la taxe de séjour, optimisation tarifaire dynamique,
                    etc.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">5.5 Mandat et limites d'intervention</h3>
                  <p>
                    Le Prestataire agit comme mandataire d'intérêt commun. Il n'encaisse aucun loyer ni dépôt de
                    garantie ; ceux-ci sont versés directement par la Plateforme au Client.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 6 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                6. Commande – Formation du contrat
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>La commande de Prestations se formalise :</p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>par signature électronique d'un devis détaillant la mission ;</li>
                  <li>ou par tout écrit signé mentionnant l'acceptation des présentes CGV.</li>
                </ol>
                <p>
                  Le contrat prend effet à la date de signature. Toute modification ultérieure nécessite l'accord
                  écrit des deux Parties.
                </p>
              </div>
            </div>

            {/* Article 7 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                7. Prix – Facturation – Modalités de paiement
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">7.1 Tarifs et commission</h3>
                  <p>
                    Sauf stipulation contraire, la rémunération du Prestataire correspond à [X % TTC] des loyers
                    HT effectivement encaissés par le Client, hors frais de ménage, de linge et services
                    optionnels. Les tarifs à jour figurent au devis ou à l'Annexe 2.
                </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">7.2 Frais supplémentaires</h3>
                  <p>
                    Les frais de ménage, blanchisserie, maintenance, fournitures ou prestations ponctuelles sont
                    facturés séparément, soit au Client, soit répercutés au Voyageur lorsque la Plateforme le
                    permet.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">7.3 Révision de prix</h3>
                  <p>
                    Le Prestataire peut réviser ses tarifs pour les prestations futures en notifiant le Client 30 jours
                    avant l'entrée en vigueur des nouveaux prix.
                </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">7.4 Facturation et délai de paiement</h3>
                  <p>
                    Une facture récapitulative est émise chaque mois ; règlement par virement sous 30 jours fin
                    de mois. Aucun escompte pour paiement anticipé.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">7.5 Retard ou défaut de paiement</h3>
                  <p>
                    Pénalités : taux BCE + 10 points. Indemnité forfaitaire de recouvrement : 40 €. En cas de
                    non-paiement, le Prestataire peut suspendre ou résilier les Prestations.
                </p>
                </div>
              </div>
            </div>

            {/* Article 8 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                8. Droit de rétractation (Clients consommateurs)
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Conformément aux articles L221-18 et suivants du Code de la consommation, le Client
                  consommateur dispose d'un délai de 14 jours pour se rétracter lorsqu'un contrat est conclu à
                  distance ou hors établissement. S'il souhaite que l'exécution commence avant l'expiration du
                  délai, il en fait la demande expresse et s'acquitte du montant correspondant aux Prestations
                  fournies jusqu'à la date de rétractation. Le formulaire type figure en Annexe 1.
                </p>
              </div>
            </div>

            {/* Article 9 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                9. Durée – Suspension – Résiliation
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Le contrat est conclu pour 12 mois renouvelables tacitement par périodes égales. Chaque
                  Partie peut résilier avec un préavis écrit de 30 jours. Résiliation immédiate en cas de
                  manquement grave non réparé sous 10 jours après mise en demeure.
                </p>
                <p>
                  En cas de suspension ou résiliation, les réservations déjà confirmées restent gérées jusqu'à
                  leur terme ou font l'objet d'un accord particulier.
                </p>
              </div>
            </div>

            {/* Article 10 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                10. Obligations – Responsabilités – Assurance
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">10.1 Obligations du Prestataire</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Exécuter les Prestations avec diligence, loyauté et selon les règles de l'art ;</li>
                    <li>Tenir le Client informé de tout incident ou dégradation ;</li>
                    <li>Souscrire une assurance responsabilité civile professionnelle couvrant l'activité de conciergerie.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">10.2 Obligations du Client</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Mettre à disposition un Logement conforme aux normes de sécurité et d'hygiène ;</li>
                    <li>Fournir deux jeux de clés et accès permanent au Prestataire ;</li>
                    <li>Régler les factures dans les délais ;</li>
                    <li>Assurer le Logement en multirisque habitation incluant la location saisonnière.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">10.3 Limitation de responsabilité</h3>
                  <p>
                    Le Prestataire est tenu à une obligation de moyens. Sa responsabilité est plafonnée au total des
                    commissions perçues au cours des 12 mois précédant le fait générateur, sauf faute lourde ou
                    dommage corporel.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">10.4 Force majeure</h3>
                  <p>
                    Aucune Partie ne sera responsable si l'inexécution résulte d'un événement imprévisible et
                    irrésistible. Les obligations sont suspendues pendant 30 jours ; au-delà, la Partie la plus
                    diligente peut résilier sans indemnité.
                  </p>
                </div>
              </div>
            </div>

            {/* Article 11 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                11. Données personnelles
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p>
                  Le Prestataire traite les données personnelles conformément au RGPD et à la loi
                  « Informatique et Libertés ». Les droits des personnes et les modalités de traitement figurent
                  dans la Politique de confidentialité infra.
                </p>
              </div>
            </div>

            {/* Articles 12-15 */}
            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                12. Nullité partielle
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>La nullité d'une clause n'affecte pas la validité des autres stipulations.</p>
              </div>
            </div>

            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                13. Non-renonciation
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>Le fait pour une Partie de ne pas se prévaloir d'un manquement n'emporte pas renonciation au droit.</p>
              </div>
            </div>

            <div className="mb-12 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                14. Modification des CGV
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>Les CGV peuvent être modifiées ; la nouvelle version est notifiée au Client et entre en vigueur 30 jours après notification.</p>
              </div>
            </div>

            <div className="mb-16 animate-on-scroll">
              <h2 className="font-playfair text-2xl font-semibold text-elegant-black mb-4">
                15. Droit applicable – Juridiction compétente
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>Droit français. Compétence exclusive des tribunaux du ressort de Toulouse, sauf règles impératives contraires.</p>
                
                <p className="text-sm text-gray-600 mt-8">
                  <em>Version en vigueur au 8 juin 2025</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CGV; 
