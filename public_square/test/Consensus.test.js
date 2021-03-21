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

    it("upsertNode should result in something added to the nodeIds array", async () => {
      let json = "{owner:'you dont own me bro'}";
      let id = "testId";

      await testContract.upsertNode(id, json)

      let test = await testContract.getNodeIds()

      assert.equal(
        test.length,
        1,
        "This test is so basic :eyeroll:"
      );
    });

    it("upsertNode should replace a node if the same node id is sent twice (and not duplicate it)", async () => {
      let json = "{owner:'you dont own me bro'}";
      let id = "testId";

      await testContract.upsertNode(id, json)
      await testContract.upsertNode(id, json)
      await testContract.upsertNode('newId', json)

      let test = await testContract.getNodeIds()

      assert.equal(
        test.length,
        2,
        "Upsert did something wrong"
      );
    });


    it("upsertCollections should add multiple items from one call", async () => {
      let id1 = "one";
      let id2 = "two";
      let data = "{stuff: 'random ass data in here yo'}";

      let nodes = [
        {id: id1, owner: accounts[0], json: data},
        {id: id2, owner: accounts[0], json: data}
      ]

      let edges = [
        {id: id1, owner: accounts[0], json: data},
        {id: id2, owner: accounts[0], json: data}
      ]

      await testContract.upsertCollections(nodes, edges)

      let testNodes = await testContract.getNodeIds()
      let testEdges = await testContract.getEdgeIds()

      assert.equal(
        testNodes.length + testEdges.length,
        4,
        "Upsert collections failed"
      );
    });


});
