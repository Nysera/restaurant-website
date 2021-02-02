class FormValidation {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.status = [];
    }
    init() {
        this.validateOnSubmit();
        this.validateOnInput();
    }
    validateOnSubmit() {
        this.form.addEventListener("submit", event => {
            event.preventDefault();
            this.fields.forEach((field, idx) => {
                if (this.status.length < this.fields.length) {
                    this.status.push(this.validateFields(field));
                } else {
                    this.status[idx] = this.validateFields(field);
                }
            });
            if (!this.status.includes(false)) {
                const successMessage = document.createElement("div");
                successMessage.classList.add("success-message")
                successMessage.innerHTML = "Your message has been sent, we will be in touch with you shortly.";
                this.form.append(successMessage);
                this.form.reset();
                this.fields.forEach(function(field) {
                    const parent = field.parentElement;
                    parent.classList.remove("focused");
                });
            }

            // DEBUGGER!
            console.log("validateOnSubmit", this.status);
        });
    }
    validateOnInput() {
        this.fields.forEach((field, idx) => {
            field.addEventListener("input", () => {
                this.status[idx] = this.validateFields(field);
            });
        });
    }
    validateFields(field) {
        if (field.id === "name") {
            if (field.value.length === 0) {
                return this.setFieldState(field, "Name is required.", "fail");
            }
            return this.setFieldState(field, null, "pass");
        } else if (field.id === "phone") {
            if (field.value.length === 0) {
                return this.setFieldState(field, "Phone number is required.", "fail");
            }
            return this.setFieldState(field, null, "pass");
        } else if (field.id === "email") {
            if (field.value.length === 0) {
                return this.setFieldState(field, "Email is required.", "fail");
            }
            return this.setFieldState(field, null, "pass");
        }
        if (field.id === "message") {
            if (field.value.length === 0) {
                return this.setFieldState(field, "Message is required.", "fail");
            }
            return this.setFieldState(field, null, "pass");
        }
    }
    setFieldState(field, errorMessage, status) {
        const parent = field.parentElement;
        const errorSpan = document.createElement("span");
        if (status === "fail") {
            parent.classList.add("error");
            errorSpan.classList.add("error-list");
            errorSpan.innerHTML = errorMessage;
            if (!parent.querySelector(".error-list")) {
                parent.append(errorSpan);
            }
            return false;
        } else if (status === "pass") {
            parent.classList.remove("error");
            if (parent.querySelector(".error-list")) {
                parent.querySelector(".error-list").remove();
            }
            return true;
        }
    }
};

export default FormValidation;