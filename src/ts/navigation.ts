const navigationContainer = document.querySelector<HTMLUListElement>('.navigation');
const navigationLinks = [...document.querySelectorAll('.navigation__link')]
const logoLink = document.querySelector<HTMLLinkElement>('.portfolio__logo');
const aboutLink = document.querySelector<HTMLLinkElement>('.navigation__about')

export const initNavigation = () => {

    const resetActiveLink = () => {
        navigationLinks.forEach(navigationLink => {
            navigationLink.classList.remove('navigation__link--active')
        })
    }
    const handleLogoLink = () => {
        resetActiveLink();
        aboutLink.classList.add('navigation__link--active');
    }

    const navigationHandler = event => {
        const selectedLink = event.target as HTMLLinkElement;

        if(selectedLink.classList.contains('navigation__link--active')) {
            return;
        }

        resetActiveLink();

        selectedLink.classList.add('navigation__link--active')
    }

    logoLink.addEventListener('click', handleLogoLink)
    navigationContainer.addEventListener('click', navigationHandler);
}

