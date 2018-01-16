var INFURAIO_TOKEN = "chim_himidumage";
var PROVIDER_NODE = 'https://ropsten.infura.io/' + INFURAIO_TOKEN;
var currentChainId = 3;
var CONTRACT_ABI_MAT = JSON.parse('[ { "constant": true, "inputs": [], "name": "getValue", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_currentValue", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "resetValue", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [ { "name": "val", "type": "uint256" } ], "name": "squareValue", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "inputs": [ { "name": "a", "type": "address" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ]');

var CONTRACT_CODE_MAT = '0x6060604052341561000f57600080fd5b6040516020806103bd833981016040528080519060200190919050506000808190555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061033a806100836000396000f300606060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806316e9fe811461006757806320965255146100715780633e72de611461009a578063964a0214146100b2575b600080fd5b61006f6100db565b005b341561007c57600080fd5b61008461017d565b6040518082815260200191505060405180910390f35b6100b06004808035906020019091905050610186565b005b34156100bd57600080fd5b6100c5610308565b6040518082815260200191505060405180910390f35b60008081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166316e9fe816040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b151561016757600080fd5b6102c65a03f1151561017857600080fd5b505050565b60008054905090565b6000600a8210151561019757600080fd5b600090505b8181101561025557600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635b9af12b836040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050600060405180830381600087803b151561023457600080fd5b6102c65a03f1151561024557600080fd5b505050808060010191505061019c565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663209652556000604051602001526040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401602060405180830381600087803b15156102e357600080fd5b6102c65a03f115156102f457600080fd5b505050604051805190506000819055505050565b600054815600a165627a7a72305820acbbdae36df81f54f664e0f6d3aaf96206d046b299d95964b795abd4261956de0029';

var CONTRACT_ADDRESS_ADD = "";
var CONTRACT_ADDRESS_MAT = "0x885a48169bee08edabe1950c6f7a24790957ff7a";

var CONTRACT_OWNER = "0x00002d5cc95777ed0f1dbcac9b5a30fb1868eea4"; //This account should have an Ether balance
var LIST_INDEX = '0';
var PVT_KEY = "27f1693deb0dcf2b845c52c78f72bdacd3b9027eb65bcb577ee414600f4e9ae1";

var GAS_LIMIT = 4500000;


//Initialise the app instance
var _web3jsraw = require('web3js-raw');

var W3JSR = new _web3jsraw();
W3JSR.setProvider(PROVIDER_NODE);

var privateKey = new Buffer(PVT_KEY, 'hex');

W3JSR.createContractInstance(CONTRACT_ABI_MAT,CONTRACT_ADDRESS_MAT);
// Initialize values
document.getElementById('numberToSquare').value = "3";
//Event bindings

document.getElementById('squareIt').addEventListener('click',onSquareItButtonClick);
document.getElementById('showValue').addEventListener('click',onShowValueButtonClick);
document.getElementById('resetValue').addEventListener('click',onResetValueButtonClick);

//Event listener funtions

function onSquareItButtonClick(){
    var contractOwner = CONTRACT_OWNER;
    var value = document.getElementById('numberToSquare').value;

    var functionName = 'squareValue';
    var types = ['uint256'];
    var args = [value];

    var txnData = W3JSR.encodeFunctionParams(functionName, types, args);

    var txnRawData = W3JSR.getDefaultTxnAttributes('',contractOwner,CONTRACT_ADDRESS_MAT,'0',txnData,'','')
    var serializedTx = W3JSR.getSignedTransaction(txnRawData, privateKey);

    W3JSR.invokeSendRawTransaction(functionName,serializedTx,web3jsrCallaback);
}

function onShowValueButtonClick(){
    W3JSR.ContractInstance.getValue(function(error, result){
        if(!error){
            console.log("getMemberCount", result);
            var val = result;
            var str= "getMemberCount - ".concat(result);
            alert(str);
        }
        else
            console.error(error);
    });
}

function onResetValueButtonClick(){
    var contractOwner = CONTRACT_OWNER;

    var functionName = 'resetValue';
    var types = [];
    var args = [];

    var txnData = W3JSR.encodeFunctionParams(functionName, types, args);

    var txnRawData = W3JSR.getDefaultTxnAttributes('',contractOwner,CONTRACT_ADDRESS_MAT,'0',txnData,'','')
    var serializedTx = W3JSR.getSignedTransaction(txnRawData, privateKey);

    W3JSR.invokeSendRawTransaction(functionName,serializedTx,web3jsrCallaback);
}



var web3jsrCallaback = function (data){
    console.log("web3jsrCallaback - ", data);
}
