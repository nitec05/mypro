/**
 * http://usejsdoc.org/
 */
var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Pune&APPID=23a379e8c879a760f6a31375088b84d3';

request({url: url, json: true}, function(error, response, body){
	if(error){
		console.log('Unalbe to fetch weather');
	}else {
		console.log('It\'s '+ body.main.temp+' in '+body.name +'!');
	}
});