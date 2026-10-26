(function() {
  "use strict";

  // =============================================
  // 1. NAVBAR (SCROLLSPY)
  // =============================================
  const navItems = document.querySelectorAll('.nav-item');
  const indicator = document.getElementById('indicator');
  const navLinks = document.getElementById('navLinks');

  if (navItems.length > 0 && indicator && navLinks) {
    const sections = {};

    navItems.forEach(item => {
      const sectionId = item.dataset.section;
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) sections[sectionId] = el;
      }
    });

    function getItemRect(item) {
      const navRect = navLinks.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();
      return { left: itemRect.left - navRect.left + 2, width: itemRect.width - 4 };
    }

    let previousScrollY = window.scrollY;
    let currentActiveId = null;

    function moveIndicatorToItem(item) {
      if (!item) return;
      const rect = getItemRect(item);
      indicator.style.left = rect.left + 'px';
      indicator.style.width = rect.width + 'px';
    }

    function getActiveSection() {
      let maxRatio = 0;
      let activeId = null;
      const viewportHeight = window.innerHeight;

      for (const [id, el] of Object.entries(sections)) {
        const rect = el.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
        if (visibleHeight <= 0) continue;
        const ratio = visibleHeight / rect.height;
        const centerDist = Math.abs(rect.top + rect.height/2 - viewportHeight/2);
        const weight = ratio * 0.7 + (1 - centerDist / viewportHeight) * 0.3;
        if (weight > maxRatio) { maxRatio = weight; activeId = id; }
      }
      if (!activeId) {
        for (const [id, el] of Object.entries(sections)) {
          if (el.getBoundingClientRect().top < viewportHeight * 0.7) { activeId = id; break; }
        }
      }
      return activeId;
    }

    function updateActiveSection() {
      const activeId = getActiveSection();
      if (!activeId) return;
      previousScrollY = window.scrollY;

      if (activeId !== currentActiveId) {
        currentActiveId = activeId;
        let targetItem = null;
        navItems.forEach(item => { if (item.dataset.section === activeId) targetItem = item; });
        if (targetItem) {
          moveIndicatorToItem(targetItem);
          navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.section === activeId);
          });
        }
      }
    }

    function initIndicator() {
      const activeId = getActiveSection() || 'inicio';
      let targetItem = null;
      navItems.forEach(item => { if (item.dataset.section === activeId) targetItem = item; });
      if (!targetItem) targetItem = navItems[0];
      const rect = getItemRect(targetItem);
      indicator.style.left = rect.left + 'px';
      indicator.style.width = rect.width + 'px';
      navItems.forEach(item => { item.classList.toggle('active', item === targetItem); });
      currentActiveId = activeId;
    }

    navItems.forEach(item => {
      item.addEventListener('click', function() {
        const sectionId = this.dataset.section;
        if (!sectionId) return;
        const targetSection = document.getElementById(sectionId);
        if (!targetSection) return;
        const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      });
    });

    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => { updateActiveSection(); ticking = false; });
        ticking = true;
      }
    }

    function onResize() {
      if (currentActiveId) {
        let targetItem = null;
        navItems.forEach(item => { if (item.dataset.section === currentActiveId) targetItem = item; });
        if (targetItem) {
          const rect = getItemRect(targetItem);
          indicator.style.left = rect.left + 'px';
          indicator.style.width = rect.width + 'px';
        }
      }
    }

    window.addEventListener('load', function() { initIndicator(); setTimeout(updateActiveSection, 120); });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
  }

  // =============================================
  // 2. SELECTOR DE IDIOMA
  // =============================================
  const langToggle = document.getElementById('langToggle');
  const langDropdown = document.getElementById('langDropdown');
  const langCurrent = document.getElementById('langCurrent');
  const langOptions = document.querySelectorAll('.lang-option');

  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('open');
      langDropdown.classList.toggle('open');
    });

    document.addEventListener('click', function() {
      langToggle.classList.remove('open');
      langDropdown.classList.remove('open');
    });

    langOptions.forEach(option => {
  option.addEventListener('click', function() {
    const lang = this.dataset.lang;

    // Llamar al motor de traducción
    if (typeof setLanguage === 'function') {
      setLanguage(lang);
    }

    langToggle.classList.remove('open');
    langDropdown.classList.remove('open');
  });
});
  }

  // =============================================
  // 3. CARRUSEL DE LOGOS
  // =============================================
  const topTrack = document.getElementById('topTrack');
  const bottomTrack = document.getElementById('bottomTrack');

  if (topTrack && bottomTrack) {
    const insurers = [
      { name: 'UnitedHealthcare', shortName: 'UHC', svg: `<img src="img/marquee/uhc.png" alt="UnitedHealthcare">` },
      { name: 'Cigna', shortName: 'Cigna', svg: `<img src="img/marquee/cigna.png" alt="Cigna">` },
      { name: 'Blue Cross Blue Shield', shortName: 'BCBS', svg: `<img src="img/marquee/bcbs.png" alt="BCBS">` },
      { name: 'Aetna', shortName: 'Aetna', svg: `<img src="img/marquee/aetna.png" alt="Aetna">` },
      { name: 'Humana', shortName: 'Humana', svg: `<img src="img/marquee/humana.png" alt="Humana">` },
      { name: 'Molina Healthcare', shortName: 'Molina', svg: `<img src="img/marquee/molina.png" alt="Molina">` },
      { name: 'Ambetter', shortName: 'Ambetter', svg: `<img src="img/marquee/ambetter.png" alt="Ambetter">` },
      { name: 'Oscar Health', shortName: 'Oscar', svg: `<img src="img/marquee/oscar.png" alt="Oscar">` },
      { name: 'Imperial', shortName: 'Imperial', svg: `<img src="img/marquee/imperial.png" alt="Imperial">` },
      { name: 'Kaiser Health', shortName: 'Kaiser', svg: `<img src="img/marquee/kaiser.png" alt="Kaiser">` },
      { name: 'Community Choice', shortName: 'Community Choice', svg: `<img src="img/marquee/communitychoice.png" alt="Community Choice">` }
    ];

    function createInsurerCard(insurer) {
      const card = document.createElement('div');
      card.className = 'insurer-card';
      card.innerHTML = `<div class="logo-container">${insurer.svg}</div><span class="card-name">${insurer.shortName}</span>`;
      return card;
    }

    function populateTrack(track, list) {
      track.innerHTML = '';
      [...list, ...list].forEach(insurer => track.appendChild(createInsurerCard(insurer)));
    }

    populateTrack(topTrack, insurers);
    populateTrack(bottomTrack, insurers);

    let topCount = 0, bottomCount = 0;

    function pauseTrack(track) { if (!track.classList.contains('paused')) track.classList.add('paused'); }
    function resumeTrack(track, type) {
      if ((type === 'top' && topCount <= 0) || (type === 'bottom' && bottomCount <= 0)) {
        track.classList.remove('paused');
      }
    }

    function handleStart(card, track, type) {
      card.classList.add('touch-active');
      if (type === 'top') { topCount++; pauseTrack(track); }
      else { bottomCount++; pauseTrack(track); }
    }

    function handleEnd(card, track, type) {
      card.classList.remove('touch-active');
      if (type === 'top') { topCount = Math.max(0, topCount - 1); resumeTrack(track, 'top'); }
      else { bottomCount = Math.max(0, bottomCount - 1); resumeTrack(track, 'bottom'); }
    }

        function attachListeners(track, type) {
      track.querySelectorAll('.insurer-card').forEach(card => {
        // Desktop
        card.addEventListener('mouseenter', () => handleStart(card, track, type));
        card.addEventListener('mouseleave', () => handleEnd(card, track, type));

        // Táctil: solo activa el efecto, NO bloquea el scroll
        let touchStartY = 0;
        let touchStartX = 0;
        let isScrollingVertical = false;

        card.addEventListener('touchstart', (e) => {
          touchStartY = e.touches[0].clientY;
          touchStartX = e.touches[0].clientX;
          isScrollingVertical = false;
          handleStart(card, track, type);
        }, { passive: true });

        card.addEventListener('touchmove', (e) => {
          const deltaY = Math.abs(e.touches[0].clientY - touchStartY);
          const deltaX = Math.abs(e.touches[0].clientX - touchStartX);
          // Si el gesto es más vertical que horizontal → el usuario quiere scrollear
          if (deltaY > 10 && deltaY > deltaX) {
            isScrollingVertical = true;
            handleEnd(card, track, type);
          }
        }, { passive: true });

        card.addEventListener('touchend', () => {
          if (!isScrollingVertical) {
            handleEnd(card, track, type);
          }
        });
      });
    }

    attachListeners(topTrack, 'top');
    attachListeners(bottomTrack, 'bottom');
  }

  // =============================================
  // 4. TARJETAS DE SERVICIO
  // =============================================
  const serviceCarousel = document.getElementById('carouselContainer');
  const scrollLeftBtn = document.getElementById('scrollLeftBtn');
  const scrollRightBtn = document.getElementById('scrollRightBtn');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalIntro = document.getElementById('modalIntro');
  const modalPoints = document.getElementById('modalPoints');

  if (serviceCarousel && scrollLeftBtn && scrollRightBtn && modalBackdrop) {
        // Función que construye el array según el idioma actual
    function getServicesData() {
      const lang = localStorage.getItem('lang') || 'es';
      const tr = window.translations?.[lang] || {};

      // Función auxiliar para obtener texto con fallback
      const gt = (key) => tr[key] || '';

      return [
        {
          title: gt('service1_title'),
          modalTitle: gt('service1_modalTitle'),
          intro: gt('service1_intro'),
          points: [gt('service1_point1'), gt('service1_point2'), gt('service1_point3')],
          ctaText: gt('service1_cta'),
          ctaText: gt('service1_cta'),
          ctaLink: gt('service1_ctaLink')
        },
        {
          title: gt('service2_title'),
          modalTitle: gt('service2_modalTitle'),
          intro: gt('service2_intro'),
          points: [gt('service2_point1'), gt('service2_point2'), gt('service2_point3')],
          ctaText: gt('service2_cta'),
          ctaText: gt('service2_cta'),
          ctaLink: gt('service2_ctaLink')
        },
        {
          title: gt('service3_title'),
          modalTitle: gt('service3_modalTitle'),
          intro: gt('service3_intro'),
          points: [gt('service3_point1'), gt('service3_point2'), gt('service3_point3')],
          ctaText: gt('service3_cta'),
          ctaText: gt('service3_cta'),
          ctaLink: gt('service3_ctaLink')
        },
        {
          title: gt('service4_title'),
          modalTitle: gt('service4_modalTitle'),
          intro: gt('service4_intro'),
          points: [gt('service4_point1'), gt('service4_point2'), gt('service4_point3')],
          ctaText: gt('service4_cta'),
          ctaText: gt('service4_cta'),
          ctaLink: gt('service4_ctaLink')
        },
        {
          title: gt('service5_title'),
          modalTitle: gt('service5_modalTitle'),
          intro: gt('service5_intro'),
          points: [gt('service5_point1'), gt('service5_point2'), gt('service5_point3')],
          ctaText: gt('service5_cta'),
          ctaText: gt('service5_cta'),
          ctaLink: gt('service5_ctaLink')
        },
        {
          title: gt('service6_title'),
          modalTitle: gt('service6_modalTitle'),
          intro: gt('service6_intro'),
          points: [gt('service6_point1'), gt('service6_point2'), gt('service6_point3')],
          ctaText: gt('service6_cta'),
          ctaText: gt('service6_cta'),
          ctaLink: gt('service6_ctaLink')
        },
        {
          title: gt('service7_title'),
          modalTitle: gt('service7_modalTitle'),
          intro: gt('service7_intro'),
          points: [gt('service7_point1'), gt('service7_point2'), gt('service7_point3')],
          ctaText: gt('service7_cta'),
          ctaText: gt('service7_cta'),
          ctaLink: gt('service7_ctaLink')
        },
        {
          title: gt('service8_title'),
          modalTitle: gt('service8_modalTitle'),
          intro: gt('service8_intro'),
          points: [gt('service8_point1'), gt('service8_point2'), gt('service8_point3')],
          ctaText: gt('service8_cta'),
          ctaText: gt('service8_cta'),
          ctaLink: gt('service8_ctaLink')
        }
      ];
    }

    // Generar las tarjetas según el idioma actual
    let servicesData = getServicesData();
  
    const iconPaths = [
      '<path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="12" cy="7" r="4"/><path d="M17 11.5a4 4 0 0 1 2 7.5"/>',
      '<rect x="2" y="7" width="20" height="13" rx="3"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="14" y1="12" x2="18" y2="12"/><line x1="6" y1="16" x2="10" y2="16"/>',
      '<path d="M12 5.5C10 5.5 8 7 8 10c0 2.5 1.5 6 4 6s4-3.5 4-6c0-3-2-4.5-4-4.5z"/><path d="M6 12c-1.5 1-2 3-1 4.5s3.5 2 5 1"/><path d="M18 12c1.5 1 2 3 1 4.5s-3.5 2-5 1"/>',
      '<circle cx="12" cy="12" r="2"/><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z"/>',
      '<path d="M12 3l7 5v6c0 4-3 7-7 9-4-2-7-5-7-9V8l7-5z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
      '<path d="M19 14c1.5-1.5 2-3.5 2-5.5C21 5 18 3 15 3c-1.7 0-3.2 1-4 2.5C10.2 4 8.7 3 7 3 4 3 1 5 1 8.5 1 10.5 1.5 12.5 3 14l9 9 7-9z"/>',
      '<rect x="2" y="6" width="20" height="14" rx="2"/><line x1="12" y1="10" x2="12" y2="18"/><line x1="8" y1="14" x2="16" y2="14"/><line x1="6" y1="6" x2="6" y2="4"/><line x1="18" y1="6" x2="18" y2="4"/>',
      '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
    ];

    function generateCards() {
      serviceCarousel.innerHTML = '';
      servicesData.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.setAttribute('data-index', index);
        card.innerHTML = `
          <div class="card-top">
            <h2 class="card-title">${service.title}</h2>
            <p class="card-desc">${service.points[0]}</p>
          </div>
          <div class="card-bottom">
            <svg class="card-icon" viewBox="0 0 24 24">${iconPaths[index % iconPaths.length]}</svg>
          </div>
        `;
        card.addEventListener('click', () => openModal(index));
        serviceCarousel.appendChild(card);
      });
    }

        generateCards();

    // Regenerar tarjetas cuando cambia el idioma
    window.addEventListener('languageChanged', () => {
      servicesData = getServicesData();
      generateCards();
    });

    function scrollCarousel(direction) {
      const cards = document.querySelectorAll('.service-card');
      if (cards.length === 0) return;
      const cardWidth = cards[0].getBoundingClientRect().width || 270;
      serviceCarousel.scrollBy({ left: (cardWidth + 22) * direction, behavior: 'smooth' });
    }

    scrollLeftBtn.addEventListener('click', () => scrollCarousel(-1));
    scrollRightBtn.addEventListener('click', () => scrollCarousel(1));

  function openModal(index) {
  const data = servicesData[index];
  if (!data) return;

  modalTitle.textContent = data.modalTitle;
  modalIntro.textContent = data.intro;

  modalPoints.innerHTML = '';
  data.points.forEach(point => {
    const li = document.createElement('li');
    li.textContent = point;
    modalPoints.appendChild(li);
  });

  // CTA dinámico (elimina el anterior si existe)
  const oldCta = document.getElementById('modalCta');
  if (oldCta) oldCta.remove();

  const cta = document.createElement('a');
  cta.id = 'modalCta';
  cta.className = 'btn-primary modal-cta';
  cta.href = data.ctaLink;
  cta.target = '_blank';
  cta.rel = 'noopener noreferrer';
  cta.textContent = data.ctaText;

  const modalContainer = document.querySelector('.modal-container');
  if (modalContainer) modalContainer.appendChild(cta);

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

    function closeModal() {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (e) => { if (e.target === modalBackdrop) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) closeModal(); });
  }
   // =============================================
  // 5. PRUEBA SOCIAL — Contadores y rotación
  // =============================================
  const socialProofGrid = document.querySelector('.social-proof-grid');

  if (socialProofGrid) {

    // ---------- Contadores animados ----------
    const statNumbers = socialProofGrid.querySelectorAll('.stat-number');

    function animateCount(el, target, duration = 2000) {
      const start = 0;
      const startTime = performance.now();

      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out (más suave al final)
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(start + (target - start) * eased);
        el.textContent = value;

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = target;
        }
      }

      requestAnimationFrame(tick);
    }

    // Lanzar cuando la sección entra en pantalla (1 sola vez)
    const countersObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          statNumbers.forEach(el => {
            const target = parseInt(el.dataset.count, 10);
            if (!isNaN(target)) animateCount(el, target);
          });
          observer.disconnect(); // solo una vez
        }
      });
    }, { threshold: 0.3 });

    countersObserver.observe(socialProofGrid);


    // ---------- Rotación del testimonio ----------
    const slides = socialProofGrid.querySelectorAll('.testimonial-slide');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (slides.length > 1 && !prefersReducedMotion) {
      let currentSlide = 0;

      setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      }, 6000);
    }

  }
