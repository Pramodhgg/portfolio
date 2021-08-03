let about = document.querySelector("#about");
let project = document.querySelector("#project");
let contact = document.querySelector("#contact");

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
  ".header_section",
  { display: "none" },
  { display: "block", duration: 1 },
  "-=6.5"
);

document.querySelector(".about").removeAttribute("id", "active");
document.querySelector(".project").removeAttribute("id", "active");
document.querySelector(".contact").removeAttribute("id", "active");
window.onload = (event) => {
  console.log("reloaded");
  window.scrollTo(0, 0);
  document.querySelector(".about").removeAttribute("id", "active");
  document.querySelector(".project").removeAttribute("id", "active");
  document.querySelector(".contact").removeAttribute("id", "active");
};
window.addEventListener("scroll", () => {
  let windows = window.pageYOffset;

  if (about.offsetTop <= windows && project.offsetTop > windows) {
    document.querySelector(".about").setAttribute("id", "active");

    document.querySelector(".project").removeAttribute("id", "active");
    document.querySelector(".contact").removeAttribute("id", "active");
  } else if (project.offsetTop <= windows && contact.offsetTop > windows) {
    document.querySelector(".project").setAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".contact").removeAttribute("id", "active");
  } else if (contact.offsetTop <= windows) {
    console.log("iam in contact fcckkk !");
    document.querySelector(".contact").setAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".project").removeAttribute("id", "active");
  } else {
    document.querySelector(".contact").removeAttribute("id", "active");
    document.querySelector(".about").removeAttribute("id", "active");
    document.querySelector(".project").removeAttribute("id", "active");
  }
});
