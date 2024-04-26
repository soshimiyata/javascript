import React from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader'

const Chat = () => {
  return (
    <div className="chat">
      {/* chatheader */}
      <ChatHeader/>
      {/* chatmessage */}
      <div className="chatMessage"></div>
      {/* chatInput */}
      <div className="chatInput"></div>
    </div>
  )
}

export default Chat