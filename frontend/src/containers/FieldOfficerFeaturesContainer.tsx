import React from 'react';
import OfficerList from '../components/FieldOfficerFeatures/OfficerList';
import OfficerDetail from '../components/FieldOfficerFeatures/OfficerDetail';

const FieldOfficerFeaturesContainer: React.FC = () => {
  return (
    <div>
      <OfficerList />
      <OfficerDetail />
    </div>
  );
};

export default FieldOfficerFeaturesContainer;
