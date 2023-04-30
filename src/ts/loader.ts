const loaderContainer = document.querySelector<HTMLDivElement>('.portfolio__loader');
const content = document.querySelector<HTMLDivElement>('.content-container')
export const hideLoader = () => {
    content.classList.remove('content-container--hidden');
    loaderContainer.classList.add('portfolio__loader--hidden')
}
