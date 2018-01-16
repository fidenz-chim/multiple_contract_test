# multiple_contract_test #

This illustrates how to use one contract with in another contract.

## Description ##

#### contract/Add.sol #### 
_addValue_ add the passed value to state variable *_currentValue

#### contract/Math.sol #### 
Constructor receive the address of the  *Add* class
_squareValue_ square the passed value and store in state variable *_currentValue*
To square the value, _Math_ contract use _addValue_ function in Add contract

####  test/TestAddSquare.js #### 
Set of unit tests to check the functionality
