import crypto from 'crypto';
import fs from 'fs';

const data='Hello World!';

const hash= crypto.createHash('sha256')   //algorithm
.update(data)                             // Input Data
.digest('hex');                           // output format

console.log('SHA-256 Hash:',hash);

//use MD5,SHA-1,SHA-512

const md5Hash= crypto.createHash('md5').update(data).digest('hex');
console.log('MD5 Hash: ',md5Hash);

const sha1Hash= crypto.createHash('sha1').update(data).digest('hex');
console.log('SHA1 Hash: ',sha1Hash);

const sha512Hash= crypto.createHash('sha512').update(data).digest('hex');
console.log('SHA512 Hash: ',sha512Hash);


const has= crypto.createHash('sha256');
const fileStream=fs.createReadStream('input.txt');

fileStream.on('data',(chunk)=> has.update(chunk));
fileStream.on('end',()=> console.log('File Hash: ',has.digest('hex')));


const base64Hash= crypto.createHash('sha256').update(data).digest('base64');
console.log('Base 64: ',base64Hash);

//salting and Hashing for Security
const salt= crypto.randomBytes(16).toString('hex');
const saltedHash=crypto.createHash('sha256').update('My_Secret_Pasword'+salt).digest('hex');
console.log('Salt: ' ,salt);
console.log('Salted Hash: ',saltedHash);
