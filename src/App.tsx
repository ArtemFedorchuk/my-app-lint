import React from 'react';

import { ProtectedRoute, routes } from './router';

type TSubRoutes = {
  path: string;
  component: any;
};

type TRoute = {
  path: string;
  component: any;
  exact?: boolean;
  routes?: Array<TSubRoutes>;
  name: string;
};

function App() {
  return (
    <div className='App' style={{ backgroundColor: '#171923', height: window.innerHeight }}>
      <header className='App-header'>
        {routes.map((route: TRoute, idx: number) => (
          <ProtectedRoute key={idx} {...route} />
        ))}
      </header>
    </div>
  );
}

export default App;
