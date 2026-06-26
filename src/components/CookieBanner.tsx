import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      // Charger Google Analytics si consentement donné
      if (consent === 'accepted') {
        loadGoogleAnalytics();
      }
    }
  }, []);

  const loadGoogleAnalytics = () => {
    // Remplacer par votre vrai ID Google Analytics (ex: G-XXXXXXXXXX)
    const GA_ID = 'G-XXXXXXXXXX'; // À REMPLACER par votre vrai ID GA4
    
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `;
    document.head.appendChild(script2);
  };

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const refuseCookies = () => {
    localStorage.setItem('cookie-consent', 'refused');
    setShowBanner(false);
    // Ne pas charger Google Analytics
  };

  const acceptOnlyEssential = () => {
    localStorage.setItem('cookie-consent', 'essential-only');
    setShowBanner(false);
    // Ne charger que les cookies essentiels
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="container mx-auto max-w-6xl">
        {!showDetails ? (
          // Vue simple
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-700 leading-relaxed">
                🍪 <strong>Respect de votre vie privée</strong><br/>
                Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. 
                Vous pouvez choisir d'accepter ou refuser les cookies non-essentiels.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowDetails(true)}
                className="text-sm text-gray-600 underline hover:text-gray-800"
              >
                Personnaliser
              </button>
              <button
                onClick={refuseCookies}
                className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
              >
                Refuser
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 text-sm bg-elegant-black text-white rounded hover:bg-gray-800"
              >
                Accepter tout
              </button>
            </div>
          </div>
        ) : (
          // Vue détaillée
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-gray-800">Gestion des cookies</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="p-3 border rounded">
                <h4 className="font-medium mb-2">🔧 Cookies essentiels</h4>
                <p className="text-gray-600 mb-2">
                  Nécessaires au fonctionnement du site (navigation, sécurité).
                </p>
                <span className="text-green-600 font-medium">Toujours actifs</span>
              </div>
              
              <div className="p-3 border rounded">
                <h4 className="font-medium mb-2">📊 Cookies analytiques</h4>
                <p className="text-gray-600 mb-2">
                  Google Analytics pour comprendre l'utilisation du site.
                </p>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" id="analytics-cookies" />
                  <span>Autoriser</span>
                </label>
              </div>
            </div>

            <div className="text-xs text-gray-600">
              <p>
                En savoir plus : <a href="/politique-confidentialite" className="underline">Politique de confidentialité</a>
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-end">
              <button
                onClick={acceptOnlyEssential}
                className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50"
              >
                Essentiels uniquement
              </button>
              <button
                onClick={() => {
                  const analyticsCheckbox = document.getElementById('analytics-cookies') as HTMLInputElement;
                  if (analyticsCheckbox?.checked) {
                    acceptCookies();
                  } else {
                    acceptOnlyEssential();
                  }
                }}
                className="px-4 py-2 text-sm bg-elegant-black text-white rounded hover:bg-gray-800"
              >
                Confirmer mes choix
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner; 