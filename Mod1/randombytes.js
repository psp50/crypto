import crypto from 'crypto';

const randomBytes= crypto.randomBytes(16);
console.log('Random Bytes(Buffer): ',randomBytes);
console.log('Random Bytes: ',randomBytes.toString('hex'));

const token= crypto.randomBytes(32).toString('hex');
console.log('Secure Token: ',token);

const randomNumber=crypto.randomInt(0,100);
console.log('Random Number',randomNumber);

const randomPassword= crypto.randomBytes(12).toString('base64');
console.log('Random Password: ',randomPassword);

const salt= crypto.randomBytes(16).toString('hex');
console.log('Generated Salt: ',salt);

crypto.randomBytes(16, (err,buffer)=>{
    if(err) throw err
    console.log('Async Random Bytes(Hex): ',buffer.toString('hex'));
})
