import { RouteProps } from 'react-router-dom';
import Dashboard from './views/Dashboard/Dashboard';
import Login from './views/Login/Login';
import GuardManagement from './views/GuardManagement/GuardManagement';
import ClientManagement from './views/ClientManagement/ClientManagement';
import FieldOfficerFeatures from './views/FieldOfficerFeatures/FieldOfficerFeatures';

const routes: RouteProps[] = [
  { path: '/', exact: true, component: Dashboard },
  { path: '/login', component: Login },
  { path: '/guard-management', component: GuardManagement },
  { path: '/client-management', component: ClientManagement },
  { path: '/field-officer-features', component: FieldOfficerFeatures },
];

export default routes;
