/**
 * Equipment data — edit responsible persons and details here.
 */
const EQUIPMENT = [
  {
    id: 'projector-screen',
    name: 'Projector + Screen',
    nameAr: 'البروجيكتور + الشاشة',
    quantity: '1',
    status: '',
    responsible: '[يُحدَّث لاحقًا]',
    location: '[يُحدَّث لاحقًا]',
    notes: 'المسؤول عن عرض PowerPoint على الشاشة الرئيسية.',
    icon: '📽️',
    tags: ['بروجيكتور', 'شاشة', 'عرض', 'PowerPoint']
  },
  {
    id: 'speaker',
    name: 'Speaker',
    nameAr: 'السماعة (Speaker)',
    quantity: '1',
    status: '',
    responsible: '[يُحدَّث لاحقًا]',
    location: '[يُحدَّث لاحقًا]',
    notes: 'مسؤول عن الصوت أثناء الخدمة.',
    icon: '🔊',
    tags: ['صوت', 'سماعة']
  },
  {
    id: 'laptop',
    name: 'Laptop',
    nameAr: 'اللابتوب',
    quantity: '1',
    status: '',
    responsible: '[يُحدَّث لاحقًا]',
    location: '[يُحدَّث لاحقًا]',
    notes: 'تشغيل PowerPoint وOBS والبرامج المرتبطة بالخدمة.',
    icon: '💻',
    tags: ['لابتوب', 'PowerPoint', 'OBS']
  },
  {
    id: 'hdmi-hub-8',
    name: 'HDMI Hub — 8 Ports',
    nameAr: 'HDMI Hub — 8 منافذ',
    quantity: '1',
    status: 'Spare / احتياطي',
    responsible: '',
    location: '[يُحدَّث لاحقًا]',
    notes: 'جهاز احتياطي للطوارئ.',
    icon: '🔌',
    tags: ['HDMI', 'Hub', 'احتياطي', 'طوارئ']
  },
  {
    id: 'spare-cables',
    name: 'Spare Cables',
    nameAr: 'كابلات احتياطية',
    quantity: '—',
    status: 'احتياطي للطوارئ',
    responsible: '',
    location: '[يُحدَّث لاحقًا]',
    notes: 'كابلات HDMI وكابلات أخرى للطوارئ.',
    icon: '🔗',
    tags: ['كابلات', 'HDMI', 'احتياطي', 'طوارئ']
  },
  {
    id: 'small-screens',
    name: 'Small Screens',
    nameAr: 'الشاشات الصغيرة',
    quantity: '6',
    status: '',
    responsible: '[يُحدَّث لاحقًا]',
    location: '[يُحدَّث لاحقًا]',
    notes: '',
    icon: '📺',
    tags: ['شاشات', 'عرض']
  },
  {
    id: 'large-screens',
    name: 'Large Screens',
    nameAr: 'الشاشات الكبيرة',
    quantity: '2',
    status: '',
    responsible: '[يُحدَّث لاحقًا]',
    location: '[يُحدَّث لاحقًا]',
    notes: '',
    icon: '🖥️',
    tags: ['شاشات', 'عرض']
  },
  {
    id: 'hdmi-hubs',
    name: 'HDMI Hubs',
    nameAr: 'محولات HDMI Hub',
    quantity: '3',
    status: 'مستخدمة حاليًا',
    responsible: '',
    location: '[يُحدَّث لاحقًا]',
    notes: '3 أجهزة Hub قيد الاستخدام حاليًا في المكان.',
    icon: '🔀',
    tags: ['HDMI', 'Hub']
  }
];

/** Render equipment card */
function renderEquipmentCard(item) {
  const responsibleRow = item.responsible
    ? `<div class="equip-row"><span class="equip-label">المسؤول:</span><span class="equip-value">${item.responsible}</span></div>`
    : '';
  const statusRow = item.status
    ? `<div class="equip-row"><span class="equip-label">الحالة:</span><span class="equip-value equip-value--status">${item.status}</span></div>`
    : '';
  const locationRow = item.location
    ? `<div class="equip-row"><span class="equip-label">الموقع:</span><span class="equip-value">${item.location}</span></div>`
    : '';
  const notesRow = item.notes
    ? `<p class="equip-notes">${item.notes}</p>`
    : '';

  return `
    <article class="equipment-card" data-id="${item.id}" data-tags="${item.tags.join(' ')}">
      <div class="equipment-card__icon" aria-hidden="true">${item.icon}</div>
      <h3 class="equipment-card__title">${item.nameAr}</h3>
      <p class="equipment-card__subtitle">${item.name}</p>
      <div class="equipment-card__details">
        <div class="equip-row"><span class="equip-label">العدد:</span><span class="equip-value">${item.quantity}</span></div>
        ${statusRow}
        ${responsibleRow}
        ${locationRow}
      </div>
      ${notesRow}
    </article>`;
}

/** Render all equipment cards */
function renderEquipment(container) {
  if (!container) return;
  container.innerHTML = `<div class="equipment-grid">${EQUIPMENT.map(renderEquipmentCard).join('')}</div>`;
}
