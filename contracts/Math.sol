pragma solidity ^0.4.17;
import "./Add.sol";

contract Math {

    uint public _currentValue;
    Add instanceAdd;

    function Math(address a) public {
        _currentValue = 0;
        instanceAdd = Add(a);
    }

    function squareValue(uint val) payable public{
        require(val<10);
        for (uint i=0; i<val; i++){
            instanceAdd.addValue(val);
        }
        _currentValue = instanceAdd.getValue();
    }

    function getValue() public view returns (uint){
      return _currentValue;
    }

    function resetValue() payable public {
        _currentValue = 0;
        instanceAdd.resetValue();
    }
}
