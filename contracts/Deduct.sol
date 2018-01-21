pragma solidity ^0.4.17;

contract Deduct {

    uint _currentValue;

    function Deduct(uint init) public {
        _currentValue = init;
    }

    function deductValue(uint val) payable public {
        _currentValue += val;
    }

    function getValue() public view returns (uint){
      return _currentValue;
    }

    function resetValue() payable public {
        _currentValue = 0;
    }

}
