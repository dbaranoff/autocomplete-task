import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import App from './views/App/App';
import ShippingForm from './components/ShippingForm/ShippingForm';
import ForbiddenError from './components/ForbiddenError/ForbiddenError';
import SuccessScreen from './components/SuccessScreen/SuccessScreen';
import NotFound from './components/NotFound/NotFound';
import { routes } from './constants/routes';

export default () => (
  <App render={(props) => (
    <Switch>
      <Route path={routes.root} exact>
        <ShippingForm {...props} />
      </Route>
      <Route path={routes.forbidden} exact>
        <ForbiddenError {...props} />
      </Route>
      <Route path={routes.success} exact>
        <SuccessScreen {...props} />
      </Route>
      <Route exact path={routes.notFound} component={NotFound} />
      <Route>
        <Redirect to={routes.notFound} />
      </Route>
    </Switch>
  )} />
);
