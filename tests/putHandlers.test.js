// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "name": "My modified kit",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        }
]
}

test('test that put request returns status 200', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
		actualStatusCode = response.status;
    } catch (error) {
        console.error(error);
    }
	expect(actualStatusCode).toBe(200);
});
test('test that put request response body contains expected data', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
		actualResponseBody = await response.json()
       
    } catch (error) {
        console.error(error);
    }
	expect(actualResponseBody["ok"]).toBeTruthy();
});

