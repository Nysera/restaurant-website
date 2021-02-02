import heroBackgroundImage from "../../images/hero.jpg";
import introImage1 from "../../images/intro1.jpg";
import introImage2 from "../../images/intro2.jpg";
import menuBackgroundImage from "../../images/menu.jpg";
import contactImage from "../../images/map.jpg";


const home = function() {
    // hero section
    // hero container
    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero");

    // hero image
    const heroImage = document.createElement("div");
    heroImage.classList.add("hero-image");
    heroImage.style.backgroundImage = `url("${heroBackgroundImage}")`;
    heroContainer.append(heroImage);

    // hero content
    const heroInner = document.createElement("div");
    heroInner.classList.add("hero-inner")
    heroContainer.append(heroInner);
    const heroInnerH1 = document.createElement("h1");
    heroInnerH1.innerHTML = `Open For Dine <span>In</span> Or Take <span>Out</span>`;
    heroInner.append(heroInnerH1);


    // append hero to #content container
    document.querySelector("#content").append(heroContainer);

    // intro section
    // intro container
    const introContainer = document.createElement("div");
    introContainer.classList.add("intro");

    // container
    const container = document.createElement("div");
    container.classList.add("container");
    introContainer.append(container);

    // intro wrapper
    const introWrapper = document.createElement("div");
    introWrapper.classList.add("intro-wrapper");
    container.append(introWrapper);

    // left column
    const leftCol = document.createElement("div");
    leftCol.classList.add("left");
    introWrapper.append(leftCol);
    const leftColImage = document.createElement("div");
    leftColImage.classList.add("intro-image");
    leftColImage.style.backgroundImage = `url("${introImage1}")`;
    leftCol.append(leftColImage);

    // right column
    const rightCol = document.createElement("div");
    rightCol.classList.add("right");
    introWrapper.append(rightCol);

    // right column h2
    const rightColH2 = document.createElement("h2");
    rightColH2.innerHTML = "Welcome to <span>Auror<span>a</span><span>";
    rightCol.append(rightColH2);

    // right column paragraph
    const rightColParagraph1 = document.createElement("p");
    rightColParagraph1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et elementum augue. Praesent gravida sed quam quis tincidunt. Suspendisse luctus.";
    rightCol.append(rightColParagraph1);

    // right column paragraph
    const rightColParagraph2 = document.createElement("p");
    rightColParagraph2.innerHTML = "Mauris efficitur risus quam, quis auctor diam vulputate nec. Nullam ac eros eu turpis maximus molestie nec sed velit. Sed sit amet arcu sed.";
    rightCol.append(rightColParagraph2);

    // right column buttons
    const rightColButtonWrapper = document.createElement("div");
    rightColButtonWrapper.classList.add("intro-buttons");
    rightCol.append(rightColButtonWrapper);

    // reserve button
    const reserveBtn = document.createElement("button");
    reserveBtn.classList.add("btn", "btn-solid", "reservation-btn");
    rightColButtonWrapper.append(reserveBtn);
    const reserveBtnSpan = document.createElement("span");
    reserveBtnSpan.innerHTML = "Reserve A Table";
    reserveBtn.append(reserveBtnSpan);

    // order takeout button
    const orderTakeoutButton = document.createElement("a");
    orderTakeoutButton.setAttribute("href", "/")
    orderTakeoutButton.classList.add("btn", "btn-solid");
    rightColButtonWrapper.append(orderTakeoutButton);
    const orderTakeoutButtonSpan = document.createElement("span");
    orderTakeoutButtonSpan.innerHTML = "Order Takeout";
    orderTakeoutButton.append(orderTakeoutButtonSpan);

    // right column image
    const rightColImage = document.createElement("div");
    rightColImage.classList.add("intro-image-2");
    rightColImage.style.backgroundImage = `url("${introImage2}")`;
    rightCol.append(rightColImage);


    // append intro to #content container
    document.querySelector("#content").append(introContainer);

    // menu section
    // menu container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("our-menu");

    // menu image
    const menuImage = document.createElement("div");
    menuImage.classList.add("menu-image");
    menuImage.style.backgroundImage = `url("${menuBackgroundImage}")`;
    menuContainer.append(menuImage);

    // menu content
    const menuInner = document.createElement("div");
    menuInner.classList.add("menu-inner");
    menuContainer.append(menuInner);

     // menu h2
     const menuH2 = document.createElement("h2");
     menuH2.innerHTML = "Our Menu";
     menuInner.append(menuH2);

    // menu paragraph
    const menuParagraph = document.createElement("p");
    menuParagraph.innerHTML = "ulla tincidunt imperdiet. Ut viverra rutrum ipsum quis viverra. Etiam et lectus ornare.";
    menuInner.append(menuParagraph);

    // menu button
    const menuButton = document.createElement("button");
    menuButton.classList.add("btn", "btn-solid", "menu-page-btn");
    menuInner.append(menuButton);
    const menuButtonSpan = document.createElement("span");
    menuButtonSpan.innerHTML = "View Menu";
    menuButton.append(menuButtonSpan);


    // append menu to #content container
    document.querySelector("#content").append(menuContainer);

    // contact section
    // contact container
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact");

    // contact inner container
    const contactInnerContainer = document.createElement("div");
    contactInnerContainer.classList.add("container");
    contactContainer.append(contactInnerContainer);

    // contact wrapper
    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contact-wrapper");
    contactInnerContainer.append(contactWrapper);

    // contact left column
    const contactLeftCol = document.createElement("div");
    contactLeftCol.classList.add("left");
    contactWrapper.append(contactLeftCol);

    // contact left column h2
    const contactLeftColH2 = document.createElement("h2");
    contactLeftColH2.innerHTML = "Get In Touch";
    contactLeftCol.append(contactLeftColH2);

    // contact left column paragraph
    const contactLeftColParagraph = document.createElement("p");
    contactLeftColParagraph.innerHTML = "Nunc maximus dictum enim, in sagittis dolor vestibulum sit amet. Donec eleifend tellus sed nisi luctus laoreet.";
    contactLeftCol.append(contactLeftColParagraph);

    // contact left column button
    const contactLeftColButton = document.createElement("button");
    contactLeftColButton.classList.add("btn", "btn-solid", "contact-page-btn");
    contactLeftCol.append(contactLeftColButton);
    const contactButtonSpan = document.createElement("span");
    contactButtonSpan.innerHTML = "Contact";
    contactLeftColButton.append(contactButtonSpan);

     // contact right column
     const contactRightCol = document.createElement("div");
     contactRightCol.classList.add("right");
     contactWrapper.append(contactRightCol);

    //  contact right column image
    const contactRightImage = document.createElement("div");
    contactRightImage.classList.add("contact-image");
    contactRightImage.style.backgroundImage = `url("${contactImage}")`;
    contactRightCol.append(contactRightImage);

    // contact right column location
    const contactRightLocation = document.createElement("div");
    contactRightLocation.classList.add("contact-location");
    contactRightCol.append(contactRightLocation);

    // contact right column address
    const contactRightAddress = document.createElement("div");
    contactRightAddress.classList.add("contact-address");
    contactRightAddress.innerHTML = "Harcourt Street, Brisbane, QLD 4005";
    contactRightLocation.append(contactRightAddress);

    // contact right column get directions
    const contactRightGetDirections = document.createElement("div");
    contactRightGetDirections.classList.add("contact-directions");
    contactRightLocation.append(contactRightGetDirections);

    // contact right column get directions
    const contactRightGetDirectionsAnchor = document.createElement("a");
    contactRightGetDirectionsAnchor.setAttribute("href", "/");
    contactRightGetDirectionsAnchor.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg>Get Directions`;
    contactRightGetDirections.append(contactRightGetDirectionsAnchor);

    // append contact to #content container
    document.querySelector("#content").append(contactContainer);
};

export default home;