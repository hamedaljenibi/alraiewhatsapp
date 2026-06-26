import { ChatbotNode } from "../types/chatbot.types";

export const animalsTopic: Record<string, ChatbotNode> = {

  ANIMAL_ROOT: {
    id: "ANIMAL_ROOT",
    type: "menu",
    message: {
      en: "Animals — what would you like help with?",
      ar: "الحيوانات — كيف يمكننا مساعدتك؟",
    },
    buttons: [
      { id: "ANIMAL_ADD", label: { en: "Add animal", ar: "إضافة حيوان" } },
      { id: "ANIMAL_EDIT", label: { en: "Edit animal", ar: "تعديل الحيوان" } },
      { id: "ANIMAL_DELETE", label: { en: "Delete animal", ar: "حذف الحيوان" } },
      { id: "ANIMAL_DETAILS", label: { en: "Animal details", ar: "تفاصيل الحيوان" } },
      { id: "ANIMAL_TRANSFER", label: { en: "Transfer ownership", ar: "نقل الملكية" } },
      { id: "ANIMAL_HEALTH", label: { en: "Health & vaccination", ar: "الصحة والتطعيم" } },
      { id: "ANIMAL_FOUND", label: { en: "Found animal", ar: "العثور على حيوان" } },
      { id: "ANIMAL_SICK", label: { en: "Sick animal", ar: "حيوان مريض" } },
      { id: "ANIMAL_ASSET_COUNT", label: { en: "Asset Count (App)", ar: "حصر الأصول (تطبيق)" } },
    ],
  },

  /* ================= ADD ================= */

  ANIMAL_ADD: {
    id: "ANIMAL_ADD",
    type: "menu",
    message: {
      en: "How to add animal?",
      ar: "كيفية إضافة حيوان؟",
    },
    buttons: [
      { id: "ANIMAL_ADD_PHOTO", label: { en: "How to add animal?", ar: "كيفية إضافة حيوان؟" } },
      { id: "ANIMAL_ADD_TYPE", label: { en: "Select animal type", ar: "اختيار نوع الحيوان" } },
      { id: "ANIMAL_ADD_BREED", label: { en: "Add breed", ar: "إضافة السلالة" } },
      { id: "ANIMAL_ADD_SERIAL", label: { en: "Serial number", ar: "الرقم التسلسلي" } },
      { id: "ANIMAL_ADD_HEALTH", label: { en: "Health details", ar: "تفاصيل الصحة" } },
    ],
  },

  ANIMAL_ADD_PHOTO: {
    id: "ANIMAL_ADD_PHOTO",
    type: "text",
    message: {
      en: "Click on Add animal → Select entry type → Select animal type → Add details → Save.",
      ar: "اضغط على إضافة حيوان → اختر نوع الإدخال → اختر نوع الحيوان → أضف التفاصيل → حفظ.",
    },
  },

  ANIMAL_ADD_TYPE: {
    id: "ANIMAL_ADD_TYPE",
    type: "text",
    message: {
      en: "Select animal type from dropdown (camel, horse, sheep etc).",
      ar: "اختر نوع الحيوان من القائمة (جمل، حصان، خروف...).",
    },
  },

  ANIMAL_ADD_BREED: {
    id: "ANIMAL_ADD_BREED",
    type: "text",
    message: {
      en: "Choose breed or enter custom breed name.",
      ar: "اختر السلالة أو أدخل سلالة مخصصة.",
    },
  },

  ANIMAL_ADD_SERIAL: {
    id: "ANIMAL_ADD_SERIAL",
    type: "text",
    message: {
      en: "You can add serial number, microchip ID or auto generated ID.",
      ar: "يمكنك إضافة الرقم التسلسلي أو رقم الشريحة أو إنشاء تلقائي.",
    },
  },

  ANIMAL_ADD_HEALTH: {
    id: "ANIMAL_ADD_HEALTH",
    type: "text",
    message: {
      en: "Open Tracking → Track your animals health → Select animal type → Manage health",
      ar: "التتبع → تتبع صحة حيواناتك → اختر نوع الحيوان → إدارة الصحة",
    },
  },

  /* ================= EDIT ================= */

  ANIMAL_EDIT: {
    id: "ANIMAL_EDIT",
    type: "menu",
    message: {
      en: "Edit animal information",
      ar: "تعديل معلومات الحيوان",
    },
    buttons: [
      { id: "ANIMAL_EDIT_INFO", label: { en: "Update info", ar: "تحديث المعلومات" } },
      // { id: "ANIMAL_EDIT_PHOTO", label: { en: "Change photo", ar: "تغيير الصورة" } },
      { id: "ANIMAL_EDIT_HEALTH", label: { en: "Health status", ar: "حالة الصحة" } },
    ],
  },

  ANIMAL_EDIT_INFO: {
    id: "ANIMAL_EDIT_INFO",
    type: "text",
    message: {
      en: "Go to animal detail → edit → update information.",
      ar: "اذهب إلى تفاصيل الحيوان → تعديل → تحديث المعلومات.",
    },
  },

  ANIMAL_EDIT_PHOTO: {
    id: "ANIMAL_EDIT_PHOTO",
    type: "text",
    message: {
      en: "Edit animal and upload new photo.",
      ar: "قم بتعديل الحيوان ورفع صورة جديدة.",
    },
  },

  ANIMAL_EDIT_HEALTH: {
    id: "ANIMAL_EDIT_HEALTH",
    type: "text",
    message: {
      en: "Open Tracking → Track your animals health → Select animal type → Manage health",
      ar:"التتبع → تتبع صحة حيواناتك → اختر نوع الحيوان → إدارة الصحة",
    },
  },

  /* ================= DELETE ================= */

  ANIMAL_DELETE: {
    id: "ANIMAL_DELETE",
    type: "text",
    message: {
      en: "Open animal detail → delete → confirm deletion.",
      ar: "افتح تفاصيل الحيوان → حذف → تأكيد الحذف.",
    },
  },

  /* ================= DETAILS ================= */

  ANIMAL_DETAILS: {
    id: "ANIMAL_DETAILS",
    type: "menu",
    message: {
      en: "Animal details",
      ar: "تفاصيل الحيوان",
    },
    buttons: [
      { id: "ANIMAL_VIEW", label: { en: "View details", ar: "عرض التفاصيل" } },
      { id: "ANIMAL_VACCINATION", label: { en: "Vaccination history", ar: "سجل التطعيم" } },
      // { id: "ANIMAL_TAG", label: { en: "Tag info", ar: "معلومات الوسم" } },
    ],
  },

  ANIMAL_VIEW: {
    id: "ANIMAL_VIEW",
    type: "text",
    message: {
      en: "Go to dashboard, click on animal to see full details.",
      ar: "اذهب إلى لوحة التحكم، انقر على الحيوان لعرض التفاصيل الكاملة.",
    },
  },

  ANIMAL_VACCINATION: {
    id: "ANIMAL_VACCINATION",
    type: "text",
    message: {
      en: "Vaccination history is available in animal health section.",
      ar: "سجل التطعيم متوفر في قسم صحة الحيوان.",
    },
  },

  ANIMAL_TAG: {
    id: "ANIMAL_TAG",
    type: "text",
    message: {
      en: "Each animal has unique tag and ID.",
      ar: "لكل حيوان وسم ومعرف فريد.",
    },
  },

  /* ================= TRANSFER ================= */

  ANIMAL_TRANSFER: {
    id: "ANIMAL_TRANSFER",
    type: "text",
    message: {
      en: "Open animal detail → Transfer ownership → Add details of new owner. -> Create transfer request. Admin will review and approve transfer.",
      ar: "افتح تفاصيل الحيوان → نقل الملكية → أضف تفاصيل المالك الجديد. -> إنشاء طلب نقل. ستقوم الإدارة بمراجعة والموافقة على النقل.",
    },
  },

  /* ================= HEALTH ================= */

  ANIMAL_HEALTH: {
    id: "ANIMAL_HEALTH",
    type: "menu",
    message: {
      en: "Animal health & vaccination",
      ar: "صحة الحيوان والتطعيم",
    },
    buttons: [
      { id: "ANIMAL_HEALTH_ADD", label: { en: "Add health report", ar: "إضافة تقرير صحي" } },
      { id: "ANIMAL_HEALTH_UPDATE", label: { en: "Update health report", ar: "تحديث التقرير الصحي" } },
      { id: "ANIMAL_HEALTH_VIEW", label: { en: "View health report", ar: "عرض التقرير الصحي" } },
      { id: "ANIMAL_HEALTH_DELETE", label: { en: "Delete health report", ar: "حذف التقرير الصحي" } },
      // { id: "ANIMAL_HEALTH_VACCINATION", label: { en: "Vaccination status", ar: "حالة التطعيم" } },
    ],
  },
  
  ANIMAL_HEALTH_ADD: {
    id: "ANIMAL_HEALTH_ADD",
    type: "text",
    message: {
      en: `Open Tracking → Track your animals health → Select animal type → Add new -> Select animal to add health report.
  
  You can add:
  • Temperature
  • Heart rate
  • Weight
  • Disease
  • Allergy
  • Vaccination status
  • Notes
  
  Each animal supports only ONE health report.`,
      ar: `افتح التتبع → تتبع صحة حيواناتك → اختر نوع الحيوان → إضافة جديد -> اختر الحيوان لإضافة التقرير الصحي.
  
  يمكنك إضافة:
  • درجة الحرارة
  • معدل نبض القلب
  • الوزن
  • المرض
  • الحساسية
  • حالة التطعيم
  • ملاحظات
  
  كل حيوان يدعم تقرير صحي واحد فقط.`,
    },
  },
  
  ANIMAL_HEALTH_UPDATE: {
    id: "ANIMAL_HEALTH_UPDATE",
    type: "text",
    message: {
      en: "Open Tracking → Track your animals health → Select animal type → Select animal to open health report → Update Report → update values → save.",
      ar: "التتبع → تتبع صحة حيواناتك → اختر نوع الحيوان → اختر الحيوان لفتح التقرير الصحي → تحديث التقرير → تحديث القيم → حفظ.",
    },
  },
  
  ANIMAL_HEALTH_VIEW: {
    id: "ANIMAL_HEALTH_VIEW",
    type: "text",
    message: {
      en: "Open Tracking → Track your animals health → Select animal type → Select animal to view health report.",
      ar: "التتبع → تتبع صحة حيواناتك → اختر نوع الحيوان → اختر الحيوان لعرض التقرير الصحي",
    },
  },
  
  ANIMAL_HEALTH_DELETE: {
    id: "ANIMAL_HEALTH_DELETE",
    type: "text",
    message: {
      en: "Open Tracking → Track your animals health → Select animal type → Select animal to open health report → delete → confirm.",
      ar: "التتبع → تتبع صحة حيواناتك → اختر نوع الحيوان → اختر الحيوان لفتح التقرير الصحي → حذف → تأكيد.",
    },
  },
  
  ANIMAL_HEALTH_VACCINATION: {
    id: "ANIMAL_HEALTH_VACCINATION",
    type: "text",
    message: {
      en: "Vaccination status is updated automatically from health report.",
      ar: "يتم تحديث حالة التطعيم تلقائياً من التقرير الصحي.",
    },
  },

  /* ================= FOUND ANIMAL ================= */

  ANIMAL_FOUND: {
    id: "ANIMAL_FOUND",
    type: "menu",
    message: {
      en: "Found animal (Web only)",
      ar: "العثور على حيوان (ويب فقط)",
    },
    buttons: [
      { id: "ANIMAL_FOUND_REPORT", label: { en: "Report found animal", ar: "الإبلاغ عن حيوان تم العثور عليه" } },
      { id: "ANIMAL_FOUND_MATCH", label: { en: "Match with lost animals", ar: "مطابقة مع الحيوانات المفقودة" } },
      { id: "ANIMAL_FOUND_CONTACT", label: { en: "Contact admin", ar: "التواصل مع الإدارة" } },
    ],
  },
  ANIMAL_FOUND_REPORT: {
    id: "ANIMAL_FOUND_REPORT",
    type: "menu",
    message: {
      en: "Report found animal (Web only)",
      ar: "الإبلاغ عن حيوان تم العثور عليه (ويب فقط)",
    },
    buttons: [
      { id: "ANIMAL_FOUND_REPORT_STEP1", label: { en: "Report lost animal found", ar: "الإبلاغ عن العثور على حيوان مفقود" } },
      { id: "ANIMAL_FOUND_REPORT_STEP2", label: { en: "Required details", ar: "البيانات المطلوبة" } },
      { id: "ANIMAL_FOUND_REPORT_STEP3", label: { en: "Add last seen location", ar: "إضافة آخر موقع" } },
      { id: "ANIMAL_FOUND_REPORT_STEP4", label: { en: "Upload image", ar: "رفع صورة" } },
      { id: "ANIMAL_FOUND_REPORT_STEP5", label: { en: "Notify nearby users", ar: "إشعار المستخدمين القريبين" } },
    ],
  },

  ANIMAL_FOUND_REPORT_STEP1: {
    id: "ANIMAL_FOUND_REPORT_STEP1",
    type: "redirect",
    message: {
      en: "Open lost animals page and select the animal you found.",
      ar: "افتح صفحة الحيوانات المفقودة واختر الحيوان الذي عثرت عليه.",
    },
    redirectWeb: "https://alraie.net/lostAnimals",
  },

  ANIMAL_FOUND_REPORT_STEP2: {
    id: "ANIMAL_FOUND_REPORT_STEP2",
    type: "text",
    message: {
      en: "Provide name, phone, description and contact details.",
      ar: "أدخل الاسم ورقم الهاتف والوصف وبيانات التواصل.",
    },
  },

  ANIMAL_FOUND_REPORT_STEP3: {
    id: "ANIMAL_FOUND_REPORT_STEP3",
    type: "text",
    message: {
      en: "Add the last seen location where the animal was found.",
      ar: "أضف الموقع الذي تم العثور على الحيوان فيه.",
    },
  },

  ANIMAL_FOUND_REPORT_STEP4: {
    id: "ANIMAL_FOUND_REPORT_STEP4",
    type: "text",
    message: {
      en: "Upload clear images of the found animal (up to 5 images).",
      ar: "قم برفع صور واضحة للحيوان (حتى 5 صور).",
    },
  },

  ANIMAL_FOUND_REPORT_STEP5: {
    id: "ANIMAL_FOUND_REPORT_STEP5",
    type: "text",
    message: {
      en: "Admin will review and notify nearby users.",
      ar: "ستقوم الإدارة بالمراجعة وإشعار المستخدمين القريبين.",
    },
  },

  ANIMAL_FOUND_MATCH: {
    id: "ANIMAL_FOUND_MATCH",
    type: "redirect",
    message: {
      en: "Search and match found animals with lost animals.",
      ar: "يمكنك البحث ومطابقة الحيوان مع الحيوانات المفقودة.",
    },
    redirectWeb: "https://alraie.net/lostAnimals",
  },

  ANIMAL_FOUND_CONTACT: {
    id: "ANIMAL_FOUND_CONTACT",
    type: "redirect",
    message: {
      en: "Contact admin from lost animals web page.",
      ar: "يمكنك التواصل مع الإدارة من صفحة الحيوانات المفقودة.",
    },
    redirectWeb: "https://alraie.net/lostAnimals",
  },

  /* ================= SICK ANIMAL ================= */

  ANIMAL_SICK: {
    id: "ANIMAL_SICK",
    type: "menu",
    message: {
      en: "Sick animal — AI disease detection",
      ar: "حيوان مريض — كشف المرض بالذكاء الاصطناعي",
    },
    buttons: [
      { id: "ANIMAL_SICK_SYMPTOMS", label: { en: "Add symptoms", ar: "إضافة الأعراض" } },
      { id: "ANIMAL_SICK_AI", label: { en: "AI disease detection", ar: "كشف المرض بالذكاء الاصطناعي" } },
    ],
  },

  ANIMAL_SICK_SYMPTOMS: {
    id: "ANIMAL_SICK_SYMPTOMS",
    type: "text",
    message: {
      en: "Enter symptoms like fever, limping, not eating, swelling, injuries or unusual behavior.",
      ar: "أدخل الأعراض مثل الحمى، العرج، فقدان الشهية، التورم أو السلوك غير الطبيعي.",
    },
  },

  ANIMAL_SICK_AI: {
    id: "ANIMAL_SICK_AI",
    type: "menu",
    message: {
      en: "AI disease detection steps",
      ar: "خطوات كشف المرض بالذكاء الاصطناعي",
    },
    buttons: [
      { id: "ANIMAL_SICK_AI_STEP1", label: { en: "Add symptoms", ar: "إضافة الأعراض" } },
      { id: "ANIMAL_SICK_AI_STEP2", label: { en: "Upload images or video", ar: "رفع صور أو فيديو" } },
      { id: "ANIMAL_SICK_AI_STEP3", label: { en: "AI disease detection", ar: "تحليل الذكاء الاصطناعي" } },
      { id: "ANIMAL_SICK_RESULTS", label: { en: "Disease results", ar: "نتائج المرض" } },
      { id: "ANIMAL_SICK_LIMITATIONS", label: { en: "AI limitations", ar: "قيود الذكاء الاصطناعي" } },
    ],
  },

  ANIMAL_SICK_AI_STEP1: {
    id: "ANIMAL_SICK_AI_STEP1",
    type: "text",
    message: {
      en: "Describe symptoms in detail (minimum 15 characters) for accurate AI diagnosis.",
      ar: "صف الأعراض بالتفصيل (15 حرفًا على الأقل) للحصول على تحليل أدق.",
    },
  },

  ANIMAL_SICK_AI_STEP2: {
    id: "ANIMAL_SICK_AI_STEP2",
    type: "text",
    message: {
      en: "Upload clear images or videos of the sick animal (injury, eyes, skin, walking etc).",
      ar: "قم برفع صور أو فيديو واضح للحيوان (الإصابة، العين، الجلد، المشي...).",
    },
  },

  ANIMAL_SICK_AI_STEP3: {
    id: "ANIMAL_SICK_AI_STEP3",
    type: "redirect",
    message: {
      en: "AI will analyze disease, symptoms, urgency and recommendations.",
      ar: "سيقوم الذكاء الاصطناعي بتحليل المرض والأعراض ومستوى الخطورة.",
    },
    redirect: "AnalyzeDisease",
    redirectWeb: "https://alraie.net/tracking",
  },

  ANIMAL_SICK_RESULTS: {
    id: "ANIMAL_SICK_RESULTS",
    type: "menu",
    message: {
      en: "AI disease detection results",
      ar: "نتائج كشف المرض بالذكاء الاصطناعي",
    },
    buttons: [
      { id: "ANIMAL_SICK_RESULT_CONFIDENCE", label: { en: "Confidence score", ar: "درجة الثقة" } },
      { id: "ANIMAL_SICK_RESULT_DISEASE", label: { en: "Detected disease", ar: "المرض المكتشف" } },
      { id: "ANIMAL_SICK_RESULT_TREATMENT", label: { en: "Suggested treatment", ar: "العلاج المقترح" } },
      { id: "ANIMAL_SICK_RESULT_PREVENTION", label: { en: "Preventive measures", ar: "الإجراءات الوقائية" } },
    ],
  },

  ANIMAL_SICK_RESULT_CONFIDENCE: {
    id: "ANIMAL_SICK_RESULT_CONFIDENCE",
    type: "text",
    message: {
      en: "AI returns confidence level (low, medium, high) based on symptoms and images.",
      ar: "يعرض الذكاء الاصطناعي درجة الثقة (منخفضة، متوسطة، عالية) بناءً على الأعراض والصور.",
    },
  },

  ANIMAL_SICK_RESULT_DISEASE: {
    id: "ANIMAL_SICK_RESULT_DISEASE",
    type: "text",
    message: {
      en: "AI detects most likely disease using symptoms, animal data and uploaded media.",
      ar: "يقوم الذكاء الاصطناعي بتحديد المرض المحتمل باستخدام الأعراض وبيانات الحيوان.",
    },
  },

  ANIMAL_SICK_RESULT_TREATMENT: {
    id: "ANIMAL_SICK_RESULT_TREATMENT",
    type: "text",
    message: {
      en: "AI suggests recommended treatment steps and urgency level.",
      ar: "يقترح الذكاء الاصطناعي خطوات العلاج ومستوى الخطورة.",
    },
  },

  ANIMAL_SICK_RESULT_PREVENTION: {
    id: "ANIMAL_SICK_RESULT_PREVENTION",
    type: "text",
    message: {
      en: "AI provides preventive measures to avoid future disease.",
      ar: "يقدم الذكاء الاصطناعي إجراءات وقائية لتجنب المرض مستقبلاً.",
    },
  },

  ANIMAL_SICK_LIMITATIONS: {
    id: "ANIMAL_SICK_LIMITATIONS",
    type: "menu",
    message: {
      en: "AI limitations",
      ar: "قيود الذكاء الاصطناعي",
    },
    buttons: [
      { id: "ANIMAL_SICK_LIMIT_ACCURACY", label: { en: "Accuracy info", ar: "معلومات الدقة" } },
      { id: "ANIMAL_SICK_LIMIT_ADVICE", label: { en: "Not medical advice", ar: "ليست نصيحة طبية" } },
      { id: "ANIMAL_SICK_LIMIT_VET", label: { en: "Contact veterinarian", ar: "التواصل مع الطبيب البيطري" } },
    ],
  },


  ANIMAL_SICK_LIMIT_ACCURACY: {
    id: "ANIMAL_SICK_LIMIT_ACCURACY",
    type: "text",
    message: {
      en: "AI results depend on provided symptoms and images. Accuracy may vary.",
      ar: "تعتمد النتائج على الأعراض والصور المقدمة وقد تختلف الدقة.",
    },
  },

  ANIMAL_SICK_LIMIT_ADVICE: {
    id: "ANIMAL_SICK_LIMIT_ADVICE",
    type: "text",
    message: {
      en: "AI diagnosis is not a substitute for professional veterinary advice.",
      ar: "تحليل الذكاء الاصطناعي لا يغني عن استشارة الطبيب البيطري.",
    },
  },

  ANIMAL_SICK_LIMIT_VET: {
    id: "ANIMAL_SICK_LIMIT_VET",
    type: "text",
    message: {
      en: "Contact veterinarian immediately for serious symptoms.",
      ar: "يجب التواصل مع طبيب بيطري فورًا في الحالات الخطيرة.",
    },
  },

  /* ================= ASSET COUNT ================= */

ANIMAL_ASSET_COUNT: {
  id: "ANIMAL_ASSET_COUNT",
  type: "menu",
  message: {
    en: "Animal asset counting (Application Only)",
    ar: "عد الأصول الحيوانية (تطبيق فقط)",
  },
  buttons: [
    { id: "ASSET_COUNT_SELECT_TYPE", label: { en: "Select animal type", ar: "اختيار نوع الحيوان" } },
    { id: "ASSET_COUNT_SCAN", label: { en: "Scan animals", ar: "مسح الحيوانات" } },
    { id: "ASSET_COUNT_PAUSE", label: { en: "Pause counting", ar: "إيقاف العد مؤقتاً" } },
    { id: "ASSET_COUNT_FINISH", label: { en: "Finish counting", ar: "إنهاء العد" } },
    { id: "ASSET_COUNT_REPORT", label: { en: "View report", ar: "عرض التقرير" } },
    { id: "ASSET_COUNT_EXPORT", label: { en: "Download report", ar: "تحميل التقرير" } },
  ],
},

ASSET_COUNT_SELECT_TYPE: {
  id: "ASSET_COUNT_SELECT_TYPE",
  type: "text",
  message: {
    en: `Go to Assets Count → Select animal type → Start.

Example:
• Camels
• Horses
• Sheep
• Goats

System loads animals for selected type.`,
    ar: `اذهب إلى عد الأصول → اختر نوع الحيوان → ابدأ

مثال:
• الإبل
• الخيول
• الأغنام
• الماعز

سيتم تحميل الحيوانات حسب النوع.`,
  },
},

ASSET_COUNT_SCAN: {
  id: "ASSET_COUNT_SCAN",
  type: "text",
  message: {
    en: `Scan animal tag or enter unique ID.

System will:
• Validate animal
• Add to scanned list
• Avoid duplicates
• Show live count`,
    ar: `قم بمسح الوسم أو إدخال المعرف.

سيقوم النظام بـ:
• التحقق من الحيوان
• إضافته للقائمة
• منع التكرار
• عرض العدد المباشر`,
  },
},

ASSET_COUNT_PAUSE: {
  id: "ASSET_COUNT_PAUSE",
  type: "text",
  message: {
    en: "Tap Pause to save current scanned animals and continue later.",
    ar: "اضغط إيقاف مؤقت لحفظ العد والمتابعة لاحقاً.",
  },
},

ASSET_COUNT_FINISH: {
  id: "ASSET_COUNT_FINISH",
  type: "text",
  message: {
    en: `Finish counting to generate report.

System calculates:
• Scanned animals
• Manual entries
• Dashboard animals
• Animals found
• Animals missed`,
    ar: `قم بإنهاء العد لإنشاء التقرير.

سيتم حساب:
• الحيوانات الممسوحة
• الإدخال اليدوي
• إجمالي لوحة التحكم
• الحيوانات الموجودة
• الحيوانات المفقودة`,
  },
},

ASSET_COUNT_REPORT: {
  id: "ASSET_COUNT_REPORT",
  type: "text",
  message: {
    en: `Report compares with previous count:

• Animals found
• Animals missed
• Previous count
• New count
• Differences`,
    ar: `يقارن التقرير مع العد السابق:

• الحيوانات الموجودة
• الحيوانات المفقودة
• العدد السابق
• العدد الجديد
• الفروقات`,
  },
},

ASSET_COUNT_EXPORT: {
  id: "ASSET_COUNT_EXPORT",
  type: "text",
  message: {
    en: "Tap Download Report. File will be generated and sent to your email.",
    ar: "اضغط تحميل التقرير وسيتم إرساله إلى بريدك الإلكتروني.",
  },
},

};