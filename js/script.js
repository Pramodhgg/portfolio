let windows = window.pageYOffset;
let about = document.querySelector("#about");
let project = document.querySelector("#project");
let contact = document.querySelector("#contact");
about.offsetTop = 0;
project.offsetTop = 0;
contact.offsetTop = 0;
console.log(windows);
if (windows) {
  window.pageYOffset = 0;
}
document.querySelector(".about").removeAttribute("id", "active");
document.querySelector(".project").removeAttribute("id", "active");
document.querySelector(".contact").removeAttribute("id", "active");

function refreshPage() {
  window.scrollTo(0, 0);
}

window.onload = (event) => {
  setTimeout(refreshPage, 3000);
};

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { x: "0%", opacity: "1", duration: 1, stagger: 0.25 });
tl.to(".animated_slider1", { y: "-100%", duration: 1.5, delay: 0.5 });

tl.to(".animated_intro_page", { y: "-100%", duration: 0.2 }, "-=1");
tl.fromTo(".nav_bar", { opacity: 0 }, { opacity: 1, duration: 1 });

tl.fromTo(".animae", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.5 });
tl.fromTo(
  ".box-area",
  { display: "none", opacity: "0" },
  { display: "block", opacity: "1", duration: 0.4 },
  "-=4"
);
tl.fromTo(
  ".left_sticky_list",
  { opacity: 0 },
  { opacity: 1, duration: 1, stagger: 0.5 }
);

tl.fromTo(
  ".header_section",
  { display: "none" },
  { display: "block", duration: 1 },
  "-=6.5"
);

window.addEventListener("scroll", () => {
  windows = window.pageYOffset;
  if (about.offsetTop > windows) {
    document.querySelector(".project").removeAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".contact").removeAttribute("id", "active");
  } else if (about.offsetTop - 100 <= windows && project.offsetTop > windows) {
    document.querySelector(".about").setAttribute("id", "active");

    document.querySelector(".project").removeAttribute("id", "active");
    document.querySelector(".contact").removeAttribute("id", "active");
  } else if (
    project.offsetTop - 300 <= windows &&
    contact.offsetTop > windows
  ) {
    document.querySelector(".project").setAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".contact").removeAttribute("id", "active");
  } else if (contact.offsetTop - 100 <= windows) {
    document.querySelector(".contact").setAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".project").removeAttribute("id", "active");
  } else {
    document.querySelector(".contact").removeAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".project").removeAttribute("id", "active");
  }
});
