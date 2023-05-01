const skillsButtons = [...document.querySelectorAll<HTMLButtonElement>('.skills__btn')];
const skillsContainer = document.querySelector<HTMLDivElement>('.skills__actions');
const skillsDecorElement = document.querySelector<HTMLSpanElement>('.skills__decor');
const backendSection = document.querySelector<HTMLDivElement>('.skills__backend');
const frontendSection = document.querySelector<HTMLDivElement>('.skills__frontend');

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

            frontendSection.classList.remove('skills__frontend--unselected')
            backendSection.classList.remove('skills__backend--selected')
        } else  {
            skillsDecorElement.classList.add('skills__decor--rotate')
            skillsDecorElement.classList.remove('skills__decor--initial');

            frontendSection.classList.add('skills__frontend--unselected')
            backendSection.classList.add('skills__backend--selected')
        }

        selectedButton.classList.add('skills__btn--active')
    }

    skillsContainer.addEventListener('click', handleSkills)
}
