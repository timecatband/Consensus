import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import GraphDataSvc from '../services/GraphData'
const A = require('hookrouter').A;

function Hub(props: any): any {

  const [communities, setCommunities] = useState({})

  // the control for creating a new community
  const [newGraphName, setNewGraphName] = useState("")

  async function createConsensusGraph() {
    if (newGraphName.length > 0) {
      await GraphDataSvc.createGraph(newGraphName);
      console.log('created the new graph!', newGraphName)
    }
  }

  function requestGraph(graphKey) {
    console.log("Uder requested graph load", graphKey)
    GraphDataSvc.loadCommunityGraph(graphKey)
  }

  useEffect(() => {
    //initialize
    setCommunities(GraphDataSvc.communities)
    console.log("hey communities loaded in hub1!", GraphDataSvc.communities)

    // called when communities are updated
    GraphDataSvc.on('communities-loaded', (e) => {
      console.log("hey communities loaded in hub!", GraphDataSvc.communities)
      //stay up to date when graphs are added
      setCommunities(GraphDataSvc.communities)
    })
  },[])

  return  (
    <div className="com-hub">

      <div className="communitiesContainer">
        <div className="exploreCommunities">
          Explore a realm
        </div>
        <div className="communitiesList">
          {_.values(_.mapValues(communities, (c) => {
            return <Link to={`/c/${c.name}`} key={c.id} onClick={() => {requestGraph(c.id)}} className="btnLink">{c.name}</Link>
          }))}
        </div>
      </div>

      <div className="createCommunitiesContainer">
        <div className="headerText">
          Create a new community
        </div>
        <div className="inputControl">
          <input type='text'
            placeholder="new..."
            value={newGraphName}
            onChange={e => {setNewGraphName(e.target.value)}} />
          <button onClick={createConsensusGraph}>Send request</button>
        </div>
      </div>

      <div className="motto">
        Find consensus in graphs
      </div>

    </div>
  )
}

export default Hub
