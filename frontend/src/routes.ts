import React, { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Login = lazy(() => import('./pages/Login'));
const GuardManagement = lazy(() => import('./pages/GuardManagement'));
const ClientManagement = lazy(() => import('./pages/ClientManagement'));

const withSuspense = (Component: React.FC) => {
  return React.createElement(
    Suspense,
    { fallback: React.createElement('div', null, 'Loading...') },
    React.createElement(Component)
  );
};

const routes: RouteObject[] = [
  { path: '/', element: withSuspense(Dashboard) },
  { path: '/login', element: withSuspense(Login) },
  { path: '/guard-management', element: withSuspense(GuardManagement) },
  { path: '/client-management', element: withSuspense(ClientManagement) },
];

export default routes;
