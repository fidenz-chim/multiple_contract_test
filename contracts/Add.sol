pragma solidity ^0.4.17;

contract Add {

    uint _currentValue;

    function Add() public {
        _currentValue = 0;
    }

    function addValue(uint val) public {
        _currentValue += val;
    }

    function getValue() public view returns (uint){
      return _currentValue;
    }

    function restValue() public {
        _currentValue = 0;
    }

}
