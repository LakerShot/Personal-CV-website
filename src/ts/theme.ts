const headerThemeButton = document.querySelector<HTMLButtonElement>('.portfolio__theme-btn');
const asideThemeButton = document.querySelector<HTMLButtonElement>('.aside__theme-btn');
const themeIcon = document.querySelector<HTMLImageElement>('.portfolio__theme-icon');
const html = document.querySelector<HTMLHtmlElement>('html');

const themePrefix = 'theme-mode'

export const initThemeMode = () => {
    const toggleThemeHandler = () => {
        const theme = html.dataset.theme;

        if (theme) {
            html.dataset.theme = '';
            themeIcon.classList.remove('portfolio__theme-icon--light')
            themeIcon.classList.add('portfolio__theme-icon--default')
            localStorage.setItem(themePrefix, 'dark');
        } else {
            html.dataset.theme = 'light';
            themeIcon.classList.remove('portfolio__theme-icon--default')
            themeIcon.classList.add('portfolio__theme-icon--light')
            localStorage.setItem(themePrefix, 'light');
        }
    }

    headerThemeButton.addEventListener('click', toggleThemeHandler)
    asideThemeButton.addEventListener('click', toggleThemeHandler)
}
