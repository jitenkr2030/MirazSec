import React from 'react';
import ClientList from '../components/ClientManagement/ClientList';
import ClientDetail from '../components/ClientManagement/ClientDetail';

const ClientManagementContainer: React.FC = () => {
  return (
    <div>
      <ClientList />
      <ClientDetail />
    </div>
  );
};

export default ClientManagementContainer;
