import React from 'react';
import GuardList from '../components/GuardManagement/GuardList';
import GuardDetail from '../components/GuardManagement/GuardDetail';

const GuardManagementContainer: React.FC = () => {
  return (
    <div>
      <GuardList />
      <GuardDetail />
    </div>
  );
};

export default GuardManagementContainer;
