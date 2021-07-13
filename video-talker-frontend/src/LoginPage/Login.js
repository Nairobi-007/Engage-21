import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import teams from '../resources/teams.png';
import UserInput from './components/userInput';
import SubmitButton from './components/SubmitButton';
import { useHistory } from 'react-router-dom';
import { setUsername,setLoggedIn } from '../store/actions/dashboardActions';
import logo from '../resources/logo.jpg';
import './Login.css';
import { useFirebase } from 'react-redux-firebase'
import { registerNewUser } from '../utils/wssConnection/wssConnection';


const LoginPage = (props) => {
  const {saveUsername,setLogStatus,localStream } = props;
  const [username, setUsername] = useState('');
  const firebase = useFirebase();
  const history = useHistory();


  useEffect(() => {
    if(localStream){
      localStream.getTracks().forEach(track => track.stop());
    }
  }, []);

  const signInWithProvider = async (provider) => {
    try{
       const {additionalUserInfo, user} = await firebase.auth().signInWithPopup(provider);
       if(additionalUserInfo.isNewUser){
           await firebase.database().ref(`/profiles/${user.uid}`).set({
               name: user.displayName,
           })
       }
       registerNewUser(user.displayName);
           saveUsername(user.displayName);
           setLogStatus(true); 
           history.push('/dashboard');
       alert("successfully logged in");
    }
    catch (err){
      alert(err.message);
    }  
   
}

  const onGoogleSignin = ()=>{
    signInWithProvider(new firebase.auth.GoogleAuthProvider())
  }

  return (
    <div className='login_container background_color'>
      <img className = 'sidelogo' src={logo} />
      <div className='login_box secondary_background'>
        <div className = 'box'>
        <div className='login_logo'>
          <img className='login_teams' src={teams} alt='Teams App' />
        </div>
        <div className='tagline'>
          <h3>Welcome to Teams!Interactive and collaborative platform for neophytes</h3>
        </div>
        </div>
         <UserInput username={username} setUsername={setUsername} />       
        <button onClick={onGoogleSignin} className='login-page_button_container login-page_button background_color text_main_color'>Google SignIn</button>      {/*  google authentication  */}
      </div>
    </div>
  );
};



const mapActionsToProps = (dispatch) => {
  return {
    saveUsername: username => dispatch(setUsername(username)),
    setLogStatus: loggedIn => dispatch(setLoggedIn(loggedIn)),
  };
};


function mapStoreStateToProps ({ call }) {
  return {
    ...call
  };
}


export default connect(mapStoreStateToProps, mapActionsToProps)(LoginPage);
