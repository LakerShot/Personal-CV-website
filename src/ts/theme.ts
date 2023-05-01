const themeButton = document.querySelector<HTMLButtonElement>('.portfolio__theme-btn');
const themeIcon = document.querySelector<HTMLImageElement>('.portfolio__theme-icon');
const html = document.querySelector<HTMLHtmlElement>('html');

const themePrefix = 'theme-mode'

export const initThemeMode = () => {
    const toggleThemeHandler = () => {
        const theme = html.dataset.theme;

        if (theme) {
            html.dataset.theme = '';
            themeIcon.src = '/src/assets/svg/bulb.svg';
            localStorage.setItem(themePrefix, 'dark');
        } else {
            html.dataset.theme = 'light';
            themeIcon.src = '/src/assets/svg/bulb-light.svg';
            localStorage.setItem(themePrefix, 'light');
        }
    }

    themeButton.addEventListener('click', toggleThemeHandler)
}
