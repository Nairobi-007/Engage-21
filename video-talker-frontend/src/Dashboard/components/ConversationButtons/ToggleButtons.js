import React from 'react';
import {  MdVideocam,MdCallEnd, MdMic, MdMicOff, MdVideocamOff,MdCamera,MdVideoLabel } from 'react-icons/md';
import ConversationButton from './ConversationButton';
import { switchForScreenSharingStream, hangUp } from '../../../utils/webRTC/webRTCHandler';

const styles = {
  buttonContainer: {
    display: 'flex',
    position: 'absolute',
    bottom: '22%',
    left: '35%'
  },
  icon: {
    width: '25px',
    height: '25px',
    fill: '#e6e5e8'
  }
};

const ToggleButtons = (props) => {
  const {
    localStream,
    localCameraEnabled,
    localMicrophoneEnabled,
    setCameraEnabled,
    setMicrophoneEnabled,
    screenSharingActive,
    groupCall
  } = props;

  const handleMicrophone = () => {
    const micEnabled = localMicrophoneEnabled;
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicrophoneEnabled(!micEnabled);
  };

  const handlevideoCam = () => {
    const cameraEnabled = localCameraEnabled;
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  const handleScreenSharing = () => {
    switchForScreenSharingStream();
  };

  const onHangup = () => {
    hangUp();
  };

  return (
    <div style={styles.buttonContainer}>

      {/* toggles audio */}
      <ConversationButton onClickHandler={handleMicrophone}>
        {localMicrophoneEnabled ? <MdMic style={styles.icon} /> : <MdMicOff style={styles.icon} />}
      </ConversationButton>

      {/* hang up call */}
      {!groupCall && <ConversationButton onClickHandler={onHangup}>
        <MdCallEnd style={styles.icon} />
      </ConversationButton>}

      {/* toggles video */}
      <ConversationButton onClickHandler={handlevideoCam}>
        {localCameraEnabled ? <MdVideocam style={styles.icon} /> : <MdVideocamOff style={styles.icon} />}
      </ConversationButton>

      {/* screen sharing */}
      {!groupCall && <ConversationButton onClickHandler={handleScreenSharing}>
        {screenSharingActive ? <MdCamera style={styles.icon} /> : <MdVideoLabel style={styles.icon} />}
      </ConversationButton>}
    </div>
  );
};

export default ToggleButtons;
