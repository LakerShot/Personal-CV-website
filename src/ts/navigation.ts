const navigationContainer = document.querySelector<HTMLUListElement>('.navigation');
const navigationLinks = [...document.querySelectorAll('.navigation__link')]

export const initNavigation = () => {
    const navigationHandler = event => {
        const selectedLink = event.target as HTMLLinkElement;

        if(selectedLink.classList.contains('navigation__link--active')) {
            return;
        }

        navigationLinks.forEach(navigationLink => {
            navigationLink.classList.remove('navigation__link--active')
        })

        selectedLink.classList.add('navigation__link--active')
    }

    navigationContainer.addEventListener('click', navigationHandler)
}

