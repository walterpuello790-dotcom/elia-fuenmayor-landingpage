/* ============================================================
   SISTEMA DE INTERNACIONALIZACIÓN (i18n)
   ============================================================ */

const translations = {
  es: {
    // NAVBAR
    nav_inicio: "Inicio",
    nav_servicios: "Servicios",
    nav_testimonios: "Testimonios",
    nav_contacto: "Contacto",

    // HERO
    hero_titulo_1: "Encontramos",
    hero_titulo_2: "tu mejor solución",
    hero_titulo_3: "en",
    hero_subtitulo: "Asesoría profesional 100% personalizada y en tu idioma para ti y para toda tu familia",
    hero_btn_primary: "Cotiza",
    hero_btn_secondary: "Contáctanos",
    hero_badge: "Confianza · Respaldo · Experiencia",

    // Palabras rotativas (arrays)
    hero_words: ["seguros", "impuestos", "inmigración"],

        // SERVICIOS
    servicios_titulo_1: "Nuestros",
    servicios_titulo_2: "Servicios",
    servicios_subtitulo: "Te ayudamos a encontrar la cobertura que mejor se adapta a ti y a tu familia",

    // FAQ
    faq1_pregunta: "¿El estatus interfiere para tener un seguro?",
    faq1_respuesta: "No",
    faq1_texto: "En Estados Unidos existen opciones de cobertura médica y protección diseñadas para la comunidad hispana, independientemente de tu situación actual. Evaluamos tu caso con total confidencialidad para encontrar un plan que se adapte a ti y a tu familia, sin complicaciones ni sorpresas.",
    faq2_pregunta: "¿Hacer tus taxes o trámites te pone en riesgo?",
    faq2_respuesta: "No",
    faq2_texto: "El IRS y las autoridades migratorias manejan procesos independientes. Presentar tus impuestos en orden demuestra tu responsabilidad en este país y protege el futuro de tu familia con total reserva profesional y sin riesgos innecesarios.",
    faq3_pregunta: "¿Quién te acompaña en el proceso?",
    faq3_respuesta: "Elia Fuenmayor",
    faq3_texto: "Tras años ayudando a la comunidad hispana a navegar el sistema de seguros e impuestos, entiendo perfectamente las dudas y el miedo a cometer errores. Mi propósito es darte una atención 100% humana, cercana y transparente, para que tomes cada decisión con absoluta tranquilidad.",

    // PRUEBA SOCIAL
    social_titulo_1: "Lo que dicen",
    social_titulo_2: "nuestros clientes",
    social_subtitulo: "Experiencias reales de personas que confiaron en nosotros",
    test1_texto: "\"Excelente servicio, me ayudaron a encontrar el plan perfecto para mi familia.\"",
    test1_autor: "— María G.",
    test2_texto: "\"Muy profesionales, resolvieron todas mis dudas desde el primer momento.\"",
    test2_autor: "— Javier R.",
    test3_texto: "\"Recomendados 100%, la atención en español fue muy profesional.\"",
    test3_autor: "— Claudia M.",
    stat_familias_1: "Familias",
    stat_familias_2: "aseguradas",
    stat_años_1: "Años de",
    stat_años_2: "experiencia",
  
        // FORMULARIO DINÁMICO (JS)
    form_paso: "Paso {current} de {total}",
    form_error_requerido: "Este campo es requerido",
    form_error_nombre: "Ingresa un nombre válido",
    form_error_email: "Ingresa un email válido",
    form_error_telefono: "Ingresa un teléfono válido (solo números)",
    form_error_select: "Selecciona una opción",
    form_error_mensaje: "El mensaje es requerido",
    form_error_mensaje_corto: "Cuéntanos un poco más (mínimo 10 caracteres)",
    form_enviando: "Enviando...",
    form_error_envio: "Hubo un problema al enviar. Intenta de nuevo o contáctanos por WhatsApp.",

    // FORMULARIO — TEXTOS
    form_paso1_titulo: "Tus datos",
    form_paso2_titulo: "¿Cómo te contactamos?",
    form_paso3_titulo: "¿Qué necesitas?",
    form_nombre_ph: "Ej: Juan",
    form_apellido_ph: "Ej: Pérez",
    form_email_ph: "Ej: juan@email.com",
    form_telefono_ph: "Ej: 210 555 1234",
    form_estado_ph: "Selecciona tu estado",
    form_estado_texas: "Texas",
    form_estado_florida: "Florida",
    form_estado_georgia: "Georgia",
    form_estado_tennessee: "Tennessee",
    form_estado_otro: "Otro estado",
    form_servicio_ph: "Selecciona un servicio",
    form_servicio_familiar: "Seguro Familiar",
    form_servicio_medicare: "Medicare",
    form_servicio_dental: "Dental",
    form_servicio_vision: "Visión",
    form_servicio_accidente: "Accidentes",
    form_servicio_vida: "Seguro de Vida",
    form_servicio_taxes: "Taxes",
    form_servicio_migracion: "Migración",
    form_mensaje_ph: "Cuéntanos brevemente qué necesitas...",
    form_btn_atras: "Atrás",
    form_btn_siguiente: "Siguiente",
    form_btn_enviar: "Enviar",
    form_exito_titulo: "¡Gracias!",
    form_exito_texto: "Te contactamos pronto.",

    // TÍTULOS DE SECCIÓN
    contacto_titulo_1: "Hablemos de",
    contacto_titulo_2: "tu caso",
    contacto_subtitulo: "Déjanos tus datos y te contactamos en menos de 24 horas",

    // FOOTER
    footer_tagline1: "Seguros de Salud y Vida",
    footer_tagline2: "Asesoría en español para la comunidad hispana",
    footer_licencia: "Agente licenciada en Texas y Florida. Servicios de cobertura disponibles en Georgia y Tennessee mediante agentes designados.",
    footer_politica: "Política de Cookies",
    footer_disclaimer1: "La información contenida en este sitio web es únicamente con fines informativos y no constituye asesoría legal, fiscal, financiera o de seguros. Las coberturas, primas, disponibilidad y elegibilidad varían según el estado, la aseguradora y la situación individual de cada persona. Toda cotización está sujeta a verificación y aprobación por parte de la aseguradora correspondiente.",
    footer_disclaimer2: "Elia Fuenmayor es una agente de seguros licenciada para operar en los estados de Texas y Florida. Los servicios descritos en este sitio no están disponibles en otros estados. La información personal que compartas a través de este sitio o por WhatsApp será tratada con estricta confidencialidad y no será compartida con terceros sin tu consentimiento, salvo cuando sea necesario para procesar una solicitud de cobertura.",

        // COOKIE BANNER
    cookie_titulo: "🍪 Usamos cookies",
    cookie_texto: "Utilizamos cookies propias y de terceros para analizar el uso del sitio y mejorar tu experiencia. Puedes aceptarlas todas, rechazarlas o configurarlas según tus preferencias. Más info en nuestra",
    cookie_politica_link: "Política de Cookies",
    cookie_rechazar: "Rechazar todas",
    cookie_personalizar: "Personalizar",
    cookie_aceptar: "Aceptar todas",
    cookie_necesarias_titulo: "Necesarias",
    cookie_necesarias_texto: "Imprescindibles para el funcionamiento del sitio. No se pueden desactivar.",
    cookie_analiticas_titulo: "Analíticas",
    cookie_analiticas_texto: "Nos ayudan a entender cómo usas la web (Google Analytics).",
    cookie_marketing_titulo: "Marketing",
    cookie_marketing_texto: "Permiten mostrarte anuncios relevantes (Meta Pixel).",
    cookie_volver: "Volver",
    cookie_guardar: "Guardar preferencias",

    // POLÍTICA DE COOKIES
    politica_titulo_1: "Política de",
    politica_titulo_2: "Cookies",
    politica_actualizacion: "Última actualización:",
    politica_que_son_titulo: "¿Qué son las cookies?",
    politica_que_son_texto: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos permiten recordar tus preferencias, analizar cómo usas la web y mostrarte contenido relevante.",
    politica_tipos_titulo: "¿Qué tipos de cookies usamos?",
    politica_tipo_necesarias_titulo: "Necesarias:",
    politica_tipo_necesarias_texto: "imprescindibles para que el sitio funcione. No se pueden desactivar.",
    politica_tipo_analiticas_titulo: "Analíticas:",
    politica_tipo_analiticas_texto: "nos ayudan a entender cómo interactúas con la web (Google Analytics).",
    politica_tipo_marketing_titulo: "Marketing:",
    politica_tipo_marketing_texto: "permiten mostrarte anuncios relevantes en otras plataformas (Meta Pixel).",
    politica_gestionar_titulo: "¿Cómo gestionar tus preferencias?",
    politica_gestionar_texto: "Puedes cambiar tus preferencias en cualquier momento desde el siguiente botón:",
    politica_gestionar_btn: "Cambiar mis preferencias de cookies",
    politica_mas_info_titulo: "Más información",
    politica_mas_info_texto: "Si tienes dudas sobre cómo usamos las cookies, puedes contactarnos a través de nuestro",
    politica_mas_info_link: "formulario de contacto",
    politica_mas_info_final: "o por WhatsApp.",

        // TARJETAS DE SERVICIOS
    service1_title: "Familiar",
    service1_modalTitle: "Protección de salud para toda tu familia",
    service1_intro: "Te ayudamos a encontrar un plan de salud completo que se adapte a tu presupuesto. Accede a consultas, emergencias y medicamentos con la cobertura y el subsidio (Obamacare) que mereces.",
    service1_point1: "Salud integral para todos",
    service1_point2: "Respaldo económico ante imprevistos",
    service1_point3: "Protección para tu hogar",
    service1_cta: "Cotizar mi seguro",

    service2_title: "Medicare",
    service2_modalTitle: "Asistencia y cobertura para adultos mayores",
    service2_intro: "¿Cumpliste 65 años o te estás preparando para el retiro? Te guiamos paso a paso para elegir la mejor opción de Medicare con los beneficios que realmente necesitas.",
    service2_point1: "Cobertura hospitalaria completa",
    service2_point2: "Ahorro en medicamentos",
    service2_point3: "Beneficios adicionales",
    service2_cta: "Recibir asesoría gratis",

    service3_title: "Dental",
    service3_modalTitle: "Cuidado integral para tu sonrisa",
    service3_intro: "Mantén tu salud bucal al día sin gastar de más. Cubre limpiezas, extracciones, empastes y tratamientos preventivos para ti y tu familia.",
    service3_point1: "Limpiezas y revisiones gratis",
    service3_point2: "Descuentos en tratamientos",
    service3_point3: "Atención inmediata",
    service3_cta: "Ver planes dentales",

    service4_title: "Vision",
    service4_modalTitle: "Protección para tu vista y la de los tuyos",
    service4_intro: "Accede a exámenes de la vista, lentes de marco o de contacto y descuentos en tratamientos oftalmológicos para cuidar tu visión.",
    service4_point1: "Exámenes anuales",
    service4_point2: "Descuentos en armazones",
    service4_point3: "Cobertura para lentes de contacto",
    service4_cta: "Ver cobertura de visión",

    service5_title: "Accidente",
    service5_modalTitle: "Respaldado ante cualquier imprevisto",
    service5_intro: "Un accidente no avisa, pero no tiene por qué desajustar tus finanzas. Recibe un apoyo económico directo para cubrir gastos médicos y de recuperación si algo llega a pasar.",
    service5_point1: "Pago directo en efectivo",
    service5_point2: "Cobertura 24/7",
    service5_point3: "Sin deducibles altos",
    service5_cta: "Proteger mi tranquilidad",

    service6_title: "De vida",
    service6_modalTitle: "El futuro de los tuyos, siempre asegurado",
    service6_intro: "Garantiza el bienestar financiero de tu familia pase lo que pase. Te ayudamos a elegir una póliza que proteja a quienes más amas y asegure su estabilidad.",
    service6_point1: "Capital inmediato",
    service6_point2: "Planes a tu medida",
    service6_point3: "Tranquilidad garantizada",
    service6_cta: "Proteger a mi familia",

    service7_title: "Taxes",
    service7_modalTitle: "Preparación de taxes fácil y sin enredos",
    service7_intro: "Declaramos tus impuestos a tiempo y de forma correcta para que aproveches al máximo tus reembolsos y créditos fiscales, sin estrés ni complicaciones con el IRS.",
    service7_point1: "Declaración precisa",
    service7_point2: "Asesoría fiscal",
    service7_point3: "Soporte ante el IRS",
    service7_cta: "Agendar mi cita de taxes",

    service8_title: "Migración",
    service8_modalTitle: "Orientación clara en tu proceso migratorio",
    service8_intro: "Sabemos lo importante que es tu tranquilidad en este país. Te acompañamos en la preparación y revisión de tus trámites migratorios con transparencia y confidencialidad.",
    service8_point1: "Residencia y ciudadanía",
    service8_point2: "Visas de trabajo",
    service8_point3: "Reunificación familiar",
    service8_cta: "Consultar con un asesor",

        service1_ctaLink: 'https://wa.me/12105598731?text=Hola,%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20y%20cotizar%20un%20Seguro%20Familiar.',
    service2_ctaLink: 'https://wa.me/12105598731?text=Hola,%20busco%20asesor%C3%ADa%20sobre%20el%20plan%20de%20Medicare.',
    service3_ctaLink: 'https://wa.me/12105598731?text=Hola,%20quisiera%20ver%20los%20planes%20disponibles%20de%20Seguro%20Dental.',
    service4_ctaLink: 'https://wa.me/12105598731?text=Hola,%20me%20interesa%20recibir%20informaci%C3%B3n%20sobre%20el%20Seguro%20de%20Visi%C3%B3n.',
    service5_ctaLink: 'https://wa.me/12105598731?text=Hola,%20me%20interesa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20del%20Seguro%20de%20Accidentes.',
    service6_ctaLink: 'https://wa.me/12105598731?text=Hola,%20quiero%20proteger%20a%20mi%20familia%20con%20un%20Seguro%20de%20Vida.',
    service7_ctaLink: 'https://wa.me/12105598731?text=Hola,%20me%20gustar%C3%ADa%20agendar%20una%20cita%20para%20mis%20Taxes.',
    service8_ctaLink: 'https://wa.me/12105598731?text=Hola,%20necesito%20orientaci%C3%B3n%20con%20un%20tr%C3%A1mite%20de%20Migraci%C3%B3n.',

        // LINKS DE WHATSAPP (fuera de servicios)
    wa_hero_cotiza: 'https://wa.me/12105598731?text=Hola,%20me%20gustar%C3%ADa%20cotizar%20un%20seguro.',
    wa_hero_contacto: 'https://wa.me/12105598731?text=Hola,%20vengo%20desde%20su%20p%C3%A1gina%20web,%20me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n.',
    wa_sticky: 'https://wa.me/12105598731?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.',
    wa_footer: 'https://wa.me/12105598731?text=Hola,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios.',
  },

  en: {
    // NAVBAR
    nav_inicio: "Home",
    nav_servicios: "Services",
    nav_testimonios: "Testimonials",
    nav_contacto: "Contact",

    // HERO
    hero_titulo_1: "We find",
    hero_titulo_2: "your best solution",
    hero_titulo_3: "in",
    hero_subtitulo: "Professional advice, 100% personalized and in your language, for you and your whole family",
    hero_btn_primary: "Get a quote",
    hero_btn_secondary: "Contact us",
    hero_badge: "Trust · Support · Experience",

    // Palabras rotativas
    hero_words: ["insurance", "taxes", "immigration"],
        // SERVICES
    servicios_titulo_1: "Our",
    servicios_titulo_2: "Services",
    servicios_subtitulo: "We help you find the coverage that best fits you and your family",

    // FAQ
    faq1_pregunta: "Does immigration status affect getting insurance?",
    faq1_respuesta: "No",
    faq1_texto: "In the United States there are health coverage and protection options designed for the Hispanic community, regardless of your current situation. We evaluate your case with complete confidentiality to find a plan that fits you and your family, without complications or surprises.",
    faq2_pregunta: "Does filing your taxes put you at risk?",
    faq2_respuesta: "No",
    faq2_texto: "The IRS and immigration authorities handle independent processes. Filing your taxes properly demonstrates your responsibility in this country and protects your family's future with complete professional confidentiality and no unnecessary risks.",
    faq3_pregunta: "Who guides you through the process?",
    faq3_respuesta: "Elia Fuenmayor",
    faq3_texto: "After years helping the Hispanic community navigate the insurance and tax system, I perfectly understand the doubts and fear of making mistakes. My purpose is to give you 100% human, close, and transparent attention, so you can make every decision with complete peace of mind.",

    // SOCIAL PROOF
    social_titulo_1: "What our",
    social_titulo_2: "clients say",
    social_subtitulo: "Real experiences from people who trusted us",
    test1_texto: "\"Excellent service, they helped me find the perfect plan for my family.\"",
    test1_autor: "— María G.",
    test2_texto: "\"Very professional, they answered all my questions from the start.\"",
    test2_autor: "— Javier R.",
    test3_texto: "\"100% recommended, the Spanish-language service was very professional.\"",
    test3_autor: "— Claudia M.",
    stat_familias_1: "Families",
    stat_familias_2: "insured",
    stat_años_1: "Years of",
    stat_años_2: "experience",

        // FORM DYNAMIC (JS)
    form_paso: "Step {current} of {total}",
    form_error_requerido: "This field is required",
    form_error_nombre: "Please enter a valid name",
    form_error_email: "Please enter a valid email",
    form_error_telefono: "Please enter a valid phone number",
    form_error_select: "Please select an option",
    form_error_mensaje: "Message is required",
    form_error_mensaje_corto: "Tell us a bit more (at least 10 characters)",
    form_enviando: "Sending...",
    form_error_envio: "There was a problem submitting. Please try again or contact us via WhatsApp.",

    // FORM — TEXTS
    form_paso1_titulo: "Your details",
    form_paso2_titulo: "How do we contact you?",
    form_paso3_titulo: "What do you need?",
    form_nombre_ph: "E.g.: John",
    form_apellido_ph: "E.g.: Smith",
    form_email_ph: "E.g.: john@email.com",
    form_telefono_ph: "E.g.: 210 555 1234",
    form_estado_ph: "Select your state",
    form_estado_texas: "Texas",
    form_estado_florida: "Florida",
    form_estado_georgia: "Georgia",
    form_estado_tennessee: "Tennessee",
    form_estado_otro: "Other state",
    form_servicio_ph: "Select a service",
    form_servicio_familiar: "Family Insurance",
    form_servicio_medicare: "Medicare",
    form_servicio_dental: "Dental",
    form_servicio_vision: "Vision",
    form_servicio_accidente: "Accident",
    form_servicio_vida: "Life Insurance",
    form_servicio_taxes: "Taxes",
    form_servicio_migracion: "Immigration",
    form_mensaje_ph: "Briefly tell us what you need...",
    form_btn_atras: "Back",
    form_btn_siguiente: "Next",
    form_btn_enviar: "Send",
    form_exito_titulo: "Thank you!",
    form_exito_texto: "We'll contact you soon.",

    // SECTION TITLES
    contacto_titulo_1: "Let's talk about",
    contacto_titulo_2: "your case",
    contacto_subtitulo: "Leave us your details and we'll contact you within 24 hours",

    // FOOTER
    footer_tagline1: "Health and Life Insurance",
    footer_tagline2: "Spanish-language guidance for the Hispanic community",
    footer_licencia: "Licensed agent in Texas and Florida. Coverage services available in Georgia and Tennessee through designated agents.",
    footer_politica: "Cookie Policy",
    footer_disclaimer1: "The information contained on this website is for informational purposes only and does not constitute legal, tax, financial, or insurance advice. Coverages, premiums, availability, and eligibility vary by state, insurer, and each person's individual situation. All quotes are subject to verification and approval by the corresponding insurer.",
    footer_disclaimer2: "Elia Fuenmayor is an insurance agent licensed to operate in the states of Texas and Florida. The services described on this site are not available in other states. The personal information you share through this site or WhatsApp will be treated with strict confidentiality and will not be shared with third parties without your consent, except when necessary to process a coverage application.",

        // COOKIE BANNER
    cookie_titulo: "🍪 We use cookies",
    cookie_texto: "We use our own and third-party cookies to analyze site usage and improve your experience. You can accept them all, reject them, or configure them according to your preferences. More info in our",
    cookie_politica_link: "Cookie Policy",
    cookie_rechazar: "Reject all",
    cookie_personalizar: "Customize",
    cookie_aceptar: "Accept all",
    cookie_necesarias_titulo: "Necessary",
    cookie_necesarias_texto: "Essential for the site to work. They cannot be disabled.",
    cookie_analiticas_titulo: "Analytics",
    cookie_analiticas_texto: "They help us understand how you use the site (Google Analytics).",
    cookie_marketing_titulo: "Marketing",
    cookie_marketing_texto: "They allow us to show you relevant ads (Meta Pixel).",
    cookie_volver: "Back",
    cookie_guardar: "Save preferences",

    // COOKIE POLICY
    politica_titulo_1: "Cookie",
    politica_titulo_2: "Policy",
    politica_actualizacion: "Last updated:",
    politica_que_son_titulo: "What are cookies?",
    politica_que_son_texto: "Cookies are small text files stored on your device when you visit a website. They allow us to remember your preferences, analyze how you use the site, and show you relevant content.",
    politica_tipos_titulo: "What types of cookies do we use?",
    politica_tipo_necesarias_titulo: "Necessary:",
    politica_tipo_necesarias_texto: "essential for the site to work. They cannot be disabled.",
    politica_tipo_analiticas_titulo: "Analytics:",
    politica_tipo_analiticas_texto: "they help us understand how you interact with the site (Google Analytics).",
    politica_tipo_marketing_titulo: "Marketing:",
    politica_tipo_marketing_texto: "they allow us to show you relevant ads on other platforms (Meta Pixel).",
    politica_gestionar_titulo: "How to manage your preferences?",
    politica_gestionar_texto: "You can change your preferences at any time using the following button:",
    politica_gestionar_btn: "Change my cookie preferences",
    politica_mas_info_titulo: "More information",
    politica_mas_info_texto: "If you have questions about how we use cookies, you can contact us through our",
    politica_mas_info_link: "contact form",
    politica_mas_info_final: "or via WhatsApp.",

        // SERVICE CARDS
    service1_title: "Family",
    service1_modalTitle: "Health protection for your whole family",
    service1_intro: "We help you find a complete health plan that fits your budget. Get access to consultations, emergencies, and medications with the coverage and subsidy (Obamacare) you deserve.",
    service1_point1: "Comprehensive health for everyone",
    service1_point2: "Financial support for the unexpected",
    service1_point3: "Protection for your home",
    service1_cta: "Get my quote",

    service2_title: "Medicare",
    service2_modalTitle: "Assistance and coverage for seniors",
    service2_intro: "Have you turned 65 or are you preparing for retirement? We guide you step by step to choose the best Medicare option with the benefits you really need.",
    service2_point1: "Complete hospital coverage",
    service2_point2: "Savings on medications",
    service2_point3: "Additional benefits",
    service2_cta: "Get free advice",

    service3_title: "Dental",
    service3_modalTitle: "Complete care for your smile",
    service3_intro: "Keep your oral health up to date without overspending. Covers cleanings, extractions, fillings, and preventive treatments for you and your family.",
    service3_point1: "Free cleanings and checkups",
    service3_point2: "Discounts on treatments",
    service3_point3: "Immediate attention",
    service3_cta: "See dental plans",

    service4_title: "Vision",
    service4_modalTitle: "Protection for your sight and your family's",
    service4_intro: "Get access to eye exams, frame or contact lenses, and discounts on ophthalmological treatments to care for your vision.",
    service4_point1: "Annual exams",
    service4_point2: "Discounts on frames",
    service4_point3: "Coverage for contact lenses",
    service4_cta: "See vision coverage",

    service5_title: "Accident",
    service5_modalTitle: "Covered against any unexpected event",
    service5_intro: "An accident doesn't warn, but it doesn't have to disrupt your finances. Receive direct financial support to cover medical and recovery expenses if something happens.",
    service5_point1: "Direct cash payment",
    service5_point2: "24/7 coverage",
    service5_point3: "No high deductibles",
    service5_cta: "Protect my peace of mind",

    service6_title: "Life",
    service6_modalTitle: "Your loved ones' future, always insured",
    service6_intro: "Guarantee your family's financial well-being no matter what. We help you choose a policy that protects those you love most and ensures their stability.",
    service6_point1: "Immediate capital",
    service6_point2: "Plans tailored to you",
    service6_point3: "Guaranteed peace of mind",
    service6_cta: "Protect my family",

    service7_title: "Taxes",
    service7_modalTitle: "Easy, hassle-free tax preparation",
    service7_intro: "We file your taxes on time and correctly so you get the most out of your refunds and tax credits, without stress or complications with the IRS.",
    service7_point1: "Accurate filing",
    service7_point2: "Tax advice",
    service7_point3: "IRS support",
    service7_cta: "Schedule my tax appointment",

    service8_title: "Immigration",
    service8_modalTitle: "Clear guidance in your immigration process",
    service8_intro: "We know how important your peace of mind is in this country. We accompany you in preparing and reviewing your immigration procedures with transparency and confidentiality.",
    service8_point1: "Residency and citizenship",
    service8_point2: "Work visas",
    service8_point3: "Family reunification",
    service8_cta: "Talk to an advisor",

        service1_ctaLink: 'https://wa.me/12105598731?text=Hi,%20I%27d%20like%20to%20receive%20information%20and%20get%20a%20quote%20for%20a%20Family%20Insurance.',
    service2_ctaLink: 'https://wa.me/12105598731?text=Hi,%20I%27m%20looking%20for%20advice%20about%20Medicare.',
    service3_ctaLink: 'https://wa.me/12105598731?text=Hi,%20I%27d%20like%20to%20see%20the%20available%20Dental%20Insurance%20plans.',
    service4_ctaLink: 'https://wa.me/12105598731?text=Hi,%20I%27m%20interested%20in%20Vision%20Insurance%20information.',
    service5_ctaLink: 'https://wa.me/12105598731?text=Hi,%20I%27m%20interested%20in%20getting%20more%20information%20about%20Accident%20Insurance.',
    service6_ctaLink: 'https://wa.me/12105598731?text=Hi,%20I%20want%20to%20protect%20my%20family%20with%20Life%20Insurance.',
    service7_ctaLink: 'https://wa.me/12105598731?text=Hi,%20I%27d%20like%20to%20schedule%20an%20appointment%20for%20my%20Taxes.',
    service8_ctaLink: 'https://wa.me/12105598731?text=Hi,%20I%20need%20guidance%20with%20an%20Immigration%20procedure.',

        // WHATSAPP LINKS (outside services)
    wa_hero_cotiza: 'https://wa.me/12105598731?text=Hi,%20I%27d%20like%20to%20get%20a%20quote%20for%20insurance.',
    wa_hero_contacto: 'https://wa.me/12105598731?text=Hi,%20I%20came%20from%20your%20website,%20I%27d%20like%20more%20information.',
    wa_sticky: 'https://wa.me/12105598731?text=Hi,%20I%20want%20more%20information%20about%20your%20services.',
    wa_footer: 'https://wa.me/12105598731?text=Hi,%20I%20want%20more%20information%20about%20your%20services.',
  }
};

