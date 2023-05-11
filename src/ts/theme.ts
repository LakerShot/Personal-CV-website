const headerThemeButton = document.querySelector<HTMLButtonElement>('.portfolio__theme-btn');
const asideThemeButton = document.querySelector<HTMLButtonElement>('.aside__theme-btn');
const themeIcon = document.querySelector<HTMLImageElement>('.portfolio__theme-icon');
const html = document.querySelector<HTMLHtmlElement>('html');

const themePrefix = 'theme-mode'

const permittedThemes = {
    DARK: 'dark',
    LIGHT: 'light'
}

export const initThemeMode = () => {
    const handleThemeOnLoad = () => {
        const currentTheme = localStorage.getItem(themePrefix);
        if (currentTheme === permittedThemes.LIGHT) {
            themeIcon.classList.remove('portfolio__theme-icon--default')
            themeIcon.classList.add('portfolio__theme-icon--light')
            html.dataset.theme = currentTheme;
        } else {
            html.dataset.theme = ''
        }
    }

    const toggleThemeHandler = () => {
        const theme = html.dataset.theme;

        if (theme) {
            html.dataset.theme = '';
            themeIcon.classList.remove('portfolio__theme-icon--light')
            themeIcon.classList.add('portfolio__theme-icon--default')
            localStorage.setItem(themePrefix, permittedThemes.DARK);
        } else {
            html.dataset.theme = 'light';
            themeIcon.classList.remove('portfolio__theme-icon--default')
            themeIcon.classList.add('portfolio__theme-icon--light')
            localStorage.setItem(themePrefix, permittedThemes.LIGHT);
        }
    }

    handleThemeOnLoad()
    headerThemeButton.addEventListener('click', toggleThemeHandler)
    asideThemeButton.addEventListener('click', toggleThemeHandler)
}
