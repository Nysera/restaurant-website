import "../css/styles.scss";
import header from "./modules/layout/header";
import navigationMenu from "./modules/layout/navigationMenu";
import contentContainer from "./modules/layout/contentContainer";
import HomePage from "./pages/home";
import footer from "./modules/layout/footer";
import buttonEventDelegation from "./modules/common/buttonEventDelegation";
import reservationModal from "./modules/layout/reservationModal";

const initialize = (function() {
    header();
    navigationMenu();
    contentContainer();
    HomePage();
    footer();
    reservationModal();
    buttonEventDelegation();
})();