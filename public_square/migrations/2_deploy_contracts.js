var ConsensusGraph = artifacts.require("ConsensusGraph");
var PublicSquare = artifacts.require("PublicSquare");

module.exports = function(deployer) {
  // deployer.deploy(ConsensusGraph());
  deployer.deploy(PublicSquare);
};
