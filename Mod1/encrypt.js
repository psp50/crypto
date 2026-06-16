import crypto from 'crypto';

//algorithms: 
//1. aes-128-cbc
//2. aes-256-cbc
//3. aes-256-cbc

const algorithm='aes-256-cbc';

const key= crypto.randomBytes(32); //256 bit key

const iv= crypto.randomBytes(16);


function encrypt(text){
const cipher=crypto.createCipheriv(algorithm,key,iv);
let encrypted= cipher.update(text,'utf-8','hex');
encrypted += cipher.final('hex');

return {iv :iv.toString('hex'),encryptedData: encrypted};
}

const encrypted= encrypt('Hello World');
console.log('Encrypted: ',encrypted);

function decrypt(encryptedText,ivHex){

    const decipher= crypto.createDecipheriv(algorithm,key,Buffer.from(ivHex,'hex'));
    let decrypted= decipher.update(encryptedText,'hex','utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

const decrypted= decrypt(encrypted.encryptedData,encrypted.iv);
console.log('Decrypted Data: ',decrypted);


//using Base64

function encryptBase64(text){
    const cipher=crypto.createCipheriv(algorithm,key,iv);
    let encrypted= cipher.update(text,'utf-8','base64');
    encrypted += cipher.final('base64');
    
    return {iv :iv.toString('base64'),encryptedData: encrypted};
}

const encryptedBase64= encryptBase64('Hello World');
console.log('Encrypted: ',encryptedBase64);
