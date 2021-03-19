const Consensus = artifacts.require('ConsensusGraph');
const truffleAssert = require('truffle-assertions');
const assert = require("chai").assert;
const sinon = require("sinon");

contract('Consensus', (accounts) => {
    let testContract;
    const fundingAccount = accounts[0];
    const fundingSize = 100;

    // build up and tear down a new Casino contract before each test
    beforeEach(async () => {
      testContract = await Consensus.new(
        web3.utils.fromAscii('connor'),
        'testName',
        accounts[0]
      );
    });

    /*
    afterEach(async () => {
        await testContract.kill({ from: fundingAccount });
    });
    */

    it("should prove that testing contracts is possible", async () => {
      let json = "{owner:'you dont own me bro'}";
      let id = "testId";

      await testContract.upsertNode(id, json)

      let test = await testContract.getNodeIds()

      assert.equal(
        test.length,
        1,
        "This test is stupid and meaningless"
      );

    });
});
