let card = document.querySelector(".card");
let container = document.querySelector(".card_container");
//Items
const title = document.querySelector(".title");
const project = document.querySelector(".project img");
const description = document.querySelector(".info h3");
let yValue;
let xvalue;
let yVangular = 0;
let xVangular = 0;
//animation events
function myFunction(x) {
  if (x.matches) {
    yValue = 65;
    xvalue = -2;
    yVangular = 15;
    xVangular = -10;
  } else {
    yValue = 75;
    xvalue = 15;
    yVangular = 0;
    xVangular = 0;
  }
}
var x = window.matchMedia("(max-width: 991px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25 - xvalue;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25 + yValue;
  if (!x.matches) {
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }
});

//Animate In
container.addEventListener("mouseenter", (e) => {
  if (!x.matches) {
    card.style.transition = "none";

    //Popout
    title.style.transform = "translateZ(100px)";
    project.style.transform = "translateZ(100px)";
    description.style.transform = "translateZ(100px)";
  }
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  if (!x.matches) {
    card.style.transition = "all 1s ease";
    title.style.transition = "all 1s ease";
    project.style.transition = "all 1s ease";
    description.style.transition = "all 1s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    project.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
let card2 = document.querySelector(".card2");
let container2 = document.querySelector(".card_container2");
//Items
const title2 = document.querySelector(".title2");
const project2 = document.querySelector(".project2 img");
const description2 = document.querySelector(".info2 h3");

container2.addEventListener("mousemove", (e) => {
  let xAxis =
    (window.innerWidth / 2 - e.pageX) / 25 +
    xvalue -
    30 +
    yVangular -
    xVangular;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25 + yValue + 25 + yVangular;
  if (!x.matches) {
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }
});

//Animate In
container2.addEventListener("mouseenter", (e) => {
  if (!x.matches) {
    card2.style.transition = "none";

    //Popout
    title2.style.transform = "translateZ(100px)";
    project2.style.transform = "translateZ(100px)";
    description2.style.transform = "translateZ(100px)";
  }
});
//Animate Out
container2.addEventListener("mouseleave", (e) => {
  if (!x.matches) {
    card2.style.transition = "all 1s ease";
    title2.style.transition = "all 1s ease";
    project2.style.transition = "all 1s ease";
    description2.style.transition = "all 1s ease";
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title2.style.transform = "translateZ(0px)";
    project2.style.transform = "translateZ(0px) rotateZ(0deg)";
    description2.style.transform = "translateZ(0px)";
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////
let card3 = document.querySelector(".card3");
let container3 = document.querySelector(".card_container3");
//Items
const title3 = document.querySelector(".title3");
const project3 = document.querySelector(".project3 img");
const description3 = document.querySelector(".info3 h3");

container3.addEventListener("mousemove", (e) => {
  if (!x.matches) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25 - xvalue;
    let yAxis =
      (window.innerHeight / 2 - e.pageY) / 25 + yValue + 50 + yVangular;
    card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  }
});

//Animate In
container3.addEventListener("mouseenter", (e) => {
  if (!x.matches) {
    card3.style.transition = "none";

    //Popout
    title3.style.transform = "translateZ(100px)";
    project3.style.transform = "translateZ(100px)";
    description3.style.transform = "translateZ(100px)";
  }
});
//Animate Out
container3.addEventListener("mouseleave", (e) => {
  if (!x.matches) {
    card3.style.transition = "all 1s ease";
    title3.style.transition = "all 1s ease";
    project3.style.transition = "all 1s ease";
    description3.style.transition = "all 1s ease";
    card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title3.style.transform = "translateZ(0px)";
    project3.style.transform = "translateZ(0px) rotateZ(0deg)";
    description3.style.transform = "translateZ(0px)";
  }
});

////////////////////////////////////////////////////////////////////////

let se = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills_content_holder",
    start: "center bottom",
  },
});

se.from(".scrollPoint", { y: 200, opacity: 0, duration: 1 }).from(
  ".logo_section",
  { x: 200, opacity: 0, duration: 1 },
  "-=0.5"
);

///////////////////////////////////////////////////////////////////////////

let we = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills_content_holder",
    start: "center",
  },
});

we.from(".work_header", { y: 200, opacity: 0, duration: 1 })
  .from(".card_info_animation", { x: 200, opacity: 0, duration: 0.5 }, "-=0.5")
  .from(".card_container", { x: -200, opacity: 0, duration: 0.3 }, "-=0.4");

////////////////////////////////////////////////////////////////////////

let we2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".work_header",
    start: "bottom",
  },
});
we2
  .from(".card_info_animation2", { x: -200, opacity: 0, duration: 1 }, "-=0.5")
  .from(".card_container2", { x: 200, opacity: 0, duration: 0.5 }, "-=0.4");

////////////////////////////////////////////////////////////////////////

let we3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card_container2",
    start: "top",
  },
});
we3
  .from(".card_info_animation3", { x: -200, opacity: 0, duration: 1 }, "-=0.5")
  .from(".card_container3", { x: 200, opacity: 0, duration: 0.5 }, "-=0.4");

////////////////////////////////////////////////////////////////////////

let we4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".card_container2",
    start: "center",
  },
});
we4.from(".contact_holder", { x: 300, opacity: 0, duration: 0.5 }, "-=0.3");
