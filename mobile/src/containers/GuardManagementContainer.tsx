import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGuards } from '../redux/actions/guardActions';
import GuardList from '../components/GuardManagement/GuardList';
import Loader from '../components/Common/Loader';

const GuardManagementContainer = () => {
  const dispatch = useDispatch();
  const guards = useSelector(state => state.guards.guards);
  const loading = useSelector(state => state.guards.loading);

  useEffect(() => {
    dispatch(fetchGuards());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return <GuardList guards={guards} />;
};

export default GuardManagementContainer;
