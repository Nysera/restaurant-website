import reservationForm from "../forms/reservationForm";

const reservationModal = function() {
     // 
     const reservationModalContainer = document.createElement("div");
     reservationModalContainer.classList.add("reservation-modal");
     document.body.prepend(reservationModalContainer);
 
     // close button
     const reservationModalCloseBtn = document.createElement("button");
     reservationModalCloseBtn.classList.add("reservation-close-btn");
     reservationModalCloseBtn.innerHTML = "<span></span><span></span>";
     reservationModalContainer.append(reservationModalCloseBtn);
 
     // container
     const container = document.createElement("div");
     container.classList.add("container");
     reservationModalContainer.append(container);
 
     // reservation wrapper
     const reservationModalWrapper = document.createElement("div");
     reservationModalWrapper.classList.add("reservation-modal-wrapper");
     container.append(reservationModalWrapper);
 
     // reservation intro
     const reservationModalIntro = document.createElement("div");
     reservationModalIntro.classList.add("reservation-modal-intro");
     reservationModalWrapper.append(reservationModalIntro);
     const reservationModalIntroH2 = document.createElement("h2");
     reservationModalIntroH2.innerHTML = "Make A Reservation";
     reservationModalIntro.append(reservationModalIntroH2);
     const reservationModalParagraph1 = document.createElement("p");
     reservationModalParagraph1.innerHTML = "Cras eget libero ipsum. In hac habitasse platea dictumst. Curabitur vestibulum at augue non sagittis";
     reservationModalIntro.append(reservationModalParagraph1);
     const reservationModalParagraph2 = document.createElement("p");
     reservationModalParagraph2.innerHTML = `<strong>Phone Bookings:</strong> Call us on <a class="tel" href="tel:(03)1538134">(03) 1538 134</a>`;
     reservationModalIntro.append(reservationModalParagraph2);

     // call reservationForm
     reservationModalWrapper.append(reservationForm());

};

export default reservationModal;