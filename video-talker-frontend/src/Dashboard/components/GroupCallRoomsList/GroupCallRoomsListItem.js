import React from 'react';
import * as webRTCGroupCallHandler from '../../../utils/webRTC/webRTCGroupCallHandler';

const GroupCallRoomsListItem = ({ room }) => {
  const onGroupClick = () => {
    webRTCGroupCallHandler.joinGroupCall(room.socketId, room.roomId);
  };

  return (
    <div onClick={onGroupClick} className='group_calls_list_item main_background'>
      <span>{room.hostName}</span>
    </div>
  );
};

export default GroupCallRoomsListItem;
