import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TextChat.css';
import {FaAngleDoubleRight} from 'react-icons/fa';
import { messageToOtherUser } from '../utils/webRTC/webRTCHandler';
import { connect } from 'react-redux';

const ChatMessage = ({Msg}) =>{
    const [input,setInput] = useState();
    const userSocket = useParams();
    const divRef = useRef();
    const recievedRef = useRef();

    useEffect(()=>{
        console.log("inside use effect");
        recievedRef.current.innerHTML += `<div>${Msg}<div><hr/>`
    },[Msg]);

    const handleInput = (e)=>{
        setInput(e.target.value);
    }

    const Message= ()=>{
        divRef.current.innerHTML += `<div className = "indMsg">Me: ${input}<div><hr/>`;
        messageToOtherUser({userSocket,message:input});
    }

    return(
        <div className="chat_window">
            <div>
            
                <div ref={divRef} className="myside"></div>
                <br></br>
                <div ref ={recievedRef} className="otherside"></div>
            </div>

            <input placeholder="type here" type="text" color="black" value={input} onChange={handleInput} className="input"></input>  
            <FaAngleDoubleRight  className="chat_button" onClick={Message}/>
        </div>
    )
}
const mapStateToProps = ({ call }) => ({
    ...call
  });

export default connect(mapStateToProps)(ChatMessage);