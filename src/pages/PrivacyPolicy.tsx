import React, { useLayoutEffect, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
                src="/__l5e/assets-v1/1c4df8f1-fb8e-4f0b-a063-13ec7a281591/manege.png"
                alt="Toulouse - Manège et patrimoine"
                className="w-full h-auto rounded-sm shadow-lg"
              />
            </div>

            {/* Titre et introduction */}
            <div className="animate-on-scroll">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-elegant-black mb-6">
                Mentions Légales & Politique de Confidentialité
              </h1>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Informations légales, mentions obligatoires et politique de protection des données personnelles 
                de Kyllian Vacquier, Entrepreneur Individuel.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Dernière mise à jour : 8 juin 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm">
            
            {/* Mentions légales */}
            <div className="mb-16">
            <div className="mb-12 animate-on-scroll">
                <h2 className="font-playfair text-3xl font-semibold text-elegant-black mb-6">
                  MENTIONS LÉGALES
              </h2>
                <p className="text-sm text-gray-600 mb-6">(conforme LCEN)</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1. Éditeur du site</h3>
                    <p className="text-gray-700">
                      Kyllian Vacquier – Entrepreneur Individuel (micro-entreprise) SIRET 93090463600014 –
                      1 avenue de Bouconne, 31490 Léguevin (France) Téléphone : <span ref={phoneRef} style={{ minHeight: '1.25rem', display: 'inline-block' }}>Chargement...</span> – Courriel : contact@lintendantconciergerie-toulouse.fr
                    </p>
            </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">2. Hébergeur du site</h3>
                    <p className="text-gray-700">
                      OVH SAS – 2 rue Kellermann, 59100 Roubaix – +33 9 72 10 10 07 – www.ovh.com
                    </p>
            </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">3. Directeur de la publication et responsable de la rédaction</h3>
                    <p className="text-gray-700">Kyllian Vacquier</p>
            </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">4. Données personnelles</h3>
                    <p className="text-gray-700">
                      Les informations recueillies via le formulaire de contact font l'objet d'un traitement
                      informatisé par l'Éditeur afin de répondre aux demandes des utilisateurs et, le cas échéant,
                      d'envoyer des offres de services. Conformément à la loi n° 78-17 du 6 janvier 1978 modifiée
                      et au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition, de
                      limitation et de portabilité des données vous concernant. Pour exercer ces
                      droits : Kyllian Vacquier – 1 avenue de Bouconne, 31490 Léguevin – courriel : contact@lintendantconciergerie-toulouse.fr. Pour plus de détails, voir notre Politique de confidentialité.
                    </p>
            </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">5. Propriété intellectuelle et contenus</h3>
                    <p className="text-gray-700">
                      L'ensemble du site (structure générale, textes, images, vidéos, sons, logos, graphismes,
                      icônes, bases de données, etc.) est la propriété exclusive de l'Éditeur ou de ses partenaires et
                      est protégé par le Code de la propriété intellectuelle. Toute reproduction ou représentation,
                      totale ou partielle, sans autorisation expresse préalable est interdite et constituerait une
                      contrefaçon pouvant engager la responsabilité civile et pénale du contrevenant.
                    </p>
                    <p className="text-gray-700 mt-3">
                      Le site est mis à disposition « en l'état ». Malgré le soin apporté à son actualisation, l'Éditeur
                      ne garantit pas l'exactitude ou l'exhaustivité des informations. Le contenu est fourni à titre
                      informatif et ne saurait se substituer à des conseils juridiques, techniques ou financiers.
                      L'utilisation que vous en faites relève de votre seule responsabilité. L'Éditeur décline toute
                      responsabilité pour tout dommage direct ou indirect résultant de la consultation ou de l'usage
                      du site.
                    </p>
              </div>
            </div>
              </div>
            </div>

            {/* Politique de confidentialité */}
            <div className="border-t border-gray-300 pt-12">
              <div className="animate-on-scroll">
                <h2 className="font-playfair text-3xl font-semibold text-elegant-black mb-6">
                  POLITIQUE DE CONFIDENTIALITÉ
              </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">1. Responsable du traitement</h3>
                    <p className="text-gray-700">
                      Kyllian Vacquier – Entrepreneur Individuel – SIRET 93090463600014 – 1 avenue de
                      Bouconne, 31490 Léguevin – courriel : contact@lintendantconciergerie-toulouse.fr
                </p>
              </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">2. Données collectées</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                      <li>Informations fournies via le formulaire de contact : nom, prénom, adresse e-mail, numéro de téléphone, contenu du message, pièces jointes éventuelles ;</li>
                      <li>Données techniques : adresse IP, horodatage, identifiant de session, journaux de sécurité.</li>
                    </ul>
            </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">3. Finalités et bases légales</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Finalité</th>
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Base légale (art. 6 RGPD)</th>
                            <th className="border border-gray-300 px-3 py-2 text-left font-semibold">Détails</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2">Répondre aux demandes de contact</td>
                            <td className="border border-gray-300 px-3 py-2">Consentement (§1-a)</td>
                            <td className="border border-gray-300 px-3 py-2">Traitement nécessaire pour répondre à la demande explicite de l'utilisateur.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2">Prospection liée aux services</td>
                            <td className="border border-gray-300 px-3 py-2">Intérêt légitime (§1-f)</td>
                            <td className="border border-gray-300 px-3 py-2">Informer les prospects de nos offres pertinentes ; opposable à tout moment.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2">Gestion des obligations légales, fiscales et comptables</td>
                            <td className="border border-gray-300 px-3 py-2">Obligation légale (§1-c)</td>
                            <td className="border border-gray-300 px-3 py-2">Conservation des factures, obligations comptables.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2">Sécurisation du site et prévention de la fraude</td>
                            <td className="border border-gray-300 px-3 py-2">Intérêt légitime (§1-f)</td>
                            <td className="border border-gray-300 px-3 py-2">Journalisation des connexions, protection contre les attaques.</td>
                          </tr>
                        </tbody>
                      </table>
              </div>
            </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">4. Destinataires</h3>
                    <p className="text-gray-700">
                      Les données sont traitées exclusivement par le Prestataire et ses sous-traitants techniques
                      (hébergeur, service mail) soumis à une obligation de confidentialité. Aucune donnée n'est
                      cédée ni vendue à des tiers commerciaux.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">5. Durées de conservation</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Donnée</th>
                            <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Durée</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Prospection (e-mails)</td>
                            <td className="border border-gray-300 px-4 py-2">3 ans après le dernier contact actif</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Journaux de sécurité</td>
                            <td className="border border-gray-300 px-4 py-2">12 mois</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">Pièces comptables</td>
                            <td className="border border-gray-300 px-4 py-2">10 ans (obligation légale)</td>
                          </tr>
                        </tbody>
                      </table>
              </div>
            </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">6. Droits des personnes</h3>
                    <p className="text-gray-700">
                      Conformément au RGPD, vous disposez des droits d'accès, rectification, effacement,
                      opposition, limitation et portabilité. Pour exercer vos droits :
                      Kyllian Vacquier – 1 avenue de Bouconne, 31490 Léguevin – courriel : contact@lintendantconciergerie-toulouse.fr
                    </p>
                    <p className="text-gray-700 mt-2">
                      Vous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).
                </p>
              </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">7. Mesures de sécurité</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                      <li>Hébergement en France chez OVH (centres de données certifiés ISO 27001) ;</li>
                      <li>Accès protégés par mots de passe forts et double authentification ;</li>
                      <li>Sauvegardes chiffrées ;</li>
                      <li>Pare-feu applicatif et mise à jour régulière des systèmes.</li>
                    </ul>
            </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">8. Cookies</h3>
                    <p className="text-gray-700">
                      Le site n'utilise que des cookies techniques indispensables au fonctionnement (gestion de
                      session). Aucun cookie de suivi ou publicitaire n'est déposé sans consentement préalable.
                </p>
              </div>
            </div>

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

export default PrivacyPolicy; 