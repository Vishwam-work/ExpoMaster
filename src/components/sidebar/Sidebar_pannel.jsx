import React from 'react'
import '../../style/sidebar/sidebar.scss'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
const Sidebar_pannel = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <span className='logo'>Logoadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <HomeIcon />
            <span>Home</span>
          </li>
          <li>
            <LoginIcon />
            <span>Login</span>
          </li>
          <li>
            <PersonIcon />
            <span>User</span>
          </li>
          <li>
            <SummarizeIcon />
            <span>Report</span>
          </li>
          <li>
            <SettingsIcon />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Theme</div>
    </div>

  )
}
export default Sidebar_pannel