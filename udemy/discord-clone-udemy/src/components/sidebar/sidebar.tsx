import React from 'react'
import "./sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';

const sidebar = () => {
  return (
    <div className="sidebar">
      {/* sidebarleft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreIcon />
        </div>
        
        {/* sidebarChannels */}
        <div className="sidebarChannels">
          <div className="sidebarchannelsHeader">
            <div className="sidebarHeader">
            </div>
            <ExpandMoreIcon />
            <h4>プログラミングチャンネル</h4>
            <AddIcon className="sidebarAddIcon" />
          </div>
            <div className="sidebarChannelsList">
              <SidebarChannel />
              <SidebarChannel />
              <SidebarChannel />
              <SidebarChannel />
            </div>

            <div className="sidebarFooter">
              <div className="sidebarAccount">
                <img src="./icon.png" alt="" />
                <div className="accountName">
                  <h4>soshicode</h4>
                  <span>#8162</span>
                </div>
              </div>
              <div className="sidebarVoice">
                <MicIcon />
                <HeadphonesIcon/>
                <SettingsIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default sidebar