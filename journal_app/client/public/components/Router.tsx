import React, { useEffect, useState } from 'react'
const HookRouter = require('hookrouter');
import SqlClientInterface from './SqlClientInterface';
import GraphContainer from './GraphContainer';

const routes = {
  '/': () => <GraphContainer />,
  '/c/:id': ({id}) => <GraphContainer id={id} />,
  '/sqlClient': () => <SqlClientInterface />,
};

function Router(props: any): any {

  return  (
    <div className="com-router">
      { HookRouter.useRoutes(routes) }
    </div>
  )
}

export default Router
