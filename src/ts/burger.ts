const burger = document.querySelector<HTMLButtonElement>('.burger__button');

export const initBurger = (): void => {
    const burgerHandler = () => {
        burger.classList.toggle('burger__button--opened');
    }

    burger.addEventListener('click', burgerHandler)
}
