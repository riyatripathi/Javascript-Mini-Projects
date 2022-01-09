//  https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}
// 6bdc4d23a8046f1e5ee217b5890c6633



// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


let find = document.querySelector('.find');
find.addEventListener("click",function(){
	let city = document.querySelector('.input').value;

	let apiKey = '6bdc4d23a8046f1e5ee217b5890c6633';
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
	
	let ajax = new XMLHttpRequest();
	ajax.open('GET',url);
	ajax.send();
	ajax.onload = function(){
		let ans = JSON.parse(ajax.responseText);
		
		let temp = (ans.main.temp - 273.1).toFixed(2);
		let min_temp = (ans.main.temp_min - 273.1).toFixed(2);
		let max_temp = (ans.main.temp_max - 273.1).toFixed(2);
		let main = ans.weather[0].main;

		document.querySelector('.temp').innerHTML = `TEMPERATURE:  ${temp} &#8451`;
		document.querySelector('.minmax').innerHTML = `MIN: ${min_temp} &deg C , MAX: ${max_temp} &deg C`;
		document.querySelector('.main').innerHTML = `DISCRIPTION: ${main}`;
	}

})


















