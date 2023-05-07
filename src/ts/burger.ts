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

    const overlayHandler = event => {
        if (event.target.classList.contains('overlay')) {
            burgerHandler();
        }
    }

    burger.addEventListener('click', burgerHandler);
    overlay.addEventListener('click', overlayHandler)
}
