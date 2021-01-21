import "../css/styles.scss";
import header from "../js/header.js";
import navigationMenu from "../js/navigation-menu";
import home from "../js/home";
import footer from "./footer";

(function() {
    const body = document.body;

    const initialize = function() {
        header();
        navigationMenu();
        setContentContainer();
        home();
        footer();
        addEventDelegation();
    };
    const addEventDelegation = function() {
        body.addEventListener("click", function(event) {
            const target = event.target.classList;
            if (target.contains("menu-btn")) {
                toggleMenu();
            }
        });
    };
    const toggleMenu = function () {
        !body.classList.contains("menu-open") ? body.classList.add("menu-open") : body.classList.remove("menu-open")
    };
    const setContentContainer = function() {
        const contentContainer = document.createElement("div");
        contentContainer.id = "content";
        body.append(contentContainer);
    };


    initialize();
})();