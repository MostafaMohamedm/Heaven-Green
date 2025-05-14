
let currentLang = 'en';
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
}
