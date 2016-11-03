/**
 * http://usejsdoc.org/
 */
var crypto = require('crypto-js');

var secrateMessage = {name: 'Andrew', secretName: '007'};

var secretKey = '123abc';

var encryptedMsg = crypto.AES.encrypt(JSON.stringify(secrateMessage), secretKey);
console.log('Encrypted Message: '+encryptedMsg);

var bytes = crypto.AES.decrypt(encryptedMsg, secretKey);
var decryptedMsg = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log('Decrypted Message: '+decryptedMsg);
console.log('Decrypted Name: '+decryptedMsg.secretName);