class Authenticator {
	URL;
	HEADERS = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Accept': 'application/json'
	};

	constructor(apiKey) {
		this.URL = `https://iam.cloud.ibm.com/identity/token?grant_type=urn%3Aibm%3Aparams%3Aoauth%3Agrant-type%3Aapikey&apikey=${apiKey}`;
	}

	async getToken() {
		const res = await fetch(this.URL, {
			method: 'POST',
			headers: this.HEADERS
		});

		return res.json();
	}
}

export default Authenticator;