// eslint-disable-next-line no-undef
const config = require('../config');

test('test that get request returns 200 status', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('test that get request returns response body with Everything You Need', async () => {
	let responseStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		
		const data = await response.json();
		responseStatus = data[0].name;
	} catch (error) {
		console.error(error);
	}	
	expect(responseStatus).toBe("Everything You Need");
});
