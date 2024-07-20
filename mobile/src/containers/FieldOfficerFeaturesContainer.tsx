import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFieldOfficers } from '../redux/actions/fieldOfficerActions';
import FieldOfficerList from '../components/FieldOfficerFeatures/FieldOfficerList';
import Loader from '../components/Common/Loader';

const FieldOfficerFeaturesContainer = () => {
  const dispatch = useDispatch();
  const fieldOfficers = useSelector(state => state.fieldOfficers.fieldOfficers);
  const loading = useSelector(state => state.fieldOfficers.loading);

  useEffect(() => {
    dispatch(fetchFieldOfficers());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return <FieldOfficerList fieldOfficers={fieldOfficers} />;
};

export default FieldOfficerFeaturesContainer;
