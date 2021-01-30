import homePage from "../../pages/home";
import menuPage from "../../pages/menu";
import contactPage from "../../pages/contact";
import toggleMenu from "../helpers/toggleMenu";

const changePage = function(buttonClasses) {
    const isMenuOpen = document.body.classList.contains("menu-open");
    document.querySelector(".header").classList.add("header-top");
    document.querySelector("#content").innerHTML = "";
    window.scroll(0, 0);
    
    if (buttonClasses.contains("home-page-btn")) {
        homePage();
    } else if (buttonClasses.contains("menu-page-btn")) {
        menuPage();
    } else if (buttonClasses.contains("contact-page-btn")) {
        contactPage();
    }

    if (isMenuOpen) {
        toggleMenu();
    }
};

export default changePage;