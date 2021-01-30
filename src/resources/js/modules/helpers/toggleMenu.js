const toggleMenu = function() {
    const body = document.body;
    !body.classList.contains("menu-open") ? body.classList.add("menu-open") : body.classList.remove("menu-open");
};

export default toggleMenu;