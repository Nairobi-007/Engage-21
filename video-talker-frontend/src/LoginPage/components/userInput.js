import React from 'react';

const UserInput = (props) => {
  const { username, setUsername } = props;

  const userInputChange = (event)=>{
    setUsername(event.target.value);   // updates username to input provided by user
  }

  return (
    <div className='login_input'>
      <input
        placeholder='Enter your name'
        value={username}   // binds the input field to the state 
        type='text'
        onChange={userInputChange}   // is triggered every time the input changes
        className='login-page_input background_color text_main_color'
      />
    </div>
  );
};

export default UserInput;
