import changePage from "./changePage";
import toggleMenu from "../helpers/toggleMenu";
import toggleModal from "../helpers/toggleModal";

const buttonEventDelegation = function() {
    document.body.addEventListener("click", function(event){
        const targetClasses = event.target.classList;
        if (targetClasses.contains("menu-btn")) {
            toggleMenu();
        } else if (targetClasses.contains("home-page-btn") || targetClasses.contains("menu-page-btn") || targetClasses.contains("contact-page-btn")) {
            changePage(targetClasses);
        } else if (targetClasses.contains("reservation-btn") || targetClasses.contains("reservation-close-btn")) {
            toggleModal();
        }
    });
};

export default buttonEventDelegation;