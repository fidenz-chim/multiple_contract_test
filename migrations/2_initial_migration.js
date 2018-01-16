var Add = artifacts.require("Add");
var Math = artifacts.require("Math");

module.exports = function(deployer) {
  deployer.deploy(Add);
  deployer.deploy(Math);
};
