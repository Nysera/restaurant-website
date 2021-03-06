import mapImg from "../../images/contact.jpg";
import contactForm from "../modules/forms/contactForm";

const contact = function() {
       // contact page container
       const contactPageContainer = document.createElement("div");
       contactPageContainer.classList.add("contact-page");
   
       // contact page intro
       const contactPageIntro = document.createElement("div");
       contactPageIntro.classList.add("contact-intro");
       contactPageContainer.append(contactPageIntro);
   
       // contact page intro left
       const contactPageIntroLeft = document.createElement("div");
       contactPageIntroLeft.classList.add("left");
       contactPageIntro.append(contactPageIntroLeft);
   
       // contact page intro left content
       const contactPageIntroLeftContent = document.createElement("div");
       contactPageIntroLeftContent.classList.add("content");
       contactPageIntroLeft.append(contactPageIntroLeftContent);
   
       // contact page intro left content h1
       const contactPageIntroLeftContentH1 = document.createElement("h1");
       contactPageIntroLeftContentH1.innerHTML = "Contact";
       contactPageIntroLeftContent.append(contactPageIntroLeftContentH1);
   
       // contact page intro left content paragraph
       const contactPageIntroLeftContentParagraph = document.createElement("p");
       contactPageIntroLeftContentParagraph.innerHTML = "Phasellus gravida, erat at maximus lobortis, justo arcu ultricies libero, vel euismod nibh justo sit amet libero.";
       contactPageIntroLeftContent.append(contactPageIntroLeftContentParagraph);
   
       // contact page intro left content address
       const contactPageIntroLeftContentAddress = document.createElement("div");
       contactPageIntroLeftContentAddress.classList.add("details");
       contactPageIntroLeftContentAddress.innerHTML = "Harcourt Street, Brisbane, QLD 4005"
       contactPageIntroLeftContent.append(contactPageIntroLeftContentAddress);
       const contactPageIntroLeftContentAddressSpan = document.createElement("span");
       contactPageIntroLeftContentAddressSpan.classList.add("title");
       contactPageIntroLeftContentAddressSpan.innerHTML = "Address:";
       contactPageIntroLeftContentAddress.prepend(contactPageIntroLeftContentAddressSpan);
   
       // contact page intro left content phone
       const contactPageIntroLeftContentPhone = document.createElement("div");
       contactPageIntroLeftContentPhone.classList.add("details");
       contactPageIntroLeftContent.append(contactPageIntroLeftContentPhone);
       const phoneAnchor = document.createElement("a");
       phoneAnchor.classList.add("tel");
       phoneAnchor.setAttribute("href", "tel:(03)1538134");
       phoneAnchor.innerHTML = "(03) 1538 134";
       contactPageIntroLeftContentPhone.append(phoneAnchor);
       const contactPageIntroLeftContentPhoneSpan = document.createElement("span");
       contactPageIntroLeftContentPhoneSpan.classList.add("title");
       contactPageIntroLeftContentPhoneSpan.innerHTML = "Phone:";
       contactPageIntroLeftContentPhone.prepend(contactPageIntroLeftContentPhoneSpan);
   
       // contact page intro left content email
       const contactPageIntroLeftContentEmail = document.createElement("div");
       contactPageIntroLeftContentEmail.classList.add("details");
       contactPageIntroLeftContent.append(contactPageIntroLeftContentEmail);
       const emailAnchor = document.createElement("a");
       emailAnchor.setAttribute("href", "mailto:contact@aurora.com");
       emailAnchor.innerHTML = "contact@aurora.com";
       contactPageIntroLeftContentEmail.append(emailAnchor);
       const contactPageIntroLeftContentEmailSpan = document.createElement("span");
       contactPageIntroLeftContentEmailSpan.classList.add("title");
       contactPageIntroLeftContentEmailSpan.innerHTML = "Email:";
       contactPageIntroLeftContentEmail.prepend(contactPageIntroLeftContentEmailSpan);
   
       // contact page intro left content open hours
       const contactPageIntroLeftContentOpenHours = document.createElement("div");
       contactPageIntroLeftContentOpenHours.classList.add("details");
       contactPageIntroLeftContentOpenHours.innerHTML = "Wed-Sun / 12-9pm - Mon-Tues / Closed";
       contactPageIntroLeftContent.append(contactPageIntroLeftContentOpenHours);
       const contactPageIntroLeftContentOpenHoursSpan = document.createElement("span");
       contactPageIntroLeftContentOpenHoursSpan.classList.add("title");
       contactPageIntroLeftContentOpenHoursSpan.innerHTML = "Open Hours:";
       contactPageIntroLeftContentOpenHours.prepend(contactPageIntroLeftContentOpenHoursSpan);

       // contact page intro left content social
       const contactPageIntroLeftContentSocial = document.createElement("div");
       contactPageIntroLeftContentSocial.classList.add("social");
       contactPageIntroLeftContent.append(contactPageIntroLeftContentSocial);

       // contact page intro left content facebook
       const contactPageIntroLeftContentSocialFb = document.createElement("a");
       contactPageIntroLeftContentSocialFb.setAttribute("href", "/");
       contactPageIntroLeftContentSocialFb.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path></svg>`;
       contactPageIntroLeftContentSocial.append(contactPageIntroLeftContentSocialFb);

       // contact page intro left content instagram
       const contactPageIntroLeftContentSocialIg = document.createElement("a");
       contactPageIntroLeftContentSocialIg.setAttribute("href", "/");
       contactPageIntroLeftContentSocialIg.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path d="M8 1.441c2.137 0 2.391 0.009 3.231 0.047 0.781 0.034 1.203 0.166 1.484 0.275 0.372 0.144 0.641 0.319 0.919 0.597 0.281 0.281 0.453 0.547 0.6 0.919 0.109 0.281 0.241 0.706 0.275 1.484 0.037 0.844 0.047 1.097 0.047 3.231s-0.009 2.391-0.047 3.231c-0.034 0.781-0.166 1.203-0.275 1.484-0.144 0.372-0.319 0.641-0.597 0.919-0.281 0.281-0.547 0.453-0.919 0.6-0.281 0.109-0.706 0.241-1.484 0.275-0.844 0.037-1.097 0.047-3.231 0.047s-2.391-0.009-3.231-0.047c-0.781-0.034-1.203-0.166-1.484-0.275-0.372-0.144-0.641-0.319-0.919-0.597-0.281-0.281-0.453-0.547-0.6-0.919-0.109-0.281-0.241-0.706-0.275-1.484-0.038-0.844-0.047-1.097-0.047-3.231s0.009-2.391 0.047-3.231c0.034-0.781 0.166-1.203 0.275-1.484 0.144-0.372 0.319-0.641 0.597-0.919 0.281-0.281 0.547-0.453 0.919-0.6 0.281-0.109 0.706-0.241 1.484-0.275 0.841-0.038 1.094-0.047 3.231-0.047zM8 0c-2.172 0-2.444 0.009-3.297 0.047-0.85 0.038-1.434 0.175-1.941 0.372-0.528 0.206-0.975 0.478-1.419 0.925-0.447 0.444-0.719 0.891-0.925 1.416-0.197 0.509-0.334 1.091-0.372 1.941-0.037 0.856-0.047 1.128-0.047 3.3s0.009 2.444 0.047 3.297c0.038 0.85 0.175 1.434 0.372 1.941 0.206 0.528 0.478 0.975 0.925 1.419 0.444 0.444 0.891 0.719 1.416 0.922 0.509 0.197 1.091 0.334 1.941 0.372 0.853 0.037 1.125 0.047 3.297 0.047s2.444-0.009 3.297-0.047c0.85-0.037 1.434-0.175 1.941-0.372 0.525-0.203 0.972-0.478 1.416-0.922s0.719-0.891 0.922-1.416c0.197-0.509 0.334-1.091 0.372-1.941 0.037-0.853 0.047-1.125 0.047-3.297s-0.009-2.444-0.047-3.297c-0.037-0.85-0.175-1.434-0.372-1.941-0.197-0.531-0.469-0.978-0.916-1.422-0.444-0.444-0.891-0.719-1.416-0.922-0.509-0.197-1.091-0.334-1.941-0.372-0.856-0.041-1.128-0.050-3.3-0.050v0z"></path><path d="M8 3.891c-2.269 0-4.109 1.841-4.109 4.109s1.841 4.109 4.109 4.109 4.109-1.841 4.109-4.109c0-2.269-1.841-4.109-4.109-4.109zM8 10.666c-1.472 0-2.666-1.194-2.666-2.666s1.194-2.666 2.666-2.666c1.472 0 2.666 1.194 2.666 2.666s-1.194 2.666-2.666 2.666z"></path><path d="M13.231 3.728c0 0.53-0.43 0.959-0.959 0.959s-0.959-0.43-0.959-0.959c0-0.53 0.43-0.959 0.959-0.959s0.959 0.43 0.959 0.959z"></path></svg>`;
       contactPageIntroLeftContentSocial.append(contactPageIntroLeftContentSocialIg);
   
       // contact page intro right
       const contactPageIntroRight = document.createElement("div");
       contactPageIntroRight.classList.add("right");
       contactPageIntro.append(contactPageIntroRight);
   
       // contact page intro image
       const contactPageIntroRightImage = document.createElement("div");
       contactPageIntroRightImage.classList.add("contact-image");
       contactPageIntroRightImage.style.backgroundImage = `url(${mapImg})`;
       contactPageIntroRight.append(contactPageIntroRightImage);
       
       // contact page intro get directions
       const contactPageIntroRightGetDirections = document.createElement("div");
       contactPageIntroRightGetDirections.classList.add("contact-directions");
       contactPageIntroRight.append(contactPageIntroRightGetDirections);
       const contactPageIntroRightGetDirectionsAnchor = document.createElement("a");
       contactPageIntroRightGetDirectionsAnchor.setAttribute("href", "/");
       contactPageIntroRightGetDirectionsAnchor.innerHTML = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16"><path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path></svg> Get Directions`;
       contactPageIntroRightGetDirections.append(contactPageIntroRightGetDirectionsAnchor);

       // contact form
       const contactPageContactForm = document.createElement("div");
       contactPageContactForm.classList.add("contact-form");
       contactPageContainer.append(contactPageContactForm);

       // contact form container
       const contactPageContactFormContainer = document.createElement("div");
       contactPageContactFormContainer.classList.add("container");
       contactPageContactForm.append(contactPageContactFormContainer);

       // contact form intro
       const contactPageContactFormIntro = document.createElement("div");
       contactPageContactFormIntro.classList.add("contact-form-intro");
       contactPageContactFormContainer.append(contactPageContactFormIntro);
       const contactPageContactFormIntroH2 = document.createElement("h2");
       contactPageContactFormIntroH2.innerHTML = "General Enquiries";
       contactPageContactFormIntro.append(contactPageContactFormIntroH2);
       const contactPageContactFormIntroParagraph = document.createElement("p");
       contactPageContactFormIntroParagraph.innerHTML = "Curabitur eget mauris eleifend justo euismod elementum. In pellentesque urna at sem vestibulum.";
       contactPageContactFormIntro.append(contactPageContactFormIntroParagraph);

       // contact form wrapper
       const contactPageContactFormWrapper = document.createElement("div");
       contactPageContactFormWrapper.classList.add("contact-form-wrapper");
       contactPageContactFormContainer.append(contactPageContactFormWrapper);

       // call contact form function
       contactPageContactFormWrapper.append(contactForm());

       // append contact to #content container
       document.querySelector("#content").append(contactPageContainer);
};

export default contact;