import crypto from 'crypto';

const data = 'Hello World!'
//1. Hasing data

const hash = crypto.createHash('sha256')
                    .update(data)
                    .digest('hex');

// console.log(hash)

//2 . Hmac

const hmac = crypto.createHmac('sha256','my_seceret_key').update(data).digest('hex');
console.log(hmac);

//3. generate random bytes

const randomBytes = crypto.randomBytes(16).toString('hex');
console.log(randomBytes);

//4. encryt and decrypt 

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text){
    const cipher = crypto.createCipheriv(algorithm,key,iv);
    let encrypted = cipher.update(text,'utf-8','hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(encrypted){
    const decipher = crypto.createDecipheriv(algorithm,key,iv);
    let decrypted = decipher.update(encrypted,'hex','utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

const encryptedData = encrypt(data);
console.log(encryptedData);

const decryptedData = decrypt(encryptedData);
console.log(decryptedData);

//5 pbkdf

crypto.pbkdf2('password','salt',100000,64,'sha512',(err,derivedKey)=>{
    if(err) throw err;
    console.log(derivedKey.toString('hex'));
});

//6 rsa key pair generation

const { generateKeyPair } = crypto;

const { publicKey, privateKey } = generateKeyPair('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

console.log(publicKey);
console.log(privateKey);
