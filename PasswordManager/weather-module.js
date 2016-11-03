/**
 * http://usejsdoc.org/
 */
/**
 * http://usejsdoc.org/
 */
var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Pune&APPID=23a379e8c879a760f6a31375088b84d3';

module.exports = function(callback){
	request({url: url, json: true}, function(error, response, body){
	if(error){
		callback('Unable to fetch weather');
		//console.log('Unalbe to fetch weather');
	}else {
		callback('It\'s '+ body.main.temp+' in '+body.name +'!');
		//console.log('It\'s '+ body.main.temp+' in '+body.name +'!');
	}
});
};