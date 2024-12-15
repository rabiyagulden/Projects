// Assuming you have the RSA-encrypted AES key and the AES-encrypted data in base64 format

// Import the required library
import { util, pki, cipher } from "./node_modules/node-forge";

// RSA private key in PEM format (replace this with your private key)
const privateKeyPem = `-----BEGIN RSA PRIVATE KEY-----
... Your RSA Private Key ...
-----END RSA PRIVATE KEY-----`;

// RSA-encrypted AES key and AES-encrypted data in base64 format
const rsaEncryptedAESKeyBase64 = '...'; // Replace this with the actual RSA-encrypted AES key
const aesEncryptedDataBase64 = '...'; // Replace this with the actual AES-encrypted data

// Convert base64 strings to bytes
const rsaEncryptedAESKey = util.decode64(rsaEncryptedAESKeyBase64);
const aesEncryptedData = util.decode64(aesEncryptedDataBase64);

// Step 1: Decrypt the RSA-encrypted AES key using the RSA private key
const privateKey = pki.privateKeyFromPem(privateKeyPem);
const decryptedAESKey = privateKey.decrypt(rsaEncryptedAESKey, 'RSA-OAEP');

// Step 2: Decrypt the AES-encrypted data using the decrypted AES key
const decipher = cipher.createDecipher('AES-CBC', decryptedAESKey);
decipher.start({ iv: iv }); // iv is the initialization vector used during encryption
decipher.update(util.createBuffer(aesEncryptedData));
decipher.finish();

const decryptedData = decipher.output.getBytes();
console.log('Decrypted Data:', decryptedData);
