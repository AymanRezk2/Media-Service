/**
 * Main application — navigation, search, emergency, video modal, filters
 */

const EMERGENCIES = [
  {
    id: 'screen-not-working',
    title: 'الشاشة مش شغالة',
    icon: '🖥️',
    tutorialIds: ['electricity-screens', 'display-setup-powerpoint'],
    tags: ['شاشة', 'عرض', 'كهرباء']
  },
  {
    id: 'projector-not-working',
    title: 'البروجيكتور مش شغال',
    icon: '📽️',
    tutorialIds: ['display-setup-powerpoint', 'electricity-screens'],
    tags: ['بروجيكتور', 'عرض']
  },
  {
    id: 'no-image',
    title: 'مفيش صورة',
    icon: '📵',
    tutorialIds: ['cable-connections', 'display-setup-powerpoint'],
    tags: ['HDMI', 'صورة', 'كابلات']
  },
  {
    id: 'hdmi-issue',
    title: 'مشكلة HDMI',
    icon: '🔌',
    tutorialIds: ['cable-connections'],
    tags: ['HDMI', 'Hub', 'كابلات']
  },
  {
    id: 'camera-issue',
    title: 'مشكلة في الكاميرا',
    icon: '🎥',
    tutorialIds: ['cameras-operation'],
    tags: ['كاميرات', 'تصوير']
  },
  {
    id: 'obs-issue',
    title: 'مشكلة في OBS',
    icon: '🎬',
    tutorialIds: ['using-obs'],
    tags: ['OBS', 'بث', 'تسجيل']
  },
  {
    id: 'streaming-issue',
    title: 'مشكلة في البث',
    icon: '📡',
    tutorialIds: ['facebook-live', 'using-obs'],
    tags: ['Facebook', 'بث', 'OBS']
  },
  {
    id: 'recording-issue',
    title: 'مشكلة في التسجيل',
    icon: '⏺️',
    tutorialIds: ['recording-sermons', 'using-obs'],
    tags: ['تسجيل', 'OBS', 'كاميرات']
  },
  {
    id: 'audio-issue',
    title: 'مشكلة في الصوت',
    icon: '🔊',
    tutorialIds: [],
    tags: ['صوت', 'سماعة']
  },
  {
    id: 'power-issue',
    title: 'مشكلة في الكهرباء',
    icon: '⚡',
    tutorialIds: ['electricity-screens'],
    tags: ['كهرباء', 'شاشات']
  }
];

const POWERPOINT_INFO = {
  name: 'St.Mary Elnozha Liturgy Powerpoint — Widescreen',
  version: 'April 2025',
  file: 'https://www.mediafire.com/file/wpbqlo0imtdzct7/St.Mary_Elnozha_Liturgy_Powerpoint_Widescreen_December2025.rar/file',
  description:
    'هذا هو القالب/العرض الرئيسي المستخدم في خدمة الميديا أثناء القداس والاجتماعات. يُستخدم كأساس لجميع عروض PowerPoint في الكنيسة.',
  tutorialId: 'display-setup-powerpoint',
  createTutorialId: 'creating-powerpoint'
};

const WORKFLOW_STEPS = [
  { label: 'التحضير', icon: '📋' },
  { label: 'PowerPoint', icon: '📊' },
  { label: 'الشاشات / البروجيكتور', icon: '🖥️' },
  { label: 'الكاميرات', icon: '🎥' },
  { label: 'OBS', icon: '🎬' },
  { label: 'Facebook Live / التسجيل', icon: '📡' },
  { label: 'YouTube', icon: '▶️' }
];

const FILTER_OPTIONS = [
  { key: 'all', label: 'الكل' },
  { key: 'equipment', label: 'الأجهزة' },
  { key: 'powerpoint', label: 'PowerPoint' },
  { key: 'cameras', label: 'الكاميرات' },
  { key: 'streaming', label: 'البث المباشر' },
  { key: 'youtube', label: 'YouTube' },
  { key: 'emergency', label: 'الأعطال' }
];

