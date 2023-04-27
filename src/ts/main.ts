import 'normalize.css';
import '../styles/scss/main.scss'
import { initEducationCarousel } from "./education-carousel";

// document.querySelector<HTMLDivElement>('#app')

const initProject = () => {
    initEducationCarousel()
    console.log('app is running...')
}

document.addEventListener('DOMContentLoaded', () => {
    initProject()
})
