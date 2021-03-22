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



  it("upsertGraph should create a graph, and add things to its arrays", async () => {
    let insertGraph = {
      id: "testId",
      label: "its a graph!",
      nodes: ["A","B","C"],
      edges: ["X","Y","Z"],
      attachments: ["one","two","three"]
    };

    let upsertGraph = {
      id: "testId",
      nodes: ["B","new"],
      edges: ["Z","new1", "new2"],
      attachments: ["one","new1","new2","new3"]
    }

    await testContract.upsertGraph(
      insertGraph.id,
      insertGraph.label,
      insertGraph.nodes,
      insertGraph.edges,
      insertGraph.attachments
    )

    let test = await testContract.getGraph("testId")

    assert.equal(test.NodeIds.length,3,"Graph nodeIds wrong");
    assert.equal(test.EdgeIds.length,3,"Graph EdgeIds wrong");
    assert.equal(test.AttachmentIds.length,3,"Graph AttachmentIds wrong");

    await testContract.upsertGraph(
      upsertGraph.id,
      '',
      upsertGraph.nodes,
      upsertGraph.edges,
      upsertGraph.attachments
    )

    let test2 = await testContract.getGraph("testId")
    assert.equal(test2.NodeIds.length,4,"Graph nodeIds wrong");
    assert.equal(test2.EdgeIds.length,5,"Graph EdgeIds wrong");
    assert.equal(test2.AttachmentIds.length,6,"Graph AttachmentIds wrong");

  });

});
