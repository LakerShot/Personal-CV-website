import 'normalize.css';
import '../styles/scss/main.scss'
import './loader.ts'
import { initAnimation } from "./animation";
import { initNavigation } from './navigation'
import { initEducationCarousel } from "./education-carousel";
import { initSkills } from "./skills-tabs";
import { initContactMeForm } from "./form";
import { initCurrentTime } from "./current-time";
import { initThemeMode } from "./theme";
import { initBurger } from "./burger";
import { initAsideNavigation } from "./aside-navigation";
import { initDownloadSection } from "./download";

const initResumeProject = (): void => {
    initAnimation();
    initNavigation();
    initBurger();
    initDownloadSection();
    initAsideNavigation();
    initThemeMode();
    initEducationCarousel();
    initSkills();
    initContactMeForm();
    initCurrentTime();
}

document.addEventListener('DOMContentLoaded', () => {
    initResumeProject();
})
