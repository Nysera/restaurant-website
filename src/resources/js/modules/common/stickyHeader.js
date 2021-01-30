const stickyHeader = function() {
    let prevScrollPos = 0;

    window.addEventListener("scroll", function() {
        const headerContainer = document.querySelector(".header");
        const currScroll = window.pageYOffset;
        const offset = 100;

        if (Math.abs(prevScrollPos - currScroll) <= offset) {
            if (currScroll === 0) {
                headerContainer.classList.add("header-top"); 
            }
            return;
        }

        if (currScroll > prevScrollPos) {
            headerContainer.classList.remove("header-top");
            headerContainer.classList.add("header-hidden");
        } else if (currScroll < prevScrollPos) {
            headerContainer.classList.remove("header-hidden");
        }

        prevScrollPos = currScroll;
    });
};

export default stickyHeader;