// =============================================
// 6. PALABRA ROTATIVA EN HERO
// =============================================
const rotatingWord = document.getElementById('rotatingWord');

if (rotatingWord) {
  // Obtener idioma actual y sus palabras
  function getCurrentWords() {
    const lang = localStorage.getItem('lang') || 'es';
    return window.translations?.[lang]?.hero_words || ['seguros', 'impuestos', 'inmigración'];
  }

  let words = getCurrentWords();
  let currentWordIndex = 0;
  let isRotating = false;

  function rotateHeroWord() {
    if (isRotating) return;
    isRotating = true;

    // Animar salida
    rotatingWord.classList.add('animating-out');

    setTimeout(() => {
      // Cambiar palabra
      currentWordIndex = (currentWordIndex + 1) % words.length;
      rotatingWord.textContent = words[currentWordIndex];

      // Animar entrada
      rotatingWord.classList.remove('animating-out');
      rotatingWord.classList.add('animating-in');

      setTimeout(() => {
        rotatingWord.classList.remove('animating-in');
        isRotating = false;
      }, 600);
    }, 600);
  }

  // Iniciar rotación cada 5 segundos
  setInterval(rotateHeroWord, 5000);

  // Escuchar cambios de idioma
  window.addEventListener('languageChanged', (e) => {
    words = getCurrentWords();
    currentWordIndex = 0;
    rotatingWord.textContent = words[0];
  });
}

