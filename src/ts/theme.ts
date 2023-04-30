const themeButton = document.querySelector<HTMLButtonElement>('.portfolio__theme-btn');
const themeIcon = document.querySelector<HTMLImageElement>('.portfolio__theme-icon');
const html = document.querySelector<HTMLHtmlElement>('html');

export const initThemeMode = () => {
    const toggleThemeHandler = () => {
        const theme = html.dataset.theme;

        if (theme) {
            html.dataset.theme = '';
            themeIcon.src = '/src/assets/svg/bulb.svg';
            localStorage.setItem('theme-mode', 'light');
        } else {
            html.dataset.theme = 'light';
            themeIcon.src = '/src/assets/svg/bulb-light.svg';
            localStorage.setItem('theme-mode', 'dark');
        }
    }

    themeButton.addEventListener('click', toggleThemeHandler)
}