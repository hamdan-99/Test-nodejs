const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv').config()
const { caesarize } = require('./caesarsCipher');
const OPERATIONS ={caesarize};
app.use(bodyParser.json())
let PORT = process.env.PORT || 3000;

app.use(express.static('static'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'static','index.html')));

app.post('/api/:op',(req, res)=>{  
    let strToCaesarize = req.body.strToCaesarize;
    let shiftNumber = req.body.shiftNumber;
    shiftNumber = Number(shiftNumber);
    if(isNaN(shiftNumber)){
        res.json({status:'error',message:'Give me numbers '})
        return;
    }
const op = req.params.op;
if(!Object.keys(OPERATIONS).includes(op)){
    res.json({status:'error',message:'Invalid Operation'})
    return;
};
const opFun = OPERATIONS[op];
const result = opFun(strToCaesarize,shiftNumber);
res.json({status:'ok', result});
});
app.listen(PORT, () => console.log(`Caesars. app listening on port ${PORT}!`));