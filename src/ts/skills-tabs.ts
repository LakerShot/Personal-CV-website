const skillsButtons = [...document.querySelectorAll<HTMLButtonElement>('.skills__btn')];
const skillsContainer = document.querySelector<HTMLDivElement>('.skills__actions');
const skillsDecorElement = document.querySelector<HTMLSpanElement>('.skills__decor');

export const initSkills = (): void => {
    const handleSkills = (event) => {
        const selectedButton = event.target as HTMLButtonElement
        if (selectedButton.classList.contains('skills__btn--active')) {
            return;
        }
        skillsButtons.forEach(skill => {
            skill.classList.remove('skills__btn--active')
        })

        if (selectedButton.classList.contains('skills__btn--frontend')) {
            skillsDecorElement.classList.add('skills__decor--initial');
            skillsDecorElement.classList.remove('skills__decor--rotate');
        } else  {
            skillsDecorElement.classList.add('skills__decor--rotate')
            skillsDecorElement.classList.remove('skills__decor--initial');
        }

        selectedButton.classList.add('skills__btn--active')
    }

    skillsContainer.addEventListener('click', handleSkills)
}
