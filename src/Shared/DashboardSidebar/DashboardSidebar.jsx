import React, { useState } from "react";
import "./DashboardSidebar.css";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const DashboardSidebar = ({ children }) => {
  const admin = true;
  const user = false;
  console.log("admin", admin);
  const menu = (
    <>
      {user && (
        <>
          <li className="text-primary my-1 font-semibold font-serif">
            <NavLink to="/dashboard/order">Give Order</NavLink>
          </li>
          <li className="text-primary my-1 font-semibold font-serif">
            <NavLink to="/dashboard/service-list">Service List</NavLink>
          </li>
          <li className="text-primary my-1 font-semibold font-serif">
            <NavLink to="/dashboard/review">Review</NavLink>
          </li>
        </>
      )}

      {admin && (
        <>
          <li className="text-primary my-1 font-semibold font-serif">
            <NavLink to="/dashboard/add-services">Add Services</NavLink>
          </li>
          <li className="text-primary my-1 font-semibold font-serif">
            <NavLink to="/dashboard/users">Users</NavLink>
          </li>
          <li className="text-primary my-1 font-semibold font-serif">
            <NavLink to="/dashboard/payment">Clear Payment</NavLink>
          </li>
          <li className="text-primary my-1 font-semibold font-serif">
            <NavLink to="/dashboard/manage-services">Manage Services</NavLink>
          </li>
          <li className="text-primary my-1 font-semibold font-serif">
            <NavLink to="/dashboard/client-review">Client Review</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-warning p-12">
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-accent text-base-content">
            {/* <!-- Sidebar content here --> */}
            {menu}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;
