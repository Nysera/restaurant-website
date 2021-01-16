const header = function() {
    const headerElement = document.createElement("header");
    headerElement.classList.add("header");
    document.body.append(headerElement);

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("btn", "menu-btn");
    menuBtn.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    headerElement.append(menuBtn);

    const logo = document.createElement("div");
    logo.classList.add("logo");
    logo.innerHTML = `
        <a href="/">
            Auror<span>a</span>
        </a>
    `;
    headerElement.append(logo);

    const reservationBtn = document.createElement("button");
    reservationBtn.classList.add("btn","btn-hollow", "reservation");
    reservationBtn.innerHTML = `
        <span>Reserve</span>
        <svg width="16" height="14" viewBox="0 0 16 14"><g><path fill-rule="nonzero" d="M1.8 10.5c-.2 0-.4.1-.5.3L.1 13.2v.5c.1.2.3.3.5.3h14.8c.2 0 .4-.1.5-.3v-.5l-1.2-2.4a.6.6 0 0 0-.5-.3zm-.2 2.3l.6-1.1h11.6l.6 1.1zM8.6 2.4V1.2h.6V0H6.8v1.2h.6v1.2a6 6 0 0 0-5.6 5.8v.6c0 .3.3.5.7.5h11c.4 0 .7-.2.7-.6v-.5a6 6 0 0 0-5.6-5.8zM3.1 8.2C3 5.6 5.3 3.5 8 3.5s5 2 5 4.7z"></path><path d="M5.7 6.2l-1-.8c1-.8 2-1.3 3.3-1.3v1.2c-.9 0-1.7.3-2.3 1zM5 8.2H3.6c0-.5 0-1 .2-1.4l1.2.4-.2 1z"></path></g></svg>
    `;
    headerElement.append(reservationBtn);
};

module.exports = header;