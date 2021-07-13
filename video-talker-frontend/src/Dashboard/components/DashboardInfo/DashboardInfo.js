import React from 'react';

import './DashboardInfo.css';

const DashboardInfo = ({ mail }) => {
  return (
    <div className='dashboard_info_text_container'>
      <span className='dashboard_info_text_title'>
        Hello {mail} welcome to teams.
      </span>
      <span className='dashboard_info_text_description'>
        Start calling from the list 
        or join the group call
      </span>
    </div>
  );
};

export default DashboardInfo;
