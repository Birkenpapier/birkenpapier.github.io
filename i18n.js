const translations = {
  en: {
    "html.lang": "en",
    "meta.description": "Kevin Peivareh — R&D engineer based in Hannover, Germany. Custom software development, Machine Learning, and Computer Vision solutions for startups and enterprises.",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.services": "Services",
    "nav.projects": "Projects",

    "hero.greeting": "Hello,",
    "hero.im": "I'm",
    "hero.tagline": "I design and develop custom software solutions that drive your business forward.",
    "hero.cta": "Let's Talk!",
    "hero.getintouch": "Get in touch",

    "about.heading": "About",
    "about.p1": "Hello! I'm Kevin Peivareh, an R&D engineer based in Hannover, Germany. I'm passionate about Machine Learning, Computer Vision, and building software that actually ships.",
    "about.p2.prefix": "As the founder of ",
    "about.p2.middle": ", I turn research-grade ideas into production tools — and through ",
    "about.p2.suffix": " I help teams adopt AI and CV without the vendor-lock-in overhead.",
    "about.p3.prefix": "My ",
    "about.p3.middle": " is where I publish open-source work across C, C++, C#, Python, and TypeScript. Always open to collaboration — feel free to reach out.",
    "about.resume": "Resume",

    "skills.heading": "Skills",
    "skills.techstack": "Tech Stack",

    "services.heading": "Services",
    "services.ml.title": "Machine Learning",
    "services.ml.desc": "From data pipeline to deployed model — training, evaluation, and production inference at sensible cost.",
    "services.cv.title": "Computer Vision",
    "services.cv.desc": "Object detection, segmentation, OCR, and bespoke image pipelines for industrial and research use-cases.",
    "services.software.title": "Custom Software",
    "services.software.desc": "Backend services, APIs, automation, and internal tools in Python, C/C++, C#, and TypeScript.",
    "services.web.title": "Web Development",
    "services.web.desc": "Modern, fast, accessible websites and dashboards built with React and TypeScript.",
    "services.rnd.title": "R&D & Prototyping",
    "services.rnd.desc": "Fast iteration on uncertain ideas — turn a fuzzy question into a working prototype in weeks, not quarters.",
    "services.consulting.title": "Consulting",
    "services.consulting.desc": "Architecture reviews, code audits, and second opinions — remote or on-site in the Hannover area.",
    "services.cta": "Have a project in mind? Let's figure out if I'm the right fit.",
    "services.ctabtn": "Start a conversation →",

    "projects.heading": "Projects",
    "projects.live": "Live view",

    "footer.text": "Made with ❤️ in Hannover"
  },

  de: {
    "html.lang": "de",
    "meta.description": "Kevin Peivareh — R&D-Ingenieur aus Hannover. Individuelle Softwareentwicklung, Machine Learning und Computer Vision für Start-ups und Unternehmen.",

    "nav.home": "Start",
    "nav.about": "Über mich",
    "nav.skills": "Skills",
    "nav.services": "Leistungen",
    "nav.projects": "Projekte",

    "hero.greeting": "Hallo,",
    "hero.im": "ich bin",
    "hero.tagline": "Ich entwerfe und entwickle individuelle Softwarelösungen, die Ihr Unternehmen voranbringen.",
    "hero.cta": "Schreib mir!",
    "hero.getintouch": "Kontakt",

    "about.heading": "Über mich",
    "about.p1": "Hallo! Ich bin Kevin Peivareh, R&D-Ingenieur aus Hannover. Meine Leidenschaft gilt Machine Learning, Computer Vision und Software, die tatsächlich im Einsatz ist.",
    "about.p2.prefix": "Als Gründer von ",
    "about.p2.middle": " verwandle ich Forschungsideen in einsatzbereite Tools — und mit ",
    "about.p2.suffix": " helfe ich Teams dabei, KI und Computer Vision ohne Vendor-Lock-in einzuführen.",
    "about.p3.prefix": "Auf meinem ",
    "about.p3.middle": " veröffentliche ich Open-Source-Projekte in C, C++, C#, Python und TypeScript. Offen für Kollaboration — schreiben Sie mich gerne an.",
    "about.resume": "Lebenslauf",

    "skills.heading": "Skills",
    "skills.techstack": "Tech Stack",

    "services.heading": "Leistungen",
    "services.ml.title": "Machine Learning",
    "services.ml.desc": "Von der Datenpipeline bis zum produktiven Modell — Training, Evaluation und Inferenz zu vernünftigen Kosten.",
    "services.cv.title": "Computer Vision",
    "services.cv.desc": "Objekterkennung, Segmentierung, OCR und maßgeschneiderte Bildpipelines für Industrie und Forschung.",
    "services.software.title": "Individuelle Software",
    "services.software.desc": "Backend-Services, APIs, Automatisierung und interne Tools in Python, C/C++, C# und TypeScript.",
    "services.web.title": "Webentwicklung",
    "services.web.desc": "Moderne, schnelle und barrierearme Websites und Dashboards mit React und TypeScript.",
    "services.rnd.title": "F&E & Prototyping",
    "services.rnd.desc": "Schnelle Iteration bei unklaren Ideen — aus einer unscharfen Frage in Wochen einen lauffähigen Prototyp.",
    "services.consulting.title": "Beratung",
    "services.consulting.desc": "Architektur-Reviews, Code-Audits und zweite Meinungen — remote oder vor Ort im Raum Hannover.",
    "services.cta": "Haben Sie ein Projekt im Kopf? Lassen Sie uns herausfinden, ob ich passe.",
    "services.ctabtn": "Gespräch starten →",

    "projects.heading": "Projekte",
    "projects.live": "Live ansehen",

    "footer.text": "Mit ❤️ gemacht in Hannover"
  }
};

const SUPPORTED = ["en", "de"];
const STORAGE_KEY = "kp-lang";

function detectLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return SUPPORTED.includes(nav) ? nav : "en";
}

function applyLang(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = dict["html.lang"];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    // format: "attr:key,attr:key"
    el.getAttribute("data-i18n-attr").split(",").forEach(pair => {
      const [attr, key] = pair.split(":").map(s => s.trim());
      if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });
  });

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict["meta.description"]) {
    metaDesc.setAttribute("content", dict["meta.description"]);
  }

  document.querySelectorAll(".lang-toggle-btn").forEach(btn => {
    const btnLang = btn.dataset.lang;
    btn.classList.toggle("is-active", btnLang === lang);
    btn.setAttribute("aria-pressed", btnLang === lang ? "true" : "false");
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

function initI18n() {
  applyLang(detectLang());

  document.querySelectorAll(".lang-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}
