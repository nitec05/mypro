/**
 * http://usejsdoc.org/
 */
console.log('starting password manager!');
var storage = require('node-persist');
storage.initSync();
storage.setItemSync('accounts', [{username: 'Nitin', balance: 100}]);

var accounts = storage.getItemSync('accounts');

accounts.push({username: 'Jen', balance: 75});