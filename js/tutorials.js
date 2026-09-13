/**
 * Tutorials data — add new videos here.
 * Set `available: true` and `video` path once the file is in assets/videos/
 */
const TUTORIAL_CATEGORIES = {
  equipment: { label: 'الأجهزة والتوصيلات', icon: '🔌', filterKey: 'equipment' },
  display: { label: 'العرض وPowerPoint', icon: '🖥️', filterKey: 'powerpoint' },
  powerpoint: { label: 'PowerPoint', icon: '📊', filterKey: 'powerpoint' },
  cameras: { label: 'التصوير والكاميرات', icon: '🎥', filterKey: 'cameras' },
  streaming: { label: 'البث المباشر', icon: '🎬', filterKey: 'streaming' },
  youtube: { label: 'YouTube', icon: '▶️', filterKey: 'youtube' },
  emergency: { label: 'الأعطال والطوارئ', icon: '⚡', filterKey: 'emergency' }
};

const TUTORIALS = [
  {
    id: 'cable-connections',
    title: 'توصيلات الكابلات',
    category: 'equipment',
    subcategory: 'توصيلات الكابلات',
    description: 'شرح عملي لتوصيلات الكابلات الموجودة في المكان وكيفية التعامل معها عند حدوث مشكلة.',
    video: './assets/videos/cable-connections.mp4',
    available: false,
    duration: null,
    thumbnail: './assets/images/church-interior-2.jpeg',
    tags: ['كابلات', 'HDMI', 'توصيلات', 'أجهزة', 'طوارئ'],
    sourceTitle: 'Cable Connections'
  },
  {
    id: 'display-setup-powerpoint',
    title: 'إعداد العرض وPowerPoint',
    category: 'display',
    subcategory: 'طرق العرض',
    description: 'شرح إعداد الشاشات والبروجيكتور وتشغيل PowerPoint أثناء الخدمة.',
    video: './assets/videos/display-setup-powerpoint.mp4',
    available: false,
    duration: null,
    thumbnail: './assets/images/church-building.jpeg',
    tags: ['PowerPoint', 'عرض', 'شاشات', 'بروجيكتور', 'طوارئ'],
    sourceTitle: 'Display Setup & PowerPoint'
  },
  {
    id: 'electricity-screens',
    title: 'الكهرباء والشاشات',
    category: 'equipment',
    subcategory: 'الكهرباء',
    description: 'شرح التعامل مع الكهرباء والشاشات وحل المشاكل الشائعة أثناء الخدمة.',
    video: './assets/videos/electricity-screens.mp4',
    available: false,
    duration: null,
    thumbnail: './assets/images/church-altar.jpeg',
    tags: ['كهرباء', 'شاشات', 'طوارئ', 'أجهزة'],
    sourceTitle: 'Electricity & Screens'
  },
  {
    id: 'creating-powerpoint',
    title: 'إنشاء PowerPoint جديد',
    category: 'powerpoint',
    subcategory: 'إنشاء PowerPoint جديد',
    description: 'خطوات إنشاء عرض PowerPoint جديد بناءً على القالب المعتمد في الخدمة.',
    video: './assets/videos/creating-powerpoint.mp4',
    available: false,
    duration: null,
    thumbnail: './assets/images/church-interior-1.jpeg',
    tags: ['PowerPoint', 'عرض', 'إنشاء'],
    sourceTitle: 'Creating a New PowerPoint'
  },
  {
    id: 'using-obs',
    title: 'تشغيل OBS',
    category: 'streaming',
    subcategory: 'تشغيل OBS',
    description: 'شرح أساسيات تشغيل OBS Studio للبث والتسجيل أثناء الخدمة.',
    video: './assets/videos/using-obs.mp4',
    available: false,
    duration: null,
    thumbnail: './assets/images/church-photo.jpg',
    tags: ['OBS', 'بث', 'تسجيل', 'طوارئ'],
    sourceTitle: 'Using OBS'
  },
  {
    id: 'cameras-operation',
    title: 'تشغيل وتحريك الكاميرات',
    category: 'cameras',
    subcategory: 'تشغيل الكاميرات',
    description: 'شرح تشغيل الكاميرات وتحريكها أثناء الخدمة للحصول على أفضل زوايا.',
    video: './assets/videos/cameras-operation.mp4',
    available: false,
    duration: null,
    thumbnail: './assets/images/church-building.jpeg',
    tags: ['كاميرات', 'تصوير', 'طوارئ'],
    sourceTitle: 'Operating & Moving the Cameras'
  },
  {
    id: 'facebook-live',
    title: 'البث المباشر على Facebook',
    category: 'streaming',
    subcategory: 'البث على Facebook',
    description: 'خطوات البث المباشر على Facebook أثناء الخدمة.',
    video: './assets/videos/facebook-live.mp4',
    available: false,
    duration: null,
    thumbnail: './assets/images/church-interior-1.jpeg',
    tags: ['Facebook', 'بث', 'OBS', 'طوارئ'],
    sourceTitle: 'Going Live on Facebook'
  },
  {
    id: 'recording-sermons',
    title: 'تسجيل الوعظات والأحداث المهمة',
    category: 'cameras',
    subcategory: 'تسجيل الوعظات',
    description: 'شرح تسجيل الوعظات والأحداث المهمة أثناء وبعد الخدمة.',
    video: './assets/videos/recording-sermons.mp4',
    available: false,
    duration: null,
    thumbnail: './assets/images/church-altar.jpeg',
    tags: ['تسجيل', 'وعظات', 'كاميرات', 'OBS'],
    sourceTitle: 'Recording Sermons & Important Events'
  },
  {
    id: 'youtube-upload',
    title: 'رفع الفيديو على YouTube',
    category: 'youtube',
    subcategory: 'رفع الفيديو على YouTube',
    description: 'خطوات تجهيز الفيديو ورفعه على قناة YouTube بعد الخدمة.',
    video: './assets/videos/youtube-upload.mp4',
    available: false,
    duration: null,
    thumbnail: './assets/images/church-interior-2.jpeg',
    tags: ['YouTube', 'رفع', 'فيديو'],
    sourceTitle: 'Uploading Videos to YouTube'
  }
];

