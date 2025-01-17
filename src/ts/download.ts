const downloadLink = document.querySelector<HTMLLinkElement>('.main__contact-me-btn');

export const initDownloadSection = (): void => {
    const endpointUrl = '/CVMorozovEgor.pdf';
    const downloadHandler =  () => {

        let downloadLink = document.createElement('a');
        downloadLink.href = endpointUrl;
        downloadLink.download = 'CVMorozovEgor.pdf';
        downloadLink.click();
    }

    downloadLink.addEventListener('click', downloadHandler);
}