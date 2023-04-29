import { ContactMe } from "./models";

export class ApiRequest {
    static async sendData (data: ContactMe) {
        // TODO: remove mock request when backend is gonna be ready
        const { success } = await ApiRequest.mockPostRequest();
        return success;
    }

    static async postRequest (dto: ContactMe) {
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

    static async mockPostRequest () {
        return new Promise(resolve => resolve({ success: true }))
    }
}