import heroBackgroundImage from "../images/hero.jpg";
import introImage1 from "../images/intro1.jpg";
import introImage2 from "../images/intro2.jpg";
import menuBackgroundImage from "../images/menu.jpg";


const home = function() {
    // hero section
    // hero container
    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero");

    // hero image
    const heroImage = document.createElement("div");
    heroImage.classList.add("hero_image");
    heroImage.style.backgroundImage = `url("${heroBackgroundImage}")`;
    heroContainer.append(heroImage);

    // hero content
    const heroInner = document.createElement("div");
    heroInner.classList.add("hero_inner")
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
    introWrapper.classList.add("intro_wrapper");
    container.append(introWrapper);

    // left column
    const leftCol = document.createElement("div");
    leftCol.classList.add("left");
    introWrapper.append(leftCol);
    const leftColImage = document.createElement("div");
    leftColImage.classList.add("intro_image");
    leftColImage.style.backgroundImage = `url("${introImage1}")`;
    leftCol.append(leftColImage);

    // right column
    const rightCol = document.createElement("div");
    rightCol.classList.add("right");
    introWrapper.append(rightCol);

    // right column h2
    const rightColH2 = document.createElement("h2");
    rightColH2.innerHTML = "Welcome to Auror<span>a</span>";
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
    rightColButtonWrapper.classList.add("intro_buttons");
    rightCol.append(rightColButtonWrapper);

    // reserve button
    const reserveBtn = document.createElement("button");
    reserveBtn.classList.add("btn", "btn-solid");
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
    rightColImage.classList.add("intro_image-2");
    rightColImage.style.backgroundImage = `url("${introImage2}")`;
    rightCol.append(rightColImage);


    // append intro to #content container
    document.querySelector("#content").append(introContainer);

    // menu section
    // menu container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu");

    // menu inner container
    const menuInnerContainer = document.createElement("div");
    menuInnerContainer.classList.add("container");
    menuContainer.append(menuInnerContainer);

    // menu wrapper
    const menuInnerContainerWrapper = document.createElement("div");
    menuInnerContainerWrapper.classList.add("menu_wrapper");
    menuInnerContainer.append(menuInnerContainerWrapper);

    // menu image
    const menuImage = document.createElement("div");
    menuImage.classList.add("menu_image");
    menuImage.style.backgroundImage = `url("${menuBackgroundImage}")`;
    menuInnerContainerWrapper.append(menuImage);

    // menu content
    const menuInner = document.createElement("div");
    menuInner.classList.add("menu_inner");
    menuInnerContainerWrapper.append(menuInner);

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
    menuButton.classList.add("btn", "btn-solid");
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
    contactWrapper.classList.add("contact_wrapper");
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
    contactLeftColButton.classList.add("btn", "btn-solid");
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
    contactRightImage.classList.add("contact_image");
    contactRightCol.append(contactRightImage);

    // contact right column address
    const contactRightAddress = document.createElement("div");
    contactRightAddress.classList.add("contact_address");
    contactRightAddress.innerHTML = "Harcourt Street, Brisbane, QLD, 4005";
    contactRightCol.append(contactRightAddress);


    // append menu to #content container
    document.querySelector("#content").append(contactContainer);
};

export default home;