// ==================================
// 7. STICKY WHATSAPP
// ==================================
const whatsappSticky = document.getElementById('whatsappSticky');

if (whatsappSticky) {
  const SHOW_AFTER = 300; // px scrolleados para mostrarlo
  let ticking = false;

  function updateSticky() {
    if (window.scrollY > SHOW_AFTER) {
      whatsappSticky.classList.add('visible');
    } else {
      whatsappSticky.classList.remove('visible');
    }
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateSticky);
      ticking = true;
    }
  }, { passive: true });

  // Estado inicial
  updateSticky();
}
// ==================================
// 8. AÑO DINÁMICO EN EL FOOTER
// ==================================
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
// =============================================
// 9. FORMULARIO DE CONTACTO MULTI-STEP
// =============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const steps = contactForm.querySelectorAll('.form-step');
  const stepInfo = document.getElementById('stepInfo');
  const progressFill = document.getElementById('progressFill');
  const btnBack = document.getElementById('btnBack');
  const btnNext = document.getElementById('btnNext');
  const btnSubmit = document.getElementById('btnSubmit');
  const formError = document.getElementById('formError');
  const formSuccess = document.getElementById('formSuccess');

  let currentStep = 0;
  const totalSteps = steps.length;
  let hasNavigated = false;
  // --- Validación por campo ---
  function validateField(input) {
    const value = input.value.trim();
    const type = input.type;
    const name = input.name;
    let error = '';

    // Limpiar error anterior
    const oldError = input.parentElement.querySelector('.field-error');
    if (oldError) oldError.remove();
    input.classList.remove('error');

    // Nombre / Apellido: mínimo 2 letras, solo letras y espacios
    if (name === 'nombre' || name === 'apellido') {
  if (!value) error = t('form_error_requerido');
  else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,}$/.test(value)) error = t('form_error_nombre');
}

