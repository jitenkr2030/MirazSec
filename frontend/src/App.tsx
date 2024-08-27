import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import GuardDashboard from './pages/GuardDashboard';
import ClientDashboard from './pages/ClientDashboard';
import FieldOfficerDashboard from './pages/FieldOfficerDashboard';
import AddUser from './pages/AddUser';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import ReportIncident from './pages/ReportIncident';
import Tasks from './pages/Tasks';
import DigitalReport from './pages/DigitalReport';
import AboutUs from './pages/AboutUs';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/guard-dashboard" 
          element={
            <ProtectedRoute role="guard">
              <GuardDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/client-dashboard" 
          element={
            <ProtectedRoute role="client">
              <ClientDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/field-officer-dashboard" 
          element={
            <ProtectedRoute role="field-officer">
              <FieldOfficerDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/add-user" 
          element={
            <ProtectedRoute role="admin">
              <AddUser />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/reports" 
          element={
            <ProtectedRoute role="guard">
              <Reports />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/settings" 
          element={
            <ProtectedRoute role="guard">
              <Settings />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/report-incident" 
          element={
            <ProtectedRoute role="guard">
              <ReportIncident />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/tasks" 
          element={
            <ProtectedRoute role="guard">
              <Tasks />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/digital-report" 
          element={
            <ProtectedRoute role="guard">
              <DigitalReport />
            </ProtectedRoute>
          } 
        />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
