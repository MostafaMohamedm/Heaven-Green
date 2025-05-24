// v4 + تفعيل تمييز الاختصار النشط تلقائياً بناءً على هاش الصفحة
document.getElementById("toggle-language").addEventListener("click", function () {
    const currentLanguage = this.textContent.trim();
    const elementsToTranslate = document.querySelectorAll("[data-en][data-ar]");

    if (currentLanguage === "العربية") {
        this.textContent = "English";
        elementsToTranslate.forEach(el => {
            el.textContent = el.getAttribute("data-ar");
        });
        document.body.setAttribute("dir", "rtl");
    } else {
        this.textContent = "العربية";
        elementsToTranslate.forEach(el => {
            el.textContent = el.getAttribute("data-en");
        });
        document.body.setAttribute("dir", "ltr");
    }
});

// تمييز الاختصار النشط بناءً على الهاش (active class)
function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const hash = window.location.hash || '#about';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
window.addEventListener('hashchange', setActiveNavLink);
window.addEventListener('DOMContentLoaded', setActiveNavLink);
