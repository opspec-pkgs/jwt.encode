const fs = require('fs');
const JWS = require('jsrsasign').jws.JWS;

const claims = require('/claims.json');
const header = require('/header.json');

const secret = {};
secret[process.env.secretFormat] = process.env.secret;

const result = JWS.sign(header.alg, header, claims, secret);

fs.writeFileSync('/result', JSON.stringify(result));
