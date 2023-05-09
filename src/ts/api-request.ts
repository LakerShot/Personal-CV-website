import { ContactMe, ResponseStatus } from "./models";

export class ApiRequest {
    static async sendData (data: ContactMe) {
        // TODO: remove mock request when backend is gonna be ready
        const { success } = await ApiRequest.mockPostRequest(data);
        return success;
    }

    static async postRequest (dto: ContactMe): Promise<ResponseStatus> {
        const rawResponse = await fetch('https://api/sendMessage', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dto)
        });
        const response = await rawResponse.json();
        return response
    }

    static async requestBlob (endpoint: string): Promise<Blob> {
        return await fetch(endpoint).then((response: Response) => response.blob())
    }

    static async mockPostRequest (data: ContactMe): Promise<ResponseStatus> {
        console.table(data)
        return new Promise<ResponseStatus>(resolve => resolve({ success: true }))
    }
}