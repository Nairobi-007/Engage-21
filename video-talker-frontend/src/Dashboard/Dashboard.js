import React, { useEffect } from 'react';
import teams2 from '../resources/teams2.jfif';
import UsersList from './components/UsersList/UsersList';
import * as webRTCHandler from '../utils/webRTC/webRTCHandler';
import * as webRTCGroupHandler from '../utils/webRTC/webRTCGroupCallHandler';
import DirectCall from './components/DirectCall/DirectCall';
import { connect } from 'react-redux';
import DashboardInfo from './components/DashboardInfo/DashboardInfo';
import { callStates } from '../store/actions/callActions';
import GroupCallRoomsList from './components/GroupCallRoomsList/GroupCallRoomsList';
import GroupCall from './components/GroupCall/GroupCall';
import { useFirebase } from 'react-redux-firebase'
import { setLoggedIn } from '../store/actions/dashboardActions';
import './Dashboard.css';
import { Switch ,Route} from 'react-router-dom';
import ChatMessage from '../TextChat/TextChat';
// import axios from 'axios';
// import { setTurnServers } from '../utils/webRTC/TURN';

const Dashboard = ({ activeUsers,username, callState,setLogStatus }) => {
  const firebase = useFirebase();
  useEffect(() => {
        webRTCHandler.getLocalStream();        
    webRTCGroupHandler.connectWithMyPeer();
  }, []);

  const logOut = ()=>{
    firebase.auth().signOut();
    webRTCHandler.removeUser();
    alert("successfully logged out");
    setLogStatus(false);
  }

  return (
    <div className='dashboard_main background_color'>
      <div className='userslist secondary_background'>
        <div className='active_users_list'>
          <UsersList />                              
        </div>
        <div className='dashboard_logo'>
          <button onClick={logOut}>LogOut</button>
        </div>
      </div>
      <div className='stream_container'>
        <div className='dashboard_content'>

        <Switch>
            <Route exact path ="/dashboard/chat/:socketId">
                {callState !== callStates.CALL_IN_PROGRESS && 
                    <ChatMessage/>
}
                <DirectCall />
                <GroupCall />
            </Route>
            <Route exact path ='/dashboard'>
                <DirectCall />
                <GroupCall />
              {callState !== callStates.CALL_IN_PROGRESS && <DashboardInfo username={username} />}
            </Route>
          </Switch>
          
        </div>
        <div className='rooms secondary_background'>
          <GroupCallRoomsList />
        </div>
      </div>      
    </div>
  );
};
const mapStateToProps = ({ call, dashboard }) => ({
  ...call,
  ...dashboard
});

const mapActionsToProps = (dispatch) => {
  return {
    setLogStatus: loggedIn => dispatch(setLoggedIn(loggedIn)),
  };
};

export default connect( mapStateToProps,mapActionsToProps)(Dashboard);



