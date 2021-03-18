const Consensus = artifacts.require('ConsensusGraph');
const assert = require("chai").assert;
const truffleAssert = require('truffle-assertions');

contract('Consensus', (accounts) => {
    let testContract;
    const fundingAccount = accounts[0];
    const fundingSize = 100;

    // build up and tear down a new Casino contract before each test
    beforeEach(async () => {
        testContract = await Consensus.new({ from: fundingAccount });
    });

    /*
    afterEach(async () => {
        await testContract.kill({ from: fundingAccount });
    });
    */

    it("should revert with message if a non-owner tries to edit the node", async () => {
      let json = "{owner:'you dont own me bro'}";
      let id = "testId";

      await testContract.upsertNode(id, json)

      // TODO: actually test the revert behavior
      /*
      await truffleAssert.reverts(
        testContract.upsertNode(id, json),
        "Only owner can update"
      );
      */

      let test = await testContract.getNodeIds()

      assert.equal(
        test.length,
        1,
        "This test is stupid and meaningless"
      );

    });
});
