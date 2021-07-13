import React from 'react';

const SubmitButton = ({ handleSubmitButton }) => {
  return (
    <div className='login-page_button_container'>
      <button
        className='login-page_button text_main_color'
        onClick={handleSubmitButton}       // submits the username provided
      >
        Start using Teams
      </button>
    </div>

  );
};

export default SubmitButton;
