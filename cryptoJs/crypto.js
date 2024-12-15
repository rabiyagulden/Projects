console.log("tadatada");


console.log("hello");
var crypt = new Crypt();
var rsa = new RSA();

var publicKey;
var privateKey;
var encrypted;
var decrypted;

generateKeys();
Encryption();
function generateKeys() {
    var rsa = new RSA();
    rsa.generateKeyPair(function (keyPair) {
        publicKey = keyPair.publicKey;
        privateKey = keyPair.privateKey;
    });
    setTimeout(function () {
        console.log('publicKey', publicKey);
        console.log('privateKey', privateKey);
    }, 3000);
}
function Encryption() {
    var entropy = 'Testing of RSA algorithm in javascript.';
    var crypt = new Crypt({
        rsaStandard: 'RSA-OAEP',
        entropy: entropy
    });
    var rsa = new RSA({
        entropy: entropy
    });
    var message = 'Hello, this is the demo of encryption/decryption in javascript!';
    encrypted = crypt.encrypt(publicKey, message);
    console.log("encrypted", encrypted);
}
setTimeout(() => {
    Encryption();
}, 3000);
function Decryption() {
    var entropy = 'Testing of RSA algorithm in javascript.';
    var crypt = new Crypt({
        rsaStandard: 'RSA-OAEP',
        entropy: entropy
    });
    var rsa = new RSA({
        entropy: entropy
    });
    decrypted = crypt.decrypt(privateKey, encrypted);
    console.log('decrypted', decrypted);
}
setTimeout(() => {
    Decryption();
}, 3000);