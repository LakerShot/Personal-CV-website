import { ApiRequest } from "./api-request";
import { successToast } from "./toast";
import { ContactMe } from "./models";
import { PermittedInputFields } from "./constants";

const contactMeForm = document.querySelector<HTMLFormElement>('.contact-me__form');
const nameInput = document.querySelector<HTMLInputElement>('.contact-me__name')
const emailInput = document.querySelector<HTMLInputElement>('.contact-me__email')
const messageTextarea = document.querySelector<HTMLTextAreaElement>('.contact-me__textarea')
const submitButton = document.querySelector<HTMLButtonElement>('.contact-me__send')
const invalidEmailField = document.querySelector('.contact-me__error');

export const initContactMeForm = (): void => {
    const formDto: ContactMe = {
        name: '',
        email: '',
        message: ''
    }

    const emailRexExp = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    type InputFields = keyof typeof formDto;

    const handleFormFields = (inputType: InputFields, event: KeyboardEvent): void => {
        const target = event.target as HTMLInputElement | HTMLTextAreaElement;

        formDto[inputType] = target.value.trim();
        submitButton.disabled = !checkIsAllFieldsSettled();
    }
    const nameInputHandler = (event: KeyboardEvent) => {
        handleFormFields(PermittedInputFields.Name, event)
    }

    const emailInputHandler = (event: KeyboardEvent) => {
        handleFormFields(PermittedInputFields.Email, event)
    }

    const messageInputHandler = (event: KeyboardEvent) => {
        handleFormFields(PermittedInputFields.Message, event)
    }

    const checkIsAllFieldsSettled = (): boolean => {
        return !!(nameInput.value && emailInput.value && messageTextarea.value)
    }

    const validateEmailField = () => {
        const isEmailValid = emailRexExp.test(formDto.email)
        if (!isEmailValid) {
            invalidEmailField.classList.add('contact-me__error--visible')
        } else {
            invalidEmailField.classList.remove('contact-me__error--visible')
        }

        return { isEmailValid }
    }

    const resetFormValues = () => {
        [nameInput, emailInput, messageTextarea].forEach(inputField => {
            inputField.value = '';
        })
        Object.keys(formDto).forEach(key => {
            formDto[key as InputFields] = '';
        });
    }

    const sendData = async () => {
        await ApiRequest.sendData(formDto);
        await successToast('Data successfully being send!').showToast()
    }

    const submitFormHandler = async (event: SubmitEvent) => {
        event.preventDefault();
        const { isEmailValid } = validateEmailField()
        if (isEmailValid) {
            await sendData();
            resetFormValues()
        }
    }

    contactMeForm.addEventListener('submit', submitFormHandler)
    nameInput.addEventListener('keyup', nameInputHandler)
    emailInput.addEventListener('keyup', emailInputHandler)
    messageTextarea.addEventListener('keyup', messageInputHandler)
}