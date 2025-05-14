// إضافة رسالة تأكيد بعد إرسال النموذج
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.style.display = "block";
    setTimeout(() => {
        confirmationMessage.style.display = "none";
    }, 5000); // إخفاء الرسالة بعد 5 ثوانٍ
});

// تأثير التمرير السلس عند النقر على الروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// إضافة تأثير عند ظهور العناصر أثناء التمرير
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".service-item").forEach((element) => {
    observer.observe(element);
});