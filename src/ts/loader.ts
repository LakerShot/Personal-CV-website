const loaderContainer = document.querySelector<HTMLDivElement>('.portfolio__loader');
const content = document.querySelector<HTMLDivElement>('.app-container');

export const hideLoader = () => {
    content.classList.remove('portfolio__content--hidden');
    content.classList.add('portfolio__content');
    content.style.display = 'block';

    loaderContainer.style.display = 'none';
    loaderContainer.classList.add('portfolio__loader--hidden');
}
