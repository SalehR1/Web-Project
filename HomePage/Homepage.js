//الكلمات الي راح تترجم
const translations = {
    //انقليزي
    en: { 
        about: "About",
        notification: "Notification - Announcement",
        events: "Events Section",
        activities: "Activities",
        colleges: "Colleges Categories Event Section",
        showAll: "Show All",
        searchPlaceholder: "Search here...",
        signUp: "Sign up",
        profile: "Profile"
    },
    //عربي
    ar: {
        about: "عن الصفحة",
        notification: "الإشعارات - الإعلانات",
        events: "قسم الأحداث",
        activities: "الفعاليات",
        colleges: "أحداث الكليات",
        showAll: "عرض الجميع",
        searchPlaceholder: "ابحث هنا...",
        signUp: "تسجيل الدخول",
        profile: "الحساب"
    }
};

let currentLang = "en"; // اللغة الحالية ابدا ب الانقليزي

function toggleLanguage() {

    // تبديل اللغة
    currentLang = currentLang === "ar" ? "en" : "ar";
    document.documentElement.setAttribute("lang", currentLang);

    // تحديث زر En/Ar
    document.querySelector('button[onclick="toggleLanguage()"]').textContent = 
        currentLang === "ar" ? "En" : "ar";

    // تحديث الأزرار باستخدام الـ ID
    document.getElementById("about-btn").textContent = translations[currentLang].about;
    document.getElementById("signup-btn").textContent = translations[currentLang].signUp;
    document.getElementById("profile-btn").textContent = translations[currentLang].profile;

    // تحديث الأقسام
    document.querySelector('.section span').textContent = translations[currentLang].notification;
    document.querySelectorAll('.section')[1].querySelector('span').textContent = translations[currentLang].events;
    document.querySelectorAll('.section')[2].querySelector('span').textContent = translations[currentLang].activities;
    document.querySelectorAll('.section')[3].querySelector('span').textContent = translations[currentLang].colleges;

    // تحديث أزرار "عرض الجميع"
    document.querySelectorAll('.show-all').forEach(button => {
        button.textContent = translations[currentLang].showAll;
    });

    // تحديث لمربع البحث
    document.getElementById('search-input').placeholder = translations[currentLang].searchPlaceholder;
}

