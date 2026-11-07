/* ==========================================================
   AUGUSSEP · Scripts (mismo archivo en las tres páginas)
   ========================================================== */

/* ---------- CONFIGURACIÓN (editar aquí y copiar a las 3 carpetas) ---------- */
// WhatsApp: código de país + número, sin "+" ni espacios.
// Tomado del saco de harina (943 591 748). Cámbialo si el número de ventas es otro.
const WHATSAPP_NUMBER = "51943591748";

// Rutas de las fichas técnicas en PDF (relativas a la carpeta de cada página).
// Si se dejan vacías, el botón dice "Pedir ficha técnica" y abre WhatsApp.
const SHEETS = {
  harina: "../fichas/ficha-tecnica-harina-de-pescado.pdf",
  aceite: "", // ej.: "../fichas/ficha-tecnica-aceite-de-pescado.pdf"
};

/* ---------- Traducciones (el español se toma del propio HTML) ---------- */
const EN = {
  "skip": "Skip to content", "nav.menu": "Menu",
  "nav.home": "Home", "nav.aboutLong": "About us", "nav.products": "Products", "nav.cta": "Get a quote",

  "hero.kicker": "Comercializadora Marítima Augussep",
  "hero.t1": "Nourishing thousands", "hero.t2": "with the best", "hero.t3": "of the Peruvian sea",
  "hero.cta1": "Get a quote now", "hero.cta2": "View products",
  "hero.caption": "The Humboldt Current runs north along the Peruvian coast: cold water that sustains one of the most productive fisheries on the planet.",
  "b1.a": "Guaranteed", "b1.b": "quality", "b2.a": "Greater", "b2.b": "safety", "b3.a": "100% Peruvian", "b3.b": "product",

  "about.kicker": "About us",
  "about.title": "A Peruvian company selling what it knows: the sea off its coast",
  "about.text": "Comercializadora Marítima Augussep E.I.R.L. was founded on August 20, 2020. Since then we have supplied companies that want to raise the quality of their balanced feed with Peruvian fishery inputs.",
  "about.more": "Learn more",
  "about.mission.title": "Our mission",
  "about.mission.text": "To offer Peruvian sea products of the highest quality, meet our customers' expectations and earn their trust in the domestic and international market.",

  "prod.title": "Discover our products",
  "prod.sub": "We sell wholesale to feed mills for aquaculture, poultry, swine and pet food. Ask for the technical sheet before buying and check it against your formulation.",
  "p1.name": "Fish meal", "p2.name": "Fish oil",
  "card.wholesale": "Wholesale", "card.more": "Learn more", "card.quote": "Get a quote",

  "proc.title": "From the sea to your plant", "proc.sub": "Four stages, and at each one you know what you are getting.",
  "s1.t": "Origin", "s1.d": "Raw material caught in the Peruvian sea.",
  "s2.t": "Production", "s2.d": "Processing focused on preserving nutrients and purity.",
  "s3.t": "Quality control", "s3.d": "Batch analysis and a technical sheet so you decide with data.",
  "s4.t": "Dispatch", "s4.d": "Delivery within Peru and shipping to international destinations.",

  "faq.title": "Frequently asked questions", "faq.sub": "Can't find your answer?", "faq.ask": "Ask us on WhatsApp",
  "q1": "What is the minimum order?", "a1": "It depends on the product and destination. Enter your estimated volume in the form and we will confirm the conditions.",
  "q2": "Can I see the technical sheet before buying?", "a2": "Yes. You can find it on the Products page or request it with your quote.",
  "q3": "Do you take international orders?", "a3": "Yes. We serve domestic and international markets. Enter the destination country and city in the form.",
  "q4": "How do I receive my quote?", "a4": "We reply on WhatsApp with the conditions for your order.",

  "ab.kicker": "About us", "ab.t1": "We bring the best", "ab.t2": "of the Peruvian sea", "ab.t3": "to the whole world",
  "ab.who.title": "Who are we?",
  "ab.who.text": "Comercializadora Marítima Augussep is a company founded on August 20, 2020. Since then we have been nourishing thousands with products of the best quality, and we supply our fishery products to companies that want to boost their own quality. That is how we bring the best of the sea to the whole world.",
  "ab.mis.title": "Our mission",
  "ab.mis.text": "To offer Peruvian sea products of the highest quality, meeting our customers' expectations and earning the loyalty of the domestic and international market. In this way, we bring nutrition from the Peruvian sea to the whole world.",
  "ab.prod.title": "Our products",
  "trust.title": "Why trust Augussep?",
  "trust.text": "Because we guarantee that our products are among the best on the market. That is why we share our technical sheets, so you can decide well and choose the quality of our products for your company.",
  "trust.cta": "View technical sheet",

  "pr.kicker": "Our products", "pr.t1": "The best of the sea", "pr.t2": "in our products", "pr.cta": "View products",
  "h.b1": "Plenty of nutrients, proteins and vitamins for excellent animal development.",
  "h.b2": "100% Peruvian product with the quality and purity your animals need.",
  "h.b3": "Contains the richest source of Omega 3, which helps animals achieve better stability and balance.",
  "h.b4": "Visible effectiveness through better growth and digestive balance.",
  "a.text": "Fish oil is a dietary source of omega 3 fatty acids. The body needs omega 3 fatty acids for many functions, from muscle activity to cell growth.",
  "ficha.h": "Fish meal technical sheet", "ficha.a": "Fish oil technical sheet",
  "spec.title": "Technical specifications", "spec.param": "Parameter", "spec.value": "Value",
  "spec.protein": "Protein", "spec.fat": "Fat", "spec.moisture": "Moisture", "spec.grade": "Commercial grade",
  "spec.omega": "Omega 3 (EPA + DHA)", "spec.acidity": "Acidity", "spec.peroxide": "Peroxide value", "spec.pack": "Packaging",
  "h.b5": "Available in three grades: Super Prime, Prime and Standard, in 50 kg bags.",
  "fh.sub": "Peruvian fish meal, 100% fish, in three commercial grades according to protein content.",
  "fh.protein": "Minimum protein", "fh.dig90": "Min. digestibility 90%", "fh.dig85": "Min. digestibility 85%", "fh.dig80": "Min. digestibility 80%",
  "fh.std": "Standard", "fh.cap": "Chemical, nutritional and sensory characteristics by grade",
  "fh.comp": "Component", "fh.unit": "Unit", "fh.limit": "Limit", "fh.min": "Min.", "fh.max": "Max.",
  "fh.chem": "Chemical characteristics", "fh.nutri": "Nutritional characteristics", "fh.sens": "Sensory characteristics",
  "fh.sand": "Sand", "fh.salt": "Salt and sand", "fh.ffa": "Free fatty acids", "fh.tbvn": "Total volatile basic nitrogen",
  "fh.hist": "Histamine", "fh.antiox": "Antioxidant", "fh.digest": "Digestibility", "fh.mink": "Mink, 0.2%",
  "fh.color": "Color", "fh.smell": "Odor", "fh.texture": "Texture", "fh.green": "Greenish", "fh.brown": "Dark brown", "fh.char": "Characteristic", "fh.powder": "Powder",
  "fh.pack.t": "Presentation and packaging", "fh.pack.d": "New white laminated polypropylene bags, labeled with company information, weight and lot number. The red circle indicates the presence of antioxidant.",
  "fh.life.t": "Shelf life", "fh.life.v": "6 months", "fh.life.d": "From the date of manufacture. Preserved with ANTAC PLUS A-20 BTA antioxidant to delay fat oxidation.",
  "fh.store.t": "Storage", "fh.store.v": "600 bags per stack", "fh.store.d": "On a polypropylene base, covered with laminated polypropylene sheets, in a clean, dry place protected from contamination.",
  "fh.ship.t": "Transport", "fh.ship.v": "600–700 bags per truck", "fh.ship.d": "On a truck platform, with the load covered by a polypropylene layer to protect it from the environment.",
  "prod.sheet": "Download technical sheet (PDF)", "prod.sheetAsk": "Request technical sheet",

  "quote.title": "Request your quote", "quote.text": "Fill in the details and review the message. When you send it, WhatsApp opens with your request already written.",
  "quote.preview": "This is how your message will arrive",
  "f.who": "Your details", "f.what": "Your order",
  "f.company": "Company", "f.name": "Full name", "f.email": "Email", "f.phone": "Phone or WhatsApp", "f.product": "Product", "f.both": "Both",
  "f.volume": "Estimated volume (t)", "f.dest": "Destination country and city", "f.msg": "Message (optional)", "f.submit": "Send via WhatsApp",
  "err.required": "This field is required.", "err.email": "Enter a valid email, for example name@company.com.",

  "foot.tag": "Fish meal and fish oil from the Peruvian sea, wholesale.", "foot.nav": "Navigation", "foot.contact": "Contact",
  "foot.mission": "Our mission", "foot.products": "Our products", "foot.quote": "Get a quote",

  "msg.hello": "Hello, I would like a quote from Augussep:",
  "msg.sheet": "Hello, I would like the technical sheet for:",
  "msg.check": "Check the highlighted fields.", "msg.opened": "WhatsApp opened in a new tab with your request.",
  "msg.placeholder": "(complete the form)",
};
const ES = {
  "msg.hello": "Hola, quisiera cotizar con Augussep:",
  "msg.sheet": "Hola, quisiera la ficha técnica de:",
  "prod.sheetAsk": "Pedir ficha técnica",
  "msg.check": "Revisa los campos marcados.", "msg.opened": "Se abrió WhatsApp en una pestaña nueva con tu solicitud.",
  "msg.placeholder": "(completa el formulario)",
};
let lang = "es";
const t = (key) => (lang === "en" ? EN[key] : ES[key]) ?? ES[key] ?? key;

