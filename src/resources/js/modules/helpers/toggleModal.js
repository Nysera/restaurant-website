import toggleMenu from "./toggleMenu";

const toggleModal = function() {
    const body = document.body;
    !body.classList.contains("reservation-modal-open") ? body.classList.add("reservation-modal-open") : body.classList.remove("reservation-modal-open");
    if (body.classList.contains("menu-open")) {
        setTimeout(function() {
            body.classList.remove("menu-open");
        }, 300);
    }
};

export default toggleModal;