export const DASHBOARD_SET_USERNAME = 'DASHBOARD.SET_USERNAME';
export const LOGGED_IN_STATUS = 'DASHBOARD.LOGGED_IN_STATUS';
export const DASHBOARD_SET_ACTIVE_USERS = 'DASHBOARD.SET_ACTIVE_USERS';
export const DASHBOARD_SET_GROUP_CALL_ROOMS = 'DASHBOARD.SET_GROUP_CALL_ROOMS';


export const setUsername = (username) => {
  return {
    type: DASHBOARD_SET_USERNAME,
    username
  };
}
;

export const setActiveUsers = (activeUsers) => {
  return {
    type: DASHBOARD_SET_ACTIVE_USERS,
    activeUsers
  };
}
;

export const setGroupCalls = (groupCallRooms) => {
  return {
    type: DASHBOARD_SET_GROUP_CALL_ROOMS,
    groupCallRooms
  };
}
;

export const setLoggedIn = (log) =>{
  return{
    type: LOGGED_IN_STATUS,
    log
  }
}