function cacheSpanish() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.dataset.i18n;
    if (!(k in ES)) ES[k] = el.textContent.trim();
  });
}

function applyLang(next) {
  lang = next;
  document.documentElement.lang = next;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === next)));
  try { localStorage.setItem("augussep-lang", next); } catch (e) {}
  updatePreview();
}

function setupLang() {
  cacheSpanish();
  document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => applyLang(b.dataset.lang)));
  let saved = null;
  try { saved = localStorage.getItem("augussep-lang"); } catch (e) {}
  if (!saved && (navigator.language || "").toLowerCase().startsWith("en")) saved = "en";
  if (saved === "en") applyLang("en");
}

/* ---------- WhatsApp y fichas técnicas ---------- */
const waUrl = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

function setupWhatsApp() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = waUrl(el.dataset.wa);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
}

function setupSheets() {
  document.querySelectorAll("[data-sheet]").forEach((el) => {
    const key = el.dataset.sheet;
    if (SHEETS[key]) {
      el.href = SHEETS[key];
      el.setAttribute("download", "");
      return;
    }
    const productName = () => t(key === "harina" ? "p1.name" : "p2.name");
    el.dataset.i18n = "prod.sheetAsk";
    el.textContent = ES["prod.sheetAsk"];
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    el.href = waUrl(`${t("msg.sheet")} ${productName()}`);
    el.addEventListener("click", () => { el.href = waUrl(`${t("msg.sheet")} ${productName()}`); });
  });
}

