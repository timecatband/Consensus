import SocketClient from './SocketClient'
import {upsertNode, upsertEdge} from './ConsensusGraphContract.mjs'

/*
  Singleton service ServerAPI provides methods for reading/writing via our own journal server instance
*/
class ServerAPIWeb3 {
  ready: any;

  constructor( socketClient: any ) {
    this.ready = setProvider();
  }

  on(key: string, handler: Function): Promise<void> {
 //   return this.socketClient.on(key, handler)
  }

  ping(data: any) {
    this.ready.then(() => {
        // Woo!
    })
  }

  saveGraph(graphData: any) {
      for (let i = 0; i < graphData.nodes.length; i++) {
          const node = graphData.nodes[i];
          upsertNode(node.id, JSON.stringify(node));
      }
      for (let i = 0; i < graphData.edges.length; i++) {
          const edge = graphData.edges[i];
          upsertEdge(edge.id, JSON.stringify(edge));
      }
  }

  getGraph() {
  }

  upsertNode(data: any) {
  }

  deleteNodes( nodeIds: string[] ) {
  }

  deleteEdges( edgeIds: string[] ) {
  }

  querySql(query:string) {
  }

}

var ServerApiSvc = new ServerAPI(SocketClient)

export default ServerApiSvc;
