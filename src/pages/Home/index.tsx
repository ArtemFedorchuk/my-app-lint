import React from 'react';
import { useHistory } from 'react-router-dom';

import { Cube } from '../../atoms';

const Home = (): any => {
  const history = useHistory();

  const auth = false;

  auth &&
    import('../../atoms').then(({ Cube }) => {
      console.log(Cube);
    });

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => history.push('/')}>Logout</button>
      <Cube />
    </div>
  );
};
export default Home;
