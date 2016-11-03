console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

// account.name Facebook
// account.username User12!
// account.password Password123!

function createAccount (account) {
	var accounts = storage.getItemSync('accounts_new');

	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	accounts.push(account);
	storage.setItemSync('accounts_new', accounts);
	return account;
}

function getAccount (accountName) {
	var accounts = storage.getItemSync('accounts_new');
	var matchedAccount = {};
	console.log('Accounts---');
	console.log(accounts);
	accounts.forEach(function (account) {
		console.log('Account.name');
		console.log(account);
		if (account.name === accountName) {
			matchedAccount = account;
			console.log('Matched : '+matchedAccount);
		}
		
	});

	return matchedAccount;
}

 createAccount(
 {
 	name: 'facebook',
 	username: 'someemail@facebook.com',
 	password: 'Password1234!'
 },
 {
	 	name: 'twitter',
	 	username: 'someemail@twitter.com',
	 	password: 'Password12345!'
 }
 );
 

var twitterAccount = getAccount('twitter');
console.log(twitterAccount);