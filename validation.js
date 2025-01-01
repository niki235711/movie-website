document.addEventListener("DOMContentLoaded", () => {
    // فرم کامنت‌گذاری
    const commentForm = document.getElementById("comment-form");
    const commentMessage = document.getElementById("comment-message");

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        commentMessage.textContent = "";
        commentMessage.classList.remove("error", "success");

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const comment = document.getElementById("comment").value.trim();

        const nameRegex = /^[\p{L}\s]+$/u; // فقط حروف و فاصله
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !nameRegex.test(name)) {
            commentMessage.textContent = "لطفاً نام معتبر وارد کنید (فقط حروف و فاصله).";
            commentMessage.classList.add("error");
            return;
        }

        if (!email || !emailRegex.test(email)) {
            commentMessage.textContent = "لطفاً ایمیل معتبر وارد کنید.";
            commentMessage.classList.add("error");
            return;
        }

        if (!comment) {
            commentMessage.textContent = "لطفاً کامنت خود را بنویسید.";
            commentMessage.classList.add("error");
            return;
        }

        commentMessage.textContent = "کامنت شما ارسال شد.";
        commentMessage.classList.add("success");
        commentForm.reset();
    });

    // فرم امتیازدهی
    const ratingForm = document.getElementById("rating-form");
    const ratingMessage = document.getElementById("rating-message");

    ratingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        ratingMessage.textContent = "";
        ratingMessage.classList.remove("error", "success");

        const rating = document.getElementById("rating").value;

        if (!rating || rating < 1 || rating > 10) {
            ratingMessage.textContent = "لطفاً امتیاز معتبر وارد کنید (بین 1 تا 10).";
            ratingMessage.classList.add("error");
            return;
        }

        ratingMessage.textContent = "امتیاز شما ارسال شد.";
        ratingMessage.classList.add("success");
        ratingForm.reset();
    });
});
