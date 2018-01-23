# multiple_contract_test #

This illustrates how to use one contract with in another contract.

## Files and Descriptions ##

#### contract/Add.sol #### 
_addValue_ add the passed value to state variable *_currentValue*

#### contract/Math.sol #### 
Constructor receive the address of the  *Add* class
_squareValue_ square the passed value and store in state variable *_currentValue*
To square the value, _Math_ contract use _addValue_ function in Add contract

#### senderCheck function #### 
+ This take one parameter, which is the address of the function invoker (userAcc2)
+ In the context of Math.senderCheck, sender is the one who invoked the contract function (refer TestAddSquare.js)
       + require (msg.sender == addr); // Sender is invoked user's address

* In the context of Add.senderCheck, sender is the Math contract who invoked the Add.sendChecker functon in Math.sol
       - require (msg.sender == conAddr); // Sender is Math contract address
       - require (msg.sender != accAddr); // Sender NOT the user who invoked the function
        
* In the context of Add.senderCheck, tx.origin is the one who invoked the contract function
       - require (tx.origin == accAddr); // tx.origin is the user who invoked the function
        
####  test/TestAddSquare.js #### 
Set of unit tests to check the functionality

## Setting up contracts ##

* Deploy contract *Add* to a testnet and obtain the contract address (*add_address*)
* Deploy contract *Math* to the same testnet with the *add_address* as a constructor parameter

## Contract call another contract ##
* When you invoke *Math.squareValue* it internally calls *Add.addValue* 



