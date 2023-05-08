const burger = document.querySelector<HTMLButtonElement>('.burger__button');
const burgerMenu = document.querySelector<HTMLElement>('.burger-menu')
const header = document.querySelector<HTMLHeadingElement>('.header');
const overlay = document.querySelector<HTMLDivElement>('.overlay')

export const initBurger = (): void => {
    const burgerHandler = () => {
        burger.classList.toggle('burger__button--opened');
        burgerMenu.classList.toggle('burger-menu--opened');
        header.classList.toggle('header--border-bottom');
        overlay.classList.toggle('overlay--opened');
    }

    const overlayHandler = (event: MouseEvent) => {
        const targetElement = event.target as HTMLDivElement;

        if (targetElement.classList.contains('overlay')) {
            burgerHandler();
        }
    }

    const escapeKeyHandler = (event: KeyboardEvent) => {
        if (event.key === 'Escape' || event.keyCode === 27 ) {
            burgerHandler();
        }
    }

    // TODO: handle inert attribute when modal is open

    burger.addEventListener('click', burgerHandler);
    overlay.addEventListener('click', overlayHandler)
    window.addEventListener('keyup', escapeKeyHandler)
}