/** Get tutorial by id */
function getTutorial(id) {
  return TUTORIALS.find((t) => t.id === id);
}

/** Get tutorials by category key */
function getTutorialsByCategory(category) {
  return TUTORIALS.filter((t) => t.category === category);
}

/** Get available tutorials only */
function getAvailableTutorials() {
  return TUTORIALS.filter((t) => t.available);
}

/** Render a tutorial card HTML string */
function renderTutorialCard(tutorial) {
  const cat = TUTORIAL_CATEGORIES[tutorial.category];
  const categoryLabel = cat ? cat.label : tutorial.category;
  const durationHtml = tutorial.duration
    ? `<span class="card-meta__duration">${tutorial.duration}</span>`
    : '';
  const statusBadge = tutorial.available
    ? ''
    : '<span class="badge badge--soon">سيتم إضافة الشرح قريبًا</span>';

  const actionBtn = tutorial.available
    ? `<button type="button" class="btn btn--primary btn--watch" data-video="${tutorial.video}" data-title="${tutorial.title}" aria-label="شاهد شرح ${tutorial.title}">شاهد الشرح</button>`
    : `<button type="button" class="btn btn--secondary" disabled aria-disabled="true">غير متاح حاليًا</button>`;

  return `
    <article class="tutorial-card" data-id="${tutorial.id}" data-category="${tutorial.category}" data-tags="${tutorial.tags.join(' ')}">
      <div class="tutorial-card__thumb">
        <img src="${tutorial.thumbnail}" alt="" loading="lazy" width="400" height="225">
        ${durationHtml}
      </div>
      <div class="tutorial-card__body">
        <span class="card-meta__category">${categoryLabel}</span>
        <h3 class="tutorial-card__title">${tutorial.title}</h3>
        <p class="tutorial-card__desc">${tutorial.description}</p>
        ${statusBadge}
        <div class="tutorial-card__actions">${actionBtn}</div>
      </div>
    </article>`;
}

/** Render tutorials grouped by category */
function renderTutorialsGrouped(container, filter = 'all') {
  if (!container) return;

  const filtered =
    filter === 'all'
      ? TUTORIALS
      : TUTORIALS.filter((t) => {
          if (filter === 'emergency') return t.tags.includes('طوارئ');
          const cat = TUTORIAL_CATEGORIES[t.category];
          return cat && cat.filterKey === filter;
        });

  const groups = {};
  filtered.forEach((t) => {
    if (!groups[t.category]) groups[t.category] = [];
    groups[t.category].push(t);
  });

  let html = '';
  Object.keys(groups).forEach((catKey) => {
    const cat = TUTORIAL_CATEGORIES[catKey];
    if (!cat) return;
    html += `
      <section class="tutorial-group" data-group="${catKey}">
        <h2 class="tutorial-group__title">${cat.icon} ${cat.label}</h2>
        <div class="tutorial-grid">
          ${groups[catKey].map(renderTutorialCard).join('')}
        </div>
      </section>`;
  });

  container.innerHTML =
    html ||
    '<p class="empty-state">لا توجد شروحات مطابقة للفلتر المحدد.</p>';
}

/** Render flat tutorial grid (for filtered view) */
function renderTutorialsGrid(container, tutorials) {
  if (!container) return;
  container.innerHTML = tutorials.length
    ? `<div class="tutorial-grid">${tutorials.map(renderTutorialCard).join('')}</div>`
    : '<p class="empty-state">لا توجد نتائج.</p>';
}
