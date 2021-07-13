import React from 'react';
import { acceptIncomingCallRequest, rejectIncomingCallRequest } from '../../../utils/webRTC/webRTCHandler';

import './IncomingCallDialog.css';

const IncomingCallDialog = ({ callerUsername }) => {
  const handleAcceptButtonPressed = () => {
    acceptIncomingCallRequest();
  };

  const handleRejectButtonPressed = () => {
    rejectIncomingCallRequest();
  };

  return (
    <div className='direct_call_dialog secondary_background'>
      <span className='caller'>{callerUsername}</span>
      <div className='direct_call_dialog_button_container'>
        <button className='accept_button' onClick={handleAcceptButtonPressed}>
          Accept
        </button>
        <button className='reject_button' onClick={handleRejectButtonPressed}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default IncomingCallDialog;