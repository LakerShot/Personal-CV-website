const asideNavigationContainer = document.querySelector<HTMLUListElement>('.burger-menu__navigation');
const asideNavigationLinks = [...document.querySelectorAll<HTMLLinkElement>('.burger-menu__link')]
export const initAsideNavigation = () => {
    const resetActiveLink = () => {
        asideNavigationLinks.forEach(navigationLink => {
            navigationLink.classList.remove('burger-menu__link--active')
        })
    }

    const navigationHandler = event => {
        const selectedLink = event.target as HTMLLinkElement;

        if(selectedLink.classList.contains('burger-menu__link--active')) {
            return;
        }

        resetActiveLink();
        selectedLink.classList.add('burger-menu__link--active')
    }

    asideNavigationContainer.addEventListener('click', navigationHandler);
}

