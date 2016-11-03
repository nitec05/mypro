/**
 * http://usejsdoc.org/
 */
/**
 * http://usejsdoc.org/
 */
var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function(callback){
	request({url: url, json: true}, function(error, response, body){
	if(error){
		callback();
		//console.log('Unalbe to fetch weather');
	}else {
		callback(body);
		//console.log('It\'s '+ body.main.temp+' in '+body.name +'!');
	}
});
};