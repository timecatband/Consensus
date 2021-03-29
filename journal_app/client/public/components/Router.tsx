import React, { useEffect, useState } from 'react'
//const useRoutes = require('hookrouter').useRoutes;
// import SqlClientInterface from './SqlClientInterface';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import GraphContainer from './GraphContainer';
import Hub from './Hub';

/*
  Useful router docs:
  https://blog.logrocket.com/how-react-hooks-can-replace-react-router/

  confusing base root GET thing:
  https://ui.dev/react-router-cannot-get-url-refresh/
*/

function Router(props: any): any {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Hub}/>
        <Route exact path="/c" component={Hub}/>
        <Route path="/c/:graphId" children={<GraphContainer />}/>
        <Route path="*">
          <div className="lost404"> Not all who wander are lost <br/> but you are. <br/><br/> the page your are looking for is not here. </div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
