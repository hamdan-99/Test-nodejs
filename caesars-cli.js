#!/usr/bin/env node
const { caesarize } = require('./caesarsCipher');
const OPERATIONS = {
    "+":caesarize,
};
function usage(){

};
if(process.argv.length !== 5){
    usage();
    process.exit(1);
};
let strToCaesarize = process.argv[2];
const op = process.argv[3];
let shiftNumber = process.argv[4];
shiftNumber = Number(shiftNumber);
if(isNaN(shiftNumber)){
    usage();
    process.exit(1);
};
const opFn = OPERATIONS[op];
const result = opFn(strToCaesarize, shiftNumber);
console.log("Result :", result);