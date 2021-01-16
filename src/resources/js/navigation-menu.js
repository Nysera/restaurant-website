const navigationMenu = function() {
    const navElement = document.createElement("nav");
    navElement.classList.add("nav");
    const navInner = document.createElement("div");
    navInner.classList.add("nav-inner")
    navInner.innerHTML = `
        <div></div>
        <div class="nav-links">
            <button>Home</button>
            <button>Menu</button>
            <button>Contact</button>
        </div>
        <div class="nav-footer">
            <span>(03) 1538 1349</span>
            <a>contact@aurora.com</a>
        </div>
    `;
    navElement.append(navInner);

    // 
    document.body.append(navElement);
};

module.exports = navigationMenu;