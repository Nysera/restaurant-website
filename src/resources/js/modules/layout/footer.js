const footer = function() {
    // footer container
    const footerContainer = document.createElement("footer");
    footerContainer.classList.add("footer");

    // footer top
    const footerTop = document.createElement("div");
    footerTop.classList.add("footer-top");
    footerContainer.append(footerTop);

    // footer top inner
    const footerTopInner = document.createElement("div");
    footerTopInner.classList.add("footer-top-inner");
    footerTop.append(footerTopInner);

    // open hours column
    const openHoursContainer = document.createElement("div");
    openHoursContainer.classList.add("col", "open-hours");
    // title
    const openhoursTitle = document.createElement("div");
    openhoursTitle.classList.add("title");
    openhoursTitle.innerHTML = "Open Hours";
    openHoursContainer.append(openhoursTitle);
    // hours
    const WedToSun = document.createElement("div");
    WedToSun.classList.add("hours");
    WedToSun.innerHTML = "Wed-Sun / 12-9pm";
    openHoursContainer.append(WedToSun);
    const MonToTues = document.createElement("div");
    MonToTues.classList.add("hours");
    MonToTues.innerHTML = "Mon-Tues / Closed";
    openHoursContainer.append(MonToTues);
    footerTopInner.append(openHoursContainer);

    // contact
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("col", "contact");
    // title
    const contactTitle = document.createElement("div");
    contactTitle.classList.add("title");
    contactTitle.innerHTML = "Contact";
    contactContainer.append(contactTitle);
    // phone
    const phone = document.createElement("a");
    phone.classList.add("tel");
    phone.setAttribute("href", "tel:(03)1538134");
    phone.innerHTML = "(03) 1538 134";
    contactContainer.append(phone);
    // email
    const email = document.createElement("a");
    email.setAttribute("href", "mailto:contact@aurora.com");
    email.innerHTML = "contact@aurora.com";
    contactContainer.append(email);
    footerTopInner.append(contactContainer);

    // social media
    const socialContainer = document.createElement("div");
    socialContainer.classList.add("col", "social");
    // title
    const socialContainerTitle = document.createElement("div");
    socialContainerTitle.classList.add("title");
    socialContainerTitle.innerHTML = "Social Media";
    socialContainer.append(socialContainerTitle);
    // facebook
    const facebookIcon = document.createElement("a");
    facebookIcon.setAttribute("href", "/");
    facebookIcon.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"><path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path></svg>`;
    socialContainer.append(facebookIcon);
    // instagram
    const instagramIcon = document.createElement("a");
    instagramIcon.setAttribute("href", "/");
    instagramIcon.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
    <path d="M8 1.441c2.137 0 2.391 0.009 3.231 0.047 0.781 0.034 1.203 0.166 1.484 0.275 0.372 0.144 0.641 0.319 0.919 0.597 0.281 0.281 0.453 0.547 0.6 0.919 0.109 0.281 0.241 0.706 0.275 1.484 0.037 0.844 0.047 1.097 0.047 3.231s-0.009 2.391-0.047 3.231c-0.034 0.781-0.166 1.203-0.275 1.484-0.144 0.372-0.319 0.641-0.597 0.919-0.281 0.281-0.547 0.453-0.919 0.6-0.281 0.109-0.706 0.241-1.484 0.275-0.844 0.037-1.097 0.047-3.231 0.047s-2.391-0.009-3.231-0.047c-0.781-0.034-1.203-0.166-1.484-0.275-0.372-0.144-0.641-0.319-0.919-0.597-0.281-0.281-0.453-0.547-0.6-0.919-0.109-0.281-0.241-0.706-0.275-1.484-0.038-0.844-0.047-1.097-0.047-3.231s0.009-2.391 0.047-3.231c0.034-0.781 0.166-1.203 0.275-1.484 0.144-0.372 0.319-0.641 0.597-0.919 0.281-0.281 0.547-0.453 0.919-0.6 0.281-0.109 0.706-0.241 1.484-0.275 0.841-0.038 1.094-0.047 3.231-0.047zM8 0c-2.172 0-2.444 0.009-3.297 0.047-0.85 0.038-1.434 0.175-1.941 0.372-0.528 0.206-0.975 0.478-1.419 0.925-0.447 0.444-0.719 0.891-0.925 1.416-0.197 0.509-0.334 1.091-0.372 1.941-0.037 0.856-0.047 1.128-0.047 3.3s0.009 2.444 0.047 3.297c0.038 0.85 0.175 1.434 0.372 1.941 0.206 0.528 0.478 0.975 0.925 1.419 0.444 0.444 0.891 0.719 1.416 0.922 0.509 0.197 1.091 0.334 1.941 0.372 0.853 0.037 1.125 0.047 3.297 0.047s2.444-0.009 3.297-0.047c0.85-0.037 1.434-0.175 1.941-0.372 0.525-0.203 0.972-0.478 1.416-0.922s0.719-0.891 0.922-1.416c0.197-0.509 0.334-1.091 0.372-1.941 0.037-0.853 0.047-1.125 0.047-3.297s-0.009-2.444-0.047-3.297c-0.037-0.85-0.175-1.434-0.372-1.941-0.197-0.531-0.469-0.978-0.916-1.422-0.444-0.444-0.891-0.719-1.416-0.922-0.509-0.197-1.091-0.334-1.941-0.372-0.856-0.041-1.128-0.050-3.3-0.050v0z"></path><path d="M8 3.891c-2.269 0-4.109 1.841-4.109 4.109s1.841 4.109 4.109 4.109 4.109-1.841 4.109-4.109c0-2.269-1.841-4.109-4.109-4.109zM8 10.666c-1.472 0-2.666-1.194-2.666-2.666s1.194-2.666 2.666-2.666c1.472 0 2.666 1.194 2.666 2.666s-1.194 2.666-2.666 2.666z"></path><path d="M13.231 3.728c0 0.53-0.43 0.959-0.959 0.959s-0.959-0.43-0.959-0.959c0-0.53 0.43-0.959 0.959-0.959s0.959 0.43 0.959 0.959z"></path></svg>`;
    socialContainer.append(instagramIcon);
    footerTopInner.append(socialContainer);

    // copyright
    const copyright = document.createElement("div");
    copyright.classList.add("copyright");
    copyright.innerHTML = "© 2021 Aurora Restaurant";
    footerContainer.append(copyright);

    // append footer to body
    document.body.append(footerContainer);
};

export default footer;