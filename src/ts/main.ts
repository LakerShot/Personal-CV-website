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

const initProject = (): void => {
    hideLoader();
    initAnimation();
    initNavigation();
    initThemeMode();
    initEducationCarousel();
    initSkills();
    initContactMeForm();
    initCurrentTime();
}

document.addEventListener('DOMContentLoaded', () => {
    initProject();
})
