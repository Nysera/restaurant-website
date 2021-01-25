const navigationMenu = function() {
    // nav container
    const navElement = document.createElement("nav");
    navElement.classList.add("nav");

    // nav inner
    const navInner = document.createElement("div");
    navInner.classList.add("nav-inner")
    navElement.append(navInner);
    
    // empty div for flexbox
    const emptyDiv = document.createElement("div");
    navInner.append(emptyDiv);

    // div to store links in
    const navInnerLinks = document.createElement("div");
    navInnerLinks.classList.add("nav-links");
    navInner.append(navInnerLinks);
    for (let i= 0; i < 3; i++) {
        const linkNames = ["home", "menu", "contact"];
        const navInnerLinksButtons = document.createElement("button");
        navInnerLinksButtons.classList.add(`${linkNames[i]}-page-btn`);
        navInnerLinksButtons.innerHTML = linkNames[i];
        navInnerLinks.append(navInnerLinksButtons);
    }

    // nav footer
    const navFooter = document.createElement("div");
    navFooter.classList.add("nav-footer");
    navInner.append(navFooter);

    // phone number
    const navFooterPhone = document.createElement("a");
    navFooterPhone.classList.add("tel");
    navFooterPhone.setAttribute("href", "tel:(03)15381349");
    navFooterPhone.innerHTML = "(03) 1538 1349";
    navFooter.append(navFooterPhone);

    // email
    const navFooterEmail = document.createElement("a");
    navFooterEmail.setAttribute("href", "mailto:contact@aurora.com");
    navFooterEmail.innerHTML = "contact@aurora.com";
    navFooter.append(navFooterEmail);

    // append navigation menu to body
    document.body.append(navElement);
};

module.exports = navigationMenu;