import React from 'react';
import DashboardSidebar from '../../Shared/DashboardSidebar/DashboardSidebar';
import './Dashboard.css';
import { Outlet, useNavigate } from 'react-router-dom';
const Dashboard = () => {
  return (
    <>
        <DashboardSidebar>
            <Outlet/>
        </DashboardSidebar>
    </>
  )
}

export default Dashboard