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