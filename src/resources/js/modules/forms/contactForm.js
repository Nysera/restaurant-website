import formValidation from "../helpers/formValidation";

const contactform = function() {
    // form container
    const form = document.createElement("form");
    form.id = "contact-form";
    form.setAttribute("novalidate", "true");

    // required input text
    const requiredSign = document.createElement("div");
    requiredSign.classList.add("required-fields");
    requiredSign.innerHTML = "Fields marked with <span>*</span> are required."
    form.append(requiredSign);

    // form-group - name
    const formGroupName = document.createElement("div");
    formGroupName.classList.add("form-group");
    form.append(formGroupName);

    // form-group - name - label
    const formGroupNameLabel= document.createElement("label");
    formGroupNameLabel.classList.add("control-label");
    formGroupNameLabel.setAttribute("for", "name");
    formGroupNameLabel.innerHTML = "Name<span>*</span>";
    formGroupName.append(formGroupNameLabel);

    // form-group - name - input
    const formGroupNameInput = document.createElement("input");
    formGroupNameInput.id = "name";
    formGroupNameInput.classList.add("form-control");
    formGroupNameInput.setAttribute("name", "name");
    formGroupNameInput.setAttribute("type", "text");
    formGroupName.append(formGroupNameInput);

    // form-group - phone
    const formGroupPhone = document.createElement("div");
    formGroupPhone.classList.add("form-group");
    form.append(formGroupPhone);

    // form-group - phone - label
    const formGroupPhoneLabel = document.createElement("label");
    formGroupPhoneLabel.classList.add("control-label");
    formGroupPhoneLabel.setAttribute("for", "phone");
    formGroupPhoneLabel.innerHTML = "Phone<span>*</span>";
    formGroupPhone.append(formGroupPhoneLabel);

    // form-group - phone - input
    const formGroupPhoneInput = document.createElement("input");
    formGroupPhoneInput.id = "phone";
    formGroupPhoneInput.classList.add("form-control");
    formGroupPhoneInput.setAttribute("name", "phone");
    formGroupPhoneInput.setAttribute("type", "tel");
    formGroupPhone.append(formGroupPhoneInput);

    // form-group - email
    const formGroupEmail = document.createElement("div");
    formGroupEmail.classList.add("form-group");
    form.append(formGroupEmail);

    // form-group - email - label
    const formGroupEmailLabel = document.createElement("label");
    formGroupEmailLabel.classList.add("control-label");
    formGroupEmailLabel.setAttribute("for", "email");
    formGroupEmailLabel.innerHTML = "E-mail<span>*</span>";
    formGroupEmail.append(formGroupEmailLabel);

    // form-group - email - input
    const formGroupEmailInput = document.createElement("input");
    formGroupEmailInput.id = "email";
    formGroupEmailInput.classList.add("form-control");
    formGroupEmailInput.setAttribute("name", "email");
    formGroupEmailInput.setAttribute("type", "email");
    formGroupEmail.append(formGroupEmailInput);

    // form-group - message
    const formGroupMessage = document.createElement("div");
    formGroupMessage.classList.add("form-group");
    form.append(formGroupMessage);

    // form-group - message - label
    const formGroupMessageLabel = document.createElement("label");
    formGroupMessageLabel.classList.add("control-label");
    formGroupMessageLabel.setAttribute("for", "message");
    formGroupMessageLabel.innerHTML = "Message<span>*</span>";
    formGroupMessage.append(formGroupMessageLabel);

    // form-group - message - input
    const formGroupMessageInput = document.createElement("textarea");
    formGroupMessageInput.id = "message";
    formGroupMessageInput.classList.add("form-control");
    formGroupMessageInput.setAttribute("name", "message");
    formGroupMessageInput.setAttribute("rows", "6");
    formGroupMessage.append(formGroupMessageInput);

    //form submit button
    const formButton = document.createElement("button");
    formButton.classList.add("btn", "btn-solid");
    formButton.setAttribute("type", "submit");
    formButton.innerHTML = "<span>Send</span>";
    form.append(formButton);

    // form focus event listeners
    form.addEventListener("focusin", function(event) {
        if (event.target.classList.contains("form-control")) {
            const el = event.target.parentElement;
            el.classList.add("focused");
        }
    });
    form.addEventListener("focusout", function(event) {
        if (event.target.classList.contains("form-control") && event.target.value.length === 0) {
            const el = event.target.parentElement;
            el.classList.remove("focused");
        }
    });

    // validate form
    const validation = new formValidation(form, [formGroupNameInput, formGroupPhoneInput, formGroupEmailInput, formGroupMessageInput]);
    validation.init();


    return form;
};

export default contactform;