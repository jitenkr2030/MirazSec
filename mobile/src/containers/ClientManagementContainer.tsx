import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from '../redux/actions/clientActions';
import ClientList from '../components/ClientManagement/ClientList';
import Loader from '../components/Common/Loader';

const ClientManagementContainer = () => {
  const dispatch = useDispatch();
  const clients = useSelector(state => state.clients.clients);
  const loading = useSelector(state => state.clients.loading);

  useEffect(() => {
    dispatch(fetchClients());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return <ClientList clients={clients} />;
};

export default ClientManagementContainer;
