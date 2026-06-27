/* Phase 01 */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================
   MOBILE MENU
========================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const menuToggle =
        document.getElementById(
            "menuToggle"
        );

        const navLinks =
        document.getElementById(
            "navLinks"
        );

        if(menuToggle && navLinks){

            menuToggle.addEventListener(
                "click",
                () => {

                    menuToggle.classList.toggle(
                        "active"
                    );

                    navLinks.classList.toggle(
                        "active"
                    );

                }
            );

        }

    }
);


/* ==========================
   HEADER SCROLL
========================== */

const header =
document.querySelector(
    ".header"
);

window.addEventListener(

    "scroll",

    () => {

        if(window.scrollY > 50){

            header.classList.add(
                "scrolled"
            );

        }

        else{

            header.classList.remove(
                "scrolled"
            );

        }

    }

);


/* ==========================
   CURSOR GLOW
========================== */

const glow =
document.querySelector(
    ".cursor-glow"
);

document.addEventListener(

    "mousemove",

    e => {

        glow.style.left =
        e.clientX + "px";

        glow.style.top =
        e.clientY + "px";

    }

);


/* ==========================
   REVEAL
========================== */

const observer =
new IntersectionObserver(

entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add(
"reveal-active"
);

}

});

},

{
threshold:.2
}

);

document
.querySelectorAll(
".reveal-left,.reveal-right"
)
.forEach(el => {

observer.observe(el);

});


/* ==========================
   skill section
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const circles =
    document.querySelectorAll(".skill-circle");

    circles.forEach(circle => {

        const percent =
        parseInt(
            circle.dataset.percent
        );

        const progress =
        circle.querySelector(
            ".circle-progress"
        );

        const counter =
        circle.querySelector(
            ".counter"
        );

        const radius = 80;

        const circumference =
        2 * Math.PI * radius;

        progress.style.strokeDasharray =
        circumference;

        const offset =
        circumference -
        (percent / 100) * circumference;

        progress.style.strokeDashoffset =
        offset;

        let current = 0;

        const interval =
        setInterval(() => {

            if(current >= percent){

                clearInterval(interval);

            }else{

                current++;

                counter.textContent =
                current + "%";
            }

        },15);

    });

});


/* ==========================
   Portfolio section
========================== */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("portfolioSlider");

    const nextBtn = document.querySelector(".right-arrow");

    const prevBtn = document.querySelector(".left-arrow");

    console.log(slider);
    console.log(nextBtn);
    console.log(prevBtn);

    if (!slider || !nextBtn || !prevBtn) {

        console.error("Portfolio elements not found");

        return;
    }

    nextBtn.addEventListener("click", () => {

        slider.scrollBy({

            left: 350,

            behavior: "smooth"

        });

    });

    prevBtn.addEventListener("click", () => {

        slider.scrollBy({

            left: -350,

            behavior: "smooth"

        });

    });

});

/* ==========================
   Contact section
========================== */

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("whatsappForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const project =
            document.getElementById("project").value.trim();

        const message =
            document.getElementById("message").value.trim();

        const whatsappMessage =
`Hello Maryam,

Name: ${name}
Email: ${email}
Project Type: ${project}

Project Details:
${message}`;

        const whatsappURL =
            "https://wa.me/923191912783?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");

    });

});

/* ==========================
   ACTIVE MENU ON SCROLL
========================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function setActiveMenu() {

    let scrollY = window.scrollY;

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });

            const activeLink = document.querySelector(
                `.nav-links a[href="#${sectionId}"]`
            );

            if(activeLink){

                activeLink.classList.add("active");

            }

        }

    });

}

window.addEventListener("scroll", setActiveMenu);

setActiveMenu();


/* =====================================
   SCROLL TO TOP
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const topButton = document.getElementById("scrollTopBtn");

    if (!topButton) {
        console.error("Scroll button not found.");
        return;
    }

    function toggleScrollButton() {

        if (window.scrollY > 300) {

            topButton.classList.add("active");

        } else {

            topButton.classList.remove("active");

        }

    }

    window.addEventListener("scroll", toggleScrollButton);

    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    toggleScrollButton();

});

/*=====================================
LOADER
======================================*/

document.body.classList.add("loading");

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

        document.body.classList.remove("loading");

    }, 3100);

});