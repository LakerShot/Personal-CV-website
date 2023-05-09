// @ts-nocheck
import { mSm } from "./constants";

export const initAnimation = () => {
    if (mSm.matches) {
        return;
    }

    gsap.from(".main__info", { x: -1200, duration: 1 })
    gsap.from(".main__picture-container", { y: -200, duration: 1, opacity: 0 })
    gsap.from(".portfolio__header", { opacity: 0, duration: 1, y: -25 })

    gsap.timeline({scrollTrigger: {
        trigger:"#journey",
        start:"top 70%",
        end:"bottom top",
        toggleActions:"restart none none reverse"
    }})
        .from(".qualification__title", { opacity: 0, duration: .5, y: 20, ease: "power3.out" })
        .from(".journey__sub-title", { opacity: 0, duration: .5, y: 20, ease: "power3.out" }, "-=0.2")
        .from(".journey__pre-title", { opacity: 0, duration: .5, y: 20, ease: "power3.out" }, "-=0.2")

    gsap.timeline({scrollTrigger: {
            trigger:".journey__timeline",
            start:"top 60%",
            end:"bottom top",
            toggleActions:"restart none none reverse"
        }})
        .from(".journey__timeline", { opacity: 0, duration: .5, y: 50, ease: "power3.out" }, "-=0.2")
        .from(".timeline__date--right", { opacity: 0, duration: .7, x: -200, ease: "power3.out" }, "-=0.2")
        .from(".timeline__component--vue", { opacity: 0, duration: .7, x: 200, ease: "power3.out" }, "-=0.7")
        .from(".timeline__component--angular", { opacity: 0, duration: .7, x: -200, ease: "power3.out" }, "-=0.7")
        .from(".timeline__date--left", { opacity: 0, duration: .7, x: 200, ease: "power3.out" }, "-=0.7")
        .from(".timeline__component--react", { opacity: 0, duration: .7, x: 200, ease: "power3.out" }, "-=0.7")

    gsap.timeline({scrollTrigger: {
            trigger:"#mentoring",
            start:"top 50%",
            end:"bottom top",
            toggleActions:"restart none none reverse"
        }})
        .from(".mentoring__heading", { opacity: 0, duration: .5, y: 20, ease: "power3.out" })
        .from(".mentoring__date", { opacity: 0, duration: .5, y: 20, ease: "power3.out" }, "-=0.2")
        .from(".animation--react", { opacity: 0, duration: .5, y: 40, ease: "power3.out" }, "-=0.2")

    gsap.timeline({scrollTrigger: {
            trigger:"#skills",
            start:"top 30%",
            end:"bottom top",
            toggleActions:"restart none none reverse"
        }})
        .from(".skills__title", { opacity: 0, duration: .5, y: 20, ease: "power3.out" })
        .from(".skills__sub-title", { opacity: 0, duration: .5, y: 20, ease: "power3.out" }, "-=0.2")
        .from(".skills__actions", { opacity: 0, duration: .5, y: 20, ease: "power3.out" }, "-=0.2")
        .from(".skills__bars--left", { opacity: 0, duration: .7, x: -200, ease: "power3.out" }, "-=0.2")
        .from(".skills__bars--right", { opacity: 0, duration: .7, x: 200, ease: "power3.out" }, "-=0.7")
        .from(".additional__title", { opacity: 0, delay: .3, duration: .5, y: 20, ease: "power3.out" })
        .from(".additional__description", { opacity: 0, delay: .3, duration: .5, y: 20, ease: "power3.out" }, "-=0.3")

    gsap.timeline({scrollTrigger: {
            trigger:"#education",
            start:"top 30%",
            end:"bottom top",
            toggleActions:"restart none none reverse"
        }})
        .from(".education__title", { opacity: 0, duration: .5, y: 20, ease: "power3.out" })
        .from(".education__carousel", { opacity: 0, duration: .5, scale: .2, ease: "power3.out" }, "-=0.2" )

    gsap.timeline({scrollTrigger: {
            trigger:"#contactMe",
            start:"top 60%",
            end:"bottom top",
            toggleActions:"restart none none reverse"
        }})
        .from(".contact-me__title", { opacity: 0, duration: .5, y: 20, ease: "power3.out" })
        .from(".contact-me__sub-title", { opacity: 0, duration: .5, y: 20, ease: "power3.out" }, "-=0.2")
        .from(".contact-me__form", { opacity: 0, duration: .7, y: 60, scale: .2, ease: "expo.out" }, "-=0.2")
}