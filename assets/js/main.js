/* ============================================
   BRO MEDIA — логика сайта
   Рендер данных из data.js + анимации + меню
   ============================================ */

/* ---------- SVG-иконки ---------- */
const ICONS = {
  scissors: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
  camera: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
  motion: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  sparkle: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/></svg>',
  play: '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 21 12 6 21 6 3"/></svg>',
  telegram: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.9 4.3l-3 14.2c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.2.2-.5.4-.9.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.6-.2L7.3 13.1l-4.4-1.4c-1-.3-1-1 .2-1.4l17.2-6.6c.8-.3 1.5.2 1.6 1.2z"/></svg>',
  max: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18V6l6 8 6-8v12"/><circle cx="20" cy="7" r="1.6" fill="currentColor" stroke="none"/></svg>',
  youtube: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.4-.4-5c-.2-.9-.9-1.5-1.7-1.7C19.2 5 12 5 12 5s-7.2 0-8.9.3c-.8.2-1.5.8-1.7 1.7C1 8.6 1 12 1 12s0 3.4.4 5c.2.9.9 1.5 1.7 1.7C4.8 19 12 19 12 19s7.2 0 8.9-.3c.8-.2 1.5-.8 1.7-1.7.4-1.6.4-5 .4-5zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z"/></svg>',
  vk: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13.2 18.3c-6 0-9.6-4.2-9.7-11.1h3c.1 5.1 2.4 7.2 4.1 7.7V7.2h2.9v4.4c1.7-.2 3.5-2.1 4.1-4.4h2.9c-.5 2.7-2.4 4.6-3.7 5.4 1.3.6 3.5 2.3 4.3 5.7h-3.2c-.6-2-2.2-3.6-4.4-3.8v3.8h-.3z"/></svg>',
  rutube: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><polygon points="10 9 16 12 10 15 10 9" fill="currentColor" stroke="none"/></svg>',
  dzen: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c-.4 5.3-2.7 7.6-8 8v.1c5.3.4 7.6 2.7 8 8h.1c.4-5.3 2.7-7.6 8-8v-.1c-5.3-.4-7.6-2.7-8-8H12z"/></svg>',
  email: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',
  arrowLeft:  '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  arrowRight: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
};

/* ---------- вспомогательное ---------- */
const $  = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

