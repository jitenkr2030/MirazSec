import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Dashboard from './views/Dashboard/Dashboard';
import Login from './views/Login/Login';
import GuardManagement from './views/GuardManagement/GuardManagement';
import ClientManagement from './views/ClientManagement/ClientManagement';
import FieldOfficerFeatures from './views/FieldOfficerFeatures/FieldOfficerFeatures';
import theme from './theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/guard-management" component={GuardManagement} />
      <Route path="/client-management" component={ClientManagement} />
      <Route path="/field-officer-features" component={FieldOfficerFeatures} />
    </Switch>
  </ThemeProvider>
);

export default App;
