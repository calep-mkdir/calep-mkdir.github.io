/* Portfolio de Alex Conesa Piñeiro: idioma, demo de OnePunto y copiar correo.
   Sin dependencias. El español está en el HTML; aquí solo vive el inglés. */
(function () {
  "use strict";

  var EN = {
    skip: "Skip to content",
    nav_label: "Sections",
    nav_projects: "Projects",
    nav_method: "How I work",
    nav_path: "Background",
    nav_contact: "Contact",
    lang_label: "Language",
    hero_role: "Software developer and systems technician based in Madrid, Spain.",
    hero_claim: "I build software with AI agents and ship it to real users.",
    hero_lede: "I hold a Higher Technician diploma in Multiplatform App Development (DAM, Spain). My app <a href=\"#onepunto\">OnePunto</a> is in closed testing on Google Play, and I run my own Linux server. I’m looking for a role in development, systems or IT support, remote or in Madrid, and I can start right away.",
    hero_cta: "See OnePunto",
    hero_cta2: "Contact and CV",
    photo_alt: "Portrait of Alex Conesa",
    op_lede: "An app that shows a dated goal moving forward: one dot for every day that counts. I took it from idea to closed testing on Google Play.",
    op_status: "Version 1.8.1, in closed testing on Google Play. Built with Flutter for Android and iOS.",
    demo_goal: "Read 20 pages",
    demo_meta: "Monday to Friday",
    demo_btn: "Mark today",
    demo_of: "of",
    demo_note: "Try it: tap the square. It’s the app’s core gesture, recreated on this site.",
    op_h_what: "What it does",
    op_what_1: "Home screen widgets on Android and iPhone; the Today widget marks the day without opening the app",
    op_what_2: "A live Android wallpaper that fills itself in",
    op_what_3: "A reminder that only fires if today’s dot is still missing",
    op_what_4: "Weekly and monthly progress, shareable as an image",
    op_what_5: "Spanish and English, light and dark mode",
    op_h_how: "How it’s built",
    op_how_1: "Flutter and Dart, with native widgets in Kotlin and SwiftUI",
    op_how_2: "Layered architecture: pure Dart domain, repository and controller",
    op_how_3: "Local data in versioned JSON, with migrations and atomic writes",
    op_how_4: "Domain, storage and UI tests, plus continuous integration",
    op_how_5: "Automated accessibility audit: tap targets, labels and contrast",
    op_h_why: "Product decisions",
    op_why_1: "No accounts, ads or tracking: data never leaves the phone",
    op_why_2: "A failed save is never shown as a success",
    op_why_3: "Rest days never break the streak",
    op_why_4: "Total budget of about €150: Google Play account, domain and email",
    op_web_code: "Website source code",
    op_private: "The app’s code is private. I’m happy to walk through it in an interview.",
    method_title: "How I work with AI",
    method_lede: "OnePunto taught me to work with AI agents the way you work with a team: I give them written instructions, review every change and accept nothing without tests.",
    step1_t: "Define before asking",
    step1_p: "I write down what the product does and how it’s built, and set rules for the agents before they write a single line.",
    step2_t: "Direct the agents",
    step2_p: "Claude Code, Codex or OpenCode implement small changes, each on its own Git branch.",
    step3_t: "Verify",
    step3_p: "Nothing gets in without passing formatting, static analysis and tests. What I check gets written down.",
    step4_t: "Ship and listen",
    step4_p: "I upload the build to Google Play closed testing and prioritise work based on what testers report.",
    more_title: "Other projects",
    vps_t: "Linux server with an AI assistant",
    vps_meta: "Ubuntu VPS",
    vps_p: "An assistant that uses language models (DeepSeek) through an API, deployed on my own VPS as a systemd service. Login is SSH key only, and the UFW firewall and Fail2Ban stop brute-force attempts.",
    web_meta: "Live on GitHub Pages",
    web_alt: "The onepunto.com homepage: the headline “Make your progress visible” next to a grid of dots",
    web_p: "OnePunto’s public website, in Spanish and English. A Python script generates it, it loads nothing from third parties, and it ships a strict Content Security Policy, security.txt and tags for search engines and social networks.",
    web_link: "Visit the site",
    web_code: "Code",
    hw_t: "PC building and support",
    hw_p: "I build PCs from scratch, choosing each part for compatibility, performance and budget. I install Windows and Linux with their drivers, diagnose hardware, firmware and temperature problems, and replace parts when needed.",
    stack_title: "What I work with",
    stack_ai: "AI-assisted development",
    stack_ai_v: "Claude Code, Codex, OpenCode and language model APIs",
    stack_mobile: "Mobile",
    stack_mobile_v: "Flutter and Dart, native widgets in Kotlin and SwiftUI, Google Play Console",
    stack_lang: "Languages",
    stack_lang_v: "Java, C#, Python, SQL, HTML, CSS and JavaScript",
    stack_sys: "Systems",
    stack_sys_v: "Linux (Ubuntu), systemd, SSH, UFW, Fail2Ban and Windows; basics of Active Directory and Microsoft 365",
    stack_flow: "Workflow",
    stack_flow_v: "Git, GitHub, continuous integration, automated tests, GitHub Pages and Unity",
    path_title: "Experience and education",
    t1_when: "2026, in progress",
    t1_p: "Professional certificate: automation with Python, Git, troubleshooting and systems management.",
    t2_when: "2025, 6 months",
    t2_t: "Software developer intern · Zaitec",
    t2_p: "Game mechanics in C# with Unity, object-oriented programming, version control with Git, testing and debugging.",
    t3_t: "Higher Technician in Multiplatform App Development (DAM) · MEDAC",
    t3_p: "Programming, databases, interface development, data access and computer systems.",
    t4_when: "2021 – present",
    t4_t: "Operations coordinator and youth leader · Grupo Orión youth association (volunteer)",
    t4_p: "I manage public grants of over €6,000, coordinate events for more than 200 people and lead a group of 17 and 18-year-olds.",
    extra: "Spanish (native), English B2, driving licence and own car.",
    contact_title: "Available to start now, remote or in Madrid.",
    cv_dev: "Software development CV (in Spanish)",
    cv_sys: "Systems and IT support CV (in Spanish)",
    foot: "Built with HTML, CSS and JavaScript, no dependencies and no tracking. Hosted on GitHub Pages."
  };

  var TEXT = {
    es: { open: "Hoy, pendiente", done: "Hoy, hecho", copy: "Copiar", copied: "Copiado", grid: "Cuadrícula del objetivo: {n} de 70 días hechos" },
    en: { open: "Today, open", done: "Today, done", copy: "Copy", copied: "Copied", grid: "Goal grid: {n} of 70 days done" }
  };

  var root = document.documentElement;
  var lang = "es";
  var original = { text: {}, aria: {}, alt: {} };

  function store(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) { /* almacenamiento no disponible */ }
  }
  function read(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }

  function each(selector, fn) {
    var list = document.querySelectorAll(selector);
    for (var i = 0; i < list.length; i++) fn(list[i]);
  }

  function captureSpanish() {
    each("[data-i18n]", function (el) { original.text[el.getAttribute("data-i18n")] = el.innerHTML; });
    each("[data-i18n-aria]", function (el) { original.aria[el.getAttribute("data-i18n-aria")] = el.getAttribute("aria-label"); });
    each("[data-i18n-alt]", function (el) { original.alt[el.getAttribute("data-i18n-alt")] = el.getAttribute("alt"); });
  }

  function applyLang(next) {
    lang = next === "en" ? "en" : "es";
    var en = lang === "en";
    root.setAttribute("lang", lang);
    each("[data-i18n]", function (el) {
      var k = el.getAttribute("data-i18n");
      el.innerHTML = en && EN[k] ? EN[k] : original.text[k];
    });
    each("[data-i18n-aria]", function (el) {
      var k = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", en && EN[k] ? EN[k] : original.aria[k]);
    });
    each("[data-i18n-alt]", function (el) {
      var k = el.getAttribute("data-i18n-alt");
      el.setAttribute("alt", en && EN[k] ? EN[k] : original.alt[k]);
    });
    each(".lang button", function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    var copy = document.getElementById("copy-email");
    if (copy) copy.textContent = TEXT[lang].copy;
    renderStatus();
  }

  /* Demo de OnePunto: 14 semanas de lunes a viernes = 70 puntos. */
  var TOTAL = 70;
  var TODAY = 23;
  var MISSED = { 7: true, 16: true };
  var grid = document.getElementById("dots");
  var button = document.getElementById("today");
  var countEl = document.getElementById("done-count");
  var stateEl = document.getElementById("today-state");
  var todayDone = false;
  var todayDot = null;

  function doneCount() {
    var n = 0;
    for (var i = 0; i < TODAY; i++) if (!MISSED[i]) n++;
    return n + (todayDone ? 1 : 0);
  }

  function renderStatus() {
    if (!grid) return;
    var n = doneCount();
    countEl.textContent = String(n);
    stateEl.textContent = todayDone ? TEXT[lang].done : TEXT[lang].open;
    grid.setAttribute("aria-label", TEXT[lang].grid.replace("{n}", String(n)));
  }

  function buildGrid() {
    if (!grid) return;
    var frag = document.createDocumentFragment();
    var order = 0;
    for (var i = 0; i < TOTAL; i++) {
      var d = document.createElement("span");
      d.className = "dot";
      if (i < TODAY) {
        if (MISSED[i]) {
          d.className += " is-missed";
        } else {
          d.className += " is-done";
          d.style.setProperty("--i", String(order++));
        }
      } else if (i === TODAY) {
        d.className += " is-today";
        todayDot = d;
      }
      frag.appendChild(d);
    }
    grid.appendChild(frag);
    var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!still) grid.className += " wave";
  }

  function toggleToday() {
    todayDone = !todayDone;
    button.setAttribute("aria-pressed", String(todayDone));
    if (todayDot) todayDot.classList.toggle("is-done", todayDone);
    if (todayDone && navigator.vibrate) { try { navigator.vibrate(12); } catch (e) { /* sin vibración */ } }
    renderStatus();
  }

  function copyEmail() {
    var btn = document.getElementById("copy-email");
    var addr = document.getElementById("email").textContent.trim();
    function done() {
      btn.textContent = TEXT[lang].copied;
      window.setTimeout(function () { btn.textContent = TEXT[lang].copy; }, 1800);
    }
    function fallback() {
      var range = document.createRange();
      range.selectNodeContents(document.getElementById("email"));
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(addr).then(done, fallback);
    } else {
      fallback();
    }
  }

  function initialLang() {
    if (window.location.hash === "#en") return "en";
    if (window.location.hash === "#es") return "es";
    var saved = read("lang");
    if (saved === "es" || saved === "en") return saved;
    var nav = (navigator.language || "es").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "en";
  }

  captureSpanish();
  buildGrid();
  if (button) button.addEventListener("click", toggleToday);
  var copyBtn = document.getElementById("copy-email");
  if (copyBtn) copyBtn.addEventListener("click", copyEmail);
  each(".lang button", function (b) {
    b.addEventListener("click", function () {
      var next = b.getAttribute("data-lang");
      store("lang", next);
      applyLang(next);
    });
  });
  applyLang(initialLang());
})();
