const timeElement = document.querySelector<HTMLTimeElement>('.footer__date')

export const initCurrentTime = (): void => {
    const currentYear: number = new Date().getFullYear();
    timeElement.textContent = String(currentYear);
}