import React, { useEffect } from 'react';

import './RejectCall.css';

const CallRejectedDialog = ({ reason, hideCallRejectedDialog }) => {
  useEffect(() => {
    setTimeout(() => {
      hideCallRejectedDialog({
        rejected: false,
        reason: ''
      });
    }, [4000]);
  }, []);

  return (
    <div className='call_rejected_dialog secondary_background '>
      <span>
        {reason}
      </span>
    </div>
  );
};

export default CallRejectedDialog;
