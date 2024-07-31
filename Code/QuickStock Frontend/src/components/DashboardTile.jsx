import React from 'react';

export default function DashboardTile(props) {
  return (
    <>
      <div className="col-lg-3 col-md-6">

        <div className="tile" style={{backgroundColor: props.color}}>
        <div className="status-content">
            <p className="stats-tile">{props.title}</p>
            <p className="stats-number">{props.value}</p>
        </div>
      </div>
    </div>
    </>
  );
}
