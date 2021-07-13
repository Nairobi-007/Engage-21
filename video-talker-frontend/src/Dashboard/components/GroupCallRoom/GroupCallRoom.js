import React from 'react';
import ToggleButtons from '../ConversationButtons/ToggleButtons';

import './GroupCallRoom.css';
import GroupCallVideo from './GroupCallVideo';

const GroupCallRoom = (props) => {
  const { groupCallStreams } = props;
  return (
    <div className='group_call_room_container'>
      <span className='group_call_title'>Group Call</span>
      <div className='group_call_videos_container'>
        {
          groupCallStreams.map(stream => {
            return <GroupCallVideo key={stream.id} stream={stream} />;
          })
        }
      </div>
      <ToggleButtons {...props} groupCall />
    </div>
  );
};

export default GroupCallRoom;
