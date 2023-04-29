import Toastify from 'toastify-js'

export const successToast = (message: string) => {
    return Toastify({
        text: message,
        duration: 5000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(90deg, rgba(75,124,74,1) 0%, rgba(4,175,148,1) 100%)",
        },
    })
}

export const errorToast = (message: string) => {
    return Toastify({
        text: message,
        duration: 5000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(90deg, rgba(152,134,4,1) 0%, rgba(175,4,4,1) 100%)",
        },
    })
}