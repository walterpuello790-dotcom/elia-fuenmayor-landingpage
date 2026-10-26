(function() {
  "use strict";

  // =============================================
  // BANNER DE COOKIES — Gestión de consentimiento
  // =============================================

  const STORAGE_KEY = 'cookieConsent';
  const CONSENT_VERSION = 1; // cambia esto si actualizas la política

  const banner = document.getElementById('cookieBanner');
  const actionsView = document.getElementById('cookieActions');
  const customizeView = document.getElementById('cookieCustomize');
  const analyticsCheckbox = document.getElementById('cookieAnalytics');
  const marketingCheckbox = document.getElementById('cookieMarketing');

  if (!banner) return;

  // ---------- Leer consentimiento guardado ----------
  function getStoredConsent() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      // Si la versión cambió, pedimos consentimiento de nuevo
      if (data.version !== CONSENT_VERSION) return null;
      return data;
    } catch {
      return null;
    }
  }

  // ---------- Guardar consentimiento ----------
  function saveConsent(analytics, marketing) {
    const data = {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: !!analytics,
      marketing: !!marketing,
      date: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    applyConsent(data);
  }

  // ---------- Aplicar consentimiento (carga scripts si procede) ----------
  function applyConsent(consent) {
    if (consent.analytics) loadGoogleAnalytics();
    if (consent.marketing) loadMetaPixel();
  }

  // ---------- Cargar Google Analytics ----------
  function loadGoogleAnalytics() {
    if (window.__gaLoaded) return; // evitar cargar 2 veces
    window.__gaLoaded = true;

    const id = window.__ANALYTICS_ID__;
    if (!id || id === 'G-XXXXXXXXXX') return; // sin ID real, no cargar

    const s1 = document.createElement('script');
    s1.async = true;
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(s1);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', id, { anonymize_ip: true });
  }

  // ---------- Cargar Meta Pixel ----------
  function loadMetaPixel() {
    if (window.__pixelLoaded) return;
    window.__pixelLoaded = true;

    const id = window.__META_PIXEL_ID__;
    if (!id || id === '1096710659515343') return;

    !function(f,b,e,v,n,t,s){
      if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)
    }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

    window.fbq('init', id);
    window.fbq('track', 'PageView');
  }

  // ---------- Mostrar / ocultar banner ----------
  function showBanner() {
    banner.classList.add('visible');
  }

  function hideBanner() {
    banner.classList.remove('visible');
  }

  // ---------- Handlers de botones ----------
  function handleAction(action) {
    if (action === 'accept-all') {
      saveConsent(true, true);
      hideBanner();
    } else if (action === 'reject-all') {
      saveConsent(false, false);
      hideBanner();
    } else if (action === 'customize') {
      actionsView.style.display = 'none';
      customizeView.style.display = 'block';
    } else if (action === 'back') {
      actionsView.style.display = 'flex';
      customizeView.style.display = 'none';
    } else if (action === 'save-preferences') {
      const analytics = analyticsCheckbox?.checked || false;
      const marketing = marketingCheckbox?.checked || false;
      saveConsent(analytics, marketing);
      hideBanner();
    }
  }

  // Delegación de eventos (un solo listener para todos los botones)
  banner.addEventListener('click', (e) => {
    const btn = e.target.closest('.cookie-btn');
    if (!btn) return;
    handleAction(btn.dataset.action);
  });

  // ---------- Permite reabrir el banner desde el footer ----------
  window.openCookieSettings = function() {
    const stored = getStoredConsent();
    if (stored) {
      analyticsCheckbox.checked = stored.analytics;
      marketingCheckbox.checked = stored.marketing;
    }
    actionsView.style.display = 'none';
    customizeView.style.display = 'block';
    showBanner();
  };

  // ---------- Init ----------
  const stored = getStoredConsent();
  if (stored) {
    // Ya hay consentimiento guardado: aplicarlo sin mostrar banner
    applyConsent(stored);
  } else {
    // Sin consentimiento: mostrar banner y NO cargar nada aún
    setTimeout(showBanner, 400);
  }
})();