import DashboardTile from './DashboardTile';
import Table from './Table';
import React from 'react';

export default function Hero() {
  const storeValue = (data) => {
    console.log(data)
    return data
  }
  return (
    <>
      <div className="main ml-top" id="main">
        <h1 className="dashboard-header">Inventory Status</h1>
        <div className="row">
          <DashboardTile color="#009688" title="Total Products" value={12} />
          <DashboardTile
            color="#2196f3"
            title="Total Store Value"
            value={34343}
          />
          <DashboardTile color="#3f51b5" title="Out of Stock" value={2} />
          <DashboardTile color="#263238" title="All Categories" value={5} />
        </div>
        <Table storeValue={storeValue} />
      </div>
    </>
  );
}
