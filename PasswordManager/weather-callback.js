/**
 * http://usejsdoc.org/
 */
var weather = require('./weather-module.js');
var ipinfo = require('./location-info.js');

weather(function(cw){
	console.log(cw);
});

ipinfo(function(info){
	if(!info){
		console.log('Unable to guess location');
		return;	
	}
	console.log('Log/Lat: '+ info.loc);
});