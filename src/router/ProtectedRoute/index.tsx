import React from 'react';
import { Switch, Route, /* Redirect */ useHistory } from 'react-router';

type TSubToutes = {
  path: string;
  component: any;
};

type TRoute = {
  path: string;
  component: any;
  exact?: boolean;
  routes?: Array<TSubToutes>;
  name: string;
};
const auth = true;

const ProtectedRoute = ({ path, exact, component: Component }: TRoute): any => {
  const history = useHistory();
  !auth && history.push('/');

  return (
    <>
      <Switch>
        <Route path={path} exact={exact} render={props => <Component {...props} />} />
      </Switch>
    </>
  );
};

export default ProtectedRoute;
