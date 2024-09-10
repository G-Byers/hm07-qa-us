// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "ids": [
        1,
        4,
        44
    ]
};

test('should return a status code of 200 for valid request', async () => {
    let responseStatus 
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        responseStatus = response.status
     } catch (error) {
        console.error(error);
       }
       expect(responseStatus).toBe(200);
});
test('test that the response body contains Big World', async () => {
    let responseBody
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses/amount`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

    responseBody = await response.json();

    } catch (error) {
        console.error(error);
    }
 
    expect(responseBody["Everything You Need"]["Sprite Soft Drink"]).toBe(9);
});