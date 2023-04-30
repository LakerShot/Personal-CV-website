import 'normalize.css';
import '../styles/scss/main.scss'
import { initEducationCarousel } from "./education-carousel";
import { initSkills } from "./skills-tabs";
import { initNavigation } from './navigation'
import { initContactMeForm } from "./form";
import { initCurrentTime } from "./current-time";

const initProject = (): void => {
    initNavigation();
    initEducationCarousel();
    initSkills();
    initContactMeForm();
    initCurrentTime();
}

document.addEventListener('DOMContentLoaded', () => {
    initProject();
})
