import 'normalize.css';
import '../styles/scss/main.scss'
import { initEducationCarousel } from "./education-carousel";
import { initSkills } from "./skills-tabs";
import { initNavigation } from './navigation'

const initProject = (): void => {
    initNavigation()
    initEducationCarousel()
    initSkills();

    console.log('app is up and running...')
}

document.addEventListener('DOMContentLoaded', () => {
    initProject()
})
