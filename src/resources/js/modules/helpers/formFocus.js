const formFocus = function(form) {
    form.addEventListener("focusin", function(event) {
        if (event.target.classList.contains("form-control")) {
            const el = event.target.parentElement;
            el.classList.add("focused");
        }
    });
    form.addEventListener("focusout", function(event) {
        if (event.target.classList.contains("form-control")) {
            const el = event.target.parentElement;
            el.classList.remove("focused");
        }
    });
};

export default formFocus;