/** Build searchable index */
function buildSearchIndex() {
  const items = [];

  TUTORIALS.forEach((t) => {
    items.push({
      type: 'tutorial',
      id: t.id,
      title: t.title,
      text: [t.title, t.description, t.subcategory, ...t.tags, t.sourceTitle].join(' '),
      url: `tutorials.html#${t.id}`,
      category: 'شرح'
    });
  });

  EQUIPMENT.forEach((e) => {
    items.push({
      type: 'equipment',
      id: e.id,
      title: e.nameAr,
      text: [e.nameAr, e.name, e.notes, e.status, ...e.tags].join(' '),
      url: 'equipment.html',
      category: 'جهاز'
    });
  });

  EMERGENCIES.forEach((e) => {
    items.push({
      type: 'emergency',
      id: e.id,
      title: e.title,
      text: [e.title, ...e.tags].join(' '),
      url: 'emergency.html',
      category: 'طوارئ'
    });
  });

  items.push({
    type: 'powerpoint',
    id: 'powerpoint',
    title: 'PowerPoint — العرض الرئيسي',
    text: [POWERPOINT_INFO.name, POWERPOINT_INFO.version, POWERPOINT_INFO.description, 'PowerPoint'].join(' '),
    url: 'powerpoint.html',
    category: 'PowerPoint'
  });

  items.push({
    type: 'obs',
    id: 'obs',
    title: 'OBS Studio',
    text: 'OBS بث تسجيل Facebook Live',
    url: 'obs.html',
    category: 'OBS'
  });

  return items;
}

