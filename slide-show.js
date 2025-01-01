let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // مخفی کردن تمام تصاویر
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // نمایش تصویر فعلی
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }

    slides[slideIndex - 1].style.display = "block";
    
    // تغییر تصویر هر 5 ثانیه
    setTimeout(showSlides, 5000); // تغییر تصویر بعد از 5 ثانیه
}

// شروع کردن اسلایدها هنگام بارگذاری صفحه
showSlides();
