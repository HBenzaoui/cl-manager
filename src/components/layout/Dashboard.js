import React from 'react';
import SideBar from './SideBar';
import Clients from '../clients/Clients';

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-md-10">
        <Clients />
      </div>
      <div className="col-md-2">
        <SideBar />
      </div>
    </div>
  );
};

export default Dashboard;
