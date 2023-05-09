import { ApiRequest } from "./api-request";

const downloadLink = document.querySelector<HTMLLinkElement>('.main__contact-me-btn');

export const initDownloadSection = (): void => {
    const endpointUrl = '/assets/CVMorozovEgor.pdf';
    const downloadHandler = async () => {
        const blob = await ApiRequest.requestBlob(endpointUrl);

        const fileURL = window.URL.createObjectURL(blob);
        let downloadLink = document.createElement('a');
        downloadLink.href = fileURL;
        downloadLink.download = 'CVMorozovEgor.pdf';
        downloadLink.click();
    }

    downloadLink.addEventListener('click', downloadHandler);
}