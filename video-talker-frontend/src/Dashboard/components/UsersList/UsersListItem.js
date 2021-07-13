import React from 'react';
import userAvatar from '../../../resources/userAvatar.png';
import { callToOtherUser } from '../../../utils/webRTC/webRTCHandler';
import { callStates } from '../../../store/actions/callActions';
import {FaRocketchat, FaFileVideo} from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';


const UsersListItem = (props) => {
  const { activeUser, callState } = props;
   const history = useHistory();
  const handleListItem = () => {
    if (callState === callStates.CALL_AVAILABLE) {
      callToOtherUser(activeUser);
    }
  };

  const TextChat = () =>{
    history.push(`/dashboard/chat/${activeUser.socketId}`);
  }
return (
    <div>
    <div className='active_user_list_item' >
      <span className='active_user_list_text'>{activeUser.username}</span>
      <FaRocketchat className='active_user_chat_icon' onClick={TextChat} />
      <FaFileVideo className='active_user_video_icon' onClick={handleListItem}/>
    </div>
    <hr/>
    </div>
  );
};

export default UsersListItem;
