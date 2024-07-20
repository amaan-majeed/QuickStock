import React from 'react';

export default function DashboardTile(props) {
  return (
    <>
      <div className="col-lg-3 col-md-6">

        <div className="tile" style={{backgroundColor: props.color}}>
        <div className="status-content">
          <p className="stats-tile">Today's Visits</p>
          <p className="stats-number">1234234234</p>
        </div>
      </div>
    </div>
    </>
  );
}