/* ---------- Motor de traducción ---------- */
function setLanguage(lang) {
  if (!translations[lang]) lang = 'es';

  // 1. Textos simples con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = translations[lang][key];
    if (text && typeof text === 'string') {
      el.textContent = text;
    }
  });

  // 2. Placeholders de inputs con data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const text = translations[lang][key];
    if (text) el.placeholder = text;
  });

  // 3. aria-label con data-i18n-aria
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    const text = translations[lang][key];
    if (text) el.setAttribute('aria-label', text);
  });

   // 4. Href con data-i18n-href
  document.querySelectorAll('[data-i18n-href]').forEach(el => {
    const key = el.dataset.i18nHref;
    const url = translations[lang][key];
    if (url) el.setAttribute('href', url);
  }); 

  // 5. Actualizar atributo lang del HTML
  document.documentElement.lang = lang;

  // 6. Guardar preferencia
  localStorage.setItem('lang', lang);

  // 7. Actualizar el botón del selector
  const langCurrent = document.getElementById('langCurrent');
  if (langCurrent) {
    langCurrent.textContent = lang === 'es' ? 'ESP' : 'ENG';
  }

  // 8. Actualizar opciones del dropdown
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // 9. Notificar a otros módulos (por si JS necesita reaccionar)
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/* ---------- Función para obtener traducciones desde otros scripts ---------- */
function t(key, lang) {
  const currentLang = lang || localStorage.getItem('lang') || 'es';
  return translations[currentLang][key] || key;
}

/* ---------- Inicializar al cargar la página ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'es';
  setLanguage(savedLang);
  updateDocumentMeta(savedLang);
});

// Exponer globalmente
window.setLanguage = setLanguage;
window.t = t;
window.translations = translations;