/** Inject shared site header */
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const currentPage = document.body.dataset.page || '';

  const navLinks = [
    { href: 'index.html', label: 'الرئيسية', page: 'home' },
    { href: 'tutorials.html', label: 'الشروحات', page: 'tutorials' },
    { href: 'emergency.html', label: 'الأعطال والطوارئ', page: 'emergency' },
    { href: 'equipment.html', label: 'الأجهزة', page: 'equipment' },
    { href: 'powerpoint.html', label: 'PowerPoint', page: 'powerpoint' },
    { href: 'obs.html', label: 'OBS', page: 'obs' },
    { href: 'youtube.html', label: 'YouTube', page: 'youtube' }
  ];

  header.innerHTML = `
    <div class="header-inner">
      <a href="index.html" class="brand">
        <img src="./assets/images/media-logo.png" alt="شعار الكنيسة" class="brand__logo" width="48" height="48">
        <span class="brand__text">
          <span class="brand__title">Media Service</span>
          <span class="brand__subtitle">دليل خدمة الميديا</span>
        </span>
      </a>
      <button type="button" class="nav-toggle" id="nav-toggle" aria-label="فتح القائمة" aria-expanded="false" aria-controls="site-nav">
        <span></span><span></span><span></span>
      </button>
      <nav class="site-nav" id="site-nav" aria-label="التنقل الرئيسي">
        <ul class="nav-list">
          ${navLinks
            .map(
              (l) =>
                `<li><a href="${l.href}" class="nav-link${currentPage === l.page ? ' nav-link--active' : ''}"${currentPage === l.page ? ' aria-current="page"' : ''}>${l.label}</a></li>`
            )
            .join('')}
        </ul>
      </nav>
      <div class="header-search" id="header-search-wrap">
        <label for="global-search" class="visually-hidden">بحث</label>
        <input type="search" id="global-search" class="search-input" placeholder="بحث سريع..." autocomplete="off" enterkeyhint="search">
        <div class="search-results" id="search-results" hidden></div>
      </div>
    </div>`;

  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('site-nav--open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      nav?.classList.remove('site-nav--open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

/** Inject shared footer */
function initFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-inner">
      <img src="./assets/images/media-logo.png" alt="" class="footer-logo" width="40" height="40" aria-hidden="true">
      <p class="footer-text">دليل عمليات خدمة الميديا — للاستخدام الداخلي</p>
      <p class="footer-copy">كنيسة الأنبا كاراس السائح والأرشيدياكون حبيب جرجس</p>
    </div>`;
}

/** Render emergency cards */
function renderEmergencies(container, compact = false) {
  if (!container) return;

  container.innerHTML = EMERGENCIES.map((item) => {
    const linkedTutorials = item.tutorialIds
      .map((id) => getTutorial(id))
      .filter(Boolean);
    const available = linkedTutorials.filter((t) => t.available);

    let helpHtml;
    if (available.length > 0) {
      helpHtml = available
        .map(
          (t) =>
            `<a href="tutorials.html#${t.id}" class="emergency-link">شاهد: ${t.title}</a>`
        )
        .join('');
    } else if (linkedTutorials.length > 0) {
      helpHtml = `<span class="emergency-soon">سيتم إضافة الشرح قريبًا</span>
        <span class="emergency-related">الشروحات المرتبطة: ${linkedTutorials.map((t) => t.title).join(' — ')}</span>`;
    } else {
      helpHtml = '<span class="emergency-soon">سيتم إضافة الشرح قريبًا</span>';
    }

    return `
      <article class="emergency-card${compact ? ' emergency-card--compact' : ''}" data-id="${item.id}">
        <div class="emergency-card__icon" aria-hidden="true">${item.icon}</div>
        <h3 class="emergency-card__title">${item.title}</h3>
        <div class="emergency-card__help">${helpHtml}</div>
      </article>`;
  }).join('');
}

/** Render workflow diagram */
function renderWorkflow(container) {
  if (!container) return;
  container.innerHTML = `
    <div class="workflow">
      ${WORKFLOW_STEPS.map((step, i) => {
        const arrow = i < WORKFLOW_STEPS.length - 1 ? '<div class="workflow__arrow" aria-hidden="true">↓</div>' : '';
        return `
          <div class="workflow__step">
            <span class="workflow__icon" aria-hidden="true">${step.icon}</span>
            <span class="workflow__label">${step.label}</span>
          </div>${arrow}`;
      }).join('')}
    </div>`;
}

/** Render quick action cards on homepage */
function renderQuickActions(container) {
  if (!container) return;
  const actions = [
    { href: 'tutorials.html', icon: '🎥', label: 'الشروحات', desc: 'جميع فيديوهات الشرح' },
    { href: 'emergency.html', icon: '⚡', label: 'الأعطال والطوارئ', desc: 'حل سريع أثناء الخدمة' },
    { href: 'equipment.html', icon: '🖥️', label: 'الأجهزة والمسؤوليات', desc: 'مين مسؤول عن إيه؟' },
    { href: 'powerpoint.html', icon: '📊', label: 'PowerPoint', desc: 'تحميل العرض الرئيسي' },
    { href: 'obs.html', icon: '🎬', label: 'OBS', desc: 'البث والتسجيل' },
    { href: 'obs.html', icon: '📺', label: 'البث المباشر', desc: 'Facebook Live' },
    { href: 'youtube.html', icon: '▶️', label: 'YouTube', desc: 'رفع الفيديوهات' }
  ];

  container.innerHTML = actions
    .map(
      (a) => `
      <a href="${a.href}" class="quick-action">
        <span class="quick-action__icon" aria-hidden="true">${a.icon}</span>
        <span class="quick-action__label">${a.label}</span>
        <span class="quick-action__desc">${a.desc}</span>
      </a>`
    )
    .join('');
}

/** Render filter buttons */
function renderFilters(container, activeFilter = 'all') {
  if (!container) return;
  container.innerHTML = FILTER_OPTIONS.map(
    (f) =>
      `<button type="button" class="filter-btn${f.key === activeFilter ? ' filter-btn--active' : ''}" data-filter="${f.key}" aria-pressed="${f.key === activeFilter}">${f.label}</button>`
  ).join('');
}

/** Global search */
function initSearch() {
  const input = document.getElementById('global-search');
  const resultsEl = document.getElementById('search-results');
  if (!input || !resultsEl) return;

  const index = buildSearchIndex();

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      resultsEl.hidden = true;
      resultsEl.innerHTML = '';
      return;
    }

    const matches = index.filter((item) => item.text.toLowerCase().includes(q) || item.title.toLowerCase().includes(q)).slice(0, 8);

    if (matches.length === 0) {
      resultsEl.innerHTML = '<p class="search-empty">لا توجد نتائج</p>';
    } else {
      resultsEl.innerHTML = matches
        .map(
          (m) =>
            `<a href="${m.url}" class="search-result-item">
              <span class="search-result-cat">${m.category}</span>
              <span class="search-result-title">${m.title}</span>
            </a>`
        )
        .join('');
    }
    resultsEl.hidden = false;
  }

  input.addEventListener('input', (e) => renderResults(e.target.value));
  input.addEventListener('focus', (e) => {
    if (e.target.value.trim()) renderResults(e.target.value);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#header-search-wrap')) {
      resultsEl.hidden = true;
    }
  });
}

/** Tutorial filters on tutorials page */
function initTutorialFilters() {
  const filterContainer = document.getElementById('tutorial-filters');
  const tutorialsContainer = document.getElementById('tutorials-container');
  if (!filterContainer || !tutorialsContainer) return;

  renderFilters(filterContainer, 'all');
  renderTutorialsGrouped(tutorialsContainer, 'all');

  filterContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterContainer.querySelectorAll('.filter-btn').forEach((b) => {
      b.classList.remove('filter-btn--active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('filter-btn--active');
    btn.setAttribute('aria-pressed', 'true');
    renderTutorialsGrouped(tutorialsContainer, btn.dataset.filter);
  });
}

/** Video modal */
function initVideoModal() {
  let modal = document.getElementById('video-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'video-modal';
    modal.className = 'video-modal';
    modal.hidden = true;
    modal.innerHTML = `
      <div class="video-modal__backdrop" data-close-modal></div>
      <div class="video-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="video-modal-title">
        <div class="video-modal__header">
          <h2 id="video-modal-title" class="video-modal__title"></h2>
          <button type="button" class="video-modal__close" data-close-modal aria-label="إغلاق">&times;</button>
        </div>
        <div class="video-modal__body">
          <video controls playsinline class="video-modal__player"></video>
        </div>
      </div>`;
    document.body.appendChild(modal);
  }

  const player = modal.querySelector('video');
  const titleEl = modal.querySelector('.video-modal__title');
  let lastTrigger = null;

  function closeModal() {
    modal.hidden = true;
    player.pause();
    player.removeAttribute('src');
    player.load();
    document.body.style.overflow = '';
    lastTrigger?.focus();
  }

  function openModal(src, title) {
    if (!src) return;
    lastTrigger = document.activeElement;
    titleEl.textContent = title;
    player.src = src;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    player.focus();
  }

  document.addEventListener('click', (e) => {
    const watchBtn = e.target.closest('.btn--watch');
    if (watchBtn) {
      openModal(watchBtn.dataset.video, watchBtn.dataset.title);
      return;
    }
    if (e.target.closest('[data-close-modal]')) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });
}

/** Render PowerPoint section content */
function renderPowerPointSection(container) {
  if (!container) return;
  const usageTutorial = getTutorial(POWERPOINT_INFO.tutorialId);
  const createTutorial = getTutorial(POWERPOINT_INFO.createTutorialId);

  const usageLink = usageTutorial
    ? usageTutorial.available
      ? `<a href="tutorials.html#${usageTutorial.id}" class="btn btn--secondary">كيفية استخدامه — ${usageTutorial.title}</a>`
      : `<span class="text-muted">شرح الاستخدام: ${usageTutorial.title} — <em>سيتم إضافة الشرح قريبًا</em></span>`
    : '';

  const createLink = createTutorial
    ? createTutorial.available
      ? `<a href="tutorials.html#${createTutorial.id}" class="link-card">
          <h3>إنشاء PowerPoint جديد</h3>
          <p>${createTutorial.description}</p>
          <span class="link-card__action">شاهد الشرح ←</span>
        </a>`
      : `<div class="link-card link-card--disabled">
          <h3>إنشاء PowerPoint جديد</h3>
          <p>${createTutorial.description}</p>
          <span class="badge badge--soon">سيتم إضافة الشرح قريبًا</span>
        </div>`
    : '';

  container.innerHTML = `
    <div class="ppt-card">
      <div class="ppt-card__icon" aria-hidden="true">📊</div>
      <div class="ppt-card__body">
        <h2 class="ppt-card__name">${POWERPOINT_INFO.name}</h2>
        <p class="ppt-card__version">الإصدار: ${POWERPOINT_INFO.version}</p>
        <p class="ppt-card__desc">${POWERPOINT_INFO.description}</p>
        <div class="ppt-card__actions">
          <a href="${POWERPOINT_INFO.file}" class="btn btn--primary btn--download" download aria-label="تحميل PowerPoint ${POWERPOINT_INFO.version}">
            ⬇️ تحميل PowerPoint
          </a>
          ${usageLink}
        </div>
        <p class="ppt-note">هذا هو القالب/العرض الرئيسي المستخدم حاليًا في خدمة الميديا.</p>
      </div>
    </div>
    ${createLink}`;
}

/** Render OBS page content */
function renderOBSSection(container) {
  if (!container) return;
  const obsTutorial = getTutorial('using-obs');
  const fbTutorial = getTutorial('facebook-live');
  const recTutorial = getTutorial('recording-sermons');

  function tutorialBlock(t) {
    if (!t) return '';
    if (t.available) {
      return `<a href="tutorials.html#${t.id}" class="obs-tutorial-link">
        <span>${t.title}</span>
        <span class="obs-tutorial-link__action">شاهد الشرح</span>
      </a>`;
    }
    return `<div class="obs-tutorial-link obs-tutorial-link--soon">
      <span>${t.title}</span>
      <span class="badge badge--soon">سيتم إضافة الشرح قريبًا</span>
    </div>`;
  }

  container.innerHTML = `
    <div class="info-section">
      <h2>ما هو OBS؟</h2>
      <p>OBS Studio هو البرنامج المستخدم في خدمة الميديا للبث المباشر على Facebook ولتسجيل الوعظات والأحداث المهمة أثناء الخدمة.</p>
    </div>
    <div class="info-section">
      <h2>سير العمل الأساسي</h2>
      <ol class="workflow-list">
        <li>تشغيل OBS قبل بدء الخدمة</li>
        <li>التأكد من مصادر الفيديو (الكاميرات) والصوت</li>
        <li>اختيار البث المباشر أو التسجيل حسب الحاجة</li>
        <li>بدء البث على Facebook أو بدء التسجيل</li>
        <li>إيقاف البث/التسجيل بعد انتهاء الخدمة</li>
      </ol>
      <p class="text-muted">للتفاصيل الدقيقة للإعدادات، راجع الشروحات أدناه.</p>
    </div>
    <div class="info-section">
      <h2>الشروحات المرتبطة</h2>
      <div class="obs-tutorials">
        ${tutorialBlock(obsTutorial)}
        ${tutorialBlock(fbTutorial)}
        ${tutorialBlock(recTutorial)}
      </div>
    </div>`;
}

/** Render YouTube page content */
function renderYouTubeSection(container) {
  if (!container) return;
  const uploadTutorial = getTutorial('youtube-upload');
  const recordTutorial = getTutorial('recording-sermons');

  function tutorialCard(t, label) {
    if (!t) return '';
    return `
      <article class="youtube-card">
        <h3>${label || t.title}</h3>
        <p>${t.description}</p>
        ${
          t.available
            ? `<a href="tutorials.html#${t.id}" class="btn btn--primary">شاهد شرح ${t.title}</a>`
            : '<span class="badge badge--soon">سيتم إضافة الشرح قريبًا</span>'
        }
      </article>`;
  }

  container.innerHTML = `
    <div class="info-section">
      <h2>YouTube — بعد الخدمة</h2>
      <p>بعد تسجيل الوعظات والأحداث المهمة، يتم تجهيز الفيديو ورفعه على قناة YouTube.</p>
    </div>
    <div class="youtube-grid">
      ${tutorialCard(recordTutorial, 'تسجيل الفيديو')}
      ${tutorialCard(uploadTutorial, 'رفع الفيديو على YouTube')}
    </div>
    <div class="info-section">
      <h3>خطوات عامة</h3>
      <ol class="workflow-list">
        <li>تسجيل الفيديو أثناء الخدمة (OBS / الكاميرات)</li>
        <li>تجهيز الفيديو بعد الخدمة</li>
        <li>رفع الفيديو على YouTube</li>
      </ol>
      <p class="text-muted">راجع الشروحات أعلاه للتفاصيل العملية.</p>
    </div>`;
}

/** Scroll to hash anchor on tutorials page */
function initHashScroll() {
  const hash = window.location.hash.slice(1);
  if (!hash) return;
  const el = document.querySelector(`[data-id="${hash}"]`);
  if (el) {
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    el.classList.add('highlight-flash');
    setTimeout(() => el.classList.remove('highlight-flash'), 2000);
  }
}

/** Initialize on DOM ready */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initFooter();
  initSearch();
  initVideoModal();

  const page = document.body.dataset.page;

  if (page === 'home') {
    renderQuickActions(document.getElementById('quick-actions'));
    renderEmergencies(document.getElementById('emergency-preview'), true);
    renderWorkflow(document.getElementById('workflow'));
  }

  if (page === 'emergency') {
    renderEmergencies(document.getElementById('emergency-list'));
  }

  if (page === 'equipment') {
    renderEquipment(document.getElementById('equipment-list'));
  }

  if (page === 'tutorials') {
    initTutorialFilters();
    initHashScroll();
  }

  if (page === 'powerpoint') {
    renderPowerPointSection(document.getElementById('powerpoint-content'));
  }

  if (page === 'obs') {
    renderOBSSection(document.getElementById('obs-content'));
  }

  if (page === 'youtube') {
    renderYouTubeSection(document.getElementById('youtube-content'));
  }
});
