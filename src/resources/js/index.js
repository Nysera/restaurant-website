// import CSS
import "../css/styles.scss";
import header from "../js/header.js";
import navigationMenu from "../js/navigation-menu";
import home from "../js/home";

const dom = (function() {
    const setContentContainer = function() {
        const contentContainer = document.createElement("div");
        contentContainer.id = "content";
        document.body.append(contentContainer);
    };
    const addEventDelegation = function() {
        document.body.addEventListener("click", function(event){
            if (event.target.classList.contains("menu-btn")) {
                toggleMenu();
            }
        });
    };
    const toggleMenu = function () {
        const body = document.body;
        !body.classList.contains("menu-open") ? body.classList.add("menu-open") : body.classList.remove("menu-open")
    };


    
    const initialize = function() {
        header();
        navigationMenu();
        setContentContainer();
        home();
        addEventDelegation();
    };
    initialize();
}());