import React from 'react';
import { hangUp } from '../../../utils/webRTC/webRTCHandler';
import { MdCallEnd } from 'react-icons/md';
import './CallingDialog.css';

const styles = {
  buttonContainer: {
    borderRadius: '40px',
    border: '2px solid #e6e5e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
    width: '40px',
    height: '40px'
  }
};

const Calling = () => {
  const onHangupClick = () => {
    hangUp();
  };

  return (
    <div className='direct_calling_dialog secondary_background '>
      <span>Calling</span>
      <div style={styles.buttonContainer} onClick={onHangupClick}>
        <MdCallEnd style={{ width: '20px', height: '20px', fill: '#e6e5e8' }} />
      </div>
    </div>
  );
};

export default Calling;
