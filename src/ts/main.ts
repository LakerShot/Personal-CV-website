import 'normalize.css';
import '../styles/scss/main.scss'
import { initEducationCarousel } from "./education-carousel";
import { initSkills } from "./skills-tabs";
import { initNavigation } from './navigation'
import { initContactMeForm } from "./form";

const initProject = (): void => {
    initNavigation()
    initEducationCarousel()
    initSkills();
    initContactMeForm();
}

document.addEventListener('DOMContentLoaded', () => {
    initProject()
})
