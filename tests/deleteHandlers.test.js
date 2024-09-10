// eslint-disable-next-line no-undef
const config = require('../config');
const expectedResponseBody =
{
	"ok": true
}
const requestBody = {
    "name": "test kit",
    "cardId": 1
}

test('test that request returns status 200', async () => {
	let actualStatusCode;
    try {
        const responsePost = await fetch(`${config.API_URL}/api/v1/kits`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });  
        const responseBodyPost = await responsePost.json()
        const kitId = responseBodyPost.id
    const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
		});
	actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatusCode).toBe(200)
});
test('test that request response body contains expected data', async () => {
    let actualResponseBody;
    try {
        const responsePost = await fetch(`${config.API_URL}/api/v1/kits`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });  
        const responseBodyPost = await responsePost.json()
        const kitId = responseBodyPost.id
    const response = await fetch(`${config.API_URL}/api/v1/kits/${kitId}`, {
			method: 'DELETE',
		});
       
		actualResponseBody = await response.json()
       
    } catch (error) {
        console.error(error);
    }
	expect(actualResponseBody).toEqual(expectedResponseBody);
});
