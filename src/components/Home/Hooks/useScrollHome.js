import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footer = document.querySelector(".footer_scroll_home");
const navegacion_home = document.querySelector(".navegacion_home");
const header = document.querySelector(".header_scroll_home");

ScrollTrigger.create({
    trigger: footer,
    start: "top 10%",
    onEnter: () => {
        navegacion_home.classList.add("hidden");
    },
    onLeaveBack: () => {
        navegacion_home.classList.remove("hidden");
    },
});

ScrollTrigger.create({
    trigger: header,
    start: "center -35%",
    onEnter: () => {
        navegacion_home.classList.add("blur_menu");
    },
    onLeaveBack: () => {
        navegacion_home.classList.remove("blur_menu");
    },
});

// Crear ScrollTriggers para los paneles
gsap.utils.toArray(".cards_scroll_home").forEach((panel) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
    });
});