/* ---------- Formulario de cotización ---------- */
let form, preview;

function buildMessage(placeholder = false) {
  const d = Object.fromEntries(new FormData(form));
  const productKey = { harina: "p1.name", aceite: "p2.name", ambos: "f.both" }[d.product];
  const rows = [
    ["f.company", d.company], ["f.name", d.name], ["f.email", d.email], ["f.phone", d.phone],
    ["f.product", t(productKey)], ["f.volume", d.volume], ["f.dest", d.dest], ["f.msg", d.msg],
  ]
    .filter(([, v]) => v && String(v).trim())
    .map(([k, v]) => `• ${t(k)}: ${String(v).trim()}`);
  const body = rows.length > 1 || !placeholder ? rows.join("\n") : `${rows.join("\n")}\n${t("msg.placeholder")}`;
  return `${t("msg.hello")}\n\n${body}`;
}

function updatePreview() {
  if (preview && form) preview.textContent = buildMessage(true);
}

function validate() {
  let ok = true;
  form.querySelectorAll("input[required]").forEach((input) => {
    const valid = input.value.trim() !== "" && input.checkValidity();
    input.closest(".field").classList.toggle("is-invalid", !valid);
    input.setAttribute("aria-invalid", String(!valid));
    if (!valid && ok) { input.focus(); ok = false; }
  });
  return ok;
}

function selectProduct(value) {
  const radio = form && form.querySelector(`input[name="product"][value="${value}"]`);
  if (radio) { radio.checked = true; updatePreview(); }
}

function setupForm() {
  form = document.getElementById("quote-form");
  preview = document.getElementById("wa-preview");
  if (!form) return;
  const status = document.getElementById("form-status");

  // Botones "Cotizar ahora" de cada producto: preseleccionan el producto
  document.querySelectorAll("[data-product]").forEach((btn) =>
    btn.addEventListener("click", () => selectProduct(btn.dataset.product))
  );

  form.addEventListener("input", (e) => {
    const field = e.target.closest(".field");
    if (field && field.classList.contains("is-invalid") && e.target.value.trim() && e.target.checkValidity()) {
      field.classList.remove("is-invalid");
      e.target.setAttribute("aria-invalid", "false");
    }
    updatePreview();
  });
  form.addEventListener("change", updatePreview);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.classList.remove("is-ok");
    if (!validate()) { status.textContent = t("msg.check"); return; }
    window.open(waUrl(buildMessage()), "_blank", "noopener");
    status.textContent = t("msg.opened");
    status.classList.add("is-ok");
  });

  updatePreview();
}

/* ---------- Menú y encabezado ---------- */
function setupUI() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");
  const header = document.querySelector(".site-header");
  const kicker = document.querySelector(".hero__kicker");

  // Encabezado transparente sobre la portada; se vuelve azul al llegar al texto
  const onScroll = () => {
    const limit = kicker ? kicker.getBoundingClientRect().top + window.scrollY - header.offsetHeight - 8 : 8;
    header.classList.toggle("is-solid", window.scrollY > Math.max(limit, 8) || nav.classList.contains("is-open"));
  };
  const close = () => { nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); onScroll(); };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    onScroll();
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
}

document.addEventListener("DOMContentLoaded", () => {
  setupSheets();
  setupLang();
  setupWhatsApp();
  setupForm();
  setupUI();
});