if (type === 'email') {
  if (!value) error = t('form_error_requerido');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = t('form_error_email');
}

if (type === 'tel') {
  if (!value) error = t('form_error_requerido');
  else if (!/^[\d\s\-\(\)]{7,}$/.test(value)) error = t('form_error_telefono');
}

if (input.tagName === 'SELECT') {
  if (!value) error = t('form_error_select');
}

if (input.tagName === 'TEXTAREA') {
  if (!value) error = t('form_error_mensaje');
  else if (value.length < 10) error = t('form_error_mensaje_corto');
}

    // Mostrar error
    if (error) {
      input.classList.add('error');
      const span = document.createElement('span');
      span.className = 'field-error';
      span.textContent = error;
      input.parentElement.appendChild(span);
      return false;
    }

    return true;
  }

  // --- Validar todos los campos del paso actual ---
  function validateCurrentStep() {
    const currentFields = steps[currentStep].querySelectorAll('input, select, textarea');
    let valid = true;
    currentFields.forEach(field => {
      if (!validateField(field)) valid = false;
    });
    return valid;
  }

  // --- Actualizar UI según paso ---
  function updateStep() {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === currentStep);
    });

    const template = t('form_paso');
stepInfo.textContent = template
  .replace('{current}', currentStep + 1)
  .replace('{total}', totalSteps);
    progressFill.style.width = `${((currentStep + 1) / totalSteps) * 100}%`;

    btnBack.style.display = currentStep === 0 ? 'none' : 'inline-flex';
    btnNext.style.display = currentStep === totalSteps - 1 ? 'none' : 'inline-flex';
    btnSubmit.style.display = currentStep === totalSteps - 1 ? 'inline-flex' : 'none';

    // Limpiar error general al cambiar de paso
    formError.classList.remove('visible');
    formError.textContent = '';

    // Foco en el primer campo del paso solo entre los pasos 
    if (hasNavigated) {
    const firstInput = steps[currentStep].querySelector('input, select, textarea');
    if (firstInput) setTimeout(() => firstInput.focus(), 100);
  }
}

  // --- Navegación ---
  btnNext.addEventListener('click', () => {
    if (validateCurrentStep()) {
      hasNavigated = true;
      currentStep++;
      updateStep();
    }
  });

  btnBack.addEventListener('click', () => {
    hasNavigated = true;
    currentStep--;
    updateStep();
  });

  // --- Validación en vivo (al escribir) ---
  contactForm.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });

  // --- Envío ---
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateCurrentStep()) return;

    // Validar todos los pasos por seguridad
    let allValid = true;
    steps.forEach((step, i) => {
      const saved = currentStep;
      currentStep = i;
      if (!validateCurrentStep()) allValid = false;
      currentStep = saved;
    });

    if (!allValid) return;

    btnSubmit.disabled = true;
     btnSubmit.textContent = t('form_enviando');

    const formData = new FormData(contactForm);

    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
      } else {
        throw new Error('Error en el envío');
      }
    })
        .catch(() => {
      formError.textContent = t('form_error_envio');
      formError.classList.add('visible');
      btnSubmit.disabled = false;
      btnSubmit.textContent = t('form_btn_enviar');
    });
  });

  // Inicializar
  updateStep();


  // Actualizar textos del formulario cuando cambia el idioma
  window.addEventListener('languageChanged', () => {
    updateStep();
  });
}
})();