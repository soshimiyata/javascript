import React from 'react'
import "./sidebar.scss"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

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
          <ExpandMoreIcon />
          <h4>プログラミングチャンネル</h4>
          <AddIcon className="sidebarAddIcon" />
          </div>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default sidebar