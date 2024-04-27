import React from 'react'
import "./ChatMessage.scss"
import {Avatar} from "@mui/material"

const ChatMessage = () => {
  return (
    <div className="message">
      <Avatar/>
      <div className="messageInfo">
        <h4>soshi code
        <span className='messageTimestamp'>2022/10</span>
        </h4>
        <p> message</p>
      </div>
    </div>
  )
}

export default ChatMessage