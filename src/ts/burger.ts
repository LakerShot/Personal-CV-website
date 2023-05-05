const burger = document.querySelector<HTMLButtonElement>('.burger__button');
const burgerMenu = document.querySelector<HTMLElement>('.burger-menu')

export const initBurger = (): void => {
    const burgerHandler = () => {
        burger.classList.toggle('burger__button--opened');
        burgerMenu.classList.toggle('burger-menu--opened');
    }

    burger.addEventListener('click', burgerHandler)
}
