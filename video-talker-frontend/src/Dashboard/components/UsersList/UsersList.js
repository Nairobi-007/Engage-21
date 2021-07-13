import React from 'react';
import UsersListItem from './UsersListItem';
import { connect } from 'react-redux';

import './UsersList.css';

const UsersList = ({ activeUsers, callState }) => {
  return (
    <div className='active_user_list_container'>    
      {activeUsers.map((activeUser) => 
        <UsersListItem
          key={activeUser.socketId}
          activeUser={activeUser}
          callState={callState}
        />)}
    </div>
  );
};

const mapStateToProps = ({ dashboard, call }) => ({
  ...dashboard,
  ...call
});

export default connect(mapStateToProps)(UsersList);
