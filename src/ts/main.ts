import 'normalize.css';
import '../styles/scss/main.scss'
import './loader.ts'
import { initAnimation } from "./animation";
import { initNavigation } from './navigation'
import { initEducationCarousel } from "./education-carousel";
import { initSkills } from "./skills-tabs";
import { initContactMeForm } from "./form";
import { initCurrentTime } from "./current-time";
import { hideLoader } from "./loader";
import { initThemeMode } from "./theme";
import { initBurger } from "./burger";
import { initAsideNavigation } from "./aside-navigation";
import { timeDelayToInitProject } from "./constants";

const initResumeProject = (): void => {
    hideLoader();
    initAnimation();
    initNavigation();
    initBurger();
    initAsideNavigation();
    initThemeMode();
    initEducationCarousel();
    initSkills();
    initContactMeForm();
    initCurrentTime();
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initResumeProject();
    }, timeDelayToInitProject)
})
