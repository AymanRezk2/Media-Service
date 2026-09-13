# دليل خدمة الميديا — Media Service Documentation

موقع توثيق داخلي لخدمة الميديا في الكنيسة. يعمل بالكامل كـ **Frontend Static** ويمكن نشره على **GitHub Pages** بدون أي Backend.

## هيكل المشروع

```text
/
├── index.html              # الصفحة الرئيسية
├── tutorials.html          # الشروحات
├── emergency.html          # الأعطال والطوارئ
├── equipment.html          # الأجهزة والمسؤوليات
├── powerpoint.html         # PowerPoint
├── obs.html                # OBS
├── youtube.html            # YouTube
├── assets/
│   ├── images/             # صور الكنيسة والشعار
│   ├── videos/             # فيديوهات الشروحات
│   └── downloads/          # ملفات التحميل (PowerPoint)
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── tutorials.js        # بيانات الشروحات
│   ├── equipment.js        # بيانات الأجهزة
│   └── app.js              # البحث، التصفية، الواجهة
└── README.md
```

## تشغيل محلي

افتح `index.html` في المتصفح، أو استخدم أي خادم static بسيط:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

> **ملاحظة:** ملف PowerPoint (~417 MB) كبير — GitHub Pages يدعمه لكن الرفع قد يستغرق وقتًا.

---

## إضافة فيديو شرح جديد

1. ضع ملف الفيدio في `assets/videos/` (مثال: `cable-connections.mp4`).
2. افتح `js/tutorials.js`.
3. ابحث عن الشرح المناسب أو أضف عنصرًا جديدًا في مصفوفة `TUTORIALS`:

```javascript
{
  id: 'cable-connections',
  title: 'توصيلات الكابلات',
  category: 'equipment',
  subcategory: 'توصيلات الكابلات',
  description: '...',
  video: './assets/videos/cable-connections.mp4',
  available: true,           // ← غيّر إلى true
  duration: '12:30',         // اختياري
  thumbnail: './assets/images/church-interior-2.jpeg',
  tags: ['كابلات', 'HDMI', 'طوارئ'],
  sourceTitle: 'Cable Connections'
}
```

4. احفظ الملف — سيظهر زر «شاهد الشرح» تلقائيًا.

### أسماء الفيدioهات المتوقعة (9 شروحات)

| الملف المتوقع | العنوان |
|---|---|
| `cable-connections.mp4` | توصيلات الكابلات |
| `display-setup-powerpoint.mp4` | إعداد العرض وPowerPoint |
| `electricity-screens.mp4` | الكهرباء والشاشات |
| `creating-powerpoint.mp4` | إنشاء PowerPoint جديد |
| `using-obs.mp4` | تشغيل OBS |
| `cameras-operation.mp4` | تشغيل وتحريك الكاميرات |
| `facebook-live.mp4` | البث المباشر على Facebook |
| `recording-sermons.mp4` | تسجيل الوعظات |
| `youtube-upload.mp4` | رفع الفيديو على YouTube |

> ضع ملفات الفيدio من مجلد `Explanation videos` في `assets/videos/` وأعد تسميتها حسب الجدول أعلاه (أو عدّل المسارات في `tutorials.js`).

---

## إضافة جهاز جديد

افتح `js/equipment.js` وأضف عنصرًا في مصفوفة `EQUIPMENT`:

```javascript
{
  id: 'new-device',
  name: 'Device Name',
  nameAr: 'اسم الجهاز',
  quantity: '1',
  status: '',
  responsible: '[يُحدَّث لاحقًا]',
  location: '[يُحدَّث لاحقًا]',
  notes: '',
  icon: '🔧',
  tags: ['tag1', 'tag2']
}
```

---

## استبدال PowerPoint

1. ضع الملف الجديد في `assets/downloads/`.
2. افتح `js/app.js` وعدّل كائن `POWERPOINT_INFO`:

```javascript
const POWERPOINT_INFO = {
  name: '...',
  version: '...',
  file: './assets/downloads/your-new-file.rar',
  description: '...',
  tutorialId: 'display-setup-powerpoint',
  createTutorialId: 'creating-powerpoint'
};
```

---

## إضافة مشكلة طوارئ

افتح `js/app.js` وأضف عنصرًا في مصفوفة `EMERGENCIES` مع ربطه بـ `tutorialIds` المناسبة.

---

## النشر على GitHub Pages

1. أنشئ repository على GitHub.
2. ارفع كل ملفات المشروع (بما فيها `assets/`).
3. من **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` / folder: `/ (root)`
4. انتظر دقائق — الموقع سيكون على: `https://USERNAME.github.io/REPO-NAME/`

### ملاحظات GitHub Pages

- جميع المسارات **نسبية** (`./assets/...`) — لا حاجة لتعديل.
- لا يوجد Backend أو Authentication.
- ملف PowerPoint الكبير: تأكد أن Git LFS مفعّل إذا تجاوز حد GitHub (100 MB per file — الملف ~417 MB **يتطلب Git LFS**).

#### استخدام Git LFS للـ PowerPoint

```bash
git lfs install
git lfs track "*.rar"
git add .gitattributes
git add assets/downloads/
git commit -m "Add PowerPoint with LFS"
git push
```

---

## البحث والتصفية

- **البحث:** شريط البحث في الهيدر — يبحث في الشروحات، الأجهزة، الطوارئ، PowerPoint، OBS.
- **التصفية:** في صفحة الشروحات — أزرار تصنيف سريعة بدون إعادة تحميل.

---

## التصميم

الهوية البصرية مستوحاة من أصول الكنيسة:
- ألوان: burgundy، gold، cream
- الشعار: `assets/images/church-logo.png`
- صور خلفية: `assets/images/church-photo.jpg`

---

## التوسع المستقبلي

البنية جاهزة لإضافة:
- شروحات جديدة (`tutorials.js`)
- أجهزة (`equipment.js`)
- مشاكل طوارئ (`app.js` → `EMERGENCIES`)
- إصدارات PowerPoint (`POWERPOINT_INFO`)
- أعضاء الفريق، جداول الخدمة، checklists — كصفحات/bيانات جديدة بنفس النمط
