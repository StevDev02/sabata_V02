import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".container ul", {
    transform: "translateX(-69%)",
    scrollTrigger: {
        trigger: ".container",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "bottom -250%",
        scrub: -1,
        pin: true,
    }
})