function esc(str) {
  return String(str ?? "").replace(/[&<>"']/g, m =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

/* ---------- хедер и футер (вставляются на каждую страницу) ---------- */
const NAV_ITEMS = [
  { href: "index.html",     label: "Главная" },
  { href: "portfolio.html", label: "Портфолио" },
  { href: "lessons.html",   label: "Видеоуроки" },
  { href: "courses.html",   label: "Курсы" },
  { href: "contacts.html",  label: "Контакты" },
];

function currentPage() {
  const p = location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}

/* главная ли это страница (для отключения сетки) */
function isHomePage() {
  const p = currentPage().toLowerCase();
  return p === "index.html" || p === "" || p === "/";
}

function buildHeader() {
  const mount = $("[data-header]");
  if (!mount) return;
  const cur = currentPage();
  mount.className = "site-header";
  mount.innerHTML = `
    <div class="wrap nav">
      <a class="logo" href="index.html" aria-label="${esc(SITE.studio.name)}">
        <span class="logo-mark">BRO<span>&nbsp;MEDIA</span></span>
      </a>
      <nav class="nav-links" id="navLinks">
        ${NAV_ITEMS.map(i => `<a href="${i.href}" class="${i.href === cur ? "active" : ""}">${i.label}</a>`).join("")}
      </nav>
      <button class="burger" id="burger" aria-label="Меню"><span></span><span></span><span></span></button>
    </div>`;

  const burger = $("#burger");
  const links  = $("#navLinks");
  burger.addEventListener("click", () => links.classList.toggle("open"));
  $$("a", links).forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

  const onScroll = () => mount.classList.toggle("scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function buildFooter() {
  const mount = $("[data-footer]");
  if (!mount) return;
  mount.className = "site-footer";
  mount.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <span class="logo-mark">BRO<span>&nbsp;MEDIA</span></span>
          <p style="margin-top:14px;color:var(--text-mute);font-size:14px;max-width:320px;">
            ${esc(SITE.studio.tagline)}
          </p>
        </div>
        <nav class="footer-nav">
          ${NAV_ITEMS.map(i => `<a href="${i.href}">${i.label}</a>`).join("")}
        </nav>
      </div>
      <div class="footer-bottom">
        <span>${esc(SITE.footer.copy)}</span>
        <span>${esc(SITE.footer.note)}</span>
      </div>
    </div>`;
}

/* ---------- анимация появления при скролле ---------- */
function initReveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("in"), i * 70);
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12, rootMargin: "0px 0px -60px 0px" });
  els.forEach(e => io.observe(e));
}

/* ============================================================
   МОДАЛЬНОЕ ОКНО ДЛЯ ВИДЕО (Yandex Disk)
   ============================================================ */

function ensureVideoModal() {
  let modal = document.getElementById("videoModal");
  if (modal) return modal;

  modal = document.createElement("div");
  modal.id = "videoModal";
  modal.className = "video-modal";
  modal.innerHTML = `
    <div class="video-modal-overlay" data-close></div>
    <div class="video-modal-box">
      <button class="video-modal-close" data-close aria-label="Закрыть">&times;</button>
      <div class="video-modal-frame">
        <iframe id="videoModalFrame" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>
      <div class="video-modal-info">
        <span class="vm-cat" id="videoModalCat"></span>
        <h3 id="videoModalTitle"></h3>
        <p id="videoModalDesc"></p>
      </div>
    </div>`;
  document.body.appendChild(modal);

  modal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeVideoModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeVideoModal();
  });

  return modal;
}

/* ============================================================
   РАСПОЗНАВАНИЕ ССЫЛОК НА ВИДЕО
   Поддержка: VK Video (embed), Яндекс.Диск (внешняя ссылка), YouTube, прямые mp4
   ============================================================ */

/* VK Video: vkvideo.ru/video-<oid>_<id>  или  vk.com/video-<oid>_<id> */
function parseVk(url) {
  const m = url.match(/video(-?\d+)_(\d+)/);
  if (!m) return null;
  const oid = m[1];
  const id  = m[2];
  /* video_ext.php ВКЛЮЧАЕТ www.vk.com — встраивание разрешено */
  return `https://vk.com/video_ext.php?oid=${oid}&id=${id}&hd=2&autoplay=1`;
}

function isYandexDisk(url) {
  return /disk\.yandex\.ru|yadi\.su/.test(url);
}

function isYouTube(url) {
  return /youtube\.com|youtu\.be/.test(url);
}

function isDirectVideo(url) {
  return /\.(mp4|webm|ogv|mov)(\?|$)/i.test(url);
}

/*
  Возвращает объект:
    { type: "vk"|"youtube"|"direct"|"external", src: "..." }
  type "external" — встроить нельзя, показываем кнопку
*/
function resolveVideo(url) {
  if (!url) return { type: "none", src: "" };

  const vk = parseVk(url);
  if (vk) return { type: "vk", src: vk };

  if (isYouTube(url)) {
    const yt = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
    return yt
      ? { type: "youtube", src: `https://www.youtube.com/embed/${yt[1]}` }
      : { type: "external", src: url };
  }

  if (isDirectVideo(url)) return { type: "direct", src: url };

  if (isYandexDisk(url)) return { type: "external", src: url };

  return { type: "external", src: url };
}

function openVideoModal(work, catName) {
  const modal = ensureVideoModal();
  const frame = document.getElementById("videoModalFrame");
  const info  = modal.querySelector(".video-modal-info");

  document.getElementById("videoModalCat").textContent   = catName || "";
  document.getElementById("videoModalTitle").textContent = work.title || "";
  document.getElementById("videoModalDesc").textContent  = work.description || "";

  /* убираем старую кнопку-внешнюю ссылку, если была */
  const oldLink = modal.querySelector(".video-modal-external");
  if (oldLink) oldLink.remove();

  const v = resolveVideo(work.link || work.videoUrl);

  /* видео в отдельном контейнере — управляем им сами */
  const frameWrap = modal.querySelector(".video-modal-frame");
  const linkWrap  = modal.querySelector(".video-modal-linkwrap");

  if (v.type === "direct") {
    /* прямой mp4 — играем нативным плеером */
    frameWrap.innerHTML = `<video id="videoModalFrame" controls playsinline autoplay
        style="position:absolute;inset:0;width:100%;height:100%;background:#000;">
        <source src="${esc(v.src)}" type="video/mp4">
      </video>`;
  } else if (v.type === "external") {
    /* встроить нельзя (Яндекс.Диск) — показываем карточку с кнопкой */
    frameWrap.innerHTML = `
      <div class="video-ext-block">
        <div class="video-ext-icon">${ICONS.play}</div>
        <p>Это видео размещено на внешнем хостинге,<br>для просмотра откроем его в новом окне.</p>
        <a class="btn btn-primary video-modal-external" href="${esc(v.src)}" target="_blank" rel="noopener">
          Открыть видео
        </a>
      </div>`;
  } else {
    /* vk / youtube — iframe, встраивание разрешено */
    frameWrap.innerHTML = `<iframe id="videoModalFrame" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowfullscreen></iframe>`;
    frameWrap.querySelector("iframe").src = v.src;
  }

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  if (!modal || !modal.classList.contains("open")) return;

  const frameWrap = modal.querySelector(".video-modal-frame");
  /* останавливаем воспроизведение и очищаем контейнер */
  const media = frameWrap.querySelector("iframe, video");
  if (media) {
    if (media.tagName === "VIDEO") { media.pause(); media.src = ""; }
    else { media.src = "about:blank"; }
  }
  frameWrap.innerHTML = "";
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

/* ============================================================
   РЕНДЕР СЕКЦИЙ
   ============================================================ */

/* --- ГЛАВНАЯ: hero --- */
function renderHero() {
  const mount = $("[data-hero]");
  if (!mount) return;
  const s = SITE.studio, h = SITE.hero;

  const media = s.heroVideo
    ? `<video class="hero-video" autoplay muted loop playsinline ${s.heroPoster ? `poster="${esc(s.heroPoster)}"` : ""}>
         <source src="${esc(s.heroVideo)}" type="video/mp4">
       </video>`
    : `<div class="bg-grid hero-bg"></div>`;

  mount.innerHTML = `
    ${media}
    <div class="hero-overlay"></div>
    <div class="wrap hero-inner">
      <span class="eyebrow">${esc(s.tagline)}</span>
      <h1>${esc(h.title)} <span class="glow">${esc(h.titleAccent)}</span></h1>
      <p class="hero-sub">${esc(h.subtitle)}</p>
      <div class="hero-cta">
        <a class="btn btn-primary" href="portfolio.html">Смотреть работы ${ICONS.play}</a>
        <a class="btn btn-ghost" href="contacts.html">Обсудить проект</a>
      </div>
      <div class="hero-stats">
        ${SITE.stats.map(st => `
          <div>
            <div class="num">${esc(st.num)}</div>
            <div class="lbl">${esc(st.lbl)}</div>
          </div>`).join("")}
      </div>
    </div>`;

  /* если видео нет или не грузится — остаётся анимированная заглушка */
  const v = $(".hero-video", mount);
  if (v) v.addEventListener("error", () => { v.style.display = "none"; });
}

/* --- ГЛАВНАЯ: о студии --- */
function renderAbout() {
  const mount = $("[data-about]");
  if (!mount) return;
  mount.innerHTML = `
    <div class="wrap">
      <div class="grid grid-2 reveal" style="align-items:center;gap:56px;">
        <div>
          <span class="eyebrow">О студии</span>
          <h2 style="font-size:clamp(28px,4vw,42px);margin:16px 0 20px;">${esc(SITE.about.title)}</h2>
          <p style="color:var(--text-dim);font-size:17px;">${esc(SITE.about.text)}</p>
        </div>
        <div class="grid grid-2" style="gap:16px;">
          ${SITE.services.map(sv => `
            <div class="card" style="padding:22px;">
              <div class="card-icon" style="width:38px;height:38px;margin-bottom:14px;">${ICONS[sv.icon] || ""}</div>
              <h3 style="font-size:16px;">${esc(sv.title)}</h3>
            </div>`).join("")}
        </div>
      </div>
    </div>`;
}

/* --- ГЛАВНАЯ: как мы работаем --- */
function renderProcess() {
  const mount = $("[data-process]");
  if (!mount) return;
  mount.innerHTML = `
    <div class="wrap">
      <div class="section-head reveal">
        <span class="eyebrow">Как мы работаем</span>
        <h2>Пять этапов — от заявки до готового видео</h2>
        <p>Прозрачный процесс: вы всегда знаете, на каком шаге проект и что будет дальше.</p>
      </div>
      <div class="process-list">
        ${SITE.process.map((p, i) => `
          <div class="process-item reveal" style="transition-delay:${i * 70}ms">
            <div class="process-num">${esc(p.step)}</div>
            <div class="process-body">
              <h3>${esc(p.title)}</h3>
              <p>${esc(p.text)}</p>
            </div>
          </div>`).join("")}
      </div>
    </div>`;
}

/* --- УСЛУГИ --- */
function renderServices() {
  const mount = $("[data-services]");
  if (!mount) return;
  mount.innerHTML = `
    <div class="wrap">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">Что мы делаем</span>
          <h2>Полный цикл продакшна</h2>
        </div>
        <a class="btn btn-ghost" href="portfolio.html">Все работы</a>
      </div>
      <div class="grid grid-4">
        ${SITE.services.map((sv, i) => `
          <article class="card service-card reveal" style="transition-delay:${i * 60}ms">
            <div class="card-icon">${ICONS[sv.icon] || ""}</div>
            <h3>${esc(sv.title)}</h3>
            <p>${esc(sv.text)}</p>
            <div class="tags">${sv.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          </article>`).join("")}
      </div>
    </div>`;
}

/* --- КЛИЕНТЫ --- */
function renderClients() {
  const mount = $("[data-clients]");
  if (!mount) return;
  const list = SITE.clients;
  const has = list.some(c => c.logo);
  mount.innerHTML = `
    <div class="wrap">
      <div class="section-head reveal" style="margin-bottom:30px;">
        <div>
          <span class="eyebrow">Нам доверяют</span>
          <h2 style="font-size:clamp(24px,3vw,34px);">Компании, с которыми работали</h2>
        </div>
      </div>
      <div class="clients-viewport">
        <div class="clients reveal">
          ${list.map(c => c.logo
            ? `<div class="client-slot" style="border-style:solid;"><img class="client-logo" src="${esc(c.logo)}" alt="${esc(c.name)}" loading="lazy"></div>`
            : `<div class="client-slot">${has ? "" : "ЛОГОТИП"}</div>`).join("")}
        </div>
        <div class="clients-nav">
          <button type="button" data-clients-prev aria-label="Предыдущие логотипы">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button type="button" data-clients-next aria-label="Следующие логотипы">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>`;
  initClientsNav();
}

/* --- ЛИСТАНИЕ ЛОГОТИПОВ (мобильные) --- */
function initClientsNav() {
  const track = $(".clients");
  const prev  = $("[data-clients-prev]");
  const next  = $("[data-clients-next]");
  if (!track || !prev || !next) return;

  /* шаг = ширина одной карточки + gap (т.е. сдвиг на колонку) */
  const step = () => {
    const slot = track.querySelector(".client-slot");
    if (!slot) return track.clientWidth * 0.8;
    const gap = parseFloat(getComputedStyle(track).gap) || 8;
    return (slot.getBoundingClientRect().width + gap) * 2;  /* 2 колонки разом */
  };

  const sync = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prev.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= maxScroll - 2;
    /* если листать нечего — прячем кнопки совсем */
    const nothingToScroll = maxScroll <= 2;
    const nav = $(".clients-nav");
    if (nav) nav.style.display = nothingToScroll ? "none" : "";
  };

  prev.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  next.addEventListener("click", () => track.scrollBy({ left:  step(), behavior: "smooth" }));
  track.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync, { passive: true });

  /* первый расчёт — после отрисовки картинок */
  sync();
  window.addEventListener("load", sync);
  setTimeout(sync, 300);
}

/* --- ПОРТФОЛИО (главная — превью) --- */
function renderPortfolioPreview() {
  const mount = $("[data-portfolio-preview]");
  if (!mount) return;

  /* берём ПЕРВУЮ работу каждого направления (editing, shooting, motion, ai) */
  const featured = [];
  SITE.portfolio.forEach(dir => {
    for (const cat of dir.categories) {
      const w = (cat.works || []).find(x => x.thumb || x.link);
      if (w) {
        featured.push({ dir, cat, work: w });
        break;                       /* только одна карточка на направление */
      }
    }
  });

  const cards = featured.length
    ? featured.map(({ dir, cat, work }) => `
        <article class="work reveal" style="cursor:pointer;"
          data-feat-link="${esc(work.link || "")}"
          data-feat-title="${esc(work.title)}"
          data-feat-cat="${esc(cat.name)}"
          data-feat-desc="${esc(work.description || "")}">
          ${work.thumb
            ? `<img src="${esc(work.thumb)}" alt="${esc(work.title)}" loading="lazy"
                 style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">`
            : `<div class="work-thumb">${esc(dir.title)}</div>`}
          ${work.link ? `<div class="play-badge">${ICONS.play}</div>` : ""}
          <div class="work-meta">
            <div class="cat">${esc(dir.title)}</div>
            <h4>${esc(work.title)}</h4>
          </div>
        </article>`).join("")
    : SITE.portfolio.map((dir, i) => `
        <article class="work reveal" style="transition-delay:${i * 60}ms"
          onclick="location.href='portfolio.html#${esc(dir.id)}'">
          <div class="work-thumb">${esc(dir.categories.length)} раздела</div>
          <div class="play-badge">${ICONS.play}</div>
          <div class="work-meta">
            <div class="cat">Направление</div>
            <h4>${esc(dir.title)}</h4>
          </div>
        </article>`).join("");

  mount.innerHTML = `
    <div class="wrap">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">Портфолио</span>
          <h2>Избранные работы</h2>
        </div>
        <a class="btn btn-ghost" href="portfolio.html">Смотреть всё</a>
      </div>
      <div class="work-grid" data-featured-grid>${cards}</div>
    </div>`;

  /* клик по избранной работе → модалка с видео */
  $$("[data-feat-link]", mount).forEach(card => {
    const link = card.dataset.featLink;
    if (!link) return;
    card.addEventListener("click", () => {
      openVideoModal({
        title: card.dataset.featTitle,
        description: card.dataset.featDesc,
        link: link,
      }, card.dataset.featCat);
    });
  });
}

/* --- ПОРТФОЛИО: полная страница --- */
function renderPortfolioPage() {
  const mount = $("[data-portfolio-full]");
  if (!mount) return;

  mount.innerHTML = `
    <div class="wrap">
      <div class="filters reveal">
        <button class="filter-btn active" data-filter="all">Все направления</button>
        ${SITE.portfolio.map(d => `<button class="filter-btn" data-filter="${esc(d.id)}">${esc(d.title)}</button>`).join("")}
      </div>

      ${SITE.portfolio.map(dir => `
        <section class="dir-block" data-dir="${esc(dir.id)}">
          <div class="dir-title reveal">
            <span class="dot"></span>
            <h3>${esc(dir.title)}</h3>
            <span class="count">${dir.categories.length} раздела</span>
          </div>
          ${dir.categories.map(cat => `
            <div style="margin-bottom:34px;">
              <h4 style="font-size:15px;letter-spacing:.1em;text-transform:uppercase;color:var(--neon);margin-bottom:16px;">
                ${esc(cat.name)}
              </h4>
              ${cat.works.length
                ? `<div class="works-viewport">
                     <div class="work-grid" data-works-track>
                       ${cat.works.map(w => `
                         <article class="work reveal" data-work="${esc(w.title)}" data-cat="${esc(cat.name)}" ${w.link ? 'style="cursor:pointer;"' : ""}>
                           ${w.thumb
                             ? `<img src="${esc(w.thumb)}" alt="${esc(w.title)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">`
                             : `<div class="work-thumb">Скоро</div>`}
                           ${w.link ? `<div class="play-badge">${ICONS.play}</div>` : ""}
                           <div class="work-meta">
                             <div class="cat">${esc(cat.name)}</div>
                             <h4>${esc(w.title)}</h4>
                             ${w.description ? `<p style="margin-top:6px;font-size:13px;color:var(--text-mute);line-height:1.45;">${esc(w.description)}</p>` : ""}
                           </div>
                         </article>`).join("")}
                     </div>
                     <div class="works-nav" data-works-nav>
                       <button type="button" data-works-prev aria-label="Предыдущие работы">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                       </button>
                       <button type="button" data-works-next aria-label="Следующие работы">
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                       </button>
                     </div>
                   </div>`
                : `<div class="work-grid"><div class="empty-note">Здесь появятся работы — наполняется контентом</div></div>`}
            </div>`).join("")}
        </section>`).join("")}
    </div>`;

  /* фильтр направлений + перехода по якорю */
  $$(".filter-btn", mount).forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".filter-btn", mount).forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.dataset.filter;
      $$("[data-dir]", mount).forEach(sec => {
        sec.style.display = (f === "all" || sec.dataset.dir === f) ? "" : "none";
      });
    });
  });

  /* клик по работе с видео → открываем модалку */
  const allWorks = SITE.portfolio.flatMap(d =>
    d.categories.flatMap(c => c.works.map(w => ({ ...w, _cat: c.name })))
  );

  $$("[data-work]", mount).forEach(card => {
    const title = card.dataset.work;
    const catName = card.dataset.cat;
    const work = allWorks.find(w => w.title === title && w._cat === catName);
    if (!work || !work.link) return;

    card.addEventListener("click", () => openVideoModal(work, catName));
  });

  initWorksNav(mount);

  if (location.hash) {
    const id = location.hash.slice(1);
    const target = $(`[data-dir="${id}"]`, mount);
    if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 150);
  }
}

/* ============================================================
   ЛИСТАНИЕ РАБОТ (мобильные): 4 плитки в кадре (2x2), стрелки вбок
   ============================================================ */
function initWorksNav(scope = document) {
  $$("[data-works-track]", scope).forEach(track => {
    const viewport = track.closest(".works-viewport");
    if (!viewport) return;
    const prev = viewport.querySelector("[data-works-prev]");
    const next = viewport.querySelector("[data-works-next]");
    const nav  = viewport.querySelector("[data-works-nav]");
    if (!prev || !next) return;

    /* прокручивается сам .works-viewport; шаг = один экран */
    const step = () => viewport.clientWidth;

    const sync = () => {
      const max = viewport.scrollWidth - viewport.clientWidth;
      if (!nav) return;
      if (max <= 2) { nav.style.display = "none"; return; }
      nav.style.display = "";
      prev.disabled = viewport.scrollLeft <= 2;
      next.disabled = viewport.scrollLeft >= max - 2;
    };

    prev.addEventListener("click", () => viewport.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => viewport.scrollBy({ left:  step(), behavior: "smooth" }));
    viewport.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    window.addEventListener("load", sync);
    sync();
    setTimeout(sync, 250);
  });
}

/* --- ВИДЕОУРОКИ --- */
function renderLessons() {
  const mount = $("[data-lessons]");
  if (!mount) return;
  const L = SITE.lessons;
  mount.innerHTML = `
    <div class="wrap">
      <div class="reveal" style="max-width:760px;margin-bottom:52px;">
        <span class="eyebrow">${esc(L.title)}</span>
        <h2 style="font-size:clamp(30px,4.5vw,48px);margin:16px 0 20px;">
          Бесплатные уроки по видео и нейросетям
        </h2>
        <p style="color:var(--text-dim);font-size:18px;">${esc(L.text)}</p>
      </div>

      <div class="section-head reveal" style="margin-bottom:24px;">
        <h3 style="font-size:22px;">Наши каналы</h3>
      </div>
      <div class="social-grid">
        ${L.socials.map((s, i) => `
          <a class="social-link reveal" style="transition-delay:${i * 50}ms" href="${esc(s.url)}" target="_blank" rel="noopener">
            <span class="ico">${ICONS[s.icon] || ""}</span>
            <span>
              <span class="name" style="display:block;">${esc(s.name)}</span>
              <span class="desc">${esc(s.desc)}</span>
            </span>
          </a>`).join("")}
      </div>
    </div>`;
}

/* --- КУРСЫ --- */
function renderCourses() {
  const mount = $("[data-courses]");
  if (!mount) return;
  const C = SITE.courseSupport;

  mount.innerHTML = `
    <div class="wrap">
      <div class="reveal" style="max-width:720px;margin-bottom:52px;">
        <span class="eyebrow">Курсы</span>
        <h2 style="font-size:clamp(30px,4.5vw,48px);margin:16px 0 20px;">Учись ремеслу изнутри</h2>
        <p style="color:var(--text-dim);font-size:18px;">
          Авторские курсы по монтажу, съёмке и моушн-дизайну — от практикующих специалистов студии.
        </p>
      </div>

      <div class="grid grid-3">
        ${SITE.courses.map((c, i) => `
          <article class="course reveal" style="transition-delay:${i * 60}ms">
            <div class="course-cover">
              ${c.cover ? `<img src="${esc(c.cover)}" alt="${esc(c.title)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">` : `
                <div class="badge">
                  <div class="t">Идёт разработка курса</div>
                  <div class="s">скоро в продаже</div>
                </div>`}
            </div>
            <div class="course-body">
              <h4>${esc(c.title)}</h4>
              <p>${esc(c.text)}</p>
              <div class="course-foot">
                ${c.status === "live" && c.link
                  ? `<a class="btn btn-primary" style="width:100%;justify-content:center;" href="${esc(c.link)}">Купить${c.price ? ` — ${esc(c.price)}` : ""}</a>`
                  : `<button class="btn-disabled" disabled>Купить</button>`}
              </div>
            </div>
          </article>`).join("")}
      </div>

      <div class="support-note reveal">
        <h3 style="font-size:24px;margin-bottom:14px;">${esc(C.title)}</h3>
        <p style="color:var(--text-dim);max-width:760px;margin:0 auto;">${esc(C.text)}</p>
        <div class="levels">
          ${C.levels.map(l => `<span class="level-pill ${l.lux ? "lux" : ""}">${esc(l.name)}</span>`).join("")}
        </div>
      </div>
    </div>`;
}

/* --- КОНТАКТЫ --- */
function renderContacts() {
  const mount = $("[data-contacts]");
  if (!mount) return;
  const C = SITE.contacts;
  mount.innerHTML = `
    <div class="wrap">
      <div class="grid grid-2 reveal" style="gap:52px;align-items:start;">
        <div>
          <span class="eyebrow">Контакты</span>
          <h2 style="font-size:clamp(30px,4.5vw,48px);margin:16px 0 20px;">${esc(C.title)}</h2>
          <p style="color:var(--text-dim);font-size:18px;">${esc(C.text)}</p>
          <div class="contact-card" style="margin-top:36px;">
            ${C.items.map(it => `
              <a class="contact-row" href="${esc(it.url)}" ${it.url.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
                <span class="ico">${ICONS[it.type] || ICONS.email}</span>
                <span>
                  <span class="label" style="display:block;">${esc(it.label)}</span>
                  <span class="value" style="display:block;">${esc(it.value)}</span>
                </span>
              </a>`).join("")}
          </div>
        </div>
        <div>
          <div class="section-head" style="margin-bottom:22px;">
            <h3 style="font-size:20px;">Мы в соцсетях</h3>
          </div>
          <div class="social-grid" style="grid-template-columns:1fr;">
            ${SITE.lessons.socials.map(s => `
              <a class="social-link" href="${esc(s.url)}" target="_blank" rel="noopener">
                <span class="ico">${ICONS[s.icon] || ""}</span>
                <span>
                  <span class="name" style="display:block;">${esc(s.name)}</span>
                  <span class="desc">${esc(s.desc)}</span>
                </span>
              </a>`).join("")}
          </div>
        </div>
      </div>
    </div>`;
}

/* --- фон-заглушка на всех страницах, кроме главной (там — видео) --- */
function initGridBackdrop() {
  if (isHomePage()) return;          // на главной фон рисует hero
  if ($(".bg-grid")) return;

  const d = document.createElement("div");
  d.className = "bg-grid";
  d.setAttribute("aria-hidden", "true");
  document.body.insertBefore(d, document.body.firstChild);
}

/* ---------- запуск ---------- */
document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildFooter();
  initGridBackdrop();

  renderHero();
  renderAbout();
  renderProcess();
  renderServices();
  renderServices();
  renderClients();
  renderPortfolioPreview();
  renderPortfolioPage();
  renderLessons();
  renderCourses();
  renderContacts();

  initReveal();

  /* год в подвале — актуальный */
  const y = new Date().getFullYear();
  if ($("[data-year]")) $("[data-year]").textContent = y;
});
