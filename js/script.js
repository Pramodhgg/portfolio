const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { x: "0%", opacity: "1", duration: 1, stagger: 0.25 });
tl.to(".animated_slider1", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".animated_intro_page", { y: "-100%", duration: 0.2 }, "-=1");
tl.fromTo(".nav_bar", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".animae", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.5 });
