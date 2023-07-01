const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5123110023mshcbdfc08193be093p195deajsn0cc94ea76fa0',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));